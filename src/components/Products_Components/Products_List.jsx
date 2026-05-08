import { useState } from 'react';
import {
    R_Strawberry,
    packet_milk,
    R_Vanilla,
    lala,
} from '../../assets';

export default function ProductCard() {
    const [current, setCurrent] = useState(0);
    const [selectedQty, setSelectedQty] = useState(0);
    const total = 4;

    const next = () => { setCurrent((prev) => (prev + 1) % total); setSelectedQty(0); };
    const prev = () => { setCurrent((prev) => (prev - 1 + total) % total); setSelectedQty(0); };
    const goTo = (i) => { setCurrent(i); setSelectedQty(0); };

    const btnClass      = ['btn-milk','btn-strawberry','btn-vanilla','btn-lala'][current];


    /* ── Quantities — edit these per product later ── */
    const quantities = [
        /* Packet Milk */
        [
            { size: '250ml', price: 350  },
            { size: '500ml', price: 500  },
        ],
        /* Relish Yoghurt Strawberry */
        [
            { size: '100ml', price: 30  },
            { size: '250ml', price: 50  },
            { size: '500ml', price: 90  },
            { size: '1L',    price: 150 },
            { size: '2L',    price: 400 },
        ],
        /* Relish Yoghurt Vanilla */
        [
            { size: '100ml', price: 30  },
            { size: '250ml', price: 50  },
            { size: '500ml', price: 90  },
            { size: '1L',    price: 150 },
            { size: '2L',    price: 400 },
        ],
        /* Relish Lala */
        [
            { size: '250ml', price: 50  },
            { size: '500ml', price: 90  },
            { size: '1L',    price: 150 },
            { size: '2L',    price: 400 },
        ],
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Slide backgrounds ── */
                .slide-milk        { background: linear-gradient(135deg,#dff4ff 0%,#eef9ff 50%,#f5fbff 100%); }
                .slide-strawberry  { background: linear-gradient(135deg,#ffe4ec 0%,#fff0f4 50%,#fff7f9 100%); }
                .slide-vanilla     { background: linear-gradient(135deg,#fff8e1 0%,#fffbf0 50%,#fffdf7 100%); }
                .slide-lala        { background: linear-gradient(135deg,#edfff4 0%,#f4fff8 50%,#fafffc 100%); }

                /* ── Blobs ── */
                .blob { position:absolute;border-radius:50%;filter:blur(60px);opacity:.55;pointer-events:none; }
                .blob-milk-1  { width:220px;height:220px;background:#a8dcf5;top:-40px;right:-40px; }
                .blob-milk-2  { width:140px;height:140px;background:#cceeff;bottom:10px;left:10px; }
                .blob-straw-1 { width:220px;height:220px;background:#f7aac2;top:-40px;right:-40px; }
                .blob-straw-2 { width:140px;height:140px;background:#ffcfda;bottom:10px;left:10px; }
                .blob-van-1   { width:220px;height:220px;background:#f5d97a;top:-40px;right:-40px; }
                .blob-van-2   { width:140px;height:140px;background:#fdedb0;bottom:10px;left:10px; }
                .blob-lala-1  { width:220px;height:220px;background:#7de8a8;top:-40px;right:-40px; }
                .blob-lala-2  { width:140px;height:140px;background:#b0f5cf;bottom:10px;left:10px; }

                /* ── Rings ── */
                .ring { position:absolute;border-radius:50%;border:1.5px dashed;opacity:.18;pointer-events:none; }
                .ring-milk       { border-color:#1a6e99; }
                .ring-strawberry { border-color:#a8284a; }
                .ring-vanilla    { border-color:#8a6200; }
                .ring-lala       { border-color:#1a7a48; }

                /* ── Badges ── */
                .product-badge { display:inline-block;font-family:'Outfit',sans-serif;font-size:10px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;padding:5px 14px;border-radius:999px;margin-bottom:14px; }
                .badge-milk       { background:#b8e5fa;color:#1a6e99; }
                .badge-strawberry { background:#ffc5d5;color:#a8284a; }
                .badge-vanilla    { background:#fde9a2;color:#8a6200; }
                .badge-lala       { background:#b0f0d0;color:#1a7a48; }

                /* ── Accent bar ── */
                .accent-bar { width:48px;height:3px;border-radius:2px;margin-bottom:16px; }
                .bar-milk       { background:#5bb8e8; }
                .bar-strawberry { background:#e85580; }
                .bar-vanilla    { background:#d4a020; }
                .bar-lala       { background:#28c76f; }

                /* ── Product name ── */
                .product-name { font-family:'Playfair Display',serif;font-weight:700;line-height:1.1;margin:0 0 10px; }
                .name-milk       { color:#1a5e7a; }
                .name-strawberry { color:#8b1a34; }
                .name-vanilla    { color:#6b4800; }
                .name-lala       { color:#0f5c33; }

                /* ── Description ── */
                .product-desc { font-family:'Outfit',sans-serif;font-weight:300;font-size:14px;line-height:1.7;margin:0 0 20px; }
                .desc-milk       { color:#3a7a99; }
                .desc-strawberry { color:#8b4a5a; }
                .desc-vanilla    { color:#7a5a20; }
                .desc-lala       { color:#2a6e4a; }

                /* ── Image glow ── */
                .img-milk       { filter:drop-shadow(0 16px 32px rgba(91,184,232,.35)); }
                .img-strawberry { filter:drop-shadow(0 16px 32px rgba(232,85,128,.35)); }
                .img-vanilla    { filter:drop-shadow(0 16px 32px rgba(212,160,32,.35)); }
                .img-lala       { filter:drop-shadow(0 16px 32px rgba(40,199,111,.35)); }

                /* ── Carousel ── */
                .carousel-track { display:flex;transition:transform .5s cubic-bezier(.4,0,.2,1); }
                .carousel-slide { min-width:100%; }

                /* ── Card ── */
                .card-outer { border-radius:32px;overflow:hidden;box-shadow:0 2px 4px rgba(0,0,0,.04),0 8px 24px rgba(0,0,0,.07),0 24px 64px rgba(0,0,0,.06); }

                /* ── Nav buttons ── */
                .nav-btn { width:44px;height:44px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;box-shadow:0 2px 12px rgba(0,0,0,.10); }
                .nav-btn:hover  { transform:scale(1.1);box-shadow:0 4px 20px rgba(0,0,0,.16); }
                .nav-btn:active { transform:scale(0.95); }
                .btn-milk       { background:#5bb8e8;color:#fff; }
                .btn-strawberry { background:#e85580;color:#fff; }
                .btn-vanilla    { background:#d4a020;color:#fff; }
                .btn-lala       { background:#28c76f;color:#fff; }

                /* ── Dots ── */
                .dot { height:8px;border-radius:999px;border:none;cursor:pointer;transition:all .35s ease;padding:0; }
                .dot-milk       { background:#5bb8e8; }
                .dot-strawberry { background:#e85580; }
                .dot-vanilla    { background:#d4a020; }
                .dot-lala       { background:#28c76f; }
                .dot-inactive   { background:#d1d5db;width:8px; }
                .dot-active     { width:28px; }

                /* ── Float animation ── */
                @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                .product-img { animation:floatY 4s ease-in-out infinite; }

                .slide-counter { font-family:'Outfit',sans-serif;font-size:12px;font-weight:400;letter-spacing:.08em;opacity:.5; }

                /* ── Slide inner layout ── */
                .slide-inner { display:flex;flex-direction:column;align-items:center;gap:24px;padding:60px 48px; }
                @media(min-width:768px){ .slide-inner { flex-direction:row; } }
                .slide-img-wrap { flex:1;display:flex;align-items:center;justify-content:center;min-height:240px;position:relative; }
                .slide-text { flex:1;text-align:left; }

                /* ══════════════════════════════
                   QUANTITY SELECTOR
                ══════════════════════════════ */
                .qty-label {
                    font-family: 'Outfit', sans-serif;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    opacity: 0.55;
                    margin-bottom: 10px;
                    display: block;
                }

                .qty-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                }

                .qty-pill {
                    font-family: 'Outfit', sans-serif;
                    font-size: 13px;
                    font-weight: 500;
                    padding: 6px 16px;
                    border-radius: 999px;
                    border: 1.5px solid transparent;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    background: rgba(255,255,255,0.7);
                }
                .qty-pill:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.10); }

                /* inactive */
                .qty-milk       .qty-pill        { border-color:#b8e5fa;color:#1a6e99; }
                .qty-strawberry .qty-pill        { border-color:#ffc5d5;color:#a8284a; }
                .qty-vanilla    .qty-pill        { border-color:#fde9a2;color:#8a6200; }
                .qty-lala       .qty-pill        { border-color:#b0f0d0;color:#1a7a48; }

                /* active */
                .qty-milk       .qty-pill.active { background:#5bb8e8;border-color:#5bb8e8;color:#fff; }
                .qty-strawberry .qty-pill.active { background:#e85580;border-color:#e85580;color:#fff; }
                .qty-vanilla    .qty-pill.active { background:#d4a020;border-color:#d4a020;color:#fff; }
                .qty-lala       .qty-pill.active { background:#28c76f;border-color:#28c76f;color:#fff; }

                /* ── Price display ── */
                .price-wrap {
                    display: flex;
                    align-items: baseline;
                    gap: 6px;
                    margin-bottom: 4px;
                }
                .price-currency {
                    font-family: 'Outfit', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    opacity: 0.6;
                }
                .price-amount {
                    font-family: 'Playfair Display', serif;
                    font-size: 38px;
                    font-weight: 700;
                    line-height: 1;
                }
                .price-size-tag {
                    font-family: 'Outfit', sans-serif;
                    font-size: 12px;
                    opacity: 0.5;
                    margin-bottom: 20px;
                }

                .price-milk       { color:#1a5e7a; }
                .price-strawberry { color:#8b1a34; }
                .price-vanilla    { color:#6b4800; }
                .price-lala       { color:#0f5c33; }

                /* ── Divider ── */
                .qty-divider {
                    border: none;
                    border-top: 1px dashed rgba(0,0,0,0.10);
                    margin: 16px 0;
                }
            `}</style>

            <div style={{ maxWidth:'1200px', margin:'0 auto 50px auto', padding:'0 20px' }}>

                <div className="card-outer">
                    <div className="overflow-hidden">
                        <div className="carousel-track max-h-[750px]" style={{ transform:`translateX(-${current * 100}%)` }}>

                            {/* ══════════════════════════
                                SLIDE 1 — Packet Milk
                            ══════════════════════════ */}
                            <div className="carousel-slide slide-milk" style={{ position:'relative',overflow:'hidden' }}>
                                <div className="blob blob-milk-1" /><div className="blob blob-milk-2" />
                                <div className="ring ring-milk" style={{ width:300,height:300,top:-80,right:-80 }} />
                                <div className="ring ring-milk" style={{ width:180,height:180,bottom:-50,left:20 }} />
                                <div className="slide-inner">
                                    <div className="slide-img-wrap">
                                        <img src={packet_milk} alt="Limuru Fresh Milk" className="product-img img-milk lg:h-85 h-64" style={{objectFit:'contain',position:'relative',zIndex:1 }} />
                                    </div>
                                    <div className="slide-text">
                                        <span className="product-badge badge-milk">Fresh Daily</span>
                                        <div className="accent-bar bar-milk" />
                                        <h3 className="product-name name-milk" style={{ fontSize:'clamp(24px,3.5vw,38px)' }}>Limuru Fresh Milk</h3>
                                        <p className="product-desc desc-milk">Wholesome, smooth milk packed fresh for dairy family nourishment</p>
                                        <hr className="qty-divider" />
                                        <span className="qty-label">Select Size</span>
                                        <div className={`qty-pills qty-milk`}>
                                            {quantities[0].map((q, i) => (
                                                <button key={i} onClick={() => setSelectedQty(i)} className={`qty-pill ${current === 0 && selectedQty === i ? 'active' : ''}`}>{q.size}</button>
                                            ))}
                                        </div>
                                        {current === 0 && (
                                            <>
                                                <div className="price-wrap">
                                                    <span className="price-currency price-milk">KSh</span>
                                                    <span className="price-amount price-milk">{quantities[0][selectedQty].price}</span>
                                                </div>
                                                <p className="price-size-tag">for {quantities[0][selectedQty].size}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* ══════════════════════════
                                SLIDE 2 — Strawberry
                            ══════════════════════════ */}
                            <div className="carousel-slide slide-strawberry" style={{ position:'relative',overflow:'hidden' }}>
                                <div className="blob blob-straw-1" /><div className="blob blob-straw-2" />
                                <div className="ring ring-strawberry" style={{ width:300,height:300,top:-80,right:-80 }} />
                                <div className="ring ring-strawberry" style={{ width:180,height:180,bottom:-50,left:20 }} />
                                <div className="slide-inner">
                                    <div className="slide-img-wrap">
                                        <img src={R_Strawberry} alt="Relish Yoghurt Strawberry" className="product-img img-strawberry lg:h-85" style={{objectFit:'contain',position:'relative',zIndex:1 }} />
                                    </div>
                                    <div className="slide-text">
                                        <span className="product-badge badge-strawberry">Fan Favourite</span>
                                        <div className="accent-bar bar-strawberry" />
                                        <h3 className="product-name name-strawberry" style={{ fontSize:'clamp(24px,3.5vw,38px)' }}>Relish Yoghurt Strawberry</h3>
                                        <p className="product-desc desc-strawberry">Creamy, smooth yoghurt blended with sweet, juicy strawberry flavor — pure delight in every spoonful</p>
                                        <hr className="qty-divider" />
                                        <span className="qty-label">Select Size</span>
                                        <div className={`qty-pills qty-strawberry`}>
                                            {quantities[1].map((q, i) => (
                                                <button key={i} onClick={() => setSelectedQty(i)} className={`qty-pill ${current === 1 && selectedQty === i ? 'active' : ''}`}>{q.size}</button>
                                            ))}
                                        </div>
                                        {current === 1 && (
                                            <>
                                                <div className="price-wrap">
                                                    <span className="price-currency price-strawberry">KSh</span>
                                                    <span className="price-amount price-strawberry">{quantities[1][selectedQty].price}</span>
                                                </div>
                                                <p className="price-size-tag">for {quantities[1][selectedQty].size}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* ══════════════════════════
                                SLIDE 3 — Vanilla
                            ══════════════════════════ */}
                            <div className="carousel-slide slide-vanilla" style={{ position:'relative',overflow:'hidden' }}>
                                <div className="blob blob-van-1" /><div className="blob blob-van-2" />
                                <div className="ring ring-vanilla" style={{ width:300,height:300,top:-80,right:-80 }} />
                                <div className="ring ring-vanilla" style={{ width:180,height:180,bottom:-50,left:20 }} />
                                <div className="slide-inner">
                                    <div className="slide-img-wrap">
                                        <img src={R_Vanilla} alt="Relish Yoghurt Vanilla" className="product-img img-vanilla lg:h-85" style={{ objectFit:'contain',position:'relative',zIndex:1 }} />
                                    </div>
                                    <div className="slide-text">
                                        <span className="product-badge badge-vanilla">Classic Choice</span>
                                        <div className="accent-bar bar-vanilla" />
                                        <h3 className="product-name name-vanilla" style={{ fontSize:'clamp(24px,3.5vw,38px)' }}>Relish Yoghurt Vanilla</h3>
                                        <p className="product-desc desc-vanilla">Creamy, smooth yoghurt blended with sweet, rich vanilla flavor — pure delight in every spoonful</p>
                                        <hr className="qty-divider" />
                                        <span className="qty-label">Select Size</span>
                                        <div className={`qty-pills qty-vanilla`}>
                                            {quantities[2].map((q, i) => (
                                                <button key={i} onClick={() => setSelectedQty(i)} className={`qty-pill ${current === 2 && selectedQty === i ? 'active' : ''}`}>{q.size}</button>
                                            ))}
                                        </div>
                                        {current === 2 && (
                                            <>
                                                <div className="price-wrap">
                                                    <span className="price-currency price-vanilla">KSh</span>
                                                    <span className="price-amount price-vanilla">{quantities[2][selectedQty].price}</span>
                                                </div>
                                                <p className="price-size-tag">for {quantities[2][selectedQty].size}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* ══════════════════════════
                                SLIDE 4 — Relish Lala
                            ══════════════════════════ */}
                            <div className="carousel-slide slide-lala" style={{ position:'relative',overflow:'hidden' }}>
                                <div className="blob blob-lala-1" /><div className="blob blob-lala-2" />
                                <div className="ring ring-lala" style={{ width:300,height:300,top:-80,right:-80 }} />
                                <div className="ring ring-lala" style={{ width:180,height:180,bottom:-50,left:20 }} />
                                <div className="slide-inner">
                                    <div className="slide-img-wrap">
                                        <img src={lala} alt="Relish Lala" className="product-img img-lala lg:h-85 h-64" style={{ objectFit:'contain',position:'relative',zIndex:1 }} />
                                    </div>
                                    <div className="slide-text">
                                        <span className="product-badge badge-lala">Naturally Fermented</span>
                                        <div className="accent-bar bar-lala" />
                                        <h3 className="product-name name-lala" style={{ fontSize:'clamp(24px,3.5vw,38px)' }}>Relish Lala</h3>
                                        <p className="product-desc desc-lala">Traditionally fermented milk with a rich, tangy taste — a beloved classic crafted for a deeply satisfying experience</p>
                                        <hr className="qty-divider" />
                                        <span className="qty-label">Select Size</span>
                                        <div className={`qty-pills qty-lala`}>
                                            {quantities[3].map((q, i) => (
                                                <button key={i} onClick={() => setSelectedQty(i)} className={`qty-pill ${current === 3 && selectedQty === i ? 'active' : ''}`}>{q.size}</button>
                                            ))}
                                        </div>
                                        {current === 3 && (
                                            <>
                                                <div className="price-wrap">
                                                    <span className="price-currency price-lala">KSh</span>
                                                    <span className="price-amount price-lala">{quantities[3][selectedQty].price}</span>
                                                </div>
                                                <p className="price-size-tag">for {quantities[3][selectedQty].size}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── Controls ── */}
                <div style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:'16px',marginTop:'24px' }}>
                    <button onClick={prev} aria-label="Previous" className={`nav-btn ${btnClass}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>
                    <div style={{ display:'flex',gap:'8px',alignItems:'center' }}>
                        <button onClick={() => goTo(0)} className={`dot ${current === 0 ? 'dot-milk dot-active' : 'dot-inactive'}`} />
                        <button onClick={() => goTo(1)} className={`dot ${current === 1 ? 'dot-strawberry dot-active' : 'dot-inactive'}`} />
                        <button onClick={() => goTo(2)} className={`dot ${current === 2 ? 'dot-vanilla dot-active' : 'dot-inactive'}`} />
                        <button onClick={() => goTo(3)} className={`dot ${current === 3 ? 'dot-lala dot-active' : 'dot-inactive'}`} />
                    </div>
                    <button onClick={next} aria-label="Next" className={`nav-btn ${btnClass}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                    <span className="slide-counter" style={{ marginLeft:'8px' }}>{current + 1} / {total}</span>
                </div>

            </div>
        </>
    );
}