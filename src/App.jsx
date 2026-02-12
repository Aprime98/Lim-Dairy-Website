import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Products, AboutUs} from "./pages"

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path ="/about" element={<AboutUs />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
