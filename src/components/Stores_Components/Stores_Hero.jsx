import { useState, useEffect } from "react";
import {cow_bran,
    cow_poland,
    cow_salt,
    dairy_meal,
    piglet_starter} from "../../assets"

const allNfts = [
    {
        id: 1,
        title: "Limda Bran",
        price: "Ksh 1000",
        accent: "#c084fc",
        image: cow_bran,
    },
    {
        id: 2,
        title: "Limda Poland",
        price: "Ksh 1200",
        accent: "#22d3ee",
        image: cow_poland,
    },
    {
        id: 3,
        title: "Vital Maziwa",
        price: "Ksh 650",
        accent: "#fb923c",
        image: cow_salt,
    },
    {
        id: 4,
        title: "Limda DairyMeal",
        price: "Ksh 1800",
        accent: "#34d399",
        image: dairy_meal,
    },
    {
        id: 5,
        title: "Limda Piglets",
        price: "Ksh 1100",
        accent: "#f472b6",
        image: piglet_starter,
    },
];

function NFTCard({ nft, featured }) {
    const [hovered, setHovered] = useState(false);

    // Details always shown on featured; on side cards only on hover
    const showDetails = featured || hovered;

    return (
        <div
            className="relative overflow-hidden cursor-pointer rounded-2xl"
            style={{
                flex: featured ? "1.6" : "1",
                minWidth: 0,
                height: featured ? "540px" : "390px",
                alignSelf: "center",
                boxShadow: featured
                    ? `0 0 48px 6px ${nft.accent}44, 0 24px 64px rgba(0,0,0,0.6)`
                    : hovered
                        ? `0 0 30px 3px ${nft.accent}33, 0 12px 40px rgba(0,0,0,0.4)`
                        : "0 4px 20px rgba(0,0,0,0.3)",
                border: featured ? `2px solid ${nft.accent}88` : "2px solid transparent",
                transition: "box-shadow 0.4s ease, border-color 0.3s ease, transform 0.4s cubic-bezier(.22,1,.36,1)",
                transform: hovered && !featured ? "scale(1.03)" : "scale(1)",
                zIndex: featured ? 2 : 1,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-full object-cover absolute inset-0"
                style={{
                    transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
                    transform: hovered ? "scale(1.08)" : "scale(1)",
                }}
            />

            {/* Gradient overlay — always dark at bottom for featured, reveals on hover for sides */}
            <div
                className="absolute inset-0"
                style={{
                    background: showDetails
                        ? "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.05) 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                    transition: "background 0.4s ease",
                }}
            />

            {/* Featured badge */}
            {featured && (
                <div
                    className="absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-black tracking-widest uppercase"
                    style={{
                        background: `${nft.accent}`,
                        color: "#000",
                    }}
                >
                    ★ Top
                </div>
            )}

            {/* Detail panel — always visible on featured, hover-only on sides */}
            <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                    transform: showDetails ? "translateY(0)" : "translateY(24px)",
                    opacity: showDetails ? 1 : 0,
                    transition: "transform 0.4s cubic-bezier(.22,1,.36,1), opacity 0.35s ease",
                    pointerEvents: showDetails ? "auto" : "none",
                }}
            >
                <h3
                    className="text-white font-black leading-tight mb-3"
                    style={{
                        fontFamily: "'Bebas Neue', 'Impact', sans-serif",
                        letterSpacing: "0.04em",
                        fontSize: featured ? "1.6rem" : "1.2rem",
                    }}
                >
                    {nft.title}
                </h3>


                <div className="flex items-center justify-between gap-2">
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "0.65rem" }}>Current Price</p>
                        <p className="font-black" style={{ color: nft.accent, fontSize: featured ? "1.25rem" : "1rem" }}>{nft.price}</p>
                    </div>

                </div>
            </div>

            {/* Hover glow border for side cards */}
            {!featured && (
                <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        border: `2px solid ${nft.accent}`,
                        opacity: hovered ? 0.5 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                />
            )}
        </div>
    );
}

// ─── Mobile single-card view ───────────────────────────────────────────────
function MobileCard({ nft }) {
    return (
        <div
            className="relative overflow-hidden rounded-2xl w-full"
            style={{
                height: "420px",
                boxShadow: `0 0 40px 4px ${nft.accent}44, 0 20px 50px rgba(0,0,0,0.5)`,
                border: `2px solid ${nft.accent}88`,
            }}
        >
            <img src={nft.image} alt={nft.title} className="w-full h-full object-cover absolute inset-0" />

            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.05) 100%)" }}
            />


            {/* Always-visible details */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                    className="text-white font-black mb-3"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em" }}
                >
                    {nft.title}
                </h3>



                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 uppercase tracking-widest mb-0.5" style={{ fontSize: "0.65rem" }}>Current Price</p>
                        <p className="font-black text-xl" style={{ color: nft.accent }}>{nft.price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function NFTHero() {
    const [startIndex, setStartIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const VISIBLE = isMobile ? 1 : 3;
    const totalSlides = allNfts.length - VISIBLE + 1;
    const safeIndex = Math.min(startIndex, Math.max(0, totalSlides - 1));

    const prev = () => setStartIndex((i) => Math.max(0, i - 1));
    const next = () => setStartIndex((i) => Math.min(totalSlides - 1, i + 1));
    const goTo = (i) => setStartIndex(i);

    const visibleNfts = allNfts.slice(safeIndex, safeIndex + VISIBLE);

    return (
        <div className="min-h-screen w-full flex flex-col" style={{  fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .arrow-btn {
          background: #2FA3E5;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          transition: background 0.2s, transform 0.2s, opacity 0.2s;
        }
        .arrow-btn:hover:not(:disabled) { background: rgba(255,255,255,0.2); transform: scale(1.1); }
        .arrow-btn:disabled { opacity: 0.2; cursor: not-allowed; }
      `}</style>

            {/* ── Header ── */}
            <div
                className="relative flex flex-col items-center justify-center pt-12 md:pt-24 pb-10 px-4 overflow-hidden"
            >
                <div className="absolute w-72 h-72 rounded-full pointer-events-none"
                     style={{ top: "-60px", left: "15%", background: "radial-gradient(circle, #7c3aed33 0%, transparent 70%)", animation: "pulse-glow 4s ease-in-out infinite" }} />
                <div className="absolute w-48 h-48 rounded-full pointer-events-none"
                     style={{ top: "-10px", right: "20%", background: "radial-gradient(circle, #06b6d433 0%, transparent 70%)", animation: "pulse-glow 5s ease-in-out infinite 1s" }} />

                <div className="relative mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.5)", color: "#2FA3E5" }}>
                    Limuru Dairy Stores
                  </span>
                </div>

                <h1 className="text-dairyBlue text-center font-black uppercase leading-none mb-3 px-2"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(2.2rem, 9vw, 6rem)", letterSpacing: "0.04em" }}>
                    Discover Our Top Items
                </h1>

                {/*<div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"*/}
                {/*     style={{ background: "linear-gradient(to bottom, transparent, #0a0a0f)" }} />*/}
            </div>

            {/* ── Cards ── */}
            <div className="flex-1 px-4 sm:px-8 pb-24 pt-6 md:pt-24">
                <div className="relative max-w-6xl mx-auto">

                    {isMobile ? (
                        /* ── Mobile layout ── */
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <button className="arrow-btn w-10 h-10 rounded-full flex items-center justify-center text-blue-900 text-xl"
                                        onClick={prev} disabled={safeIndex === 0}>‹</button>
                                <span className="text-xs" style={{ color: "#000000" }}>
                  {safeIndex + 1} / {allNfts.length}
                </span>
                                <button className="arrow-btn w-10 h-10 rounded-full flex items-center justify-center text-blue-900 text-xl"
                                        onClick={next} disabled={safeIndex >= totalSlides - 1}>›</button>
                            </div>
                            <MobileCard nft={visibleNfts[0]} />
                        </>
                    ) : (
                        /* ── Desktop layout ── */
                        <>
                            <button
                                className="arrow-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                                onClick={prev} disabled={safeIndex === 0}>‹</button>

                            {/* Cards row — center card taller, aligned to center */}
                            <div className="flex gap-4 items-center w-full" style={{ minHeight: "560px" }}>
                                {visibleNfts.map((nft, i) => (
                                    <NFTCard key={nft.id} nft={nft} featured={i === 1} />
                                ))}
                            </div>

                            <button
                                className="arrow-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                                onClick={next} disabled={safeIndex >= totalSlides - 1}>›</button>
                        </>
                    )}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div key={i} onClick={() => goTo(i)} className="rounded-full cursor-pointer"
                             style={{
                                 width: i === safeIndex ? "24px" : "8px",
                                 height: "8px",
                                 background: i === safeIndex ? "#a78bfa" : "rgba(255,255,255,0.2)",
                                 transition: "width 0.3s ease, background 0.3s ease",
                             }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}