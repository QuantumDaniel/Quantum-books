import { useReveal } from "../hooks/useReveal";

export function AboutAuthor() {
    const [ref, visible] = useReveal();

    return (
        <section className="author section" ref={ref} id="author">
            <div className={`section-inner fade-up ${visible ? "visible" : ""}`}>
                <div className="author-grid">
                    <div className="author-avatar-wrap">
                        <div className="author-avatar">
                            <span>AO</span>
                        </div>
                        <div className="author-tag">Physics Graduate · Author · Mentor</div>
                    </div>
                    <div className="author-text">
                        <p className="section-eyebrow">About the Author</p>
                        <h2 className="section-title">Abur Orhembaga Daniel <span className="aka">(Quantum)</span></h2>
                        <p>
                            Quantum is a Physics graduate based in Adikpo, Benue State, with
                            hands-on experience in medical imaging — working in X-ray and
                            ultrasound environments at St. Monica's Hospital. He is a
                            graphics designer, front-end web developer, and the founder of
                            <strong> Quantum TechBridge</strong>, a smartphone-first digital
                            skills training initiative in Adikpo.
                        </p>
                        <p>
                            He knows what it means to change courses, switch institutions, and
                            still find a path that makes sense. He wrote this book so that
                            fewer students have to figure that out the hard way.
                        </p>
                        <div className="author-links">
                            <span className="author-tag-sm">📍 Adikpo, Benue State</span>
                            <span className="author-tag-sm">🎓 Physics Graduate</span>
                            <span className="author-tag-sm">🌐 Quantum TechBridge Founder</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}