import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study" element={<div className="text-center text-xl">Case Study - Coming Soon</div>} />
        <Route path="/about" element={<div className="text-center text-xl">About Me - Coming Soon</div>} />
        <Route path="/contact" element={<div className="text-center text-xl">Contact Me - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
