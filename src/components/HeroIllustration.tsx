export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[540px] select-none"
      aria-hidden="true"
    >
      <defs>
        {/* ── Gradients ── */}
        <linearGradient id="gCyan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1EC8E8" />
          <stop offset="100%" stopColor="#0EB8D8" />
        </linearGradient>
        <linearGradient id="gIndigo" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5353C8" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id="gOrange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#FFAA55" />
        </linearGradient>
        <linearGradient id="gScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1f45" />
          <stop offset="100%" stopColor="#081330" />
        </linearGradient>
        <linearGradient id="gScreenTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#5353C8" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#FF7A1A" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="gChartArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1EC8E8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1EC8E8" stopOpacity="0" />
        </linearGradient>

        {/* ── Glow filter ── */}
        <filter id="fGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* ── Card shadow ── */}
        <filter id="fCard" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0d1b3e" floodOpacity="0.11" />
        </filter>

        {/* ── Soft shadow for laptop ── */}
        <filter id="fLaptop" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#0d1b3e" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* ══════════════════════════════════
          BACKGROUND DECORATIVE RINGS
      ══════════════════════════════════ */}
      <circle cx="260" cy="240" r="195" stroke="#1EC8E8" strokeWidth="0.6" strokeOpacity="0.09" strokeDasharray="6 10" />
      <circle cx="260" cy="240" r="245" stroke="#5353C8" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="4 12" />

      {/* Ambient blobs */}
      <circle cx="260" cy="240" r="140" fill="#1EC8E8" fillOpacity="0.025" />
      <circle cx="380" cy="150" r="80"  fill="#818CF8" fillOpacity="0.04" />
      <circle cx="140" cy="340" r="70"  fill="#FF7A1A" fillOpacity="0.03" />

      {/* Dot grid (subtle) */}
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={40 + col * 62}
            cy={80 + row * 68}
            r="1.2"
            fill="#0d1b3e"
            fillOpacity="0.04"
          />
        ))
      )}

      {/* ══════════════════════════════════
          LAPTOP MOCKUP
      ══════════════════════════════════ */}
      <g filter="url(#fLaptop)">
        {/* Bezel */}
        <rect x="95" y="138" width="310" height="206" rx="12" fill="#111f40" />
        {/* Screen */}
        <rect x="105" y="147" width="290" height="189" rx="7" fill="url(#gScreen)" />

        {/* ── Top bar ── */}
        <rect x="105" y="147" width="290" height="28" rx="7" fill="#0c1a3a" />
        <rect x="105" y="163" width="290" height="12" fill="#0c1a3a" />
        {/* Traffic lights */}
        <circle cx="120" cy="161" r="4.5" fill="#FF5F57" />
        <circle cx="134" cy="161" r="4.5" fill="#FEBC2E" />
        <circle cx="148" cy="161" r="4.5" fill="#28C840" />
        {/* Tab chip */}
        <rect x="164" y="153" width="76" height="16" rx="4" fill="#162148" />
        <rect x="170" y="156" width="8" height="8" rx="2" fill="#1EC8E8" fillOpacity="0.5" />
        <rect x="182" y="158" width="40" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />

        {/* ── Sidebar ── */}
        <rect x="105" y="175" width="52" height="161" fill="#0a1630" />
        {/* Nav items */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="117" y={187 + i * 16} width={i === 0 ? 28 : i === 2 ? 22 : 20} height="6" rx="3"
              fill={i === 0 ? "#1EC8E8" : "#ffffff"} fillOpacity={i === 0 ? 0.7 : 0.1} />
          </g>
        ))}
        {/* Avatar */}
        <circle cx="131" cy="320" r="10" fill="#1EC8E8" fillOpacity="0.15" />
        <circle cx="131" cy="317" r="6"  fill="#1EC8E8" fillOpacity="0.4" />

        {/* ── Main content ── */}
        {/* Heading */}
        <rect x="165" y="180" width="82" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.75" />
        <rect x="165" y="192" width="54" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2" />

        {/* ── Stat tiles ── */}
        {/* Cyan tile */}
        <rect x="165" y="204" width="58" height="44" rx="7" fill="#1EC8E8" fillOpacity="0.13" stroke="#1EC8E8" strokeWidth="0.6" strokeOpacity="0.35" />
        <text x="194" y="220" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" fill="#1EC8E8" textAnchor="middle">94%</text>
        <text x="194" y="231" fontFamily="system-ui,sans-serif" fontSize="5" fill="#ffffff" fillOpacity="0.4" textAnchor="middle">PLACEMENT</text>
        <rect x="173" y="236" width="42" height="3" rx="1.5" fill="#0a1628" />
        <rect x="173" y="236" width="40" height="3" rx="1.5" fill="#1EC8E8" fillOpacity="0.7" />

        {/* Indigo tile */}
        <rect x="231" y="204" width="58" height="44" rx="7" fill="#5353C8" fillOpacity="0.13" stroke="#818CF8" strokeWidth="0.6" strokeOpacity="0.35" />
        <text x="260" y="220" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="700" fill="#818CF8" textAnchor="middle">847</text>
        <text x="260" y="231" fontFamily="system-ui,sans-serif" fontSize="5" fill="#ffffff" fillOpacity="0.4" textAnchor="middle">GATE RANK</text>
        <rect x="239" y="236" width="42" height="3" rx="1.5" fill="#0a1628" />
        <rect x="239" y="236" width="33" height="3" rx="1.5" fill="#818CF8" fillOpacity="0.7" />

        {/* Orange tile */}
        <rect x="297" y="204" width="58" height="44" rx="7" fill="#FF7A1A" fillOpacity="0.1" stroke="#FF7A1A" strokeWidth="0.6" strokeOpacity="0.3" />
        <text x="326" y="220" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="#FFAA55" textAnchor="middle">4.9 / 5</text>
        <text x="326" y="231" fontFamily="system-ui,sans-serif" fontSize="5" fill="#ffffff" fillOpacity="0.4" textAnchor="middle">AVG RATING</text>
        <rect x="305" y="236" width="42" height="3" rx="1.5" fill="#0a1628" />
        <rect x="305" y="236" width="42" height="3" rx="1.5" fill="#FF7A1A" fillOpacity="0.7" />

        {/* ── Line chart ── */}
        <rect x="165" y="256" width="190" height="68" rx="6" fill="#ffffff" fillOpacity="0.025" stroke="#ffffff" strokeWidth="0.4" strokeOpacity="0.07" />
        <text x="173" y="267" fontFamily="system-ui,sans-serif" fontSize="5.5" fill="#ffffff" fillOpacity="0.38">PERFORMANCE TREND</text>
        {/* Area */}
        <polygon
          points="173,316 193,308 213,311 235,301 256,294 279,286 302,279 322,271 343,263 355,257 355,320 173,320"
          fill="url(#gChartArea)"
        />
        {/* Line */}
        <polyline
          points="173,316 193,308 213,311 235,301 256,294 279,286 302,279 322,271 343,263 355,257"
          stroke="url(#gCyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Dots */}
        {([[193,308],[235,301],[279,286],[322,271],[355,257]] as [number,number][]).map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={i === 4 ? 3.5 : 2} fill="#1EC8E8" />
            {i === 4 && <circle cx={cx} cy={cy} r={7} fill="#1EC8E8" fillOpacity="0.2" />}
          </g>
        ))}

        {/* ── Laptop base / hinge ── */}
        <rect x="83"  y="344" width="334" height="9"  rx="4.5" fill="#0f1c3e" />
        <rect x="124" y="352" width="252" height="5"  rx="2.5" fill="#0c1832" />
        <rect x="104" y="356" width="292" height="4"  rx="2"   fill="#0a1428" />
      </g>

      {/* ══════════════════════════════════
          NEURAL NETWORK (above laptop)
      ══════════════════════════════════ */}
      {/* Connection lines */}
      <line x1="258" y1="96"  x2="176" y2="128" stroke="#1EC8E8" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="5 4" />
      <line x1="258" y1="96"  x2="340" y2="126" stroke="#818CF8" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="5 4" />
      <line x1="176" y1="128" x2="124" y2="110" stroke="#1EC8E8" strokeWidth="0.6" strokeOpacity="0.2" />
      <line x1="340" y1="126" x2="400" y2="106" stroke="#818CF8" strokeWidth="0.6" strokeOpacity="0.2" />
      <line x1="258" y1="96"  x2="300" y2="116" stroke="#FF7A1A" strokeWidth="0.6" strokeOpacity="0.22" />
      <line x1="176" y1="128" x2="210" y2="138" stroke="#1EC8E8" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* Central node — pulsing */}
      <circle cx="258" cy="96" r="22" fill="none" stroke="#1EC8E8" strokeWidth="1.5" strokeOpacity="0">
        <animate attributeName="r"            values="22;38;22"    dur="3s" repeatCount="indefinite" />
        <animate attributeName="strokeOpacity" values="0.45;0;0.45" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="258" cy="96" r="19" fill="#0d1b3e" stroke="#1EC8E8" strokeWidth="1.6" filter="url(#fGlow)" />
      <circle cx="258" cy="96" r="12" fill="#1EC8E8" fillOpacity="0.18" />
      {/* Lightning bolt inside */}
      <path d="M254,87 L249,96 L257,96 L253,106 L264,95 L256,95 L261,87 Z" fill="#1EC8E8" fillOpacity="0.95" />

      {/* Satellite nodes */}
      <circle cx="176" cy="128" r="12" fill="#0d1b3e" stroke="#818CF8" strokeWidth="1.3" />
      <circle cx="176" cy="128" r="7"  fill="#818CF8" fillOpacity="0.22" />
      {/* Check mark icon */}
      <path d="M171,128 L174,131 L181,124" stroke="#818CF8" strokeWidth="1.4" strokeLinecap="round" fill="none" />

      <circle cx="340" cy="126" r="12" fill="#0d1b3e" stroke="#1EC8E8" strokeWidth="1.3" />
      <circle cx="340" cy="126" r="7"  fill="#1EC8E8" fillOpacity="0.22" />
      {/* Book icon */}
      <rect x="334" y="120" width="12" height="9" rx="1.5" fill="#1EC8E8" fillOpacity="0.7" />
      <line x1="340" y1="120" x2="340" y2="129" stroke="#0d1b3e" strokeWidth="0.9" />

      <circle cx="124" cy="110" r="9" fill="#0d1b3e" stroke="#FF7A1A" strokeWidth="1.1" />
      <circle cx="124" cy="110" r="5" fill="#FF7A1A" fillOpacity="0.28" />

      <circle cx="400" cy="106" r="9" fill="#0d1b3e" stroke="#818CF8" strokeWidth="1.1" />
      <circle cx="400" cy="106" r="5" fill="#818CF8" fillOpacity="0.28" />

      <circle cx="300" cy="116" r="7.5" fill="#0d1b3e" stroke="#1EC8E8" strokeWidth="1" />
      <circle cx="300" cy="116" r="4"   fill="#1EC8E8" fillOpacity="0.28" />

      {/* ══════════════════════════════════
          FLOATING STAT CARDS
      ══════════════════════════════════ */}

      {/* Card 1 — AI Study Plan (top-right) */}
      <g filter="url(#fCard)" style={{ animation: "float 4s ease-in-out infinite" }}>
        <rect x="364" y="148" width="152" height="64" rx="13" fill="white" />
        {/* icon bg */}
        <rect x="376" y="160" width="32" height="32" rx="8" fill="#1EC8E8" fillOpacity="0.12" />
        {/* lightning icon */}
        <path d="M389,167 L385,174 L391,174 L388,181 L396,172 L390,172 L394,167 Z" fill="#1EC8E8" />
        {/* text */}
        <text x="416" y="170" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0d1b3e">AI Study Plan</text>
        <text x="416" y="181" fontFamily="system-ui,sans-serif" fontSize="6"   fill="#0d1b3e" fillOpacity="0.42">Active · 3 modules</text>
        {/* progress */}
        <rect x="416" y="187" width="84" height="4" rx="2" fill="#eef0f7" />
        <rect x="416" y="187" width="58" height="4" rx="2" fill="url(#gCyan)" />
      </g>

      {/* Card 2 — Placement (left) */}
      <g filter="url(#fCard)" style={{ animation: "float 4s ease-in-out infinite 1s" }}>
        <rect x="2" y="216" width="152" height="64" rx="13" fill="white" />
        {/* icon bg */}
        <rect x="14" y="228" width="32" height="32" rx="8" fill="#FF7A1A" fillOpacity="0.12" />
        {/* crosshair target icon */}
        <circle cx="30" cy="244" r="8" stroke="#FF7A1A" strokeWidth="1.5" fill="none" />
        <circle cx="30" cy="244" r="3" fill="#FF7A1A" />
        <line x1="30" y1="234" x2="30" y2="237" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="251" x2="30" y2="254" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="244" x2="23" y2="244" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="37" y1="244" x2="40" y2="244" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round" />
        {/* text */}
        <text x="54" y="238" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0d1b3e">Placement Ready</text>
        <text x="54" y="249" fontFamily="system-ui,sans-serif" fontSize="6"   fill="#0d1b3e" fillOpacity="0.42">94% mock score</text>
        {/* progress */}
        <rect x="54" y="255" width="84" height="4" rx="2" fill="#eef0f7" />
        <rect x="54" y="255" width="79" height="4" rx="2" fill="url(#gOrange)" />
      </g>

      {/* Card 3 — GATE Rank (bottom-right) */}
      <g filter="url(#fCard)" style={{ animation: "float 4s ease-in-out infinite 0.5s" }}>
        <rect x="366" y="314" width="152" height="64" rx="13" fill="white" />
        {/* icon bg */}
        <rect x="378" y="326" width="32" height="32" rx="8" fill="#5353C8" fillOpacity="0.12" />
        {/* trophy icon */}
        <rect x="387" y="328" width="14" height="10" rx="2" fill="none" stroke="#818CF8" strokeWidth="1.4" />
        <path d="M387,332 Q383,332 383,337 Q383,341 387,341" stroke="#818CF8" strokeWidth="1.3" fill="none" />
        <path d="M401,332 Q405,332 405,337 Q405,341 401,341" stroke="#818CF8" strokeWidth="1.3" fill="none" />
        <rect x="391" y="338" width="6" height="4" fill="#818CF8" fillOpacity="0.6" />
        <rect x="388" y="342" width="12" height="2.5" rx="1.2" fill="#818CF8" fillOpacity="0.8" />
        {/* text */}
        <text x="418" y="338" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="#0d1b3e">GATE Rank #847</text>
        <text x="418" y="349" fontFamily="system-ui,sans-serif" fontSize="6"   fill="#0d1b3e" fillOpacity="0.42">Top 2% nationally</text>
        {/* progress */}
        <rect x="418" y="355" width="84" height="4" rx="2" fill="#eef0f7" />
        <rect x="418" y="355" width="70" height="4" rx="2" fill="url(#gIndigo)" />
      </g>

      {/* ══════════════════════════════════
          DECORATIVE ACCENTS
      ══════════════════════════════════ */}
      {/* Graduation cap */}
      <g transform="translate(66,136)" opacity="0.78">
        <polygon points="0,-20 -22,-11 0,-2 22,-11" fill="#FF7A1A" />
        <rect x="-13" y="-2" width="26" height="7" rx="2.5" fill="#FF7A1A" />
        <line x1="22" y1="-11" x2="22" y2="5"  stroke="#FF7A1A" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="22" cy="7" r="3.5" fill="#FF7A1A" />
      </g>

      {/* 4-point sparkle stars */}
      <path d="M464,198 L466.5,205 L474,207.5 L466.5,210 L464,217 L461.5,210 L454,207.5 L461.5,205 Z"
        fill="#1EC8E8" fillOpacity="0.75" />
      <path d="M76,315 L77.8,320 L83,322 L77.8,324 L76,329 L74.2,324 L69,322 L74.2,320 Z"
        fill="#818CF8" fillOpacity="0.65" />
      <path d="M46,168 L47.4,172 L52,173.5 L47.4,175 L46,179 L44.6,175 L40,173.5 L44.6,172 Z"
        fill="#FF7A1A" fillOpacity="0.55" />

      {/* Small floating dots */}
      <circle cx="82"  cy="72"  r="4"   fill="#1EC8E8" fillOpacity="0.3" />
      <circle cx="460" cy="136" r="3"   fill="#818CF8" fillOpacity="0.4" />
      <circle cx="436" cy="398" r="4.5" fill="#FF7A1A" fillOpacity="0.22" />
      <circle cx="62"  cy="402" r="3"   fill="#1EC8E8" fillOpacity="0.28" />
      <circle cx="180" cy="438" r="2.5" fill="#5353C8" fillOpacity="0.3" />

      {/* Orbit travel dot */}
      <circle r="3.5" fill="#1EC8E8" fillOpacity="0.75">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href="#orbitRing" />
        </animateMotion>
      </circle>
      <path id="orbitRing" d="M260,45 A195,195 0 1,1 259.9,45" fill="none" />

      {/* Secondary orbit dot */}
      <circle r="2.5" fill="#818CF8" fillOpacity="0.6">
        <animateMotion dur="14s" repeatCount="indefinite" keyPoints="0.5;1;0.5" keyTimes="0;0.5;1" calcMode="linear">
          <mpath href="#orbitRing2" />
        </animateMotion>
      </circle>
      <path id="orbitRing2" d="M260,100 A140,140 0 1,1 259.9,100" fill="none" />
    </svg>
  );
}
