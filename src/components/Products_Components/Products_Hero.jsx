export default function ProductsHero() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

                /* ── Entrance animations ── */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .ph-animate {
                    opacity: 0;
                    animation: fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .ph-d1 { animation-delay: 0.08s; }
                .ph-d2 { animation-delay: 0.22s; }
                .ph-d3 { animation-delay: 0.40s; }

                /* ── Section ── */
                .ph-root {
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                    padding: 30px 24px 96px;
                    font-family: 'Outfit', sans-serif;
                }

                /* Dot-grid texture */
                .ph-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.09) 1px, transparent 1px);
                    background-size: 28px 28px;
                    pointer-events: none;
                }

                /* Blobs */
                .ph-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(90px);
                    pointer-events: none;
                }
                .ph-blob-1 {
                    width: 480px; height: 480px;
                    background: rgba(77,189,232,0.10);
                    top: -180px; right: -120px;
                }
                .ph-blob-2 {
                    width: 360px; height: 360px;
                    background: rgba(34,197,94,0.08);
                    bottom: -120px; left: -80px;
                }

                /* Rings */
                .ph-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1.5px dashed;
                    pointer-events: none;
                }

                /* ── Inner ── */
                .ph-inner {
                    position: relative;
                    z-index: 1;
                    max-width: 860px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* ── Eyebrow ── */
                .ph-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #6b7280;
                    margin-bottom: 28px;
                }
                .ph-eyebrow-line {
                    width: 32px;
                    height: 1px;
                    background: #d1d5db;
                }

                /* ── Heading ── */
                .ph-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: clamp(38px, 7vw, 80px);
                    line-height: 1.08;
                    color: #111827;
                    margin: 0 0 0;
                    letter-spacing: -0.01em;
                }

                /* Inline pill — dairyBlue */
                .ph-pill-blue {
                    display: inline-block;
                    background: #4dbde8;
                    color: #ffffff;
                    padding: 2px 22px 6px;
                    border-radius: 999px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 1.2;
                    margin: 0 4px;
                    position: relative;
                    top: -3px;
                    box-shadow: 0 4px 16px rgba(77,189,232,0.30);
                }

                /* Inline pill — green */
                .ph-pill-green {
                    display: inline-block;
                    background: #22c55e;
                    color: #ffffff;
                    padding: 2px 22px 6px;
                    border-radius: 999px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: 1.2;
                    margin: 0 4px;
                    position: relative;
                    top: -3px;
                    box-shadow: 0 4px 16px rgba(34,197,94,0.28);
                }

                /* ── Divider rule ── */
                .ph-rule {
                    width: 56px;
                    height: 2px;
                    background: linear-gradient(90deg, #4dbde8, #22c55e);
                    border-radius: 1px;
                    margin: 28px auto 32px;
                }

                /* ── Body text ── */
                .ph-body {
                    font-size: clamp(15px, 2vw, 17px);
                    font-weight: 300;
                    line-height: 1.85;
                    color: #4b5563;
                    max-width: 580px;
                    margin: 0 auto;
                }

                /* ── Trust tags ── */
                .ph-tags {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 40px;
                }
                .ph-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    background: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: 999px;
                    padding: 6px 16px;
                    font-size: 12px;
                    font-weight: 500;
                    color: #374151;
                    letter-spacing: 0.04em;
                }
                .ph-tag-dot {
                    width: 6px; height: 6px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }
                .ph-tag-dot-blue  { background: #4dbde8; }
                .ph-tag-dot-green { background: #22c55e; }
                .ph-tag-dot-amber { background: #f59e0b; }
            `}</style>

            <section className="ph-root">
                <div className="ph-blob ph-blob-1" />
                <div className="ph-blob ph-blob-2" />
                <div className="ph-ring" style={{ width:500,height:500,top:-200,right:-180,borderColor:'rgba(77,189,232,0.08)' }} />
                <div className="ph-ring" style={{ width:300,height:300,bottom:-100,left:-60,borderColor:'rgba(34,197,94,0.10)' }} />

                <div className="ph-inner">

                    {/* Eyebrow */}
                    <div className="ph-animate ph-d1">
                        <p className="ph-eyebrow">
                            <span className="ph-eyebrow-line" />
                            Our Products
                            <span className="ph-eyebrow-line" />
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="ph-animate ph-d2">
                        <h1 className="ph-heading">
                            Discover <span className="ph-pill-blue">naturally</span> made<br />
                            Dairy Products!
                            {/*<span className="ph-pill-green">dairy products</span>{" "}*/}
                        </h1>

                        <div className="ph-rule" />
                    </div>

                    {/*/!* Body + tags *!/*/}
                    {/*<div className="ph-animate ph-d3">*/}
                    {/*    <p className="ph-body">*/}
                    {/*        Our dairy products are crafted with care using fresh natural*/}
                    {/*        ingredients sourced from local farms. Every sip and bite*/}
                    {/*        delivers wholesome nutrition and rich, delicious flavor*/}
                    {/*        you can trust.*/}
                    {/*    </p>*/}

                    {/*    /!* Trust chips *!/*/}
                    {/*    <div className="ph-tags">*/}
                    {/*        <span className="ph-tag">*/}
                    {/*            <span className="ph-tag-dot ph-tag-dot-blue" />*/}
                    {/*            No Additives*/}
                    {/*        </span>*/}
                    {/*        <span className="ph-tag">*/}
                    {/*            <span className="ph-tag-dot ph-tag-dot-green" />*/}
                    {/*            Locally Sourced*/}
                    {/*        </span>*/}
                    {/*        <span className="ph-tag">*/}
                    {/*            <span className="ph-tag-dot ph-tag-dot-amber" />*/}
                    {/*            Farm Fresh*/}
                    {/*        </span>*/}
                    {/*        <span className="ph-tag">*/}
                    {/*            <span className="ph-tag-dot ph-tag-dot-blue" />*/}
                    {/*            Quality Certified*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </section>
        </>
    );
}