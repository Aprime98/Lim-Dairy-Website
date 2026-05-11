import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Location() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

                .loc-root {
                    background: #4dbde8;
                    background-image:
                        radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.13) 0%, transparent 50%),
                        radial-gradient(ellipse at 85% 10%, rgba(0,80,130,0.16) 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 65%);
                    position: relative;
                    overflow: hidden;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    padding: 56px 32px 0;
                }

                /* Top shimmer */
                .loc-shimmer {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 5px;
                    background: linear-gradient(90deg,
                        transparent 0%,
                        rgba(255,255,255,0.4) 30%,
                        rgba(255,255,255,0.65) 50%,
                        rgba(255,255,255,0.4) 70%,
                        transparent 100%
                    );
                }

                /* Blobs */
                .loc-blob { position:absolute;border-radius:50%;pointer-events:none; }
                .loc-blob-1 { width:420px;height:420px;background:rgba(255,255,255,0.08);bottom:-180px;right:-120px; }
                .loc-blob-2 { width:240px;height:240px;background:rgba(0,80,130,0.13);top:-80px;left:40px; }
                .loc-blob-3 { width:160px;height:160px;background:rgba(255,255,255,0.06);top:40px;right:80px; }

                /* Rings */
                .loc-ring { position:absolute;border-radius:50%;border:1.5px dashed rgba(255,255,255,0.15);pointer-events:none; }

                /* ── Inner: column on mobile → row on desktop ── */
                .loc-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1100px;
                    margin: 0 auto;
                    padding-bottom: 48px;

                    /* mobile: column, centered */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 32px;
                }
                @media(min-width: 768px) {
                    .loc-inner {
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        text-align: left;
                        gap: 48px;
                        padding-bottom: 56px;
                    }
                }

                /* ── Logo column ── */
                .loc-logo-col {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0;
                    gap: 14px;
                }
                @media(min-width: 768px) {
                    .loc-logo-col { align-items: flex-start; }
                }

                .loc-logo-ring {
                    width: 90px; height: 90px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.18);
                    border: 1.5px solid rgba(255,255,255,0.30);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(4px);
                }
                .loc-logo-ring img { height:49px;width:70px; }

                .loc-heading {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    font-size: clamp(22px, 3vw, 34px);
                    letter-spacing: 0.04em;
                    margin: 0;
                    color: white;
                }
                .loc-heading-underline {
                    width: 48px;
                    height: 3px;
                    background: rgba(255,255,255,0.55);
                    border-radius: 2px;
                    margin: 0 auto;
                }
                @media(min-width: 768px) {
                    .loc-heading-underline { margin: 0; }
                }

                /* ── Info card ── */
                .loc-card {
                    background: rgba(255,255,255,0.13);
                    border: 1px solid rgba(255,255,255,0.22);
                    border-radius: 20px;
                    padding: 28px 36px;
                    backdrop-filter: blur(6px);
                    flex: 1;
                    min-width: 0;
                    text-align: center;
                }

                .loc-card-section { margin-bottom: 18px;         
               }
                .loc-card-section:last-child { margin-bottom: 0; }

                .loc-card-label {
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    opacity: 0.65;
                    margin-bottom: 6px;
                    display: block;
                }
                .loc-card-value {
                    font-size: 15px;
                    font-weight: 400;
                    opacity: 0.96;
                    line-height: 1.65;
                    margin: 0;
                }
                .loc-card-divider {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.18);
                    margin: 16px 0;
                }

                /* ── Socials column ── */
                .loc-socials-col {
                    display: flex;
                    flex-direction: row;
                    align-items: center;            
                    gap: 12px;
                    flex-shrink: 0;
                }
                @media(min-width: 768px) {
                    .loc-socials-col { flex-direction: column; }
                }

                .loc-social-btn {
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.28);
                    display: flex; align-items: center; justify-content: center;
                    color: white;
                    text-decoration: none;
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }
                .loc-social-btn:hover {
                    background: rgba(255,255,255,0.28);
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
                }

                /* ── Bottom bar ── */
                .loc-divider { border:none;border-top:1px solid rgba(255,255,255,0.20);margin:0; }

                .loc-bottom {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    padding: 20px 32px 28px;
                    text-align: center;
                }
                @media(min-width: 768px) {
                    .loc-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                        max-width: 1100px;
                        margin: 0 auto;
                    }
                }

                .loc-copy { font-size:12px;font-weight:400;opacity:0.85;letter-spacing:0.03em; }
                .loc-tagline { font-family:'Playfair Display',serif;font-style:italic;font-size:13px;opacity:0.65; }
            `}</style>

            <section className="loc-root">
                <div className="loc-shimmer" />
                <div className="loc-blob loc-blob-1" />
                <div className="loc-blob loc-blob-2" />
                <div className="loc-blob loc-blob-3" />
                <div className="loc-ring" style={{ width:320,height:320,bottom:-100,left:-80 }} />
                <div className="loc-ring" style={{ width:180,height:180,top:20,right:40 }} />

                <div className="loc-inner">

                    {/* ── Logo + heading column ── */}
                    <div className="loc-logo-col">
                        <a href="/">
                            <div className="loc-logo-ring">
                                <img src="/Logo1.png" className="" alt="Limuru Fresh Dairy" />
                            </div>
                        </a>
                        <h2 className="loc-heading">Our Location</h2>
                        <div className="loc-heading-underline" />
                    </div>

                    {/* ── Info card ── */}
                    <div className="loc-card">
                        <div className="loc-card-section">
                            <span className="loc-card-label">Address</span>
                            <p className="loc-card-value">
                                Maziwa House, 4th Floor<br />
                                P.O. Box 8 – 00217, Limuru
                            </p>
                        </div>
                        <hr className="loc-card-divider" />
                        <div className="loc-card-section">
                            <span className="loc-card-label">Get in Touch</span>
                            <p className="loc-card-value">
                                Cell: 0713-833814<br />
                                Email: limurudairy.gmail.com
                            </p>
                        </div>
                    </div>

                    {/* ── Socials column (vertical on desktop, horizontal on mobile) ── */}
                    <div className="loc-socials-col">
                        <a href="https://www.facebook.com/limurufresh" target="_blank" rel="noopener noreferrer" className="loc-social-btn">
                            <Facebook size={18} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="loc-social-btn">
                            <Twitter size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="loc-social-btn">
                            <Instagram size={18} />
                        </a>
                    </div>

                </div>

                {/* Bottom bar */}
                <hr className="loc-divider" />
                <div className="loc-bottom">
                    <p className="loc-copy">&copy; 2026 Limuru Dairy Farmers Co-Operative Society. All rights reserved.</p>
                    <p className="loc-tagline">Fresh from the farm, crafted with care.</p>
                </div>
            </section>
        </>
    );
}