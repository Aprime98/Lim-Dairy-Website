import { useState } from "react";

const allNfts = [
    {
        id: 1,
        title: "Cosmic Wanderer",
        artist: "AstroMint",
        handle: "@astromint",
        price: "2.4 ETH",
        likes: 312,
        category: "Space Art",
        accent: "#c084fc",
        image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&q=80",
        avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
        id: 2,
        title: "Crypto Aurora Guy",
        artist: "Liberty Artist",
        handle: "@libertyart",
        price: "5.8 ETH",
        likes: 847,
        category: "Abstract 3D",
        accent: "#22d3ee",
        image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80",
        avatar: "https://i.pravatar.cc/40?img=22",
    },
    {
        id: 3,
        title: "Neon Phantom",
        artist: "CyberForge",
        handle: "@cyberforge",
        price: "3.1 ETH",
        likes: 519,
        category: "Cyberpunk",
        accent: "#fb923c",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80",
        avatar: "https://i.pravatar.cc/40?img=33",
    },
    {
        id: 4,
        title: "Digital Dreamscape",
        artist: "PixelSage",
        handle: "@pixelsage",
        price: "1.9 ETH",
        likes: 204,
        category: "Digital Art",
        accent: "#34d399",
        image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&q=80",
        avatar: "https://i.pravatar.cc/40?img=44",
    },
    {
        id: 5,
        title: "Void Walker",
        artist: "DarkMatter",
        handle: "@darkmatter",
        price: "4.2 ETH",
        likes: 631,
        category: "Sci-Fi",
        accent: "#f472b6",
        image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600&q=80",
        avatar: "https://i.pravatar.cc/40?img=55",
    },
];

function NFTCard({ nft, featured }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden cursor-pointer rounded-2xl"
            style={{
                flex: featured ? "1.3" : "1",
                minHeight: featured ? "420px" : "380px",
                boxShadow: hovered
                    ? `0 0 40px 4px ${nft.accent}55, 0 20px 60px rgba(0,0,0,0.5)`
                    : featured
                        ? "0 8px 40px rgba(0,0,0,0.4)"
                        : "0 4px 24px rgba(0,0,0,0.3)",
                transform: featured && !hovered ? "scale(1.05)" : hovered ? "scale(1.07)" : "scale(1)",
                transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease",
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
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
            />

            {/* Gradient overlay always */}
            <div
                className="absolute inset-0"
                style={{
                    background: hovered
                        ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%)"
                        : featured
                            ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)"
                            : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 70%)",
                    transition: "background 0.4s ease",
                }}
            />

            {/* Category tag */}
            <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                    background: `${nft.accent}22`,
                    border: `1px solid ${nft.accent}88`,
                    color: nft.accent,
                    backdropFilter: "blur(8px)",
                    opacity: hovered ? 1 : 0.7,
                    transition: "opacity 0.3s ease",
                }}
            >
                {nft.category}
            </div>

            {/* Hover detail panel */}
            <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                    transform: hovered ? "translateY(0)" : "translateY(20px)",
                    opacity: hovered ? 1 : featured ? 0.85 : 0,
                    transition: "transform 0.4s cubic-bezier(.22,1,.36,1), opacity 0.35s ease",
                }}
            >
                {/* NFT Title */}
                <h3
                    className="text-white font-black text-xl mb-3 leading-tight"
                    style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.04em" }}
                >
                    {nft.title}
                </h3>

                {/* Artist row */}
                <div
                    className="flex items-center gap-3 mb-4 p-3 rounded-xl"
                    style={{
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                    }}
                >
                    <img
                        src={nft.avatar}
                        alt={nft.artist}
                        className="w-9 h-9 rounded-full object-cover"
                        style={{ border: `2px solid ${nft.accent}` }}
                    />
                    <div>
                        <p className="text-white text-sm font-semibold leading-tight">{nft.artist}</p>
                        <p className="text-xs font-medium" style={{ color: nft.accent }}>
                            {nft.handle}
                        </p>
                    </div>
                </div>

                {/* Price + Likes */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Current Bid</p>
                        <p className="text-white font-black text-lg" style={{ color: nft.accent }}>
                            {nft.price}
                        </p>
                    </div>
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
                        style={{
                            background: `linear-gradient(135deg, ${nft.accent}cc, ${nft.accent}88)`,
                            border: `1px solid ${nft.accent}`,
                            boxShadow: `0 0 20px ${nft.accent}44`,
                        }}
                    >
                        <span>♥</span>
                        <span>{nft.likes}</span>
                    </button>
                </div>
            </div>

            {/* Glow border on hover */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    border: `2px solid ${nft.accent}`,
                    opacity: hovered ? 0.6 : 0,
                    transition: "opacity 0.3s ease",
                }}
            />
        </div>
    );
}

const VISIBLE = 3; // cards visible at once

export default function NFTHero() {
    const [startIndex, setStartIndex] = useState(0);
    const totalSlides = allNfts.length - VISIBLE + 1; // 0..2 for 5 items

    const prev = () => setStartIndex((i) => Math.max(0, i - 1));
    const next = () => setStartIndex((i) => Math.min(totalSlides - 1, i + 1));
    const goTo = (i) => setStartIndex(i);

    const visibleNfts = allNfts.slice(startIndex, startIndex + VISIBLE);
    const featuredIndex = 1; // always center card

    return (
        <div
            className="min-h-screen w-full flex flex-col"
            style={{ background: "#0a0a0f", fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #a78bfa 30%, #fff 60%, #67e8f9 90%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .arrow-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          transition: background 0.2s, transform 0.2s, opacity 0.2s;
        }
        .arrow-btn:hover:not(:disabled) {
          background: rgba(255,255,255,0.18);
          transform: scale(1.1);
        }
        .arrow-btn:disabled {
          opacity: 0.25;
          cursor: not-allowed;
        }
      `}</style>

            {/* Hero Header */}
            <div
                className="relative flex flex-col items-center justify-center pt-16 pb-12 px-8 overflow-hidden"
                style={{ background: "linear-gradient(160deg, #1e0533 0%, #2d1b69 40%, #1a0a3d 70%, #0a0a0f 100%)" }}
            >
                <div className="absolute w-96 h-96 rounded-full pointer-events-none"
                     style={{ top: "-80px", left: "20%", background: "radial-gradient(circle, #7c3aed33 0%, transparent 70%)", animation: "pulse-glow 4s ease-in-out infinite" }} />
                <div className="absolute w-64 h-64 rounded-full pointer-events-none"
                     style={{ top: "-20px", right: "25%", background: "radial-gradient(circle, #06b6d433 0%, transparent 70%)", animation: "pulse-glow 5s ease-in-out infinite 1s" }} />

                <div className="relative flex items-center gap-2 text-sm mb-5">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.5)", color: "#a78bfa" }}>
            Liberty NFT Market
          </span>
                </div>

                <h1 className="text-white text-center font-black uppercase leading-none mb-4"
                    style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "0.04em" }}>
                    Discover Some Top Items
                </h1>

                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem" }}>
                    <span className="hover:text-white cursor-pointer" style={{ transition: "color 0.2s" }}>Home</span>
                    <span className="mx-2">›</span>
                    <span style={{ color: "#a78bfa" }}>Explore</span>
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                     style={{ background: "linear-gradient(to bottom, transparent, #0a0a0f)" }} />
            </div>

            {/* Cards Section */}
            <div className="flex-1 px-6 pb-12 pt-4">
                <div className="relative max-w-6xl mx-auto">

                    {/* Left Arrow */}
                    <button
                        className="arrow-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                        onClick={prev}
                        disabled={startIndex === 0}
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    {/* Cards */}
                    <div className="flex gap-4 items-stretch" style={{ minHeight: "420px" }}>
                        {visibleNfts.map((nft, i) => (
                            <NFTCard key={nft.id} nft={nft} featured={i === featuredIndex} />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="arrow-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                        onClick={next}
                        disabled={startIndex >= totalSlides - 1}
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goTo(i)}
                            className="rounded-full cursor-pointer"
                            style={{
                                width: i === startIndex ? "24px" : "8px",
                                height: "8px",
                                background: i === startIndex ? "#a78bfa" : "rgba(255,255,255,0.2)",
                                transition: "width 0.3s ease, background 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}