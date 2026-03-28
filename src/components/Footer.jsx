export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="nav-logo">Quantum Books</span>
                <p>© {new Date().getFullYear()} Abur Orhembaga Daniel. All rights reserved.</p>
                <p className="footer-note">
                    <em>Don't Guess Your Future</em> — A Career Guide for Nigerian Secondary School Students.
                </p>
            </div>
        </footer>
    );
}