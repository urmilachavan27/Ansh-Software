import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMoneyBillWave } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function LandingPageHeader() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ width: "100%", backgroundColor: "white", transition: "all 0.3s ease-in-out" }}>
            <div className="container">
                {/* Logo on the left */}
                <div className="navbar-brand d-flex align-items-center">
                    {/* <FaMoneyBillWave className="me-2" size={30} color="white" /> */}
                    <h1 className="" style={{ color: "white", marginTop: "15px" }}>Ansh Software</h1>
                </div>
                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={openNav}
                    aria-controls="navbarNav"
                    aria-expanded={nav ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <FiMenu size={28} />
                </button>

                {/* Navbar links */}
                <div className={`collapse navbar-collapse ${nav ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            {/* <Link className="nav-link"
                            to="/home"
                            >Home</Link> */}
                            <Nav.Link href="#home" className="nav-link mx-2">Home</Nav.Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link"
                             to="/features"
                            >About Us</Link> */}
                            <Nav.Link href="#aboutus" className="nav-link mx-2">About Us</Nav.Link>

                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link"
                             to="/pricing"
                            >Product</Link> */}
                            <Nav.Link href="#product" className="nav-link mx-2">Product</Nav.Link>

                        </li>
                        <li className="nav-item">
                            <Nav.Link href="#services" className="nav-link mx-2">Services</Nav.Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link"
                             to="/pricing"
                            >Testimonial</Link> */}
                            <Nav.Link href="#testimonial" className="nav-link mx-2">Testimonial</Nav.Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link"
                             to="/pricing"
                            >Testimonial</Link> */}
                            <Nav.Link href="#contactus" className="nav-link mx-2">Contact Us</Nav.Link>
                        </li>
                    </ul>

                    {/* Sign In and Register buttons */}
                    <div className="navbar-buttons d-flex">
                        <Link className="nav-link me-2" to="/">Sign In</Link>
                        <Link className="btn1" to="/">Register</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar (Fixed at the top) */}
            {nav && (
                <div className="mobile-navbar" style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1050,
                    overflowY: "auto" // Allows scrolling inside the sidebar if needed
                }}>
                    <button onClick={openNav} className="mobile-navbar__close" style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "none",
                        border: "none",
                        color: "white",
                        fontSize: "28px",
                        cursor: "pointer"
                    }}>
                        <FiX size={28} />
                    </button>
                    <ul className="mobile-navbar__links" style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
                        <li>
                            {/* <Link
                              
                                to="/" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>
                                Home
                            </Link> */}
                            <Nav.Link href="#home" className="nav-link mx-2" onClick={openNav}>Home</Nav.Link>

                        </li>
                        <li>
                            {/* <Link
                                onClick={openNav}
                                to="/features"
                                style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>
                                Features
                            </Link> */}
                            <Nav.Link href="#aboutus" className="nav-link mx-2" onClick={openNav}>About Us</Nav.Link>

                        </li>
                        <li
                            style={{ color: "white", fontSize: "24px", margin: "10px 0" }} onClick={openNav}>
                            {/* <Link
                                className="nav-link"
                                to="/pricing"
                            >Pricing
                            </Link> */}
                            <Nav.Link href="#product" className="nav-link mx-2" onClick={openNav}>Product</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#services" className="nav-link mx-2" onClick={openNav}>Servises</Nav.Link>
                        </li>

                        <li>
                            <Nav.Link href="#testimonial" className="nav-link mx-2" onClick={openNav}>Testimonial</Nav.Link>
                        </li>
                        <li>
                            <Nav.Link href="#contactus" className="nav-link mx-2" onClick={openNav}>Contact</Nav.Link>
                        </li>

                        <li>
                            <Link
                                onClick={openNav}
                                to="/" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={openNav}
                                to="/" style={{ color: "white", fontSize: "24px", margin: "10px 0" }}
                            >
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>)
}

export default LandingPageHeader