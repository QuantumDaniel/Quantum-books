import { useReveal } from "../hooks/useReveal";
import { BuyButton } from "./BuyButton";
import { BOOK_PRICE } from "../config/constants";

export function FinalCTA() {
    const [ref, visible] = useReveal();

    return (
        <section className="final-cta section" ref={ref}>
            <div className={`section-inner fade-up ${visible ? "visible" : ""} cta-inner`}>
                <div className="cta-orb" />
                <p className="section-eyebrow">Your Next Step</p>
                <h2 className="cta-title">Your future is too important to guess at.</h2>
                <p className="cta-sub">
                    For just {BOOK_PRICE}, get a clear, practical, Nigerian-focused career
                    guide delivered instantly to your inbox as a PDF. No shipping. No waiting.
                </p>
                <BuyButton label={`Get the Book Now — ${BOOK_PRICE}`} className="large" />
                <p className="cta-footnote">Secure payment via Paystack · PDF delivered instantly after payment</p>
            </div>
        </section>
    );
}