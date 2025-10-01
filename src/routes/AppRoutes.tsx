import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Agendamento from '../pages/Agendamento';
import Consultas from '../pages/Consultas';
import Integrantes from '../pages/Integrantes';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamento" element={<Agendamento />} />
                <Route path="/consultas" element={<Consultas />} />
                <Route path="/integrantes" element={<Integrantes />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;