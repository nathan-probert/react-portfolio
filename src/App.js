// imports
import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

import { Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/wordle" element={<WordleClonePage />} />
            </Routes>
            <Navbar />
        </div>
    );
}

function WordleClonePage() {
    // Perform navigation to wordleclone.html
    window.location.href = '/wordleclone';

    // Return null since this component doesn't render anything
    return null;
}

export default App;
