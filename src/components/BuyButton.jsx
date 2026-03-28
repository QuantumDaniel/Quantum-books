import { PAYSTACK_LINK, BOOK_PRICE } from "../config/constants";

export function BuyButton({ label = `Get the Book — ${BOOK_PRICE}`, className = "" }) {
    return (
        <a
            href={PAYSTACK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`buy-btn ${className}`}
        >
            <span>{label}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
}