import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SlideShow from "./pages/SlideShow";
import Test from "./pages/Test";

const Router = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/slideshow" element={<SlideShow />} />
                <Route path="/test" element={<Test />} />
                {/* <Route path="/" element={<Calculator />} />
                <Route path="/" element={<Market />} /> */}

            </Routes>
        </HashRouter>
    )
}

export default Router;