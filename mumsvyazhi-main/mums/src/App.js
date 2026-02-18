import React from "react";
import './CSS/index.css'
import './CSS/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Home from "./components/home";
import FaqQ from "./components/Questions/faqQ";
import './CSS/index.scss'
import Game from "./components/Game/Game";
import Cart from "./components/Cart";


export default App;
export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqQ" element={<FaqQ />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bunny" element={<Game />} />
        </Routes>
    )
}