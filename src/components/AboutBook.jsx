import { useReveal } from "../hooks/useReveal";
import { BuyButton } from "./BuyButton";
import { BOOK_PRICE } from "../config/constants";

export function AboutBook() {
    const [ref, visible] = useReveal();

    return (
        <section className="about-book section" ref={ref} id="about">
            <div className={`section-inner fade-up ${visible ? "visible" : ""}`}>
                <div className="about-grid">
                    <div className="about-text">
                        <p className="section-eyebrow">About the Book</p>
                        <h2 className="section-title">Written for the student who's been told what to do — but never why.</h2>
                        <p>
                            Most career advice Nigerian students receive is secondhand — from
                            well-meaning parents, overworked teachers, or random internet
                            lists. <em>Don't Guess Your Future</em> is different.
                        </p>
                        <p>
                            It was written from the ground up for the Nigerian school
                            experience — WAEC, JAMB, polytechnic vs. university, course
                            changes, subject combinations — the real decisions students face
                            every day.
                        </p>
                        <p>
                            Written by a Physics graduate, medical imaging professional, and
                            youth mentor who changed courses and institutions — and made it
                            work — this book is honest about how messy career choices can be,
                            and practical about what to do anyway.
                        </p>
                        <BuyButton className="outline" label={`Download Your Copy — ${BOOK_PRICE}`} />
                    </div>
                    <div className="about-stats">
                        {[
                            { num: "10+", label: "Core Chapters" },
                            { num: "100%", label: "Nigeria-focused" },
                            { num: "PDF", label: "Instant Access" },
                            { num: "₦3500", label: "One-time Price" },
                        ].map(({ num, label }) => (
                            <div className="stat-card" key={label}>
                                <span className="stat-num">{num}</span>
                                <span className="stat-label">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}