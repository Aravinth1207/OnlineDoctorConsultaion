import React from "react";
import Home from "./Home";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import AppointmentScreen from "./AppointmentScreen";
import SignUp from "./SignUp";
import Login from "./Login";


function HomePage() {

    return (
        <Router>
            <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<AppointmentScreen />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default HomePage;