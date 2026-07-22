from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

DB_PATH = "maisha.db"

EMAIL_FROM     = "maishamosaic047@gmail.com"
EMAIL_PASSWORD = "noyi xage yetu hgpj"
EMAIL_TO       = "maishamosaic047@gmail.com"


# ── Email ──────────────────────────────────────────────────────────────────
def send_email(subject, html):
    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"]    = EMAIL_FROM
        msg["To"]      = EMAIL_TO
        msg.attach(MIMEText(html, "html"))
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_FROM, EMAIL_PASSWORD)
            server.send_message(msg)
        print("✅ Email sent")
        return True
    except Exception as e:
        print(f"❌ Email failed: {e}")
        return False


# ── Database ───────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS contacts (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            email      TEXT NOT NULL,
            phone      TEXT NOT NULL,
            message    TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS donations (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            method     TEXT NOT NULL,
            amount     REAL NOT NULL,
            name       TEXT NOT NULL,
            phone      TEXT,
            email      TEXT,
            status     TEXT DEFAULT 'pending',
            reference  TEXT,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS chat_sessions (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    conn.commit()
    conn.close()
    print("✅ Database ready")


# ── Contact ────────────────────────────────────────────────────────────────
@app.route("/api/contact", methods=["POST"])
def create_contact():
    data    = request.get_json()
    email   = data.get("email",   "").strip()
    phone   = data.get("phone",   "").strip()
    message = data.get("message", "").strip()

    if not email or not phone or not message:
        return jsonify({"error": "All fields are required"}), 400

    conn = get_db()
    conn.execute("INSERT INTO contacts (email, phone, message) VALUES (?, ?, ?)", (email, phone, message))
    conn.commit()
    conn.close()

    subject = "📬 New Contact Message — Maisha Mosaic"
    html = f"""
    <html><body style="font-family:Arial,sans-serif;background:#f5f5f5;padding:20px;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
        <div style="background:#1450c8;padding:24px;text-align:center;">
          <h2 style="color:white;margin:0;">Maisha Mosaic Foundation</h2>
          <p style="color:#b3c8f0;margin:6px 0 0;">New Contact Form Message</p>
        </div>
        <div style="padding:32px;">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Message:</strong><br><br>{message}</p>
          <a href="mailto:{email}" style="background:#1450c8;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;display:inline-block;margin-top:16px;">Reply to {email}</a>
          <p style="color:#aaa;font-size:12px;margin-top:24px;">Received: {datetime.now().strftime('%d %B %Y at %H:%M')}</p>
        </div>
      </div>
    </body></html>
    """
    send_email(subject, html)
    return jsonify({"success": True, "message": "Message received! We will get back to you soon."}), 201


@app.route("/api/contact", methods=["GET"])
def get_contacts():
    conn = get_db()
    contacts = conn.execute("SELECT * FROM contacts ORDER BY created_at DESC").fetchall()
    conn.close()
    return jsonify([dict(c) for c in contacts])


@app.route("/api/contact/<int:id>", methods=["DELETE"])
def delete_contact(id):
    conn = get_db()
    conn.execute("DELETE FROM contacts WHERE id = ?", (id,))
    conn.commit()
    conn.close()
    return jsonify({"success": True})


# ── Donations ──────────────────────────────────────────────────────────────
@app.route("/api/donate/mpesa", methods=["POST"])
def donate_mpesa():
    data   = request.get_json()
    amount = data.get("amount")
    name   = data.get("name",  "").strip()
    phone  = data.get("phone", "").strip()

    if not amount or not name or not phone:
        return jsonify({"error": "All fields are required"}), 400

    reference = f"MMF-MPESA-{datetime.now().strftime('%Y%m%d%H%M%S')}"
    conn = get_db()
    conn.execute(
        "INSERT INTO donations (method, amount, name, phone, status, reference) VALUES (?, ?, ?, ?, ?, ?)",
        ("mpesa", float(amount), name, phone, "pending", reference)
    )
    conn.commit()
    conn.close()
    return jsonify({"success": True, "reference": reference, "message": f"STK push sent to {phone}."}), 201


@app.route("/api/donate/bank", methods=["POST"])
def donate_bank():
    data   = request.get_json()
    amount = data.get("amount")
    name   = data.get("name",  "").strip()
    email  = data.get("email", "").strip()

    if not amount or not name or not email:
        return jsonify({"error": "All fields are required"}), 400

    reference = f"MMF-BANK-{datetime.now().strftime('%Y%m%d%H%M%S')}"
    conn = get_db()
    conn.execute(
        "INSERT INTO donations (method, amount, name, email, status, reference) VALUES (?, ?, ?, ?, ?, ?)",
        ("bank", float(amount), name, email, "pending", reference)
    )
    conn.commit()
    conn.close()
    return jsonify({"success": True, "reference": reference, "message": "Thank you!"}), 201


@app.route("/api/donations", methods=["GET"])
def get_donations():
    conn = get_db()
    donations = conn.execute("SELECT * FROM donations ORDER BY created_at DESC").fetchall()
    conn.close()
    return jsonify([dict(d) for d in donations])


# ── Chat session tracker ───────────────────────────────────────────────────
@app.route("/api/chat/session", methods=["POST"])
def track_session():
    conn = get_db()
    conn.execute("INSERT INTO chat_sessions (created_at) VALUES (datetime('now'))")
    conn.commit()
    conn.close()
    return jsonify({"success": True})


# ── AI Chat ────────────────────────────────────────────────────────────────
@app.route("/api/chat", methods=["POST"])
def chat():
    import requests as req
    data     = request.get_json()
    messages = data.get("messages", [])
    system   = data.get("system",   "")
    GROQ_KEY = os.environ.get("GROQ_API_KEY", "")

    try:
        res = req.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {GROQ_KEY}", "Content-Type": "application/json"},
            json={
                "model":       "llama-3.3-70b-versatile",
                "messages":    [{"role": "system", "content": system}] + messages,
                "max_tokens":  300,
                "temperature": 0.75
            },
            timeout=30
        )
        result = res.json()
        if "choices" in result:
            return jsonify({"reply": result["choices"][0]["message"]["content"]})
        print(f"❌ Groq error: {result}")
        return jsonify({"error": "Could not get response"}), 500
    except Exception as e:
        print(f"❌ Groq error: {e}")
        return jsonify({"error": str(e)}), 500


# ── Live stats ─────────────────────────────────────────────────────────────
@app.route("/api/stats", methods=["GET"])
def get_stats():
    conn = get_db()
    chat_count      = conn.execute("SELECT COUNT(*) as c FROM chat_sessions").fetchone()["c"]
    contacts_count  = conn.execute("SELECT COUNT(*) as c FROM contacts").fetchone()["c"]
    donations_count = conn.execute("SELECT COUNT(*) as c FROM donations").fetchone()["c"]
    conn.close()

    return jsonify({
        "lives_impacted":     10000 + chat_count,
        "education_programs": 50 + contacts_count,
        "health_initiatives": 30 + donations_count,
        "community_partners": 100
    })


# ── Health ─────────────────────────────────────────────────────────────────
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "message": "Maisha Mosaic API is running"})


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000)