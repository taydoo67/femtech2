import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Frame from "./components/Frame";
import Menstruation from './components/Menstruation'

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<Frame />} />
                <Route path="mens" element={<Menstruation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation