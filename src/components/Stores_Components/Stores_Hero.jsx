import { useState } from 'react';
import { Search, ShoppingBag, X } from 'lucide-react';
import {
    cow_bran,
    cow_poland,
    cow_salt,
    dairy_meal,
    piglet_starter,
} from '../../assets';

/* ═══════════════════════════════════════════════════════════
   PRODUCTS CONFIG
   Add new products here — that's all you need to do!

   category options: 'feeds' | 'minerals' | 'supplements' | 'other'
═══════════════════════════════════════════════════════════ */
const products = [
    {
        id: 1,
        title:    'Limda Bran',
        price:    1000,
        category: 'feeds',
        tag:      'Best Seller',
        desc:     'High-fibre bran feed formulated to boost milk production in dairy cattle.',
        image:    cow_bran,
    },
    {
        id: 2,
        title:    'Limda Poland',
        price:    1200,
        category: 'feeds',
        tag:      null,
        desc:     'Premium Poland-grade dairy feed blend for optimal cattle nutrition.',
        image:    cow_poland,
    },
    {
        id: 3,
        title:    'Vital Maziwa',
        price:    650,
        category: 'minerals',
        tag:      'Popular',
        desc:     'Essential mineral salt lick enriched with calcium and phosphorus.',
        image:    cow_salt,
    },
    {
        id: 4,
        title:    'Limda DairyMeal',
        price:    1800,
        category: 'feeds',
        tag:      'Premium',
        desc:     'Balanced dairy meal scientifically formulated for high-yielding cows.',
        image:    dairy_meal,
    },
    {
        id: 5,
        title:    'Limda Piglets',
        price:    1100,
        category: 'feeds',
        tag:      null,
        desc:     'Starter feed for piglets packed with proteins and essential amino acids.',
        image:    piglet_starter,
    },
];

/* ── Helpers ── */
const CATEGORIES = ['all', 'feeds', 'minerals', 'supplements', 'other'];
const CAT_LABELS  = { all: 'All Products', feeds: 'Feeds', minerals: 'Minerals', supplements: 'Supplements', other: 'Other' };

const CAT_COLORS = {
    feeds:       { color: '#4dbde8', bg: 'rgba(77,189,232,0.12)',  border: 'rgba(77,189,232,0.25)' },
    minerals:    { color: '#d97706', bg: 'rgba(217,119,6,0.12)',   border: 'rgba(217,119,6,0.25)'  },
    supplements: { color: '#22c55e', bg: 'rgba(34,197,94,0.12)',   border: 'rgba(34,197,94,0.25)'  },
    other:       { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)' },
};

export default function StoresHero() {
    const [category,  setCategory]  = useState('all');
    const [search,    setSearch]    = useState('');
    const [popup,     setPopup]     = useState(null);

    const filtered = products.filter(p => {
        const matchCat    = category === 'all' || p.category === category;
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                /* ── Animations ── */
                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(20px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes popIn {
                    from { opacity:0; transform:scale(0.94) translateY(14px); }
                    to   { opacity:1; transform:scale(1) translateY(0); }
                }
                @keyframes shimmer {
                    0%   { background-position: -600px 0; }
                    100% { background-position:  600px 0; }
                }

                .st-animate { opacity:0; animation:fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
                .st-d1 { animation-delay:0.06s; }
                .st-d2 { animation-delay:0.18s; }
                .st-d3 { animation-delay:0.28s; }
                .st-d4 { animation-delay:0.38s; }

                /* ── Root ── */
                .st-root {
                    background: #ffffff;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.07) 1px, transparent 1px);
                    background-size: 28px 28px;
                    position: relative; overflow: hidden;
                    font-family: 'Outfit', sans-serif;
                    padding: 88px 24px 96px;
                    color: #111827;
                }
                .st-root::before {
                    content:''; position:absolute; top:0; left:0; right:0; height:3px;
                    background: linear-gradient(90deg, #4dbde8, #22c55e, #d97706, #4dbde8);
                    background-size: 200% 100%;
                    animation: shimmer 4s linear infinite;
                }
                .st-blob { position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none; }
                .st-blob-1 { width:500px;height:500px;background:rgba(77,189,232,0.08);top:-200px;right:-120px; }
                .st-blob-2 { width:380px;height:380px;background:rgba(34,197,94,0.06);bottom:-140px;left:-80px; }

                /* ── Inner ── */
                .st-inner { position:relative;z-index:1;max-width:1120px;margin:0 auto; }

                /* ── Header ── */
                .st-header {
                    display:flex; flex-direction:column; gap:20px;
                    margin-bottom:40px;
                }
                @media(min-width:768px) {
                    .st-header { flex-direction:row; align-items:flex-end; justify-content:space-between; }
                }

                .st-eyebrow {
                    display:inline-flex; align-items:center; gap:8px;
                    font-size:11px; font-weight:500; letter-spacing:0.18em;
                    text-transform:uppercase; color:#6b7280; margin-bottom:10px;
                }
                .st-eyebrow-dot {
                    width:6px;height:6px;border-radius:50%;background:#4dbde8;
                    animation:pulse-st 2s ease-in-out infinite;
                }
                @keyframes pulse-st {
                    0%,100%{opacity:1;transform:scale(1);}
                    50%{opacity:0.4;transform:scale(0.7);}
                }
                .st-heading {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(34px,5.5vw,62px);
                    line-height:1.0; color:#111827; margin:0;
                }
                .st-heading em { font-style:italic; font-weight:400; color:#4dbde8; }

                .st-count-badge {
                    background:#111827; color:white;
                    font-size:11px; font-weight:600; letter-spacing:0.10em; text-transform:uppercase;
                    padding:8px 18px; border-radius:999px; white-space:nowrap;
                    align-self:flex-start;
                }
                @media(min-width:768px) { .st-count-badge { align-self:auto; } }

                /* ── Toolbar ── */
                .st-toolbar {
                    display:flex; flex-direction:column; gap:14px;
                    margin-bottom:32px;
                }
                @media(min-width:640px) { .st-toolbar { flex-direction:row; align-items:center; } }

                /* Search */
                .st-search {
                    position:relative; flex:1; max-width:320px;
                }
                .st-search-icon {
                    position:absolute; left:14px; top:50%; transform:translateY(-50%);
                    color:#9ca3af; pointer-events:none;
                }
                .st-search-input {
                    width:100%; padding:10px 14px 10px 40px;
                    border:1.5px solid #e5e7eb; border-radius:12px;
                    font-family:'Outfit',sans-serif; font-size:13px; font-weight:400;
                    color:#111827; background:white; outline:none;
                    transition:border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .st-search-input:focus {
                    border-color:#4dbde8;
                    box-shadow:0 0 0 3px rgba(77,189,232,0.12);
                }
                .st-search-input::placeholder { color:#9ca3af; }

                /* Category filters */
                .st-filters { display:flex; gap:8px; flex-wrap:wrap; }
                .st-filter {
                    font-size:12px; font-weight:500; letter-spacing:0.06em;
                    padding:7px 16px; border-radius:999px; border:1.5px solid #e5e7eb;
                    background:white; color:#6b7280; cursor:pointer;
                    transition:all 0.2s ease; font-family:'Outfit',sans-serif;
                    display:flex; align-items:center; gap:5px;
                }
                .st-filter:hover { border-color:#4dbde8; color:#4dbde8; }
                .st-filter.active { background:#111827; color:white; border-color:#111827; }
                .st-filter-dot { width:6px;height:6px;border-radius:50%;flex-shrink:0; }

                /* ── Product grid ── */
                .st-grid {
                    display:grid;
                    grid-template-columns:repeat(2, 1fr);
                    gap:16px;
                }
                @media(min-width:640px)  { .st-grid { grid-template-columns:repeat(3, 1fr); } }
                @media(min-width:900px)  { .st-grid { grid-template-columns:repeat(4, 1fr); } }
                @media(min-width:1100px) { .st-grid { grid-template-columns:repeat(5, 1fr); } }

                /* ── Product card ── */
                .st-card {
                    background:white; border:1px solid #f0f0f0;
                    border-radius:18px; overflow:hidden;
                    cursor:pointer; position:relative;
                    transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                    animation:fadeUp 0.4s ease forwards;
                }
                .st-card:hover {
                    transform:translateY(-5px);
                    box-shadow:0 16px 40px rgba(0,0,0,0.10);
                    border-color:#e5e7eb;
                }

                /* Image */
                .st-card-img-wrap {
                    position:relative; overflow:hidden;
                    height:160px; background:#f9fafb;
                }
                @media(min-width:640px) { .st-card-img-wrap { height:180px; } }

                .st-card-img {
                    width:100%; height:100%; object-fit:cover;
                    transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);
                }
                .st-card:hover .st-card-img { transform:scale(1.07); }

                /* Tag badge */
                .st-card-tag {
                    position:absolute; top:10px; left:10px;
                    font-size:9px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase;
                    padding:3px 9px; border-radius:999px;
                    background:#111827; color:white;
                }

                /* Category dot */
                .st-card-cat {
                    position:absolute; top:10px; right:10px;
                    width:8px;height:8px;border-radius:50%;
                    box-shadow:0 0 0 2px white;
                }

                /* Card body */
                .st-card-body { padding:14px 16px 16px; }
                .st-card-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:16px; line-height:1.2;
                    color:#111827; margin:0 0 4px;
                }
                @media(min-width:640px) { .st-card-title { font-size:18px; } }

                .st-card-cat-label {
                    font-size:10px; font-weight:500; letter-spacing:0.12em;
                    text-transform:uppercase; opacity:0.50; display:block; margin-bottom:10px;
                }
                .st-card-price {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:20px; color:#111827;
                }
                .st-card-price span {
                    font-family:'Outfit',sans-serif;
                    font-size:11px; font-weight:400; color:#9ca3af; margin-left:2px;
                }

                /* View details cue */
                .st-card-cta {
                    display:flex; align-items:center; gap:4px;
                    font-size:11px; font-weight:500; letter-spacing:0.08em;
                    text-transform:uppercase; color:#9ca3af; margin-top:10px;
                    transition:color 0.2s ease;
                }
                .st-card:hover .st-card-cta { color:#4dbde8; }

                /* ── Empty ── */
                .st-empty {
                    grid-column:1/-1; text-align:center; padding:56px 24px;
                    background:white; border:1px dashed #e5e7eb; border-radius:16px;
                    font-size:14px; font-weight:300; color:#9ca3af;
                }

                /* ══════════════════════════
                   POPUP MODAL
                ══════════════════════════ */
                .st-overlay {
                    position:fixed; inset:0; z-index:999;
                    background:rgba(0,0,0,0.50); backdrop-filter:blur(5px);
                    display:flex; align-items:center; justify-content:center; padding:20px;
                    animation:fadeUp 0.2s ease forwards;
                }
                .st-modal {
                    background:white; border-radius:24px;
                    width:100%; max-width:520px; max-height:92vh; overflow-y:auto;
                    position:relative;
                    box-shadow:0 40px 80px rgba(0,0,0,0.20);
                    animation:popIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
                }
                .st-modal-img {
                    width:100%; height:260px; object-fit:cover;
                    border-radius:24px 24px 0 0;
                    display:block;
                }
                .st-modal-close {
                    position:absolute; top:14px; right:14px;
                    width:36px; height:36px; border-radius:50%;
                    background:rgba(0,0,0,0.40); border:none; cursor:pointer;
                    display:flex; align-items:center; justify-content:center; color:white;
                    transition:background 0.2s ease;
                }
                .st-modal-close:hover { background:rgba(0,0,0,0.60); }

                .st-modal-body { padding:24px 28px 32px; }

                .st-modal-cat {
                    display:inline-flex; align-items:center; gap:6px;
                    font-size:10px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase;
                    padding:4px 12px; border-radius:999px; border:1px solid; margin-bottom:14px;
                }
                .st-modal-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(26px,4vw,34px);
                    line-height:1.1; color:#111827; margin:0 0 8px;
                }
                .st-modal-desc {
                    font-size:14px; font-weight:300; line-height:1.78;
                    color:#4b5563; margin:0 0 24px;
                }
                .st-modal-footer {
                    display:flex; align-items:center; justify-content:space-between;
                    flex-wrap:wrap; gap:12px;
                    background:#f9fafb; border-radius:14px; padding:18px 22px;
                }
                .st-modal-price {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:32px; color:#111827; line-height:1;
                }
                .st-modal-price small {
                    font-family:'Outfit',sans-serif;
                    font-size:12px; font-weight:400; color:#9ca3af; display:block; margin-bottom:2px;
                }
                .st-modal-enquire {
                    display:inline-flex; align-items:center; gap:8px;
                    font-family:'Outfit',sans-serif; font-size:12px; font-weight:600;
                    letter-spacing:0.10em; text-transform:uppercase;
                    background:#111827; color:white;
                    padding:12px 22px; border-radius:10px; border:none;
                    cursor:pointer; text-decoration:none;
                    transition:background 0.2s, transform 0.15s ease;
                }
                .st-modal-enquire:hover { background:#1f2937; transform:translateY(-1px); }
            `}</style>

            <section className="st-root">
                <div className="st-blob st-blob-1" />
                <div className="st-blob st-blob-2" />

                <div className="st-inner">

                    {/* ── Header ── */}
                    <div className="st-header st-animate st-d1">
                        <div>
                            <p className="st-eyebrow">
                                <span className="st-eyebrow-dot" />
                                Limuru Dairy Farmers Store
                            </p>
                            <h2 className="st-heading">
                                Farm <em>Inputs</em> &amp; Feeds
                            </h2>
                        </div>
                        <span className="st-count-badge">
                            {products.length} Products Available
                        </span>
                    </div>

                    {/* ── Toolbar ── */}
                    <div className="st-toolbar st-animate st-d2">

                        {/* Search */}
                        <div className="st-search">
                            <Search size={14} className="st-search-icon" />
                            <input
                                className="st-search-input"
                                placeholder="Search products..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Category filters */}
                        <div className="st-filters">
                            {CATEGORIES.map(cat => {
                                const meta  = CAT_COLORS[cat] || {};
                                const count = cat === 'all'
                                    ? products.length
                                    : products.filter(p => p.category === cat).length;
                                if (cat !== 'all' && count === 0) return null;
                                return (
                                    <button
                                        key={cat}
                                        className={`st-filter ${category === cat ? 'active' : ''}`}
                                        onClick={() => setCategory(cat)}
                                    >
                                        {cat !== 'all' && (
                                            <span
                                                className="st-filter-dot"
                                                style={{ background: meta.color }}
                                            />
                                        )}
                                        {CAT_LABELS[cat]}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Grid ── */}
                    <div className="st-grid st-animate st-d3">
                        {filtered.length === 0 ? (
                            <div className="st-empty">
                                No products match your search — try a different keyword.
                            </div>
                        ) : (
                            filtered.map(product => {
                                const meta = CAT_COLORS[product.category] || CAT_COLORS.other;
                                return (
                                    <div
                                        key={product.id}
                                        className="st-card"
                                        onClick={() => setPopup(product)}
                                    >
                                        <div className="st-card-img-wrap">
                                            <img src={product.image} alt={product.title} className="st-card-img" />
                                            {product.tag && (
                                                <span className="st-card-tag">{product.tag}</span>
                                            )}
                                            <span
                                                className="st-card-cat"
                                                style={{ background: meta.color }}
                                                title={CAT_LABELS[product.category]}
                                            />
                                        </div>
                                        <div className="st-card-body">
                                            <h3 className="st-card-title">{product.title}</h3>
                                            <span className="st-card-cat-label">{CAT_LABELS[product.category]}</span>
                                            <div className="st-card-price">
                                                Ksh {product.price.toLocaleString()}
                                                <span>/ bag</span>
                                            </div>
                                            <div className="st-card-cta">
                                                View details →
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                </div>
            </section>

            {/* ══════════ POPUP MODAL ══════════ */}
            {popup && (() => {
                const meta = CAT_COLORS[popup.category] || CAT_COLORS.other;
                return (
                    <div className="st-overlay" onClick={() => setPopup(null)}>
                        <div className="st-modal" onClick={e => e.stopPropagation()}>

                            <img src={popup.image} alt={popup.title} className="st-modal-img" />

                            <button className="st-modal-close" onClick={() => setPopup(null)}>
                                <X size={16} />
                            </button>

                            <div className="st-modal-body">
                                <span
                                    className="st-modal-cat"
                                    style={{ background:meta.bg, color:meta.color, borderColor:meta.border }}
                                >
                                    <span style={{ width:6,height:6,borderRadius:'50%',background:meta.color,display:'inline-block' }} />
                                    {CAT_LABELS[popup.category]}
                                </span>

                                <h2 className="st-modal-title">{popup.title}</h2>
                                <p className="st-modal-desc">{popup.desc}</p>

                                <div className="st-modal-footer">
                                    <div>
                                        <div className="st-modal-price">
                                            <small>Price per bag</small>
                                            Ksh {popup.price.toLocaleString()}
                                        </div>
                                    </div>
                                    {/*<a*/}
                                    {/*    href={`mailto:limurudairy@gmail.com?subject=Enquiry: ${popup.title}`}*/}
                                    {/*    className="st-modal-enquire"*/}
                                    {/*>*/}
                                    {/*    <ShoppingBag size={14} />*/}
                                    {/*    Enquire Now*/}
                                    {/*</a>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                );
            })()}
        </>
    );
}