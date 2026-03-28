import { BuyButton } from "./BuyButton";
import { BOOK_PRICE } from "../config/constants";

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
                    practical roadmap — from self-discovery to career choice to JAMB and
                    beyond.
                </p>
                <div className="hero-actions">
                    <div className="fre" style={{ display: 'inline' }}>  <a target="blank" href="https://1drv.ms/w/c/d6a759a2a54357fd/IQBXejPp00toRqJ9NaKBXOz2AUEcOJOfK6gpap7g1ruZkss" className="btn btn-success rounded-4 text-center" style={{ width: '220px', height: '40px' }}>Free Chapter</a></div>
                    <BuyButton />
                    <span className="hero-price-note">One-time payment · Instant PDF download</span>

                </div>

                <div className="hero-social-proof">
                    <div className="proof-faces">
                        {["B", "E", "C", "T"].map((l, i) => (
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
                        <img src="/252bd609512ac0a9.png" alt="" />

                    </div>
                    <div className="book-spine" />
                    <div className="book-shadow" />
                </div>
            </div>
        </section >
    );
}