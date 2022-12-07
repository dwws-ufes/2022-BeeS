import React from "react";
import Register from "pages/Register";
import Login from "pages/Login";
import EditCreateBeehive from "pages/EditCreateBeehive";
import Components from "pages/Components";
import Dashboard from "pages/Dashboard";
import Loja from "pages/Loja";
import MainTwo from "pages/MainTwo";
import Main from "pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/maintwo" element={<MainTwo />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/components" element={<Components />} />
        <Route path="/editcreatebeehive" element={<EditCreateBeehive />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
