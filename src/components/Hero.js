"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const BADGES = [
  {
    src: "/hero/fast-light.svg",
    className: "badge-fast",
    style: { left: "10vw", top: "19vh", width: "13rem" },
    mobileStyle: { top: "10vh", left: "2vw" },
  },
  {
    src: "/hero/urgency-light.svg",
    className: "badge-urgency",
    style: { right: "7vw", width: "15rem", top: "19vh" },
    mobileStyle: { right: "2vw", top: "12vh" },
  },
  {
    src: "/hero/cookies-light.svg",
    className: "badge-cookies",
    style: { left: "18vw", top: "45vh", width: "13rem" },
    mobileStyle: { left: "3vw" },
  },
  {
    src: "/hero/shipping-light.svg",
    className: "badge-shipping",
    style: { width: "14rem", bottom: "33vh", right: "12vw" },
    mobileStyle: { right: "3vw", bottom: "30vh" },
  },
  {
    src: "/hero/review-light.svg",
    className: "badge-review",
    style: { left: "3vw", width: "15rem", bottom: "29vh" },
    mobileStyle: { bottom: "26vh" },
  },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const row1LightRef = useRef(null);
  const row1DarkRef = useRef(null);
  const row2LightRef = useRef(null);
  const row2DarkRef = useRef(null);
  const row3LightRef = useRef(null);
  const row3DarkRef = useRef(null);
  const badgeRefs = useRef([]);
  const handRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onStart: () => {
        gsap.set(section, { opacity: 1, visibility: "visible" });
      },
    });

    const rows = [
      { light: row1LightRef, dark: row1DarkRef, word: "ontime" },
      { light: row2LightRef, dark: row2DarkRef, word: "office" },
      { light: row3LightRef, dark: row3DarkRef, word: "solution" },
    ];

    const splits = rows.map((row) => ({
      light: new SplitType(row.light.current, { types: "chars" }),
      dark: new SplitType(row.dark.current, { types: "chars" }),
    }));

    tl.to(".preloader-column", {
      scaleY: 0,
      duration: 1.2,
      stagger: { amount: 0.5, from: "start" },
      ease: "power4.inOut",
    })
      .set("#preloader", { display: "none" })
      // 1. ontime
      .fromTo(
        [row1LightRef.current, row1DarkRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.001 },
        "-=0.8"
      )
      .fromTo(
        splits[0].light.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        splits[0].dark.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=1.0"
      )
      // 2. office
      .fromTo(
        [row2LightRef.current, row2DarkRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.001 }
      )
      .fromTo(
        splits[1].light.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        splits[1].dark.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=1.0"
      )
      // 3. solution
      .fromTo(
        [row3LightRef.current, row3DarkRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.001 }
      )
      .fromTo(
        splits[2].light.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        splits[2].dark.chars,
        { y: 80, opacity: 0, scale: 1.04 },
        { y: 0, opacity: 1, scale: 1, duration: 1.4, stagger: 0.02, ease: "power2.out" },
        "-=1.0"
      )
      // 4. hand
      .fromTo(
        handRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "-=0.4"
      )
      // 5. phone screen
      .fromTo(
        phoneRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        "-=1.0"
      );

    // 6. badges
    badgeRefs.current.forEach((badge, i) => {
      tl.fromTo(
        badge,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        `-=${0.6 - i * 0.05}`
      );
    });

    return () => tl.kill();
  }, []);

  return (
    <>
      {/* Preloader columns */}
      <div id="preloader" className="preloader">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="preloader-column" />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="grid-overlay" />

      <section
        id="hero"
        ref={sectionRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          padding: 0,
          background: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "3rem",
            paddingRight: "3rem",
            minHeight: "100vh",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {/* ===== ROW 1: ontime ===== */}
          <TextRow lightRef={row1LightRef} darkRef={row1DarkRef} word="ontime" color="black" fontSize="clamp(5rem, 14vw, 14rem)" />

          {/* ===== HAND IMAGE ===== */}
          <img
            ref={handRef}
            src="/pb-hand3.png"
            alt=""
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
              zIndex: 4,
              height: "110%",
              maxHeight: "110vh",
              objectFit: "contain",
              pointerEvents: "none",
              opacity: 1,
            }}
          />



          {/* ===== PHONE IN HAND ===== */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
              zIndex: 5,
            }}
          >
          <div
            ref={phoneRef}
            style={{
              opacity: 0,
              width: "min(20vw, 180px)",
              aspectRatio: "0.48",
              borderRadius: "16px",
              background: "#ffffff",
              overflow: "hidden",
              boxShadow: "none",
              padding: 0,
            }}
          >
              {/* Notch */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  translate: "-50% 0",
                  width: "35%",
                  height: 22,
                  background: "#000",
                  borderRadius: "0 0 14px 14px",
                  zIndex: 13,
                }}
              />
              {/* Status bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "5px 14px 0",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(0.35rem, 0.55vw, 0.45rem)",
                    fontWeight: 700,
                    color: "#666",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  11:11
                </span>
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <path d="M1 5.5C3.2 3.5 6 2.5 9 2.5s5.8 1 8 3" stroke="#666" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                    <path d="M3.5 7.5C5 6.2 7 5.5 9 5.5s4 0.7 5.5 2" stroke="#666" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                    <path d="M6 9.5C7 8.8 8 8.5 9 8.5s2 0.3 3 1" stroke="#666" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                    <circle cx="9" cy="11" r="1" fill="#666"/>
                  </svg>
                  <svg width="11" height="8" viewBox="0 0 14 10" fill="none">
                    <rect x="0.5" y="0.5" width="11" height="9" rx="1.5" stroke="#666" strokeWidth="1.2" fill="none"/>
                    <rect x="1.8" y="2" width="8.4" height="6" rx="0.5" fill="#666"/>
                    <path d="M12 3v4a2 2 0 0 0 0-4z" fill="#666"/>
                  </svg>
                </div>
              </div>
              {/* Marquee line - partner name right to left */}
              <div
                style={{
                  overflow: "hidden",
                  padding: "24px 0 6px",
                  background: "rgba(0,0,0,0.03)",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="phone-marquee"
                  style={{
                    fontSize: "clamp(0.5rem, 0.9vw, 0.75rem)",
                    color: "#444",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  ★ Partner: Ontime Office Solutions — A–Z Office Products ★
                </div>
              </div>

              {/* Vertical product slider */}
              <ProductSlider />
          </div>
          </div>

          {/* ===== FLOATING BADGES ===== */}
          {BADGES.map((badge, i) => (
            <div
              key={badge.className}
              ref={(el) => {
                badgeRefs.current[i] = el;
              }}
              style={{
                position: "absolute",
                zIndex: 6,
                ...badge.style,
              }}
            >
              <img
                src={badge.src}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ))}

          {/* ===== ROW 2: office ===== */}
          <TextRow lightRef={row2LightRef} darkRef={row2DarkRef} word="office" color="blue" />

          {/* ===== ROW 3: solution ===== */}
          <TextRow lightRef={row3LightRef} darkRef={row3DarkRef} word="solution" bottom color="black" fontSize="clamp(5rem, 14vw, 14rem)" zIndex={8} shadow />
        </div>
      </section>
    </>
  );
}

const PRODUCTS = [
  { img: "/images/vacuum_cleaners.png", name: "Vacuum Cleaners", price: "$189.00", bg: "#FFF5D6" },
  { img: "/images/brushes_wiper.png", name: "Brushes & Wiper", price: "$24.99", bg: "#FFE8E8" },
  { img: "/images/caddy_kit.png", name: "Caddy Kit", price: "$39.99", bg: "#E8F5E8" },
  { img: "/images/sanitizer.png", name: "Sanitizer", price: "$12.99", bg: "#D6EDFF" },
  { img: "/images/trolley.png", name: "Trolley", price: "$149.00", bg: "#FFE8D6" },
];

function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [jumping, setJumping] = useState(false);
  const items = [...PRODUCTS, ...PRODUCTS];

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrent(prev => {
          const next = prev + 1;
          if (next > PRODUCTS.length) {
            setJumping(true);
            return 0;
          }
          return next;
        });
      }, 2600);
      return () => clearInterval(interval);
    }, 6000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (jumping) {
      requestAnimationFrame(() => setJumping(false));
    }
  }, [jumping]);

  return (
    <div
      style={{
        flex: 1,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `translateY(-${current * 100}%)`,
          transition: jumping
            ? "none"
            : "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {items.map((item, i) => (
            <div
              key={i}
              style={{
                height: "100%",
                background: item.bg,
                borderRadius: 20,
                margin: "0 10px",
                padding: "20px 16px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "auto",
                    height: "95%",
                    maxWidth: "92%",
                    objectFit: "contain",
                    borderRadius: 16,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  paddingTop: 6,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(0.5rem, 0.85vw, 0.7rem)",
                    color: "#1a1a1a",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "clamp(0.4rem, 0.65vw, 0.55rem)",
                    color: "#999",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    marginTop: 3,
                  }}
                >
                  {item.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function TextRow({ lightRef, darkRef, word, bottom, color, fontSize, zIndex = 3, shadow }) {
  return (
    <div
      style={{
        position: "relative",
        height: "10rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex,
        ...(bottom ? { marginBottom: "6rem" } : {}),
      }}
    >
      <h1
        ref={lightRef}
        style={{
          position: "absolute",
          top: 0,
          fontSize: fontSize || "clamp(3.8rem, 10.8vw, 10.8rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: color === "black" ? "#030507" : color === "blue" ? "#4a90d9" : "#030507",
          textTransform: "uppercase",
          textAlign: "center",
          fontFamily: "var(--font-inter), 'Neue Montreal', 'Helvetica Neue', sans-serif",
          letterSpacing: "-0.02em",
          margin: 0,
          whiteSpace: "nowrap",
          ...(shadow ? { textShadow: "0 4px 20px rgba(0,0,0,0.1)" } : {}),
        }}
      >
        {word}
      </h1>
      <h1
        ref={darkRef}
        style={{
          position: "absolute",
          top: 0,
          fontSize: fontSize || "clamp(3.8rem, 10.8vw, 10.8rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: color === "black" ? "#030507" : color === "blue" ? "#4a90d9" : "#ca9fff",
          textTransform: "uppercase",
          textAlign: "center",
          fontFamily: "var(--font-inter), 'Neue Montreal', 'Helvetica Neue', sans-serif",
          letterSpacing: "-0.02em",
          margin: 0,
          whiteSpace: "nowrap",
          ...(shadow ? { textShadow: "0 4px 20px rgba(0,0,0,0.1)" } : {}),
        }}
      >
        {word}
      </h1>
    </div>
  );
}
