import { CheckCircle, Mail, MapPin, Milk, Phone, SmilePlus, ArrowRight } from "lucide-react";

// ⬇️ Replace this with your actual image import or URL
const PRODUCT_IMAGE = "/AllProducts.png"; // <-- swap path as needed

export default function Home_Hero() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Entrance animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeRight {
                    from { opacity: 0; transform: translateX(40px) scale(0.97); }
                    to   { opacity: 1; transform: translateX(0) scale(1); }
                }
                @keyframes floatY {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-12px); }
                }
                @keyframes rotateSlow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%       { opacity: 0.5; transform: scale(0.75); }
                }

                .hero-animate { opacity: 0; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
                .delay-1 { animation-delay: 0.10s; }
                .delay-2 { animation-delay: 0.25s; }
                .delay-3 { animation-delay: 0.38s; }
                .delay-4 { animation-delay: 0.50s; }
                .delay-5 { animation-delay: 0.62s; }

                /* ── Root ── */
                .hero-root {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 80px 24px 72px;
                }

                /* Dot-grid texture */
                .hero-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.10) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Blobs */
                .hero-blob {
                    position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px);
                }
                .hero-blob-1 { width: 500px; height: 500px; background: rgba(77,189,232,0.12); top: -160px; right: -120px; }
                .hero-blob-2 { width: 320px; height: 320px; background: rgba(77,189,232,0.07); bottom: -80px; left: -80px; }
                .hero-blob-3 { width: 280px; height: 280px; background: rgba(255,182,34,0.06); top: 40%; right: 5%; }

                /* ── Two-column layout ── */
                .hero-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1180px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                    align-items: center;
                }
                @media (min-width: 900px) {
                    .hero-inner {
                        grid-template-columns: 1fr 1fr;
                        gap: 64px;
                        text-align: left;
                    }
                }

                /* ── Left: text column ── */
                .hero-text { display: flex; flex-direction: column; align-items: flex-start; }
                @media (max-width: 899px) { .hero-text { align-items: center; text-align: center; } }

                /* Eyebrow */
                .hero-eyebrow {
                    display: inline-flex; align-items: center; gap: 8px;
                    background: rgba(77,189,232,0.10);
                    border: 1px solid rgba(77,189,232,0.25);
                    border-radius: 999px; padding: 6px 16px;
                    font-family: 'Outfit', sans-serif; font-size: 11px; font-weight: 500;
                    letter-spacing: 0.16em; text-transform: uppercase;
                    color: #2a8db8; margin-bottom: 24px;
                }
                .hero-eyebrow-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #4dbde8; animation: pulse 2s ease-in-out infinite;
                }

                /* Heading */
                .hero-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(40px, 6vw, 76px);
                    line-height: 1.0;
                    letter-spacing: -0.01em;
                    color: #4dbde8;
                    margin: 0 0 6px;
                }
                .hero-heading-italic { font-style: italic; font-weight: 400; color: #2a8db8; }

                /* Rule */
                .hero-rule {
                    width: 64px; height: 2px;
                    background: linear-gradient(90deg, #4dbde8, transparent);
                    border-radius: 1px; margin: 18px 0 22px;
                }
                @media (max-width: 899px) { .hero-rule { margin: 18px auto 22px; } }

                /* Body */
                .hero-body {
                    font-family: 'Outfit', sans-serif; font-weight: 300;
                    font-size: clamp(15px, 1.8vw, 17px); line-height: 1.8;
                    color: #4a5568; max-width: 440px; margin: 0 0 28px;
                }

                /* ── CTA Button ── */
                .hero-cta-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 36px;
                    flex-wrap: wrap;
                }

                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: linear-gradient(135deg, #4dbde8 0%, #2a8db8 100%);
                    color: #fff;
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    padding: 10px 20px;
                    border-radius: 999px;
                    text-decoration: none;
                    border: none;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 6px 24px rgba(77,189,232,0.35), 0 2px 6px rgba(0,0,0,0.08);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .hero-btn-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
                    pointer-events: none;
                }
                .hero-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 32px rgba(77,189,232,0.45), 0 4px 10px rgba(0,0,0,0.1);
                }
                .hero-btn-primary:active { transform: translateY(0); }

                .hero-btn-arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px; height: 28px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.22);
                    transition: transform 0.2s ease;
                    flex-shrink: 0;
                }
                .hero-btn-primary:hover .hero-btn-arrow {
                    transform: translateX(3px);
                }

                .hero-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    color: #2a8db8;
                    text-decoration: none;
                    border: none;
                    background: none;
                    cursor: pointer;
                    padding: 4px 0;
                    border-bottom: 1px solid rgba(77,189,232,0.3);
                    transition: border-color 0.2s, color 0.2s;
                }
                .hero-btn-ghost:hover {
                    color: #1a6d94;
                    border-color: #4dbde8;
                }

                /* Contact strip */
                .hero-contact { display: flex; flex-direction: column; gap: 10px; margin-bottom: 44px; }
                @media (min-width: 560px) { .hero-contact { flex-direction: row; gap: 24px; } }

                .hero-contact-item {
                    display: flex; align-items: center; gap: 8px;
                    font-family: 'Outfit', sans-serif; font-size: 13px;
                    font-weight: 400; color: #4a5568; text-decoration: none;
                }
                .hero-contact-icon {
                    width: 30px; height: 30px; border-radius: 8px;
                    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
                }
                .hero-contact-icon-phone { background: rgba(59,130,246,0.10); }
                .hero-contact-icon-mail  { background: rgba(239,68,68,0.10); }

                /* Stats card */
                .hero-stats {
                    background: #111827; border-radius: 22px;
                    padding: 28px 32px; position: relative; overflow: hidden;
                }
                .hero-stats::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(77,189,232,0.6), transparent);
                }
                .hero-stats::after {
                    content: ''; position: absolute; top: -60px; right: -60px;
                    width: 200px; height: 200px; border-radius: 50%;
                    background: rgba(77,189,232,0.06); filter: blur(40px); pointer-events: none;
                }
                .hero-stats-grid {
                    display: grid; grid-template-columns: 1fr 1fr;
                    gap: 20px 32px; text-align: left; position: relative; z-index: 1;
                }
                @media(min-width: 768px) {
                    .hero-stats-grid { grid-template-columns: repeat(4,1fr); gap: 0; }
                    .hero-stat-item:not(:last-child) {
                        border-right: 1px solid rgba(255,255,255,0.08);
                        padding-right: 20px; margin-right: 20px;
                    }
                }
                .hero-stat-icon-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
                .hero-stat-number {
                    font-family: 'Cormorant Garamond', serif; font-weight: 700;
                    font-size: 24px; color: #fff; line-height: 1;
                }
                .hero-stat-label {
                    font-family: 'Outfit', sans-serif; font-size: 11px;
                    font-weight: 300; color: #9ca3af; line-height: 1.4; letter-spacing: 0.02em;
                }

                /* ── Right: product image column ── */
                .hero-image-col {
                    position: relative;
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0;
                    animation: fadeRight 0.9s cubic-bezier(0.22,1,0.36,1) 0.45s forwards;
                }

                /* Large decorative circle behind image */
                .hero-image-circle {
                    position: absolute;
                    width: 88%;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(77,189,232,0.13) 0%, rgba(77,189,232,0.04) 100%);
                    border: 1.5px solid rgba(77,189,232,0.18);
                    z-index: 0;
                }

                /* Rotating dashed ring */
                .hero-image-ring {
                    position: absolute;
                    width: 96%; aspect-ratio: 1;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(77,189,232,0.20);
                    animation: rotateSlow 22s linear infinite;
                    z-index: 0;
                }

                /* "100% Natural" badge */
                .hero-badge {
                    position: absolute;
                    top: 6%; right: 4%;
                    background: linear-gradient(135deg, #FFB622, #FF8C00);
                    color: #fff;
                    font-family: 'Outfit', sans-serif;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    padding: 8px 14px;
                    border-radius: 999px;
                    box-shadow: 0 4px 16px rgba(255,140,0,0.35);
                    z-index: 3;
                    white-space: nowrap;
                }

                /* Freshness indicator pill */
                .hero-freshness {
                    position: absolute;
                    bottom: 8%; left: 2%;
                    background: #111827;
                    border: 1px solid rgba(77,189,232,0.3);
                    border-radius: 14px;
                    padding: 10px 14px;
                    display: flex; align-items: center; gap: 8px;
                    z-index: 3;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
                }
                .hero-freshness-dot {
                    width: 8px; height: 8px; border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 0 3px rgba(34,197,94,0.25);
                    flex-shrink: 0;
                }
                .hero-freshness-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 11px; font-weight: 500; color: #e5e7eb;
                    line-height: 1.3;
                }
                .hero-freshness-sub {
                    font-size: 9px; font-weight: 300; color: #6b7280; letter-spacing: 0.04em;
                }

                /* The actual product image */
                .hero-product-img {
                    position: relative; z-index: 2;
                    width: 92%;
                    max-width: 540px;
                    height: auto;
                    border-radius: 24px;
                    object-fit: cover;
                    animation: floatY 5s ease-in-out infinite;
                    filter: drop-shadow(0 24px 48px rgba(77,189,232,0.18)) drop-shadow(0 8px 20px rgba(0,0,0,0.12));
                }

                /* Scattered dot accent */
                .hero-dot-accent {
                    position: absolute; border-radius: 50%; pointer-events: none;
                    background: rgba(77,189,232,0.35);
                }
                .hero-dot-1 { width: 8px; height: 8px; top: 18%; left: 3%; }
                .hero-dot-2 { width: 5px; height: 5px; top: 55%; right: 2%; }
                .hero-dot-3 { width: 10px; height: 10px; bottom: 22%; left: 12%; }
            `}</style>

            <section className="hero-root">
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />
                <div className="hero-blob hero-blob-3" />

                <div className="hero-inner">

                    {/* ── LEFT: Text Content ── */}
                    <div className="hero-text">
                        <div className="hero-animate delay-1">
                            <span className="hero-eyebrow">
                                <span className="hero-eyebrow-dot" />
                                Est. Limuru, Kenya
                            </span>
                        </div>

                        <div className="hero-animate delay-2">
                            <h1 className="hero-heading">
                                Limuru Dairy Farmers<br />
                                <span className="hero-heading-italic">Co-Operative Society</span>
                            </h1>
                            <div className="hero-rule" />
                        </div>

                        <div className="hero-animate delay-3">
                            <p className="hero-body">
                                Indulge in the creamy richness and natural smoothness of our dairy
                                products, crafted with care for unmatched freshness.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-animate delay-4">
                            <div className="hero-cta-row">
                                <a href="/products" className="hero-btn-primary">
                                    View Our Products
                                    <span className="hero-btn-arrow">
                                        <ArrowRight size={14} />
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="hero-animate delay-4" style={{animationDelay:'0.55s'}}>
                            <div className="hero-contact">
                                <div className="hero-contact-item">
                                    <span className="hero-contact-icon hero-contact-icon-phone">
                                        <Phone className="text-blue-500" size={14} />
                                    </span>
                                    0713-833814
                                </div>
                                <div className="hero-contact-item">
                                    <span className="hero-contact-icon hero-contact-icon-mail">
                                        <Mail className="text-red-500" size={14} />
                                    </span>
                                    limurudairy@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className="hero-animate hidden lg:block delay-5">
                            <div className="hero-stats">
                                <div className="hero-stats-grid">
                                    <div className="hero-stat-item">
                                        <div className="hero-stat-icon-row">
                                            <CheckCircle className="text-green-500" size={18} />
                                            <span className="hero-stat-number">10,000+</span>
                                        </div>
                                        <p className="hero-stat-label">Local Farmers Supported</p>
                                    </div>
                                    <div className="hero-stat-item">
                                        <div className="hero-stat-icon-row">
                                            <Milk className="text-white" size={18} />
                                            <span className="hero-stat-number">40,000+</span>
                                        </div>
                                        <p className="hero-stat-label">Litres Processed Daily</p>
                                    </div>
                                    <div className="hero-stat-item">
                                        <div className="hero-stat-icon-row">
                                            <MapPin className="text-red-500" size={18} />
                                            <span className="hero-stat-number">40+</span>
                                        </div>
                                        <p className="hero-stat-label">Distribution Points</p>
                                    </div>
                                    <div className="hero-stat-item">
                                        <div className="hero-stat-icon-row">
                                            <SmilePlus className="text-yellow-500" size={18} />
                                            <span className="hero-stat-number">100,000+</span>
                                        </div>
                                        <p className="hero-stat-label">Happy Consumers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Product Image ── */}
                    <div className="hero-image-col">
                        {/* Decorative rings */}
                        <div className="hero-image-circle" />
                        <div className="hero-image-ring" />

                        {/* Scattered dots */}
                        <div className="hero-dot-accent hero-dot-1" />
                        <div className="hero-dot-accent hero-dot-2" />
                        <div className="hero-dot-accent hero-dot-3" />

                        {/* "100% Natural" badge */}
                        <div className="hero-badge">✦ 100% Natural</div>

                        {/* Freshness pill */}
                        <div className="hero-freshness">
                            <div className="hero-freshness-dot" />
                            <div>
                                <div className="hero-freshness-text">Farm Fresh Daily</div>
                                <div className="hero-freshness-sub">RELISH YOGHURT RANGE</div>
                            </div>
                        </div>

                        {/* Product photo */}
                        <img
                            src={PRODUCT_IMAGE}
                            alt="Product range by Limuru Dairy"
                            className="hero-product-img"
                        />
                    </div>

                </div>
            </section>
        </>
    );
}