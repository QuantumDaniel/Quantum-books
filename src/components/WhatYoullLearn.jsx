import { useReveal } from "../hooks/useReveal";
import { lessons } from "../config/constants";

export function WhatYoullLearn() {
    const [ref, visible] = useReveal();

    return (
        <section className="learn section dark-section" ref={ref} id="learn">
            <div className={`section-inner fade-up ${visible ? "visible" : ""}`}>
                <p className="section-eyebrow light">What You'll Learn</p>
                <h2 className="section-title light">Six things this book will change about how you think.</h2>
                <div className="lessons-grid">
                    {lessons.map((l, i) => (
                        <div className="lesson-card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                            <span className="lesson-icon">{l.icon}</span>
                            <h3>{l.title}</h3>
                            <p>{l.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}