import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import LearnMore from "./pages/LearnMore"
import Symptoms from "./pages/Symptoms"
import Chat from "./pages/Chat"
import Volunteer from "./pages/Volunteer"
import SpreadTheWord from "./pages/SpreadTheWord"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import GroupTherapy from "./pages/GroupTherapy"
import Psychiatrist from "./pages/Psychiatrist"
import CommunityOutreach from "./pages/CommunityOutreach"
import Coaching from "./pages/Coaching"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/spread-the-word" element={<SpreadTheWord />} />
        <Route path="/group-therapy" element={<GroupTherapy />} />
        <Route path="/psychiatrist" element={<Psychiatrist />} />
        <Route path="/community-outreach" element={<CommunityOutreach />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App