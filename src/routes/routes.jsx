import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Calendario from "../pages/calendario";
import Disponibilidad from "../pages/disponibilidad";

// Rutas de la app
const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calendario' element={<Calendario />} />
            <Route path='/disponibilidad' element={<Disponibilidad />} />
        </Routes>
    )
};

export default MyRoutes;