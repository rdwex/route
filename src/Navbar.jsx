import React from 'react'
import "./App.css";
import "./styles.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function Navbar() {


    const [navSize, setnavSize] = useState("7rem");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("7rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>
            <nav style={{
                height: navSize,
                transition: "all 1s"
            }} className="navbar navbg navbar-expand-lg fixed-top">
                <div className="container-fluid d-flex text-light mx-5 py-3">
                    <Link to="/" className="navbar-brand text-light fs-3 ms-4 fw-bolder" href="#home">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fw-bold mb-lg-0 text-light">
                            <li className="nav-item">
                                <Link to="/about" className="px-4 nav-link text-light" aria-current="page" href="#about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className="px-4 nav-link text-light" aria-current="page" href="#portfolio">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="px-4 nav-link text-light" href="#contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

        </>
    )
}
