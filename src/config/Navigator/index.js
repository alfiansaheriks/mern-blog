import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home, MainApp } from "../../pages";

const Navigasi = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<MainApp />} />
            </Routes>
        </Router>
    );
}

export default Navigasi;
