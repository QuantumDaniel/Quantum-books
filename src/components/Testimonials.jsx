import { useReveal } from "../hooks/useReveal";
import { testimonials } from "../config/constants";

export function Testimonials() {
    const [ref, visible] = useReveal();

    return (
        <section className="testimonials section dark-section" ref={ref} id="testimonials">
            <div className={`section-inner fade-up ${visible ? "visible" : ""}`}>
                <p className="section-eyebrow light">What Readers Say</p>
                <h2 className="section-title light">Real reactions from Nigerian students and parents.</h2>
                <div className="testi-grid">
                    {testimonials.map((t, i) => (
                        <div className="testi-card" key={i}>
                            <div className="testi-quote">"</div>
                            <p className="testi-text">{t.quote}</p>
                            <div className="testi-author">
                                <div className="testi-avatar">{t.name[0]}</div>
                                <div>
                                    <strong>{t.name}</strong>
                                    <span>{t.school}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}