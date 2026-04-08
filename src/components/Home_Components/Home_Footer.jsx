import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400&family=Outfit:wght@300;400;500&display=swap');

                .footer-root {
                    background: #4dbde8;
                    background-image:
                        radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.12) 0%, transparent 55%),
                        radial-gradient(ellipse at 90% 10%, rgba(0,80,130,0.18) 0%, transparent 55%),
                        radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%);
                    position: relative;
                    overflow: hidden;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                }

                /* Subtle wave top edge */
                .footer-wave {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 6px;
                    background: linear-gradient(90deg,
                        rgba(255,255,255,0.0) 0%,
                        rgba(255,255,255,0.35) 25%,
                        rgba(255,255,255,0.55) 50%,
                        rgba(255,255,255,0.35) 75%,
                        rgba(255,255,255,0.0) 100%
                    );
                }

                /* Decorative circle blobs */
                .footer-blob {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                }
                .footer-blob-1 {
                    width: 380px; height: 380px;
                    background: rgba(255,255,255,0.07);
                    bottom: -160px; right: -100px;
                }
                .footer-blob-2 {
                    width: 200px; height: 200px;
                    background: rgba(0,80,130,0.12);
                    top: -60px; left: 60px;
                }

                .footer-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1120px;
                    margin: 0 auto;
                    padding: 56px 32px 0;
                }

                /* ── Top section ── */
                .footer-top {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 40px;
                    margin-bottom: 48px;
                }
                @media(min-width: 768px) {
                    .footer-top { grid-template-columns: 2fr 1fr 1fr; gap: 48px; }
                }

                /* Brand column */
                .footer-brand-name {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 22px;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                    margin: 0 0 12px;
                    opacity: 0.95;
                }
                .footer-brand-tagline {
                    font-size: 13px;
                    font-weight: 300;
                    line-height: 1.7;
                    opacity: 0.92;
                    max-width: 260px;
                    margin: 0 0 24px;
                }

                /* Social icons */
                .footer-socials {
                    display: flex;
                    gap: 10px;
                }
                .footer-social-btn {
                    width: 38px; height: 38px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.25);
                    display: flex; align-items: center; justify-content: center;
                    color: white;
                    text-decoration: none;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .footer-social-btn:hover {
                    background: rgba(255,255,255,0.28);
                    transform: translateY(-2px);
                }

                /* Column headings */
                .footer-col-title {
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    opacity: 0.85;
                    margin: 0 0 18px;
                }

                /* Links */
                .footer-link {
                    display: block;
                    font-size: 14px;
                    font-weight: 400;
                    color: white;
                    text-decoration: none;
                    opacity: 0.95;
                    margin-bottom: 10px;
                    transition: opacity 0.2s ease, letter-spacing 0.2s ease;
                }
                .footer-link:hover {
                    opacity: 1;
                    letter-spacing: 0.03em;
                }

                /* Contact items */
                .footer-contact-item {
                    font-size: 13px;
                    font-weight: 400;
                    opacity: 0.92;
                    margin-bottom: 8px;
                    line-height: 1.6;
                }

                /* ── Divider ── */
                .footer-divider {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.18);
                    margin: 0;
                }

                /* ── Bottom bar ── */
                .footer-bottom {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    padding: 20px 32px 28px;
                    text-align: center;
                }
                @media(min-width: 768px) {
                    .footer-bottom { flex-direction: row; justify-content: space-between; }
                }

                .footer-copy {
                    font-size: 12px;
                    font-weight: 400;
                    opacity: 0.88;
                    letter-spacing: 0.03em;
                }

                .footer-tagline-bottom {
                    font-family: 'Playfair Display', serif;
                    font-style: italic;
                    font-size: 13px;
                    opacity: 0.75;
                }
            `}</style>

            <footer id="stores" className="footer-root">
                <div className="footer-wave" />
                <div className="footer-blob footer-blob-1" />
                <div className="footer-blob footer-blob-2" />

                <div className="footer-inner">
                    <div className="footer-top">

                        {/* ── Brand column ── */}
                        <div>
                            <p className="footer-brand-name">Limuru Dairy Farmers</p>
                            <p className="footer-brand-tagline">
                                Proudly serving Kenyan families with fresh, wholesome dairy since the beginning.
                                From our farms to your table.
                            </p>
                            <div className="footer-socials">
                                <a href="https://www.facebook.com/limurufresh" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <Facebook size={16} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <Twitter size={16} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
                                    <Instagram size={16} />
                                </a>
                            </div>
                        </div>

                        {/* ── Quick Links ── */}
                        <div>
                            <p className="footer-col-title">Quick Links</p>
                            <a href="/public" className="footer-link">Home</a>
                            <Link to="/products" className="footer-link">Products</Link>
                            <Link to="/about" className="footer-link">About Us</Link>
                        </div>

                        {/* ── Contact ── */}
                        <div className="hidden md:block">
                            <p className="footer-col-title">Contact</p>
                            <p className="footer-contact-item">Limuru, Kiambu County</p>
                            <p className="footer-contact-item">Kenya</p>
                            <p className="footer-contact-item" style={{ marginTop: '8px' }}>Co-Operative Society</p>
                        </div>

                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <p className="footer-copy">
                        &copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.
                    </p>
                    <p className="footer-tagline-bottom">Fresh from the farm, crafted with care.</p>
                </div>
            </footer>
        </>
    );
}