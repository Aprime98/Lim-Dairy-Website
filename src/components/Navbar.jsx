import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home',     href: '/'         },
        { name: 'Products', href: '/products'  },
        { name: 'About Us', href: '/about'     },
        { name: 'Stores',   href: '/stores'    },
    ];

    const isActive = (href) =>
        href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap');

                .nav-root {
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(0,0,0,0.07);
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    font-family: 'Outfit', sans-serif;
                }

                .nav-inner {
                    max-width: 1120px;
                    margin: 0 auto;
                    padding: 0 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 64px;
                }

                /* ── Logo ── */
                .nav-logo img {
                    height: 44px;
                    width: auto;
                    transition: transform 0.25s ease, opacity 0.25s ease;
                }
                .nav-logo:hover img { transform: scale(1.04); opacity: 0.88; }

                /* ── Desktop links ── */
                .nav-links {
                    display: none;
                    align-items: center;
                    gap: 36px;
                }
                @media(min-width: 768px) { .nav-links { display: flex; } }

                .nav-link {
                    position: relative;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    color: #374151;
                    text-decoration: none;
                    padding: 4px 0;
                    transition: color 0.2s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px; left: 0;
                    width: 0; height: 2px;
                    background: #4dbde8;
                    border-radius: 1px;
                    transition: width 0.28s cubic-bezier(0.4,0,0.2,1);
                }
                .nav-link:hover { color: #4dbde8; }
                .nav-link:hover::after { width: 100%; }

                /* Active state */
                .nav-link-active { color: #4dbde8; }
                .nav-link-active::after { width: 100%; }

                /* ── CTA pill (last link) ── */
                .nav-link-cta {
                    background: #4dbde8;
                    color: #fff !important;
                    padding: 7px 18px !important;
                    border-radius: 999px;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease !important;
                }
                .nav-link-cta::after { display: none; }
                .nav-link-cta:hover {
                    background: #2a9ec2 !important;
                    color: #fff !important;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 16px rgba(77,189,232,0.35);
                }
                .nav-link-cta-active {
                    background: #2a9ec2;
                }

                /* ── Hamburger ── */
                .nav-hamburger {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px; height: 40px;
                    border-radius: 10px;
                    background: transparent;
                    border: 1.5px solid #e5e7eb;
                    color: #374151;
                    cursor: pointer;
                    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
                }
                .nav-hamburger:hover {
                    background: #f0f9ff;
                    border-color: #4dbde8;
                    color: #4dbde8;
                }
                @media(min-width: 768px) { .nav-hamburger { display: none; } }

                /* ── Mobile drawer ── */
                .nav-mobile {
                    overflow: hidden;
                    max-height: 0;
                    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
                    opacity: 0;
                    background: white;
                    border-top: 1px solid rgba(0,0,0,0.06);
                }
                .nav-mobile.open {
                    max-height: 320px;
                    opacity: 1;
                }
                @media(min-width: 768px) { .nav-mobile { display: none; } }

                .nav-mobile-inner {
                    padding: 16px 24px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .nav-mobile-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 500;
                    color: #374151;
                    text-decoration: none;
                    transition: background 0.2s ease, color 0.2s ease;
                }
                .nav-mobile-link:hover {
                    background: #f0f9ff;
                    color: #4dbde8;
                }
                .nav-mobile-link-active {
                    background: #f0f9ff;
                    color: #4dbde8;
                    font-weight: 600;
                }
                .nav-mobile-arrow {
                    font-size: 14px;
                    opacity: 0.4;
                }
                .nav-mobile-link:hover .nav-mobile-arrow,
                .nav-mobile-link-active .nav-mobile-arrow {
                    opacity: 1;
                }

                /* Active dot on mobile */
                .nav-mobile-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #4dbde8;
                    margin-right: 10px;
                    flex-shrink: 0;
                    opacity: 0;
                }
                .nav-mobile-link-active .nav-mobile-dot { opacity: 1; }
            `}</style>

            <nav className="nav-root">
                <div className="nav-inner">

                    {/* Logo */}
                    <a href="/" className="nav-logo">
                        <img src="/Logo1.png" alt="Limuru Fresh Dairy" />
                    </a>

                    {/* Desktop links */}
                    <div className="nav-links">
                        {navLinks.map((link, i) => {
                            const active = isActive(link.href);
                            const isLast = i === navLinks.length - 1;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={[
                                        'nav-link',
                                        isLast  ? 'nav-link-cta'        : '',
                                        active && isLast  ? 'nav-link-cta-active' : '',
                                        active && !isLast ? 'nav-link-active'     : '',
                                    ].join(' ')}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Hamburger */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile drawer */}
                <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
                    <div className="nav-mobile-inner">
                        {navLinks.map(link => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`nav-mobile-link ${active ? 'nav-mobile-link-active' : ''}`}
                                >
                                    <span style={{ display:'flex', alignItems:'center' }}>
                                        <span className="nav-mobile-dot" />
                                        {link.name}
                                    </span>
                                    <span className="nav-mobile-arrow">→</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
}