
import '../App.css';

function Contact() {
    return (
        <section id="contact" className="py-5 contact" style={{
            background: red,
            color: 'white'
        }}>
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Get In Touch</h2>
                        <p className="lead mb-4">Have questions? Our team is here to help you succeed on your learning journey.</p>

                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">Contact Informationdd</h5>
                            <div className="mb-3">
                                <i className="fas fa-envelope me-3"></i>
                                <strong>Email:</strong> aburorhambagadaniel@gmail.com
                            </div>
                            <div className="mb-3">
                                <i className="fas fa-phone me-3"></i>
                                <strong>Phone:</strong> +234 (904) 289-8107
                            </div>
                            <div className="mb-3">
                                <i className="fas fa-map-marker-alt me-3"></i>
                                <strong>Location:</strong> Adikpo, Kwande L.G.A, Benue State
                            </div>
                            <div className="mb-3">
                                <i className="fas fa-clock me-3"></i>
                                <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
                            </div>
                        </div>

                        <div>
                            <h5 className="fw-bold mb-3">Follow Us</h5>
                            <div className="d-flex gap-3">
                                <a href="https://web.facebook.com/daniel.abur.31/directory_links" target='blank' style={{ color: 'white', fontSize: '1.5rem' }}>
                                    <i className="fab fa-facebook">Facebook</i>
                                </a>
                                <a href="https://x.com/ABURDANIEL53024" target='blank' style={{ color: 'white', fontSize: '1.5rem' }}>
                                    <i className="fab fa-twitter">X(Twitter)</i>

                                </a>
                            </div>
                            <div className="d-flex gap-3">
                                <a href="https://www.linkedin.com/in/abur-daniel-ba01b1217" target='blank' style={{ color: 'white', fontSize: '1.5rem' }}>
                                    <i className="fab fa-linkedin">Linkdln</i>
                                </a>
                                <a href="https://wa.me/2349042898107" target='blank' style={{ color: 'white', fontSize: '1.5rem' }}>
                                    <i className="fab fa-youtube">WastApp</i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>Newsletter Signup</h2>
                        <p className="lead mb-4">Subscribe to get the latest courses, tips, and tech insights delivered to your inbox.</p>

                        <form className="mb-4">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Your Full Name"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Your Email Address"
                                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                                />
                            </div>
                            <div className="mb-3">
                                <select className="form-select form-select-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                                    <option>Select Your Interest</option>
                                    <option>Web Development</option>
                                    <option>Microsoft Office on Mobile</option>
                                    <option>Cloud Storage Mastery</option>
                                    <option>Mobile Development</option>
                                    <option>Data Entry & Productivity</option>
                                    <option>Digital Graphics Design</option>
                                    <option>AI models</option>
                                </select>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="terms" />
                                <label className="form-check-label" htmlFor="terms">
                                    I agree to receive updates and promotional emails
                                </label>
                            </div>
                            <button type="submit" className="btn btn-light btn-lg fw-bold w-100">
                                Subscribe Now
                            </button>
                        </form>

                        <p className="small text-center">
                            We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
