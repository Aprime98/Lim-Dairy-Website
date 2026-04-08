import { Link } from "react-router-dom";
import { packet_milk, R_Strawberry } from "../../assets/index.js";

export default function Home_Products() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Entrance animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .prod-animate {
                    opacity: 0;
                    animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .prod-d1 { animation-delay: 0.08s; }
                .prod-d2 { animation-delay: 0.22s; }
                .prod-d3 { animation-delay: 0.36s; }
                .prod-d4 { animation-delay: 0.50s; }

                /* ── Section ── */
                .prod-root {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 96px 24px 96px;
                    font-family: 'Outfit', sans-serif;
                }

                /* Dot grid texture */
                .prod-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.07) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* ── Inner ── */
                .prod-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 1120px;
                    margin: 0 auto;
                }

                /* ══════════════════════════
                   HEADER
                ══════════════════════════ */
                .prod-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 80px;
                }
                @media(min-width: 768px) {
                    .prod-header { flex-direction: row; align-items: flex-end; gap: 0; }
                }

                /* Left text */
                .prod-header-left {
                    display: flex;
                    align-items: flex-end;
                    gap: 0;
                }
                .prod-header-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(36px, 5vw, 64px);
                    color: #111827;
                    line-height: 1.05;
                    margin: 0;
                }
                .prod-header-rule-left {
                    width: 48px;
                    height: 2px;
                    background: #9ca3af;
                    margin-bottom: 14px;
                    margin-left: -12px;
                    flex-shrink: 0;
                }
                @media(min-width: 768px) {
                    .prod-header-rule-left { width: 96px; margin-bottom: 18px; }
                }

                /* Centre circle */
                .prod-circle-wrap {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                @media(min-width: 768px) {
                    .prod-circle-wrap { margin-top: 80px; }
                }
                .prod-circle {
                    width: 128px; height: 128px;
                    border-radius: 50%;
                    background: #f59e0b;
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                    transition: transform 0.3s ease;
                }
                @media(min-width: 768px) {
                    .prod-circle { width: 152px; height: 152px; }
                }
                .prod-circle:hover { transform: rotate(8deg) scale(1.05); }

                /* Dashed orbit ring */
                .prod-circle::before {
                    content: '';
                    position: absolute;
                    inset: -10px;
                    border-radius: 50%;
                    border: 1.5px dashed rgba(245,158,11,0.40);
                    animation: orbit-spin 18s linear infinite;
                }
                @keyframes orbit-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                .prod-circle-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #111827;
                    text-align: center;
                    line-height: 1.4;
                }

                /* Right text */
                .prod-header-right {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                }
                @media(min-width: 768px) {
                    .prod-header-right { margin-top: 160px; }
                }
                .prod-header-rule-right {
                    width: 48px;
                    height: 2px;
                    background: #9ca3af;
                    margin-top: 18px;
                    flex-shrink: 0;
                }
                @media(min-width: 768px) {
                    .prod-header-rule-right { width: 96px; }
                }

                /* ══════════════════════════
                   PRODUCT CARDS
                ══════════════════════════ */
                .prod-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                    margin-bottom: 80px;
                }
                @media(min-width: 768px) {
                    .prod-item { flex-direction: row; gap: 64px; margin-bottom: 96px; }
                    .prod-item-reverse { flex-direction: row-reverse; }
                }

                /* Image box */
                .prod-img-box {
                    flex-shrink: 0;
                    position: relative;
                }
                .prod-img-frame {
                    width: 260px; height: 260px;
                    border-radius: 28px;
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                }
                @media(min-width: 768px) {
                    .prod-img-frame { width: 320px; height: 320px; }
                }
                .prod-img-frame:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.12);
                }

                /* Shimmer top line on image frame */
                .prod-img-frame::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
                    z-index: 2;
                }

                .prod-img-frame-milk        { background: rgba(77,189,232,0.75); border: 1px solid rgba(77,189,232,0.3); }
                .prod-img-frame-yogurt      { background: rgba(118,204,0,0.75);  border: 1px solid rgba(118,204,0,0.3); }

                .prod-img-frame img {
                    position: relative;
                    z-index: 1;
                    height: 75%;
                    width: auto;
                    object-fit: contain;
                    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.15));
                    transition: transform 0.35s ease;
                }
                .prod-img-frame:hover img { transform: scale(1.04); }

                /* Tag badge on image */
                .prod-img-tag {
                    position: absolute;
                    bottom: -12px;
                    left: 20px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 999px;
                    padding: 5px 14px;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #374151;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    white-space: nowrap;
                }

                /* Text side */
                .prod-text {
                    flex: 1;
                    max-width: 400px;
                }
                .prod-text-reverse {
                    text-align: right;
                    margin-left: auto;
                }
                @media(max-width: 767px) {
                    .prod-text, .prod-text-reverse { text-align: center; max-width: 100%; }
                }

                .prod-number {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #f59e0b;
                    display: block;
                    margin-bottom: 10px;
                }

                .prod-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(26px, 4vw, 40px);
                    line-height: 1.1;
                    color: #111827;
                    margin: 0 0 14px;
                }

                /* Thin rule under title */
                .prod-title-rule {
                    width: 40px;
                    height: 2px;
                    border-radius: 1px;
                    margin-bottom: 16px;
                    background: #4dbde8;
                }
                .prod-title-rule-right {
                    margin-left: auto;
                }
                @media(max-width: 767px) {
                    .prod-title-rule, .prod-title-rule-right { margin-left: auto; margin-right: auto; }
                }

                .prod-desc {
                    font-size: 15px;
                    font-weight: 300;
                    line-height: 1.75;
                    color: #4b5563;
                    margin-bottom: 28px;
                }

                /* CTA button */
                .prod-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: transparent;
                    border: 1.5px solid #111827;
                    color: #111827;
                    font-family: 'Outfit', sans-serif;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 11px 22px;
                    border-radius: 3px;
                    cursor: pointer;
                    text-decoration: none;
                    transition: background 0.22s ease, color 0.22s ease, transform 0.2s ease;
                    position: relative;
                    overflow: hidden;
                }
                .prod-btn:hover {
                    background: #111827;
                    color: #fff;
                    transform: translateY(-2px);
                }
                .prod-btn-arrow {
                    font-size: 16px;
                    transition: transform 0.2s ease;
                }
                .prod-btn:hover .prod-btn-arrow { transform: translateX(4px); }
            `}</style>

            <section className="prod-root">
                <div className="prod-inner">

                    {/* ══════════ HEADER ══════════ */}
                    <div className="prod-header prod-animate prod-d1">

                        {/* Left */}
                        <div className="prod-header-left">
                            <h2 className="prod-header-heading">
                                Take a Look<br />at What
                            </h2>
                            <div className="prod-header-rule-left" />
                        </div>

                        {/* Centre circle */}
                        <div className="prod-circle-wrap">
                            <div className="prod-circle">
                                <span className="prod-circle-text">Our<br/>Products</span>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="prod-header-right">
                            <div className="prod-header-rule-right" />
                            <h2 className="prod-header-heading" style={{ textAlign: 'right' }}>
                                We Proudly<br />Offer
                            </h2>
                        </div>

                    </div>

                    {/* ══════════ PRODUCT 1 — MILK ══════════ */}
                    <div className="prod-item prod-animate prod-d2">

                        <div className="prod-img-box">
                            <div className="prod-img-frame prod-img-frame-milk">
                                <img src={packet_milk} alt="Limuru Fresh Milk" />
                            </div>
                            <span className="prod-img-tag">Fresh Milk</span>
                        </div>

                        <div className="prod-text">
                            <span className="prod-number">01</span>
                            <h3 className="prod-title">Shelf-Stable,<br />Farm-Fresh Taste</h3>
                            <div className="prod-title-rule" />
                            <p className="prod-desc">
                                Naturally fresh, longer-lasting — enjoy rich, farm-fresh milk
                                that stays delicious for days.
                            </p>
                            <Link to="/products">
                                <button className="prod-btn">
                                    View more <span className="prod-btn-arrow">→</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                    {/* ══════════ PRODUCT 2 — YOGURT ══════════ */}
                    <div className="prod-item prod-item-reverse prod-animate prod-d3">

                        <div className="prod-img-box">
                            <div className="prod-img-frame prod-img-frame-yogurt">
                                <img src={R_Strawberry} alt="Relish Yoghurt" style={{ marginTop: '-24px' }} />
                            </div>
                            <span className="prod-img-tag">Relish Yoghurt</span>
                        </div>

                        <div className="prod-text prod-text-reverse">
                            <span className="prod-number">02</span>
                            <h3 className="prod-title">Wholesome Yoghurt<br />You'll Love</h3>
                            <div className="prod-title-rule prod-title-rule-right" />
                            <p className="prod-desc">
                                Smooth, creamy yoghurt made from fresh local milk —
                                naturally delicious every time.
                            </p>
                            <Link to="/products">
                                <button className="prod-btn">
                                    View more <span className="prod-btn-arrow">→</span>
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}