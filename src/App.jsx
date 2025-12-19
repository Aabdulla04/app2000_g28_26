import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import Cabins from "./Pages/Cabins";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turer" element={<Trips />} />
        <Route path="/hytter" element={<Cabins />} />
        <Route path="/kontakt" element={<Contact />} />

        {/* fallback hvis du skriver feil url */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
