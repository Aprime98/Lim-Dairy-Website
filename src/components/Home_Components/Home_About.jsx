import { Link } from "react-router-dom";

export default function Home_About() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Entrance animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .about-animate {
                    opacity: 0;
                    animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .about-d1 { animation-delay: 0.08s; }
                .about-d2 { animation-delay: 0.20s; }
                .about-d3 { animation-delay: 0.30s; }
                .about-d4 { animation-delay: 0.40s; }
                .about-d5 { animation-delay: 0.50s; }
                .about-d6 { animation-delay: 0.60s; }

                /* ── Section ── */
                .about-root {
                    background: #4dbde8;
                    background-image:
                        radial-gradient(ellipse at 90% 0%, rgba(0,60,110,0.18) 0%, transparent 55%),
                        radial-gradient(ellipse at 5% 100%, rgba(255,255,255,0.10) 0%, transparent 50%);
                    position: relative;
                    overflow: hidden;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    padding: 96px 24px 88px;
                }

                /* Dot grid texture */
                .about-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
                    background-size: 30px 30px;
                    pointer-events: none;
                }

                /* Decorative blobs */
                .about-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                }
                .about-blob-1 {
                    width: 500px; height: 500px;
                    background: rgba(0,60,110,0.14);
                    top: -180px; right: -140px;
                }
                .about-blob-2 {
                    width: 300px; height: 300px;
                    background: rgba(255,255,255,0.08);
                    bottom: -100px; left: -60px;
                }

                /* Decorative ring */
                .about-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(255,255,255,0.12);
                    pointer-events: none;
                }

                /* ── Inner ── */
                .about-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1120px;
                    margin: 0 auto;
                }

                /* ── Eyebrow ── */
                .about-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    // opacity: 0.75;
                    margin-bottom: 20px;
                    color: white;
                }
                .about-eyebrow-arrow {
                    color: #d97706;
                    font-size: 14px;
                }

                /* ── Heading ── */
                .about-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(40px, 7vw, 76px);
                    line-height: 1.0;
                    letter-spacing: -0.01em;
                    color: white;
                    margin: 0 0 56px;
                }
                .about-heading-pill {
                    background: #d97706;
                    color: #000;
                    padding: 2px 20px 6px;
                    border-radius: 999px;
                    display: inline-block;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 1.2;
                }

                /* ── Feature rows ── */
                .about-rows {
                    margin-bottom: 52px;
                }

                .about-row {
                    border-top: 1px solid rgba(255,255,255,0.18);
                    padding: 28px 0;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 8px;
                    align-items: center;
                    transition: background 0.25s ease;
                    border-radius: 4px;
                    padding-left: 4px;
                    padding-right: 4px;
                }
                @media(min-width: 768px) {
                    .about-row { grid-template-columns: 1fr 1fr; gap: 24px; }
                }

                .about-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.18); }

                .about-row:hover {
                    background: rgba(255,255,255,0.05);
                }

                .about-row-number {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    color: #d97706;
                    margin-bottom: 4px;
                    display: block;
                }

                .about-row-desc {
                    font-size: 15px;
                    font-weight: 300;
                    // opacity: 0.90;
                    line-height: 1.65;
                }
                @media(min-width: 768px) {
                    .about-row-desc { font-size: 15px; }
                }

                .about-row-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(22px, 3vw, 32px);
                    color: white;
                    line-height: 1.15;
                    margin: 0;
                }

                /* ── CTA button ── */
                .about-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: #d97706;
                    color: #000;
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 14px 28px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }
                .about-cta::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.12);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .about-cta:hover::before { opacity: 1; }
                .about-cta:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(217,119,6,0.40);
                }
                .about-cta:active { transform: translateY(0); }

                .about-cta-arrow {
                    font-size: 20px;
                    transition: transform 0.2s ease;
                    display: inline-block;
                }
                .about-cta:hover .about-cta-arrow { transform: translateX(4px); }
            `}</style>

            <section className="about-root">
                <div className="about-blob about-blob-1" />
                <div className="about-blob about-blob-2" />
                <div className="about-ring" style={{ width: 400, height: 400, top: -120, right: -120 }} />
                <div className="about-ring" style={{ width: 220, height: 220, bottom: -60, left: 40 }} />

                <div className="about-inner">

                    {/* Eyebrow */}
                    <div className="about-animate about-d1">
                        <p className="about-eyebrow">
                            <span className="about-eyebrow-arrow">↳</span>
                            About Us
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="about-animate about-d2">
                        <h2 className="about-heading">
                            From{" "}
                            <span className="about-heading-pill">Farm</span>
                            <br />
                            to Your Table
                        </h2>
                    </div>

                    {/* Feature rows */}
                    <div className="about-rows">

                        <div className="about-row about-animate about-d3">
                            <div>
                                <span className="about-row-number">01</span>
                                <p className="about-row-desc">Only fresh, additive-free ingredients used.</p>
                            </div>
                            <h3 className="about-row-title">Pure, Natural Ingredients</h3>
                        </div>

                        <div className="about-row about-animate about-d4">
                            <div>
                                <span className="about-row-number">02</span>
                                <p className="about-row-desc">Traditional methods, modern quality standards.</p>
                            </div>
                            <h3 className="about-row-title">Crafted with Care</h3>
                        </div>

                        <div className="about-row about-animate about-d5">
                            <div>
                                <span className="about-row-number">03</span>
                                <p className="about-row-desc">We support farmers and the environment.</p>
                            </div>
                            <h3 className="about-row-title">Community & Sustainability</h3>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="about-animate about-d6">
                        <Link to="/about">
                            <button className="about-cta">
                                Read more
                                <span className="about-cta-arrow">→</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}