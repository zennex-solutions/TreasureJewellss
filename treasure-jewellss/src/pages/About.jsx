import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: "15+", label: "Years of Craft" },
  { value: "50K+", label: "Happy Customers" },
  { value: "2000+", label: "Unique Designs" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "✦",
    title: "Passion for Excellence",
    desc: "Every piece is crafted with devotion to perfection and meticulous attention to detail.",
  },
  {
    icon: "◈",
    title: "Premium Quality",
    desc: "We source only the finest materials to create jewelry that endures across seasons.",
  },
  {
    icon: "♡",
    title: "Customer First",
    desc: "Your satisfaction and happiness are the heartbeat behind everything we create.",
  },
  {
    icon: "❋",
    title: "Timeless Design",
    desc: "Marrying traditional craftsmanship with contemporary aesthetics in every piece.",
  },
];

const team = [
  { name: "Priya Sharma", role: "Founder & Creative Director", initials: "PS" },
  { name: "Meera Kapoor", role: "Head of Design", initials: "MK" },
  { name: "Anjali Nair", role: "Master Artisan", initials: "AN" },
];

const process = [
  { step: "01", title: "Design", desc: "Every collection begins with hand-drawn sketches inspired by culture, nature, and art." },
  { step: "02", title: "Source", desc: "We carefully select high-quality metals, stones, and materials from trusted suppliers." },
  { step: "03", title: "Craft", desc: "Skilled artisans bring each design to life using time-honored techniques." },
  { step: "04", title: "Curate", desc: "Each piece is inspected and curated before it reaches your hands." },
];

const useIntersectionObserver = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div style={{ backgroundColor: "#FAFAF7", color: "#1a1a18", overflowX: "hidden" }}>

      <style>{`

        * { box-sizing: border-box; margin: 0; padding: 0; }

        

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-4deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes drawLine {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          animation: heroReveal 1.2s ease 0.3s both;
        }
        .hero-sub {
          animation: heroReveal 1.2s ease 0.6s both;
        }
        .hero-body {
          animation: heroReveal 1.2s ease 0.9s both;
        }

        .ornament-float { animation: float 6s ease-in-out infinite; }
        .ornament-float-b { animation: floatB 8s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(90deg, #8B6914, #D4AF5A, #C49A2E, #8B6914);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        .stat-card:hover .stat-value {
          -webkit-text-fill-color: transparent;
          background: linear-gradient(135deg, #8B6914, #D4AF5A);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .value-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(139, 105, 20, 0.12);
        }

        .process-step:hover .step-number {
          color: #D4AF5A;
        }

        .team-card {
          transition: transform 0.4s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
        }
        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, #C49A2E);
        }
        .divider-ornament::after {
          background: linear-gradient(90deg, #C49A2E, transparent);
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C49A2E;
        }

        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }

        .gold-btn {
          background: linear-gradient(135deg, #8B6914, #D4AF5A, #8B6914);
          background-size: 200% auto;
          color: #fff;
         
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          transition: background-position 0.5s ease, transform 0.3s ease;
          border-radius: 2px;
        }
        .gold-btn:hover {
          background-position: right center;
          transform: translateY(-2px);
        }

        .quote-section {
          background: linear-gradient(135deg, #1a1a18 0%, #2a2620 50%, #1a1a18 100%);
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(160deg, #1a1a18 0%, #2c2418 40%, #1a1a18 100%)" }}>
        <div className="noise-overlay" />

        {/* Floating ornaments */}
        <div className="ornament-float" style={{ position: "absolute", top: "12%", left: "8%", fontSize: "80px", color: "#C49A2E", opacity: 0.08, fontStyle: "italic", fontFamily: "Georgia" }}>✦</div>
        <div className="ornament-float-b" style={{ position: "absolute", bottom: "15%", right: "7%", fontSize: "100px", color: "#C49A2E", opacity: 0.06, fontStyle: "italic" }}>◈</div>
        <div className="ornament-float" style={{ position: "absolute", top: "60%", left: "3%", fontSize: "40px", color: "#C49A2E", opacity: 0.1, animationDelay: "2s" }}>❋</div>
        <div className="ornament-float-b" style={{ position: "absolute", top: "25%", right: "12%", fontSize: "50px", color: "#C49A2E", opacity: 0.07, animationDelay: "1s" }}>♡</div>

        {/* Radial glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,46,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Thin border frame */}
        <div style={{ position: "absolute", inset: "32px", border: "1px solid rgba(196,154,46,0.15)", borderRadius: "4px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "800px" }}>
          <div className="section-label hero-sub" style={{ color: "#C49A2E", marginBottom: "24px" }}>About Us</div>

          <h1 className="hero-title" style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 300, lineHeight: 1.1, color: "#FAFAF7", letterSpacing: "-1px" }}>
            Crafting Stories,<br />
            <em className="shimmer-text" style={{ fontStyle: "italic", fontWeight: 400 }}>Creating Memories</em>
          </h1>

          <div className="hero-body" style={{ marginTop: "32px" }}>
            <div className="divider-ornament" style={{ marginBottom: "28px" }}>
              <span style={{ color: "#C49A2E", fontSize: "18px" }}>✦</span>
            </div>
            <p style={{ color: "rgba(250,250,247,0.65)", fontSize: "16px", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto", fontWeight: 300 }}>
              At Treasure Jewells, we believe jewelry is more than adornment — it's a celebration of life's most precious moments.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(196,154,46,0.6)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, #C49A2E, transparent)" }} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: "#C49A2E", padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-wrapper">
          <div className="marquee-inner">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#1a1a18", marginRight: "48px", fontWeight: 500 }}>
                ✦ Handcrafted with Love &nbsp; ✦ &nbsp; Since 2010 &nbsp; ✦ &nbsp; Timeless Elegance &nbsp; ✦ &nbsp; Crafted for You &nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section style={{ padding: "100px 24px", background: "#FAFAF7" }}>
        <FadeIn>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2px", border: "1px solid #E8E0D0" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card" style={{ padding: "52px 32px", textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid #E8E0D0" : "none", cursor: "default" }}>
                <div className="stat-value" style={{ fontSize: "56px", fontWeight: 300, letterSpacing: "-2px", color: "#1a1a18", transition: "all 0.3s ease", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#8B7355", marginTop: "12px", fontWeight: 400 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ── JOURNEY ── */}
      <section style={{ padding: "80px 24px 120px", background: "#F4F0E8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Image block */}
          <FadeIn delay={0}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "100%", paddingBottom: "120%", background: "linear-gradient(135deg, #d5c9b5 0%, #c4b89a 100%)", borderRadius: "2px", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "80px", color: "rgba(139,105,20,0.25)" }}>◈</span>
                </div>
              </div>
              {/* Offset accent block */}
              <div style={{ position: "absolute", bottom: "-24px", right: "-24px", width: "140px", height: "140px", background: "#C49A2E", opacity: 0.15, borderRadius: "2px", zIndex: 0 }} />
              <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "80px", height: "80px", border: "2px solid #C49A2E", opacity: 0.4, borderRadius: "2px" }} />
            </div>
          </FadeIn>

          {/* Text block */}
          <FadeIn delay={0.2}>
            <div>
              <div className="section-label" style={{ marginBottom: "16px" }}>Our Journey</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.5px" }}>
                A Legacy of Elegance<br />
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>Since 2010</em>
              </h2>
              <div style={{ width: "48px", height: "2px", background: "linear-gradient(90deg, #C49A2E, transparent)", margin: "24px 0" }} />
              <p style={{ color: "#5a5040", fontSize: "15px", lineHeight: 1.9, fontWeight: 300 }}>
                Founded with a vision to make luxury jewelry accessible to every woman, Treasure Jewells has grown from a small boutique into a beloved brand trusted by thousands.
              </p>
              <p style={{ color: "#5a5040", fontSize: "15px", lineHeight: 1.9, marginTop: "20px", fontWeight: 300 }}>
                Our journey began with a simple belief: that every woman deserves to feel beautiful and confident. Today, we honor that vision by creating exquisite imitation jewelry that fuses traditional artistry with contemporary design.
              </p>
              <p style={{ color: "#5a5040", fontSize: "15px", lineHeight: 1.9, marginTop: "20px", fontWeight: 300 }}>
                From bridal collections to everyday elegance — each piece tells a unique story and celebrates the moments that matter most in your life.
              </p>
              <button className="gold-btn" style={{ marginTop: "40px" }}>Explore Our Story</button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="quote-section" style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        <div className="noise-overlay" />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,46,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <FadeIn>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "96px", color: "#C49A2E", opacity: 0.3, lineHeight: 0.6, fontFamily: "Georgia", marginBottom: "32px" }}>"</div>
            <blockquote style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 300, fontStyle: "italic", color: "#FAFAF7", lineHeight: 1.5, letterSpacing: "0.2px" }}>
              Jewelry is not just decoration. It is a whisper of who you are and a testament to where you've been.
            </blockquote>
            <div style={{ marginTop: "36px" }}>
              <div style={{ width: "40px", height: "1px", background: "#C49A2E", margin: "0 auto 16px" }} />
              <p style={{ color: "#C49A2E", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>The Treasure Jewells Philosophy</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: "120px 24px", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Our Purpose</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>Mission & Vision</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {[
              {
                label: "Mission",
                icon: "◈",
                text: "To empower women through beautiful, affordable jewelry that celebrates their unique style and individuality. We strive to make every woman feel extraordinary, confident, and cherished.",
                bg: "#1a1a18",
                color: "#FAFAF7",
              },
              {
                label: "Vision",
                icon: "✦",
                text: "To become the most trusted name in imitation jewelry, known for exceptional quality, timeless designs, and meaningful customer relationships that last a lifetime.",
                bg: "#F4F0E8",
                color: "#1a1a18",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: item.bg, padding: "72px 56px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: "-20px", right: "24px", fontSize: "120px", opacity: 0.04, color: "#C49A2E", fontFamily: "Georgia" }}>{item.icon}</div>
                  <div className="section-label" style={{ color: "#C49A2E", marginBottom: "24px" }}>{item.label}</div>
                  <p style={{ color: item.color === "#1a1a18" ? "#5a5040" : "rgba(250,250,247,0.7)", fontSize: "16px", lineHeight: 1.9, fontWeight: 300 }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFT PROCESS ── */}
      <section style={{ padding: "120px 24px", background: "#F4F0E8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>How We Work</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>The Craft Process</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0" }}>
            {process.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="process-step" style={{ padding: "48px 36px", borderRight: i < process.length - 1 ? "1px solid #D8D0C0" : "none", cursor: "default" }}>
                  <div className="step-number" style={{ fontSize: "56px", fontWeight: 300, color: "#D8D0C0", lineHeight: 1, transition: "color 0.3s ease", letterSpacing: "-2px" }}>{p.step}</div>
                  <div style={{ width: "32px", height: "1px", background: "#C49A2E", margin: "20px 0 20px" }} />
                  <h3 style={{ fontSize: "22px", fontWeight: 500, marginBottom: "12px" }}>{p.title}</h3>
                  <p style={{ fontSize: "14px", color: "#7a6b54", lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: "120px 24px", background: "#FAFAF7" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>What We Stand For</div>
              <h2 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 300 }}>Our Core Values</h2>
              <div className="divider-ornament" style={{ marginTop: "24px" }}>
                <span style={{ color: "#C49A2E", fontSize: "16px" }}>✦</span>
              </div>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="value-card" style={{ background: "#F4F0E8", padding: "48px 36px", borderRadius: "2px", textAlign: "center", border: "1px solid transparent", cursor: "default" }}>
                  <div style={{ fontSize: "36px", color: "#C49A2E", marginBottom: "24px", lineHeight: 1 }}>{v.icon}</div>
                  <h3 style={{ fontSize: "20px", fontWeight: 500, marginBottom: "16px", letterSpacing: "0.2px" }}>{v.title}</h3>
                  <p style={{ fontSize: "14px", color: "#7a6b54", lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    

      {/* ── CTA BANNER ── */}
      <section style={{ padding: "120px 24px", background: "#F4F0E8", textAlign: "center" }}>
        <FadeIn>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "16px" }}>Ready to Explore?</div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, lineHeight: 1.2, marginBottom: "24px" }}>
              Find Your <em style={{ fontStyle: "italic" }}>Perfect</em> Piece
            </h2>
            <p style={{ fontSize: "15px", color: "#7a6b54", lineHeight: 1.8, fontWeight: 300, marginBottom: "48px" }}>
              Explore our curated collections — where every jewel carries the warmth of a story waiting to be yours.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="gold-btn">Shop Collection</button>
              <button style={{ background: "transparent", border: "1px solid #1a1a18", color: "#1a1a18", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 36px", cursor: "pointer", borderRadius: "2px", transition: "all 0.3s ease", fontWeight: 400 }}
                onMouseEnter={e => { e.target.style.background = "#1a1a18"; e.target.style.color = "#FAFAF7"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#1a1a18"; }}>
                Contact Us
              </button>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
};

export default About;








