import React from "react";
import Home from "./Home";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import AppointmentScreen from "./AppointmentScreen";


function HomePage() {

    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<AppointmentScreen />} />
            </Routes>
        </Router>
    );
}

export default HomePage;