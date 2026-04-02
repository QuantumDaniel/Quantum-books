import { BuyButton } from "./BuyButton";
import { BOOK_PRICE } from "../config/constants";
import coverPage from "../assets/252bd609512ac0a9.png"
export function Hero() {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-orb orb-1" />
                <div className="hero-orb orb-2" />
                <div className="grain" />
            </div>
            <div className="hero-content">
                <div className="hero-badge">📖 Career Guide for Nigerian Students</div>
                <h1 className="hero-title">
                    Don't Guess<br />
                    <em>Your Future.</em>
                </h1>
                <p className="hero-sub">
                    Stop letting confusion, pressure, and guesswork decide your career.
                    This book gives Nigerian secondary school students a clear, honest, and
                    practical roadmap-from self-discovery to career choice to JAMB and
                    beyond.
                </p>
                <div className="hero-actions">
                    <div className="fre">  <a target="blank" href="https://1drv.ms/w/c/d6a759a2a54357fd/IQBXejPp00toRqJ9NaKBXOz2AUEcOJOfK6gpap7g1ruZkss" className="btn btn-success rounded-4 text-center" style={{ width: '220px', height: '40px' }}>
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

                    </a></div>
                    <BuyButton />
                    <span className="hero-price-note">One-time payment · Instant PDF download</span>

                </div>

                <div className="hero-social-proof">
                    <div className="proof-faces">
                        {["Q", "U", "A", "N", "T", "U", "M"].map((l, i) => (
                            <div key={i} className="proof-face" style={{ background: ["#c8a96e", "#4a7c59", "#2d5fa6", "#8b3a3a"][i] }}>
                                {l}
                            </div>
                        ))}
                    </div>
                    <span>Helping students across Nigeria choose better.</span>
                </div>
            </div>
            <div className="hero-book-visual">
                <div className="book-3d">
                    <div className="book-front">
                        <img src={coverPage} alt="" loading="lazy" />

                    </div>
                    <div className="book-spine" />
                    <div className="book-shadow" />
                </div>
            </div>
        </section >
    );
}