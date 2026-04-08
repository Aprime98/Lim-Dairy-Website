export default function Home_Map() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Entrance ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .map-animate {
                    opacity: 0;
                    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .map-d1 { animation-delay: 0.08s; }
                .map-d2 { animation-delay: 0.22s; }
                .map-d3 { animation-delay: 0.36s; }

                /* ── Section ── */
                .map-root {
                    background: #4b5563;
                    background-image:
                        radial-gradient(ellipse at 80% 0%,   rgba(255,255,255,0.06) 0%, transparent 55%),
                        radial-gradient(ellipse at 10% 100%, rgba(0,0,0,0.18) 0%,          transparent 50%);
                    position: relative;
                    overflow: hidden;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    padding: 96px 24px 96px;
                }

                /* Dot-grid texture */
                .map-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Blobs */
                .map-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    pointer-events: none;
                }
                .map-blob-1 { width:400px;height:400px;background:rgba(255,255,255,0.05);top:-160px;right:-100px; }
                .map-blob-2 { width:280px;height:280px;background:rgba(0,0,0,0.15);bottom:-80px;left:-60px; }

                /* Rings */
                .map-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(255,255,255,0.08);
                    pointer-events: none;
                }

                /* ── Inner ── */
                .map-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                /* ── Header ── */
                .map-header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0;
                    margin-bottom: 48px;
                }
                @media(min-width: 768px) {
                    .map-header {
                        flex-direction: row;
                        align-items: flex-end;
                        justify-content: space-between;
                    }
                }

                .map-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    opacity: 0.55;
                    margin-bottom: 12px;
                    color: white;
                }
                .map-eyebrow-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    background: #4dbde8;
                    animation: pulse-dot 2s ease-in-out infinite;
                }
                @keyframes pulse-dot {
                    0%,100% { opacity:1; transform:scale(1); }
                    50%     { opacity:0.4; transform:scale(0.7); }
                }

                .map-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(36px, 5vw, 60px);
                    line-height: 1.0;
                    color: white;
                    margin: 0;
                }
                .map-heading em {
                    font-style: italic;
                    font-weight: 400;
                    opacity: 0.70;
                }

                .map-header-desc {
                    font-size: 14px;
                    font-weight: 300;
                    opacity: 0.70;
                    line-height: 1.7;
                    max-width: 320px;
                    margin-top: 16px;
                }
                @media(min-width: 768px) {
                    .map-header-desc { margin-top: 0; text-align: right; }
                }

                /* ── Address strip ── */
                .map-address-strip {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-bottom: 32px;
                }

                .map-address-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.09);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 999px;
                    padding: 7px 16px;
                    font-size: 13px;
                    font-weight: 400;
                    opacity: 0.90;
                    backdrop-filter: blur(4px);
                }
                .map-chip-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }
                .map-chip-dot-blue   { background: #4dbde8; }
                .map-chip-dot-amber  { background: #f59e0b; }

                /* ── Map frame ── */
                .map-frame-wrap {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow:
                        0 2px 4px rgba(0,0,0,0.08),
                        0 12px 40px rgba(0,0,0,0.25),
                        0 40px 80px rgba(0,0,0,0.18);
                }

                /* Top shimmer on map */
                .map-frame-wrap::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(77,189,232,0.6), transparent);
                    z-index: 2;
                    pointer-events: none;
                }

                /* Corner accent marks */
                .map-corner {
                    position: absolute;
                    width: 20px; height: 20px;
                    z-index: 3;
                    pointer-events: none;
                }
                .map-corner-tl { top: 10px; left: 10px; border-top: 2px solid rgba(77,189,232,0.7); border-left: 2px solid rgba(77,189,232,0.7); }
                .map-corner-tr { top: 10px; right: 10px; border-top: 2px solid rgba(77,189,232,0.7); border-right: 2px solid rgba(77,189,232,0.7); }
                .map-corner-bl { bottom: 10px; left: 10px; border-bottom: 2px solid rgba(77,189,232,0.7); border-left: 2px solid rgba(77,189,232,0.7); }
                .map-corner-br { bottom: 10px; right: 10px; border-bottom: 2px solid rgba(77,189,232,0.7); border-right: 2px solid rgba(77,189,232,0.7); }

                .map-iframe {
                    display: block;
                    width: 100%;
                    height: 420px;
                    border: 0;
                    transition: filter 0.4s ease;
                }
                @media(min-width: 768px) { .map-iframe { height: 520px; } }
                @media(min-width: 1024px){ .map-iframe { height: 600px; } }

                /* ── Caption below map ── */
                .map-caption {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 20px;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .map-caption-left {
                    font-size: 12px;
                    font-weight: 300;
                    opacity: 0.50;
                    letter-spacing: 0.04em;
                }
                .map-directions-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.10);
                    border: 1px solid rgba(255,255,255,0.20);
                    border-radius: 999px;
                    padding: 8px 18px;
                    font-size: 12px;
                    font-weight: 500;
                    color: white;
                    text-decoration: none;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    transition: background 0.2s ease, transform 0.2s ease;
                }
                .map-directions-btn:hover {
                    background: rgba(255,255,255,0.18);
                    transform: translateY(-2px);
                }
                .map-directions-arrow {
                    font-size: 14px;
                    transition: transform 0.2s ease;
                }
                .map-directions-btn:hover .map-directions-arrow { transform: translateX(3px); }
            `}</style>

            <section className="map-root">
                <div className="map-blob map-blob-1" />
                <div className="map-blob map-blob-2" />
                <div className="map-ring" style={{ width:360,height:360,top:-120,right:-100 }} />
                <div className="map-ring" style={{ width:200,height:200,bottom:-60,left:40 }} />

                <div className="map-inner">

                    {/* ── Header ── */}
                    <div className="map-header map-animate map-d1">
                        <div>
                            <p className="map-eyebrow">
                                <span className="map-eyebrow-dot" />
                                Limuru, Kenya
                            </p>
                            <h2 className="map-heading">
                                Visit <em>Us</em>
                            </h2>
                        </div>
                        <p className="map-header-desc">
                            Find directions to Limuru Dairy Farmers
                            Co-Operative Society — we'd love to see you.
                        </p>
                    </div>

                    {/* ── Address chips ── */}
                    <div className="map-animate map-d2">
                        <div className="map-address-strip">
                            <span className="map-address-chip">
                                <span className="map-chip-dot map-chip-dot-blue" />
                                Maziwa House, 4th Floor
                            </span>
                            <span className="map-address-chip">
                                <span className="map-chip-dot map-chip-dot-amber" />
                                P.O. Box 8 – 00217, Limuru
                            </span>
                            <span className="map-address-chip">
                                <span className="map-chip-dot map-chip-dot-blue" />
                                0713-833814
                            </span>
                        </div>
                    </div>

                    {/* ── Map ── */}
                    <div className="map-animate map-d3">
                        <div className="map-frame-wrap">
                            <div className="map-corner map-corner-tl" />
                            <div className="map-corner map-corner-tr" />
                            <div className="map-corner map-corner-bl" />
                            <div className="map-corner map-corner-br" />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510553.43887069233!2d36.162529!3d-1.3573712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f27b094159237%3A0xc295ecb04788dccf!2sLimuru%20Dairy%20Farmers%20Co-Operative%20Society!5e0!3m2!1sen!2ske!4v1772539316859!5m2!1sen!2ske"
                                className="map-iframe"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Limuru Dairy Farmers Co-Operative Society location"
                            />
                        </div>

                        {/* Caption */}
                        <div className="map-caption">
                            <span className="map-caption-left">
                                © Limuru Dairy Farmers Co-Operative Society
                            </span>
                            <a
                                href="https://maps.google.com/?q=Limuru+Dairy+Farmers+Co-Operative+Society"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-directions-btn"
                            >
                                Get Directions <span className="map-directions-arrow">→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}