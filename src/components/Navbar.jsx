import { useState, useEffect } from "react";
import { BOOK_PRICE, PAYSTACK_LINK } from "../config/constants";
import '../App.css';

export function Navbar() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function checkScroll() {
            setScrolled(window.scrollY > 60)
        }
        window.addEventListener("scroll", checkScroll)
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg  sticky-top shadow header ${scrolled ? "scrolled" : ""}`}>
            <div className="container-fluid">
                {/* Brand/Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#home">
                    <span className="text-warning">📖</span> Quantum Books
                </a>

                {/* Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                    onClick={() => setExpanded(!expanded)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2">
                        {/* Home Link */}
                        <li className="nav-item">
                            <a className="nav-link active nav-animated" aria-current="page" href="#">
                                Home
                            </a>
                        </li>

                        {/* About Book */}
                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#about">
                                About Book
                            </a>
                        </li>

                        {/* What You'll Learn */}
                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#learn">
                                What You'll Learn
                            </a>
                        </li>

                        {/* About Author */}
                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#author">
                                About Author
                            </a>
                        </li>

                        {/* Testimonials */}
                        <li className="nav-item">
                            <a className="nav-link nav-animated" href="#testimonials">
                                Testimonials
                            </a>
                        </li>

                        {/* FAQ Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle nav-animated"
                                href="/free_chapter_preview(1).pdf"
                                id="navbarDropdown"
                                download="Don't-Guess-Your-future-By-Abur-Orhembaga-Daniel"
                                role="button"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                                target="blank"

                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Free Chapter
                            </a>

                            {/*
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item nav-animated" href="#faq">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item nav-animated" href="#contact">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item nav-animated" href="#privacy">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                            */}
                        </li>

                        {/* Buy Now Button */}

                        <li className="nav-item nav-animated">
                            <a
                                href={PAYSTACK_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-warning text-dark fw-bold ms-2"
                            >
                                Buy Now — {BOOK_PRICE}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
}