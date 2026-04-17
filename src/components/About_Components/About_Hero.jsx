import { Phone, Mail } from "lucide-react";

export default function Hero() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

                /* ── Entrance animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(26px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .ah-animate {
                    opacity: 0;
                    animation: fadeUp 0.72s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .ah-d1 { animation-delay: 0.08s; }
                .ah-d2 { animation-delay: 0.22s; }
                .ah-d3 { animation-delay: 0.38s; }
                .ah-d4 { animation-delay: 0.52s; }

                /* ── Section ── */
                .ah-root {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 108px 24px 96px;
                    font-family: 'Outfit', sans-serif;
                }

                /* Dot-grid texture */
                .ah-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Blobs */
                .ah-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }
                .ah-blob-1 {
                    width: 460px; height: 460px;
                    background: rgba(34,197,94,0.08);
                    top: -180px; right: -100px;
                }
                .ah-blob-2 {
                    width: 300px; height: 300px;
                    background: rgba(34,197,94,0.06);
                    bottom: -100px; left: -60px;
                }

                /* Decorative rings */
                .ah-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(34,197,94,0.12);
                    pointer-events: none;
                }

                /* ── Inner ── */
                .ah-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 720px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* ── Eyebrow ── */
                .ah-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.20em;
                    text-transform: uppercase;
                    color: #6b7280;
                    margin-bottom: 28px;
                }
                .ah-eyebrow-line {
                    width: 32px;
                    height: 1px;
                    background: #d1d5db;
                }

                /* ── Heading ── */
                .ah-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(44px, 8vw, 82px);
                    line-height: 1.0;
                    letter-spacing: -0.01em;
                    color: #111827;
                    margin: 0 0 0;
                }
                .ah-heading-green {
                    color: #22c55e;
                    font-style: italic;
                    font-weight: 400;
                    position: relative;
                    display: inline-block;
                }

                /* Underline swash on STORY */
                .ah-heading-green::after {
                    content: '';
                    position: absolute;
                    bottom: 4px; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, #22c55e, transparent);
                    border-radius: 2px;
                    opacity: 0.55;
                }

                /* ── Divider ── */
                .ah-rule {
                    width: 48px;
                    height: 2px;
                    background: #22c55e;
                    border-radius: 1px;
                    margin: 24px auto 28px;
                    opacity: 0.70;
                }

                /* ── Tagline ── */
                .ah-tagline {
                    font-size: clamp(15px, 2.2vw, 18px);
                    font-weight: 300;
                    line-height: 1.85;
                    color: #4b5563;
                    margin: 0 auto 44px;
                    max-width: 420px;
                }

                /* ── Contact strip ── */
                .ah-contact {
                    display: inline-flex;
                    flex-direction: column;
                    gap: 10px;
                    text-align: left;
                }
                @media(min-width: 560px) {
                    .ah-contact { flex-direction: row; gap: 28px; }
                }

                .ah-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #374151;
                    text-decoration: none;
                }

                .ah-contact-icon {
                    width: 34px; height: 34px;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .ah-icon-phone { background: rgba(59,130,246,0.09); }
                .ah-icon-mail  { background: rgba(239,68,68,0.09); }
            `}</style>

            <section className="ah-root">
                <div className="ah-blob ah-blob-1" />
                <div className="ah-blob ah-blob-2" />
                <div className="ah-ring" style={{ width:520,height:520,top:-220,right:-160 }} />
                <div className="ah-ring" style={{ width:260,height:260,bottom:-80,left:-40 }} />

                <div className="ah-inner">

                    {/* Eyebrow */}
                    <div className="ah-animate ah-d1">
                        <p className="ah-eyebrow">
                            <span className="ah-eyebrow-line" />
                            About Us
                            <span className="ah-eyebrow-line" />
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="ah-animate ah-d2">
                        <h1 className="ah-heading">
                            Limuru Dairy<br />
                            <span className="ah-heading-green">Story</span>
                        </h1>
                        <div className="ah-rule" />
                    </div>

                    {/* Tagline */}
                    <div className="ah-animate ah-d3">
                        <p className="ah-tagline">
                            From humble beginnings to trusted dairy,
                            rooted in community values.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="ah-animate ah-d4">
                        <div className="ah-contact">
                            <div className="ah-contact-item">
                                <span className="ah-contact-icon ah-icon-phone">
                                    <Phone className="text-blue-500" size={15} />
                                </span>
                                0713-833814
                            </div>
                            <div className="ah-contact-item">
                                <span className="ah-contact-icon ah-icon-mail">
                                    <Mail className="text-red-500" size={15} />
                                </span>
                                limurudairy@gmail.com
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}