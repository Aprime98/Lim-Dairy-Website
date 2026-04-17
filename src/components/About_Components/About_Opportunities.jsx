import { useState } from 'react';
import { Briefcase, FileText, GraduationCap, Clock, ChevronRight, AlertCircle, X, MapPin, Hash } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   OPPORTUNITIES CONFIG — add / edit entries here
═══════════════════════════════════════════════════ */
const opportunities = [
    {
        id: 1,
        type: 'job',
        title: 'Dairy Processing Technician',
        description: 'Responsible for operating and maintaining milk processing equipment, ensuring quality standards are met throughout production. The successful candidate will work closely with the quality assurance team to uphold hygiene and safety standards across all processing lines.',
        location: 'Limuru, Kiambu',
        deadline: '2026-05-15',
        ref: 'LDF/JOB/001/2026',
    },
    {
        id: 2,
        type: 'tender',
        title: 'Supply of Packaging Materials',
        description: 'Invitation to tender for the supply of UHT milk cartons, yoghurt cups and related packaging materials for the 2026/2027 financial year. Interested suppliers must be registered and provide proof of capacity to meet monthly supply volumes.',
        location: 'Limuru HQ',
        deadline: '2026-04-30',
        ref: 'LDF/TND/002/2026',
    },
    {
        id: 3,
        type: 'attachment',
        title: 'Industrial Attachment — Food Science',
        description: 'We are offering industrial attachment opportunities for students pursuing Food Science, Dairy Technology or related degree programmes. Attachees will gain hands-on experience across processing, quality control and distribution.',
        location: 'Limuru, Kiambu',
        deadline: '2026-05-01',
        ref: 'LDF/ATT/003/2026',
    },
    {
        id: 4,
        type: 'job',
        title: 'Sales & Distribution Officer',
        description: 'Drive product distribution across assigned routes, manage client relationships and ensure timely delivery of fresh dairy products. The role requires a valid driving licence and at least 2 years of sales experience in FMCG.',
        location: 'Nairobi / Kiambu',
        deadline: '2026-05-20',
        ref: 'LDF/JOB/004/2026',
    },
    {
        id: 5,
        type: 'tender',
        title: 'Milk Collection Vehicle Hire',
        description: 'Tender for hiring of refrigerated vehicles for milk collection from farmer collection centres to the Limuru processing plant. Vehicles must meet Kenya Bureau of Standards food transportation requirements.',
        location: 'Limuru, Kiambu',
        deadline: '2026-04-25',
        ref: 'LDF/TND/005/2026',
    },
];

/* ── Helpers ── */
const TYPE_META = {
    job:        { label: 'Job',        icon: Briefcase,     color: '#4dbde8', bg: 'rgba(77,189,232,0.12)',  border: 'rgba(77,189,232,0.28)'  },
    tender:     { label: 'Tender',     icon: FileText,      color: '#d97706', bg: 'rgba(217,119,6,0.12)',   border: 'rgba(217,119,6,0.28)'   },
    attachment: { label: 'Attachment', icon: GraduationCap, color: '#22c55e', bg: 'rgba(34,197,94,0.12)',   border: 'rgba(34,197,94,0.28)'   },
};

function daysLeft(deadlineStr) {
    const today = new Date(); today.setHours(0,0,0,0);
    return Math.ceil((new Date(deadlineStr) - today) / 86400000);
}
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-KE', { day:'numeric', month:'long', year:'numeric' });
}

function DaysChip({ days }) {
    if (days <= 0)  return <span className="op-chip op-chip-closed">Closed</span>;
    if (days <= 3)  return <span className="op-chip op-chip-urgent">{days}d left — Urgent</span>;
    if (days <= 7)  return <span className="op-chip op-chip-warn">{days} days left</span>;
    return              <span className="op-chip op-chip-ok">{days} days left</span>;
}

const FILTERS = ['all','job','tender','attachment'];
const FILTER_LABELS = { all:'All', job:'Jobs', tender:'Tenders', attachment:'Attachments' };

export default function Opportunities() {
    const [active,  setActive]  = useState('all');
    const [popup,   setPopup]   = useState(null); // opportunity object

    const filtered = opportunities.filter(o => active === 'all' || o.type === active);
    const openCount = opportunities.filter(o => daysLeft(o.deadline) > 0).length;

    const closePopup = () => setPopup(null);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(18px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes popIn {
                    from { opacity:0; transform:scale(0.95) translateY(16px); }
                    to   { opacity:1; transform:scale(1) translateY(0); }
                }
                .op-animate { opacity:0; animation:fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; }
                .op-d1 { animation-delay:0.06s; }
                .op-d2 { animation-delay:0.18s; }
                .op-d3 { animation-delay:0.30s; }

                /* ── Root ── */
                .op-root {
                    background: #f8fafc;
                    background-image: radial-gradient(circle, rgba(77,189,232,0.06) 1px, transparent 1px);
                    background-size: 28px 28px;
                    position: relative; overflow: hidden;
                    font-family: 'Outfit', sans-serif;
                    padding: 88px 24px 80px;
                    color: #111827;
                }
                .op-root::before {
                    content:''; position:absolute; top:0; left:0; right:0; height:3px;
                    background: linear-gradient(90deg, #4dbde8, #22c55e, #d97706);
                }
                .op-blob { position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none; }
                .op-blob-1 { width:480px;height:480px;background:rgba(77,189,232,0.07);top:-180px;right:-100px; }
                .op-blob-2 { width:340px;height:340px;background:rgba(34,197,94,0.05);bottom:-100px;left:-60px; }

                /* ── Inner ── */
                .op-inner { position:relative;z-index:1;max-width:960px;margin:0 auto; }

                /* ── Header ── */
                .op-header {
                    display:flex; flex-direction:column; gap:16px;
                    margin-bottom:36px;
                }
                @media(min-width:768px) {
                    .op-header { flex-direction:row; align-items:flex-end; justify-content:space-between; }
                }

                .op-eyebrow {
                    display:inline-flex; align-items:center; gap:8px;
                    font-size:11px; font-weight:500; letter-spacing:0.18em;
                    text-transform:uppercase; color:#6b7280; margin-bottom:10px;
                }
                .op-eyebrow-dot {
                    width:6px; height:6px; border-radius:50%; background:#4dbde8;
                    animation: pulse-op 2s ease-in-out infinite;
                }
                @keyframes pulse-op {
                    0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.4;transform:scale(0.7);}
                }
                .op-heading {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(32px,5vw,54px);
                    line-height:1.0; color:#111827; margin:0;
                }
                .op-heading em { font-style:italic; font-weight:400; color:#4dbde8; }

                /* Open count badge */
                .op-open-badge {
                    background:#111827; color:white;
                    font-size:11px; font-weight:600; letter-spacing:0.10em;
                    text-transform:uppercase; padding:8px 18px; border-radius:999px;
                    white-space:nowrap; align-self:flex-start;
                }
                @media(min-width:768px) { .op-open-badge { align-self:auto; } }

                /* ── Hint text ── */
                .op-hint {
                    font-size:13px; font-weight:300; color:#9ca3af;
                    margin-bottom:28px; display:flex; align-items:center; gap:6px;
                }
                .op-hint-arrow { font-size:15px; color:#4dbde8; }

                /* ── Filter tabs ── */
                .op-filters { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px; }
                .op-filter-btn {
                    font-size:12px; font-weight:500; letter-spacing:0.08em; text-transform:uppercase;
                    padding:7px 16px; border-radius:999px; border:1.5px solid #e5e7eb;
                    background:white; color:#6b7280; cursor:pointer;
                    transition:all 0.2s ease; display:flex; align-items:center; gap:6px;
                    font-family:'Outfit',sans-serif;
                }
                .op-filter-btn:hover { border-color:#4dbde8; color:#4dbde8; background:#f0f9ff; }
                .op-filter-btn.active { background:#111827; color:white; border-color:#111827; }
                .op-filter-count {
                    font-size:10px; padding:1px 7px; border-radius:999px;
                    background:#f3f4f6; color:#6b7280;
                }
                .op-filter-btn.active .op-filter-count { background:rgba(255,255,255,0.18); color:white; }

                /* ── List rows ── */
                .op-list { display:flex; flex-direction:column; gap:10px; }

                .op-row {
                    background:white; border:1px solid #e5e7eb; border-radius:16px;
                    padding:16px 20px;
                    display:flex; align-items:center; gap:16px; flex-wrap:wrap;
                    cursor:pointer;
                    transition:transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                    position:relative; overflow:hidden;
                }
                .op-row::before {
                    content:''; position:absolute; left:0; top:0; bottom:0;
                    width:4px; border-radius:16px 0 0 16px;
                    background:var(--row-color);
                }
                .op-row:hover {
                    transform:translateX(4px);
                    box-shadow:0 4px 20px rgba(0,0,0,0.08);
                    border-color:var(--row-color);
                }

                .op-row-badge {
                    display:inline-flex; align-items:center; gap:5px;
                    font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
                    padding:3px 10px; border-radius:999px; border:1px solid; flex-shrink:0;
                }
                .op-row-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(16px,2vw,19px);
                    color:#111827; margin:0; flex:1; min-width:140px;
                }
                .op-row-ref {
                    font-size:11px; letter-spacing:0.08em; text-transform:uppercase;
                    color:#9ca3af; white-space:nowrap;
                }
                .op-row-right {
                    display:flex; align-items:center; gap:10px; flex-shrink:0; margin-left:auto;
                }
                .op-row-cta {
                    display:inline-flex; align-items:center; gap:4px;
                    font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase;
                    color:#6b7280; transition:color 0.2s ease;
                }
                .op-row:hover .op-row-cta { color:#111827; }

                /* ── Days chips ── */
                .op-chip {
                    font-size:10px; font-weight:600; letter-spacing:0.08em;
                    text-transform:uppercase; padding:3px 10px; border-radius:999px; white-space:nowrap;
                }
                .op-chip-ok     { background:#dcfce7; color:#15803d; }
                .op-chip-warn   { background:#fef9c3; color:#a16207; }
                .op-chip-urgent { background:#fee2e2; color:#dc2626; }
                .op-chip-closed { background:#f3f4f6; color:#9ca3af; }

                /* ── Empty ── */
                .op-empty {
                    text-align:center; padding:48px 24px;
                    background:white; border:1px dashed #e5e7eb; border-radius:16px;
                    font-size:14px; font-weight:300; color:#9ca3af;
                }

                /* ── Notice ── */
                .op-notice {
                    display:flex; align-items:flex-start; gap:10px;
                    background:#fffbeb; border:1px solid rgba(217,119,6,0.25);
                    border-radius:12px; padding:14px 18px; margin-top:24px;
                    font-size:12px; font-weight:300; color:#78350f; line-height:1.65;
                }

                /* ══════════════════════════════
                   POPUP / MODAL
                ══════════════════════════════ */
                .op-overlay {
                    position:fixed; inset:0; z-index:999;
                    background:rgba(0,0,0,0.55);
                    backdrop-filter:blur(4px);
                    display:flex; align-items:center; justify-content:center;
                    padding:20px;
                    animation:fadeUp 0.2s ease forwards;
                }

                .op-modal {
                    background:white; border-radius:24px;
                    width:100%; max-width:560px;
                    max-height:90vh; overflow-y:auto;
                    position:relative;
                    box-shadow:0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.10);
                    animation:popIn 0.3s cubic-bezier(0.22,1,0.36,1) forwards;
                }

                /* Coloured top bar on modal */
                .op-modal-bar {
                    height:4px; border-radius:24px 24px 0 0;
                }

                .op-modal-body { padding:28px 32px 32px; }

                .op-modal-close {
                    position:absolute; top:16px; right:16px;
                    width:36px; height:36px; border-radius:50%;
                    background:#f3f4f6; border:none; cursor:pointer;
                    display:flex; align-items:center; justify-content:center;
                    color:#6b7280; transition:background 0.2s ease, color 0.2s ease;
                }
                .op-modal-close:hover { background:#e5e7eb; color:#111827; }

                .op-modal-badge {
                    display:inline-flex; align-items:center; gap:6px;
                    font-size:10px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase;
                    padding:4px 12px; border-radius:999px; border:1px solid; margin-bottom:16px;
                }
                .op-modal-title {
                    font-family:'Cormorant Garamond',serif;
                    font-weight:700; font-size:clamp(24px,4vw,32px);
                    line-height:1.1; color:#111827; margin:0 0 6px;
                }

                .op-modal-meta {
                    display:flex; flex-wrap:wrap; gap:16px;
                    margin:16px 0 20px; padding:16px 0;
                    border-top:1px solid #f3f4f6; border-bottom:1px solid #f3f4f6;
                }
                .op-modal-meta-item {
                    display:flex; align-items:center; gap:6px;
                    font-size:13px; color:#6b7280;
                }

                .op-modal-desc-label {
                    font-size:10px; font-weight:600; letter-spacing:0.14em;
                    text-transform:uppercase; color:#9ca3af; margin-bottom:8px; display:block;
                }
                .op-modal-desc {
                    font-size:14px; font-weight:300; line-height:1.80;
                    color:#374151; margin:0 0 24px;
                }

                .op-modal-footer {
                    display:flex; align-items:center; justify-content:space-between;
                    flex-wrap:wrap; gap:12px;
                    background:#f9fafb; border-radius:14px; padding:16px 20px;
                }
                .op-modal-deadline {
                    font-size:13px; color:#374151;
                    display:flex; align-items:center; gap:6px;
                }

                .op-modal-apply {
                    display:inline-flex; align-items:center; gap:8px;
                    font-family:'Outfit',sans-serif;
                    font-size:12px; font-weight:600; letter-spacing:0.10em; text-transform:uppercase;
                    background:#111827; color:white;
                    padding:11px 22px; border-radius:10px; border:none;
                    cursor:pointer; text-decoration:none;
                    transition:background 0.2s ease, transform 0.15s ease;
                }
                .op-modal-apply:hover { background:#1f2937; transform:translateY(-1px); }
                .op-modal-apply-closed {
                    background:#f3f4f6; color:#9ca3af; cursor:not-allowed;
                }
                .op-modal-apply-closed:hover { background:#f3f4f6; transform:none; }
            `}</style>

            <section className="op-root">
                <div className="op-blob op-blob-1" />
                <div className="op-blob op-blob-2" />

                <div className="op-inner">

                    {/* ── Header ── */}
                    <div className="op-header op-animate op-d1">
                        <div>
                            <p className="op-eyebrow">
                                <span className="op-eyebrow-dot" />
                                Limuru Dairy Farmers Co-Operative
                            </p>
                            <h2 className="op-heading">
                                Current <em>Opportunities</em>
                            </h2>
                        </div>
                        <span className="op-open-badge">
                            {openCount} Open {openCount === 1 ? 'Opportunity' : 'Opportunities'}
                        </span>
                    </div>

                    {/* ── Hint ── */}
                    <p className="op-hint op-animate op-d2">
                        <span className="op-hint-arrow">↓</span>
                        Click on any listing below to view full details and apply
                    </p>

                    {/* ── Filter tabs ── */}
                    <div className="op-filters op-animate op-d2">
                        {FILTERS.map(f => {
                            const count = f === 'all' ? opportunities.length : opportunities.filter(o => o.type === f).length;
                            return (
                                <button
                                    key={f}
                                    className={`op-filter-btn ${active === f ? 'active' : ''}`}
                                    onClick={() => setActive(f)}
                                >
                                    {FILTER_LABELS[f]}
                                    <span className="op-filter-count">{count}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* ── List ── */}
                    <div className="op-list op-animate op-d3">
                        {filtered.length === 0 ? (
                            <div className="op-empty">No {FILTER_LABELS[active].toLowerCase()} at the moment — check back soon.</div>
                        ) : (
                            filtered.map(opp => {
                                const meta = TYPE_META[opp.type];
                                const days = daysLeft(opp.deadline);
                                const Icon = meta.icon;
                                return (
                                    <div
                                        key={opp.id}
                                        className="op-row"
                                        style={{ '--row-color': meta.color }}
                                        onClick={() => setPopup(opp)}
                                    >
                                        <span
                                            className="op-row-badge"
                                            style={{ background:meta.bg, color:meta.color, borderColor:meta.border }}
                                        >
                                            <Icon size={10} /> {meta.label}
                                        </span>

                                        <h3 className="op-row-title">{opp.title}</h3>

                                        <span className="op-row-ref">{opp.ref}</span>

                                        <div className="op-row-right">
                                            <DaysChip days={days} />
                                            <span className="op-row-cta">
                                                View <ChevronRight size={13} />
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* ── Notice ── */}
                    <div className="op-notice">
                        <AlertCircle size={14} style={{ flexShrink:0, marginTop:2, color:'#d97706' }} />
                        <span>
                            Send applications to <strong>limurudairy@gmail.com</strong> quoting the reference number.
                            Only shortlisted candidates will be contacted. Limuru Dairy is an equal opportunity employer.
                        </span>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════
                POPUP MODAL
            ══════════════════════════════ */}
            {popup && (() => {
                const meta = TYPE_META[popup.type];
                const days = daysLeft(popup.deadline);
                const closed = days <= 0;
                const Icon = meta.icon;
                return (
                    <div className="op-overlay" onClick={closePopup}>
                        <div className="op-modal" onClick={e => e.stopPropagation()}>

                            {/* Coloured bar */}
                            <div className="op-modal-bar" style={{ background: meta.color }} />

                            <div className="op-modal-body">

                                {/* Close button */}
                                <button className="op-modal-close" onClick={closePopup}>
                                    <X size={16} />
                                </button>

                                {/* Badge */}
                                <span
                                    className="op-modal-badge"
                                    style={{ background:meta.bg, color:meta.color, borderColor:meta.border }}
                                >
                                    <Icon size={11} /> {meta.label}
                                </span>

                                {/* Title */}
                                <h2 className="op-modal-title">{popup.title}</h2>

                                {/* Meta strip */}
                                <div className="op-modal-meta">
                                    <span className="op-modal-meta-item">
                                        <Hash size={13} color="#9ca3af" />
                                        {popup.ref}
                                    </span>
                                    <span className="op-modal-meta-item">
                                        <MapPin size={13} color="#9ca3af" />
                                        {popup.location}
                                    </span>
                                    <span className="op-modal-meta-item">
                                        <Clock size={13} color="#9ca3af" />
                                        {closed ? 'Applications closed' : `Deadline: ${formatDate(popup.deadline)}`}
                                    </span>
                                </div>

                                {/* Description */}
                                <span className="op-modal-desc-label">About this opportunity</span>
                                <p className="op-modal-desc">{popup.description}</p>

                                {/* Footer */}
                                <div className="op-modal-footer">
                                    <div>
                                        <DaysChip days={days} />
                                        {!closed && (
                                            <p style={{ fontSize:'11px', color:'#9ca3af', margin:'6px 0 0', fontWeight:300 }}>
                                                Apply before {formatDate(popup.deadline)}
                                            </p>
                                        )}
                                    </div>

                                    {closed ? (
                                        <span className={`op-modal-apply op-modal-apply-closed`}>
                                            Applications Closed
                                        </span>
                                    ) : (
                                        <a
                                            href={`mailto:limurudairy@gmail.com?subject=Application: ${popup.title} (${popup.ref})`}
                                            className="op-modal-apply"
                                        >
                                            Apply Now <ChevronRight size={14} />
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })()}
        </>
    );
}