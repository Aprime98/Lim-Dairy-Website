import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { group_photo, history_photo } from "../../assets";

/* ─────────────────────────────────────────────
   GALLERY CONFIG
   Add / remove images here for new activities.
   Each entry: { src, caption, tag }
───────────────────────────────────────────── */
const galleryImages = [
    { src: history_photo, caption: "Our founding story",       tag: "History"   },
    { src: group_photo,   caption: "The Limuru Dairy Board",  tag: "Board-Members"      },
    // add more:
    // { src: someNewPhoto,  caption: "2025 Annual Day",         tag: "Events"    },
];

const visions = [
    "To increase our farmers' milk volume.",
    "To increase sales through diversification.",
    "To transform the lives of farmers and staff.",
    "To improve product quality for better prices.",
];

export default function VisionGallery() {
    const [lightbox, setLightbox]   = useState(null); // index | null
    const [showAll,  setShowAll]    = useState(false);

    const visible = showAll ? galleryImages : galleryImages.slice(0, 4);

    const prevImg = () => setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
    const nextImg = () => setLightbox((lightbox + 1) % galleryImages.length);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Animations ── */
                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(22px); }
                    to   { opacity:1; transform:translateY(0);    }
                }
                .vg-animate { opacity:0; animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
                .vg-d1 { animation-delay:0.08s; }
                .vg-d2 { animation-delay:0.20s; }
                .vg-d3 { animation-delay:0.32s; }

                @keyframes fadeIn {
                    from { opacity:0; transform:scale(0.97); }
                    to   { opacity:1; transform:scale(1);    }
                }

                /* ── Root ── */
                .vg-root {
                    background: #111827;
                    background-image:
                        radial-gradient(ellipse at 85% 5%,  rgba(255,255,255,0.04) 0%, transparent 50%),
                        radial-gradient(ellipse at 10% 95%, rgba(0,0,0,0.25)       0%, transparent 50%);
                    position: relative;
                    overflow: hidden;
                    font-family: 'Outfit', sans-serif;
                    color: white;
                    padding: 96px 24px 96px;
                }

                /* Dot grid */
                .vg-root::before {
                    content:'';
                    position:absolute; inset:0;
                    background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
                    background-size: 30px 30px;
                    pointer-events:none;
                }

                /* Blobs */
                .vg-blob { position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none; }
                .vg-blob-1 { width:500px;height:500px;background:rgba(245,158,11,0.06);top:-180px;right:-120px; }
                .vg-blob-2 { width:320px;height:320px;background:rgba(255,255,255,0.04);bottom:-100px;left:-60px; }

                /* Rings */
                .vg-ring { position:absolute;border-radius:50%;border:1.5px dashed;pointer-events:none; }

                /* ── Inner ── */
                .vg-inner {
                    position:relative; z-index:1;
                    max-width:1120px; margin:0 auto;
                }

                /* ── Section header ── */
                .vg-section-label {
                    display:inline-flex; align-items:center; gap:8px;
                    font-size:11px; font-weight:500; letter-spacing:0.18em;
                    text-transform:uppercase; opacity:0.45; margin-bottom:12px;
                }
                .vg-section-label-arrow { color:#d97706; font-size:14px; }

                .vg-section-heading {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700;
                    font-size: clamp(32px, 4vw, 52px);
                    line-height:1.05;
                    margin:0;
                    color:white;
                }
                .vg-section-heading em {
                    font-style:italic; font-weight:400; color:#d97706;
                }

                /* ── Two-column layout ── */
                .vg-layout {
                    display:grid;
                    grid-template-columns:1fr;
                    gap:64px;
                    margin-top:64px;
                }
                @media(min-width:900px) {
                    .vg-layout { grid-template-columns:1fr 1fr; align-items:start; }
                }

                /* ════════════════════════
                   VISION COLUMN
                ════════════════════════ */
                .vg-vision-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700;
                    font-size:clamp(22px,3vw,34px);
                    margin:0 0 28px;
                    color:white;
                }
                .vg-vision-title em { font-style:italic;font-weight:400;color:#d97706; }

                .vg-vision-card {
                    background:rgba(255,255,255,0.04);
                    border:1px solid rgba(255,255,255,0.09);
                    border-radius:20px;
                    overflow:hidden;
                }

                .vg-vision-row {
                    display:flex; align-items:flex-start; gap:16px;
                    padding:20px 24px;
                    border-bottom:1px solid rgba(255,255,255,0.07);
                    transition:background 0.2s ease;
                }
                .vg-vision-row:last-child { border-bottom:none; }
                .vg-vision-row:hover { background:rgba(255,255,255,0.06); }

                .vg-vision-number {
                    font-family:'Cormorant Garamond',serif;
                    font-size:11px; font-weight:700;
                    letter-spacing:0.14em;
                    color:#d97706; opacity:0.8;
                    padding-top:3px; flex-shrink:0;
                    min-width:24px;
                }
                .vg-vision-text {
                    font-size:14px; font-weight:400;
                    color:#e5e7eb; line-height:1.65;
                    margin:0;
                }
                @media(min-width:768px) { .vg-vision-text { font-size:16px; } }

                /* ════════════════════════
                   GALLERY COLUMN
                ════════════════════════ */
                .vg-gallery-header {
                    display:flex; align-items:center; justify-content:space-between;
                    margin-bottom:20px;
                }
                .vg-gallery-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(22px,3vw,34px);
                    margin:0; color:white;
                }
                .vg-gallery-title em { font-style:italic;font-weight:400;color:#d97706; }

                .vg-gallery-count {
                    font-size:11px; font-weight:500; letter-spacing:0.12em;
                    text-transform:uppercase; opacity:0.40;
                }

                /* Masonry-style grid */
                .vg-grid {
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:10px;
                }

                /* First image spans full width */
                .vg-grid-item:first-child {
                    grid-column: 1 / -1;
                }

                .vg-grid-item {
                    position:relative; border-radius:14px;
                    overflow:hidden; cursor:pointer;
                    background:#1f2937;
                    animation: fadeIn 0.4s ease forwards;
                }

                /* Tall first card, shorter subsequent */
                .vg-grid-item:first-child .vg-img { height:260px; }
                .vg-img {
                    width:100%; height:180px;
                    object-fit:cover; display:block;
                    transition:transform 0.5s cubic-bezier(0.4,0,0.2,1), filter 0.3s ease;
                    filter:brightness(0.9);
                }
                .vg-grid-item:hover .vg-img {
                    transform:scale(1.06);
                    filter:brightness(1);
                }

                /* Overlay */
                .vg-overlay {
                    position:absolute; inset:0;
                    background:linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
                    display:flex; flex-direction:column;
                    justify-content:flex-end; align-items:flex-start;
                    padding:14px 16px;
                    opacity:1;
                    transition:opacity 0.3s ease;
                }

                .vg-img-tag {
                    font-size:9px; font-weight:600; letter-spacing:0.14em;
                    text-transform:uppercase;
                    background:rgba(217,119,6,0.85);
                    color:white; padding:3px 9px;
                    border-radius:999px; margin-bottom:6px;
                }
                .vg-img-caption {
                    font-size:12px; font-weight:400;
                    color:rgba(255,255,255,0.85); line-height:1.4; margin:0;
                }

                /* Zoom icon */
                .vg-zoom-icon {
                    position:absolute; top:10px; right:10px;
                    width:32px; height:32px; border-radius:50%;
                    background:rgba(0,0,0,0.40);
                    display:flex; align-items:center; justify-content:center;
                    opacity:0; transition:opacity 0.25s ease;
                    color:white;
                }
                .vg-grid-item:hover .vg-zoom-icon { opacity:1; }

                /* Show more button */
                .vg-show-more {
                    width:100%; margin-top:12px;
                    padding:12px;
                    background:rgba(255,255,255,0.05);
                    border:1px solid rgba(255,255,255,0.10);
                    border-radius:12px;
                    color:rgba(255,255,255,0.60);
                    font-family:'Outfit',sans-serif;
                    font-size:12px; font-weight:500;
                    letter-spacing:0.10em; text-transform:uppercase;
                    cursor:pointer;
                    transition:background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
                }
                .vg-show-more:hover {
                    background:rgba(255,255,255,0.09);
                    color:white; border-color:rgba(255,255,255,0.20);
                }

                /* ════════════════════════
                   LIGHTBOX
                ════════════════════════ */
                .vg-lightbox {
                    position:fixed; inset:0; z-index:999;
                    background:rgba(0,0,0,0.92);
                    display:flex; align-items:center; justify-content:center;
                    padding:24px;
                    animation: fadeIn 0.25s ease forwards;
                }
                .vg-lightbox-inner {
                    position:relative; max-width:860px; width:100%;
                }
                .vg-lightbox-img {
                    width:100%; max-height:80vh;
                    object-fit:contain; border-radius:16px;
                    box-shadow:0 32px 80px rgba(0,0,0,0.5);
                }
                .vg-lightbox-caption {
                    text-align:center; margin-top:16px;
                    font-size:14px; font-weight:300; opacity:0.65;
                    color:white;
                }
                .vg-lb-close {
                    position:absolute; top:-16px; right:-16px;
                    width:40px; height:40px; border-radius:50%;
                    background:rgba(255,255,255,0.12);
                    border:1px solid rgba(255,255,255,0.20);
                    display:flex; align-items:center; justify-content:center;
                    cursor:pointer; color:white;
                    transition:background 0.2s ease;
                }
                .vg-lb-close:hover { background:rgba(255,255,255,0.22); }

                .vg-lb-nav {
                    position:absolute; top:50%; transform:translateY(-50%);
                    width:44px; height:44px; border-radius:50%;
                    background:rgba(255,255,255,0.10);
                    border:1px solid rgba(255,255,255,0.18);
                    display:flex; align-items:center; justify-content:center;
                    cursor:pointer; color:white;
                    transition:background 0.2s ease, transform 0.2s ease;
                }
                .vg-lb-nav:hover { background:rgba(255,255,255,0.20); transform:translateY(-50%) scale(1.08); }
                .vg-lb-prev { left:-56px; }
                .vg-lb-next { right:-56px; }

                .vg-lb-counter {
                    position:absolute; bottom:-40px; left:50%; transform:translateX(-50%);
                    font-size:12px; opacity:0.45; letter-spacing:0.08em;
                    color:white;
                }

                @media(max-width:600px) {
                    .vg-lb-prev { left:8px; }
                    .vg-lb-next { right:8px; }
                    .vg-lb-close { top:8px; right:8px; }
                }
                /* ════════════════════════
                   HISTORY TIMELINE
                ════════════════════════ */
                .vg-history-wrap {
                    margin-top: 72px;
                    padding-top: 64px;
                    border-top: 1px solid rgba(255,255,255,0.07);
                }
                .vg-history-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-bottom: 48px;
                }
                .vg-history-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(24px, 3.5vw, 40px);
                    color: white; margin: 0; line-height: 1.0;
                }
                .vg-history-title em { font-style:italic; font-weight:400; color:#d97706; }
                .vg-history-badge {
                    font-size: 10px; font-weight: 600;
                    letter-spacing: 0.16em; text-transform: uppercase;
                    background: rgba(217,119,6,0.15);
                    border: 1px solid rgba(217,119,6,0.30);
                    color: #d97706; padding: 5px 14px; border-radius: 999px;
                }
                .vg-timeline { position: relative; padding-left: 0; }
                .vg-timeline-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0;
                }
                @media(min-width: 768px) {
                    .vg-timeline-grid { grid-template-columns: 1fr 1fr; gap: 0 56px; }
                }
                .vg-timeline-col { position: relative; padding-left: 28px; }
                .vg-timeline-col::before {
                    content: '';
                    position: absolute;
                    top: 8px; bottom: 8px; left: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #d97706, rgba(217,119,6,0.2) 85%, transparent);
                    border-radius: 1px;
                }
                .vg-timeline-item {
                    position: relative;
                    padding: 0 0 28px 24px;
                    display: grid;
                    grid-template-columns: 52px 1fr;
                    gap: 12px;
                    align-items: baseline;
                }
                .vg-timeline-item:last-child { padding-bottom: 0; }
                .vg-timeline-item::before {
                    content: '';
                    position: absolute;
                    left: -5px; top: 8px;
                    width: 10px; height: 10px;
                    border-radius: 50%;
                    background: #d97706;
                    border: 2px solid #111827;
                    box-shadow: 0 0 0 2px rgba(217,119,6,0.35);
                    transition: box-shadow 0.2s ease;
                }
                .vg-timeline-item:hover::before {
                    box-shadow: 0 0 0 5px rgba(217,119,6,0.20);
                }
                .vg-timeline-year {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700; font-size: 17px;
                    color: #d97706; line-height: 1.5; flex-shrink: 0;
                }
                .vg-timeline-text {
                    font-size: 13px; font-weight: 300;
                    color: #d1d5db; line-height: 1.72; margin: 0; padding-top: 2px;
                }
                @media(min-width: 768px) { .vg-timeline-text { font-size: 14px; } }

            `}</style>

            <section className="vg-root">
                <div className="vg-blob vg-blob-1" />
                <div className="vg-blob vg-blob-2" />
                <div className="vg-ring" style={{ width:420,height:420,top:-140,right:-120,borderColor:'rgba(245,158,11,0.08)' }} />
                <div className="vg-ring" style={{ width:240,height:240,bottom:-80,left:40,borderColor:'rgba(255,255,255,0.05)' }} />

                <div className="vg-inner">

                    {/* ── Section header ── */}
                    <div className="vg-animate vg-d1">
                        <p className="vg-section-label">
                            <span className="vg-section-label-arrow">↳</span>
                            Who We Are
                        </p>
                        <h2 className="vg-section-heading">
                            Vision &amp; <em>Gallery</em>
                        </h2>
                    </div>


                    {/* ════ HISTORY TIMELINE ════ */}
                    <div className="vg-history-wrap vg-animate vg-d1">
                        <div className="vg-history-header">
                            <h3 className="vg-history-title">Limuru Dairy <em>History</em></h3>
                            <span className="vg-history-badge">Est. 1962</span>
                        </div>

                        <div className="vg-timeline">
                            <div className="vg-timeline-grid">

                                {/* Left column */}
                                <div className="vg-timeline-col">
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1962</span>
                                        <p className="vg-timeline-text">Limuru Dairy Farmers Co-operative Society was registered under the Co-operative Act on 28th April 1962.</p>
                                    </div>
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1963</span>
                                        <p className="vg-timeline-text">Operations started in March with just seven members. UNICEF supplied additional milk cans the same year.</p>
                                    </div>
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1964</span>
                                        <p className="vg-timeline-text">Management opened a store for resale of farm inputs, feeds, and milk cans at fair prices for farmers.</p>
                                    </div>
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1967</span>
                                        <p className="vg-timeline-text">The society purchased its own land and acquired its first vehicle.</p>
                                    </div>
                                </div>

                                {/* Right column */}
                                <div className="vg-timeline-col">
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1984</span>
                                        <p className="vg-timeline-text">Construction of the society's head office began, completed in November 1986.</p>
                                    </div>
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1987</span>
                                        <p className="vg-timeline-text">With member and government approval, the society began offering Artificial Insemination and Clinical services.</p>
                                    </div>
                                    <div className="vg-timeline-item">
                                        <span className="vg-timeline-year">1997</span>
                                        <p className="vg-timeline-text">Limuru Milk Processor began milk processing under the <em style={{color:'#d97706',fontStyle:'italic'}}>Limuru Fresh</em> brand.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── Two column layout ── */}
                    <div className="vg-layout">

                        {/* ════ VISION COLUMN ════ */}
                        <div className="vg-animate vg-d2">
                            <h3 className="vg-vision-title">
                                Limuru Dairy <em>Visions</em>
                            </h3>
                            <div className="vg-vision-card">
                                {visions.map((text, i) => (
                                    <div className="vg-vision-row" key={i}>
                                        <span className="vg-vision-number">0{i + 1}</span>
                                        <p className="vg-vision-text">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ════ GALLERY COLUMN ════ */}
                        <div className="vg-animate vg-d3">
                            <div className="vg-gallery-header">
                                <h3 className="vg-gallery-title">
                                    Our <em>Gallery</em>
                                </h3>
                                <span className="vg-gallery-count">
                                    {galleryImages.length} photo{galleryImages.length !== 1 ? 's' : ''}
                                </span>
                            </div>

                            <div className="vg-grid">
                                {visible.map((img, i) => (
                                    <div
                                        key={i}
                                        className="vg-grid-item"
                                        onClick={() => setLightbox(i)}
                                    >
                                        <img src={img.src} alt={img.caption} className="vg-img" />
                                        <div className="vg-overlay">
                                            <span className="vg-img-tag">{img.tag}</span>
                                            <p className="vg-img-caption">{img.caption}</p>
                                        </div>
                                        <div className="vg-zoom-icon">
                                            <ZoomIn size={15} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Show more / less — only if more than 4 images */}
                            {galleryImages.length > 4 && (
                                <button
                                    className="vg-show-more"
                                    onClick={() => setShowAll(!showAll)}
                                >
                                    {showAll
                                        ? `Show less ↑`
                                        : `View all ${galleryImages.length} photos ↓`}
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* ════ LIGHTBOX ════ */}
            {lightbox !== null && (
                <div className="vg-lightbox" onClick={() => setLightbox(null)}>
                    <div
                        className="vg-lightbox-inner"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button className="vg-lb-close" onClick={() => setLightbox(null)}>
                            <X size={18} />
                        </button>

                        {/* Prev / Next */}
                        {galleryImages.length > 1 && (
                            <>
                                <button className="vg-lb-nav vg-lb-prev" onClick={prevImg}>
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="vg-lb-nav vg-lb-next" onClick={nextImg}>
                                    <ChevronRight size={20} />
                                </button>
                            </>
                        )}

                        <img
                            src={galleryImages[lightbox].src}
                            alt={galleryImages[lightbox].caption}
                            className="vg-lightbox-img"
                        />
                        <p className="vg-lightbox-caption">
                            {galleryImages[lightbox].caption}
                        </p>

                        {/* Counter */}
                        <span className="vg-lb-counter">
                            {lightbox + 1} / {galleryImages.length}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}