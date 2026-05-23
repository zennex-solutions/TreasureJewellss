import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

/* ─── Google Fonts ─── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap";
document.head.appendChild(fontLink);

/* ─── Inline styles / keyframes ─── */
const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  :root{
    --gold:#c9a84c;
    --gold-light:#e4c97e;
    --gold-pale:#f5e9c8;
    --dark:#1a120b;
    --dark2:#2c1f14;
    --cream:#faf6ee;
    --text:#3d2b1f;
    --muted:#7a6555;
  }
  body{background:var(--cream);color:var(--text)}

  .contact-root{
    font-family:'Jost',sans-serif;
    background:var(--cream);
    min-height:100vh;
    overflow-x:hidden;
  }

  /* ── Banner ── */
  .banner{
    position:relative;
    height:380px;
    overflow:hidden;
  }
  .banner img{
    width:100%;height:100%;object-fit:cover;
    filter:brightness(.55) saturate(1.2);
    transform:scale(1.05);
    transition:transform 8s ease;
  }
  .banner:hover img{transform:scale(1.0)}
  .banner-overlay{
    position:absolute;inset:0;
    background:linear-gradient(180deg,rgba(26,18,11,.3) 0%,rgba(26,18,11,.7) 100%);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;padding:0 1rem;
  }
  .banner-eyebrow{
    font-family:'Jost',sans-serif;
    letter-spacing:.35em;font-size:.7rem;font-weight:400;
    color:var(--gold-light);text-transform:uppercase;
    margin-bottom:.9rem;
  }
  .banner-title{
    font-family:'Cormorant Garamond',serif;
    font-size:clamp(2.4rem,6vw,4.2rem);font-weight:300;
    color:#fff;line-height:1.1;
    text-shadow:0 2px 24px rgba(0,0,0,.4);
  }
  .banner-title em{color:var(--gold-light);font-style:italic}
  .banner-divider{
    width:60px;height:1px;
    background:linear-gradient(90deg,transparent,var(--gold),transparent);
    margin:1.2rem auto .8rem;
  }
  .banner-sub{
    font-family:'Jost',sans-serif;font-size:.85rem;font-weight:300;
    color:rgba(255,255,255,.75);letter-spacing:.1em;
  }

  /* ── Ornament ── */
  .ornament{
    display:flex;align-items:center;gap:12px;
    justify-content:center;margin:3rem 0 2.5rem;
  }
  .ornament-line{flex:1;max-width:120px;height:1px;background:linear-gradient(90deg,transparent,var(--gold));}
  .ornament-line.r{background:linear-gradient(90deg,var(--gold),transparent);}
  .ornament-diamond{
    width:8px;height:8px;
    background:var(--gold);
    transform:rotate(45deg);
  }
  .ornament-dot{
    width:4px;height:4px;
    background:var(--gold-light);
    transform:rotate(45deg);
  }

  /* ── Main grid ── */
  .main-grid{
    max-width:1200px;margin:0 auto;
    padding:0 1.5rem 5rem;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:3rem;
  }
  @media(max-width:900px){.main-grid{grid-template-columns:1fr}}

  /* ── Info column ── */
  .info-col{display:flex;flex-direction:column;gap:1.6rem}

  .section-label{
    font-family:'Jost',sans-serif;
    letter-spacing:.3em;font-size:.65rem;font-weight:500;
    color:var(--gold);text-transform:uppercase;
    margin-bottom:.3rem;
  }
  .section-title{
    font-family:'Cormorant Garamond',serif;
    font-size:1.9rem;font-weight:300;color:var(--dark);
    line-height:1.2;
  }

  .store-card{
    background:#fff;
    border:1px solid rgba(201,168,76,.25);
    border-radius:4px;
    padding:1.8rem 2rem;
    position:relative;
    overflow:hidden;
    transition:box-shadow .3s,border-color .3s;
  }
  .store-card::before{
    content:'';
    position:absolute;top:0;left:0;right:0;height:2px;
    background:linear-gradient(90deg,transparent,var(--gold),transparent);
    opacity:0;transition:opacity .3s;
  }
  .store-card:hover{box-shadow:0 12px 40px rgba(201,168,76,.12);border-color:rgba(201,168,76,.5);}
  .store-card:hover::before{opacity:1}

  .store-name{
    font-family:'Cormorant Garamond',serif;
    font-size:1.3rem;font-weight:600;
    color:var(--dark);margin-bottom:1.1rem;
    display:flex;align-items:center;gap:.7rem;
  }
  .store-name::after{
    content:'';flex:1;height:1px;
    background:linear-gradient(90deg,var(--gold-pale),transparent);
  }
  .store-row{
    display:flex;align-items:flex-start;gap:.9rem;
    font-size:.85rem;color:var(--muted);
    margin-bottom:.65rem;line-height:1.5;
    font-weight:300;
  }
  .store-icon{
    color:var(--gold);margin-top:2px;flex-shrink:0;font-size:.9rem;
  }

  .timing-card{
    background:linear-gradient(135deg,var(--dark) 0%,var(--dark2) 100%);
    border-radius:4px;padding:1.8rem 2rem;
    position:relative;overflow:hidden;
  }
  .timing-card::after{
    content:'◆';
    position:absolute;right:-10px;top:-10px;
    font-size:100px;color:rgba(201,168,76,.06);
    line-height:1;
  }
  .timing-title{
    font-family:'Cormorant Garamond',serif;
    font-size:1.2rem;font-weight:400;color:var(--gold-light);
    margin-bottom:1rem;display:flex;align-items:center;gap:.6rem;
  }
  .timing-row{
    display:flex;justify-content:space-between;
    font-size:.8rem;color:rgba(255,255,255,.65);
    padding:.4rem 0;
    border-bottom:1px solid rgba(255,255,255,.06);
    font-weight:300;letter-spacing:.04em;
  }
  .timing-row:last-child{border-bottom:none}
  .timing-row span:last-child{color:var(--gold-light);font-weight:400}
  .timing-row.closed span:last-child{color:rgba(255,255,255,.3)}

  /* ── Form column ── */
  .form-col{}
  .form-card{
    background:#fff;
    border:1px solid rgba(201,168,76,.2);
    border-radius:4px;padding:3rem 2.5rem;
    position:relative;
  }
  .form-card::before{
    content:'';
    position:absolute;top:0;left:0;bottom:0;width:2px;
    background:linear-gradient(180deg,transparent,var(--gold),transparent);
  }
  .form-header{margin-bottom:2.5rem}
  .form-title{
    font-family:'Cormorant Garamond',serif;
    font-size:2rem;font-weight:300;color:var(--dark);
    margin-bottom:.4rem;
  }
  .form-sub{font-size:.8rem;color:var(--muted);font-weight:300;letter-spacing:.06em}

  .field-group{position:relative;margin-bottom:1.8rem}
  .field-label{
    display:block;
    font-size:.68rem;letter-spacing:.2em;font-weight:500;
    color:var(--gold);text-transform:uppercase;
    margin-bottom:.5rem;
  }
  .field-input{
    width:100%;background:transparent;
    border:none;border-bottom:1px solid #ddd;
    padding:.6rem 0 .7rem;
    font-family:'Jost',sans-serif;font-size:.9rem;font-weight:300;
    color:var(--dark);outline:none;
    transition:border-color .3s;
    -webkit-appearance:none;
  }
  .field-input::placeholder{color:#bbb;font-weight:300}
  .field-input:focus{border-color:var(--gold)}
  .field-bar{
    position:absolute;bottom:0;left:0;
    height:1px;width:0;
    background:linear-gradient(90deg,var(--gold),var(--gold-light));
    transition:width .4s ease;
  }
  .field-input:focus ~ .field-bar{width:100%}
  textarea.field-input{resize:none;min-height:100px;line-height:1.6}

  .row-2{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
  @media(max-width:480px){.row-2{grid-template-columns:1fr}}

  .subject-chips{
    display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.5rem;
  }
  .chip{
    border:1px solid rgba(201,168,76,.4);
    background:transparent;
    padding:.3rem .9rem;border-radius:2px;
    font-family:'Jost',sans-serif;font-size:.72rem;font-weight:400;
    letter-spacing:.06em;color:var(--muted);cursor:pointer;
    transition:all .2s;
  }
  .chip:hover,.chip.active{
    background:var(--gold);border-color:var(--gold);color:#fff;
  }

  .submit-btn{
    width:100%;margin-top:2rem;
    background:var(--dark);color:var(--gold-light);
    border:none;border-radius:2px;
    padding:1.05rem 2rem;
    font-family:'Jost',sans-serif;font-size:.78rem;
    font-weight:500;letter-spacing:.25em;text-transform:uppercase;
    cursor:pointer;
    position:relative;overflow:hidden;
    transition:background .3s,color .3s;
  }
  .submit-btn::before{
    content:'';
    position:absolute;inset:0;
    background:linear-gradient(90deg,var(--gold),var(--gold-light));
    opacity:0;transition:opacity .35s;
  }
  .submit-btn:hover::before{opacity:1}
  .submit-btn span{position:relative;z-index:1}
  .submit-btn:hover span{color:var(--dark)}

  .success-msg{
    display:flex;flex-direction:column;align-items:center;
    justify-content:center;padding:3rem;text-align:center;gap:1rem;
  }
  .success-diamond{
    width:40px;height:40px;background:var(--gold);
    transform:rotate(45deg);display:flex;align-items:center;justify-content:center;
    animation:pulse 1.5s ease infinite;
  }
  .success-diamond span{transform:rotate(-45deg);color:#fff;font-size:1.1rem}
  @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,.4)}50%{box-shadow:0 0 0 12px rgba(201,168,76,0)}}
  .success-title{
    font-family:'Cormorant Garamond',serif;font-size:1.6rem;
    font-weight:400;color:var(--dark);
  }
  .success-text{font-size:.82rem;color:var(--muted);font-weight:300}

  /* ── Maps ── */
  .maps-section{
    background:var(--dark);padding:5rem 1.5rem;
  }
  .maps-inner{max-width:1200px;margin:0 auto}
  .maps-heading{
    text-align:center;margin-bottom:3rem;
  }
  .maps-heading .section-label{color:var(--gold-light)}
  .maps-heading .section-title{color:#fff}
  .maps-grid{
    display:grid;grid-template-columns:1fr 1fr;gap:2rem;
  }
  @media(max-width:700px){.maps-grid{grid-template-columns:1fr}}
  .map-wrap{
    border-radius:4px;overflow:hidden;
    border:1px solid rgba(201,168,76,.2);
    position:relative;
  }
  .map-wrap::before{
    content:'';
    position:absolute;top:0;left:0;right:0;height:2px;
    background:linear-gradient(90deg,transparent,var(--gold),transparent);
    z-index:1;
  }
  .map-label{
    background:var(--dark2);
    padding:.75rem 1.2rem;
    display:flex;align-items:center;gap:.6rem;
  }
  .map-label-dot{width:6px;height:6px;background:var(--gold);transform:rotate(45deg);flex-shrink:0}
  .map-label span{
    font-family:'Cormorant Garamond',serif;
    font-size:1rem;font-weight:400;color:var(--gold-light);letter-spacing:.08em;
  }
  .map-wrap iframe{
    width:100%;height:280px;border:none;display:block;
    filter:grayscale(.3) sepia(.1);
  }

  /* ── Footer bar ── */
  .contact-footer{
    background:var(--dark);
    border-top:1px solid rgba(201,168,76,.15);
    padding:1.8rem;
    text-align:center;
    font-size:.72rem;letter-spacing:.15em;
    color:rgba(255,255,255,.25);
    font-family:'Jost',sans-serif;font-weight:300;
    text-transform:uppercase;
  }

  /* animations */
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
  .anim{animation:fadeUp .7s ease both}
  .anim-1{animation-delay:.1s}
  .anim-2{animation-delay:.2s}
  .anim-3{animation-delay:.3s}
  .anim-4{animation-delay:.4s}
`;

const SUBJECTS = ["Order Inquiry", "Custom Design", "Return / Exchange", "Wholesale", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [activeChip, setActiveChip] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleChip = (chip) => {
    setActiveChip(chip);
    setForm({ ...form, subject: chip });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
  };

  return (
    <>
      <style>{css}</style>

      <div className="contact-root">

        {/* Banner */}
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1600&q=80"
            alt="jewellery banner"
          />
          <div className="banner-overlay">
            <p className="banner-eyebrow">Aditi Jewels — Contact</p>
            <h1 className="banner-title">We'd Love to <em>Hear</em> from You</h1>
            <div className="banner-divider" />
            <p className="banner-sub">Handcrafted imitation jewellery, made with love</p>
          </div>
        </div>

        {/* Ornament */}
        <div className="ornament">
          <div className="ornament-line" />
          <div className="ornament-dot" />
          <div className="ornament-diamond" />
          <div className="ornament-dot" />
          <div className="ornament-line r" />
        </div>

        {/* Main grid */}
        <div className="main-grid">

          {/* Info */}
          <div className="info-col">
            <div className="anim anim-1">
              <p className="section-label">Our Stores</p>
              <h2 className="section-title">Find Us Near You</h2>
            </div>

            <div className="store-card anim anim-2">
              <div className="store-name">Mumbai Flagship</div>
              <div className="store-row"><FiMapPin className="store-icon" /><span>123 Fashion Street, Colaba, Mumbai — 400 001</span></div>
              <div className="store-row"><FiPhone className="store-icon" /><span>+91 98765 43210</span></div>
              <div className="store-row"><FiMail className="store-icon" /><span>mumbai@aditijewels.in</span></div>
            </div>

            <div className="store-card anim anim-3">
              <div className="store-name">Delhi Store</div>
              <div className="store-row"><FiMapPin className="store-icon" /><span>Block A, Connaught Place, New Delhi — 110 001</span></div>
              <div className="store-row"><FiPhone className="store-icon" /><span>+91 91234 56789</span></div>
              <div className="store-row"><FiMail className="store-icon" /><span>delhi@aditijewels.in</span></div>
            </div>

            <div className="timing-card anim anim-4">
              <div className="timing-title"><FiClock style={{ color: "var(--gold)" }} /> Store Timings</div>
              {[
                ["Monday – Friday", "10:00 AM – 8:00 PM"],
                ["Saturday", "10:00 AM – 9:00 PM"],
                ["Sunday", "Closed", true],
              ].map(([day, time, closed]) => (
                <div key={day} className={`timing-row${closed ? " closed" : ""}`}>
                  <span>{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="form-col anim anim-2">
            <div className="form-card">
              {sent ? (
                <div className="success-msg">
                  <div className="success-diamond"><span>✓</span></div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-text">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <p className="section-label">Reach Out</p>
                    <h2 className="form-title">Send a Message</h2>
                    <p className="form-sub">Fill in the details and we'll be in touch</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="row-2">
                      <div className="field-group">
                        <label className="field-label">Your Name</label>
                        <input name="name" className="field-input" placeholder="Priya Sharma" value={form.name} onChange={handleChange} required />
                        <span className="field-bar" />
                      </div>
                      <div className="field-group">
                        <label className="field-label">Phone</label>
                        <input name="phone" className="field-input" placeholder="+91 98765 00000" value={form.phone} onChange={handleChange} />
                        <span className="field-bar" />
                      </div>
                    </div>

                    <div className="field-group">
                      <label className="field-label">Email Address</label>
                      <input name="email" type="email" className="field-input" placeholder="priya@example.com" value={form.email} onChange={handleChange} required />
                      <span className="field-bar" />
                    </div>

                    <div className="field-group">
                      <label className="field-label">Subject</label>
                      <div className="subject-chips">
                        {SUBJECTS.map((s) => (
                          <button key={s} type="button" className={`chip${activeChip === s ? " active" : ""}`} onClick={() => handleChip(s)}>{s}</button>
                        ))}
                      </div>
                    </div>

                    <div className="field-group">
                      <label className="field-label">Your Message</label>
                      <textarea name="message" className="field-input" placeholder="Tell us about your enquiry…" value={form.message} onChange={handleChange} />
                      <span className="field-bar" />
                    </div>

                    <button type="submit" className="submit-btn">
                      <span>Send Message →</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Maps */}
        <div className="maps-section">
          <div className="maps-inner">
            <div className="maps-heading">
              <p className="section-label">Directions</p>
              <h2 className="section-title">Visit Our Stores</h2>
            </div>
            <div className="maps-grid">
              {[
                { label: "Mumbai Flagship", q: "Colaba+Mumbai" },
                { label: "Delhi Store", q: "Connaught+Place+Delhi" },
              ].map(({ label, q }, i) => (
                <div className="map-wrap" key={i}>
                  <div className="map-label">
                    <div className="map-label-dot" />
                    <span>{label}</span>
                  </div>
                  <iframe
                    title={label}
                    src={`https://maps.google.com/maps?q=${q}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-footer">
          © 2025 Aditi Jewels — Handcrafted with ◆ Passion
        </div>

      </div>
    </>
  );
};

export default Contact;