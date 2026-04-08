import { CheckCircle, Mail, MapPin, Milk, Phone, SmilePlus } from "lucide-react";

export default function Home_Hero() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Staggered fade-up entrance ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .hero-animate {
                    opacity: 0;
                    animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .delay-1 { animation-delay: 0.10s; }
                .delay-2 { animation-delay: 0.25s; }
                .delay-3 { animation-delay: 0.38s; }
                .delay-4 { animation-delay: 0.50s; }
                .delay-5 { animation-delay: 0.62s; }

                /* ── Section ── */
                .hero-root {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 96px 24px 80px;
                }

                /* Subtle dot-grid texture */
                .hero-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.10) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Light blue glow blobs */
                .hero-blob {
                    position: absolute;
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(80px);
                }
                .hero-blob-1 {
                    width: 500px; height: 500px;
                    background: rgba(77,189,232,0.10);
                    top: -160px; right: -120px;
                }
                .hero-blob-2 {
                    width: 320px; height: 320px;
                    background: rgba(77,189,232,0.07);
                    bottom: -80px; left: -80px;
                }

                /* ── Inner ── */
                .hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 860px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* ── Eyebrow pill ── */
                .hero-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(77,189,232,0.10);
                    border: 1px solid rgba(77,189,232,0.25);
                    border-radius: 999px;
                    padding: 6px 16px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #2a8db8;
                    margin-bottom: 28px;
                }
                .hero-eyebrow-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #4dbde8;
                    animation: pulse 2s ease-in-out infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.5; transform: scale(0.75); }
                }

                /* ── Heading ── */
                .hero-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(44px, 8vw, 88px);
                    line-height: 1.0;
                    letter-spacing: -0.01em;
                    color: #4dbde8;
                    margin: 0 0 6px;
                }
                .hero-heading-italic {
                    font-style: italic;
                    font-weight: 400;
                    color: #2a8db8;
                }

                /* ── Thin ruled line ── */
                .hero-rule {
                    width: 64px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #4dbde8, transparent);
                    border-radius: 1px;
                    margin: 20px auto 24px;
                }

                /* ── Body text ── */
                .hero-body {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 300;
                    font-size: clamp(15px, 2vw, 18px);
                    line-height: 1.8;
                    color: #4a5568;
                    max-width: 520px;
                    margin: 0 auto 36px;
                }

                /* ── Contact strip ── */
                .hero-contact {
                    display: inline-flex;
                    flex-direction: column;
                    gap: 8px;
                    margin-bottom: 52px;
                    text-align: left;
                }
                @media(min-width: 560px) {
                    .hero-contact { flex-direction: row; gap: 28px; }
                }

                .hero-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    color: #4a5568;
                    text-decoration: none;
                }
                .hero-contact-icon {
                    width: 32px; height: 32px;
                    border-radius: 8px;
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0;
                }
                .hero-contact-icon-phone { background: rgba(59,130,246,0.10); }
                .hero-contact-icon-mail  { background: rgba(239,68,68,0.10); }

                /* ── Stats card ── */
                .hero-stats {
                    background: #111827;
                    border-radius: 28px;
                    padding: 36px 40px;
                    position: relative;
                    overflow: hidden;
                }

                /* Shimmer line on stats card */
                .hero-stats::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(77,189,232,0.6), transparent);
                }

                /* Subtle inner glow */
                .hero-stats::after {
                    content: '';
                    position: absolute;
                    top: -60px; right: -60px;
                    width: 240px; height: 240px;
                    border-radius: 50%;
                    background: rgba(77,189,232,0.06);
                    filter: blur(40px);
                    pointer-events: none;
                }

                .hero-stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 28px 40px;
                    text-align: left;
                    position: relative;
                    z-index: 1;
                }
                @media(min-width: 768px) {
                    .hero-stats-grid { grid-template-columns: repeat(4, 1fr); gap: 0; }
                }

                /* Vertical dividers between stats on desktop */
                @media(min-width: 768px) {
                    .hero-stat-item:not(:last-child) {
                        border-right: 1px solid rgba(255,255,255,0.08);
                        padding-right: 32px;
                        margin-right: 32px;
                    }
                }

                .hero-stat-icon-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                }
                .hero-stat-number {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: 28px;
                    color: #ffffff;
                    line-height: 1;
                }
                .hero-stat-label {
                    font-family: 'Outfit', sans-serif;
                    font-size: 12px;
                    font-weight: 300;
                    color: #9ca3af;
                    line-height: 1.4;
                    letter-spacing: 0.02em;
                }
            `}</style>

            <section className="hero-root">
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />

                <div className="hero-inner">

                    {/* Eyebrow */}
                    <div className="hero-animate delay-1">
                        <span className="hero-eyebrow">
                            <span className="hero-eyebrow-dot" />
                            Est. Limuru, Kenya
                        </span>
                    </div>

                    {/* Heading */}
                    <div className="hero-animate delay-2">
                        <h1 className="hero-heading">
                            Limuru Dairy Farmers<br />
                            <span className="hero-heading-italic">Co-Operative Society</span>
                        </h1>
                        <div className="hero-rule" />
                    </div>

                    {/* Body */}
                    <div className="hero-animate delay-3">
                        <p className="hero-body">
                            Indulge in the creamy richness and natural smoothness of our dairy
                            products, crafted with care for unmatched freshness.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="hero-animate delay-4">
                        <div className="hero-contact">
                            <div className="hero-contact-item">
                                <span className="hero-contact-icon hero-contact-icon-phone">
                                    <Phone className="text-blue-500" size={15} />
                                </span>
                                0713-833814
                            </div>
                            <div className="hero-contact-item">
                                <span className="hero-contact-icon hero-contact-icon-mail">
                                    <Mail className="text-red-500" size={15} />
                                </span>
                                limurudairy@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="hero-animate delay-5">
                        <div className="hero-stats">
                            <div className="hero-stats-grid">

                                <div className="hero-stat-item">
                                    <div className="hero-stat-icon-row">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="hero-stat-number">10,000+</span>
                                    </div>
                                    <p className="hero-stat-label">Local Farmers Supported</p>
                                </div>

                                <div className="hero-stat-item">
                                    <div className="hero-stat-icon-row">
                                        <Milk className="text-white" size={20} />
                                        <span className="hero-stat-number">40,000+</span>
                                    </div>
                                    <p className="hero-stat-label">Litres Processed Daily</p>
                                </div>

                                <div className="hero-stat-item">
                                    <div className="hero-stat-icon-row">
                                        <MapPin className="text-red-500" size={20} />
                                        <span className="hero-stat-number">40+</span>
                                    </div>
                                    <p className="hero-stat-label">Distribution Points</p>
                                </div>

                                <div className="hero-stat-item">
                                    <div className="hero-stat-icon-row">
                                        <SmilePlus className="text-yellow-500" size={20} />
                                        <span className="hero-stat-number">100,000+</span>
                                    </div>
                                    <p className="hero-stat-label">Happy Consumers</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}