"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "#demo", label: "See It Live" },
  { href: "#system", label: "The System" },
  { href: "#how", label: "How It Works" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#" className="brand" onClick={close}>
            Naum Milosheski<span>.</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary">
              Book a Call
            </a>
          </div>

          {/* Hamburger — tablet/mobile only */}
          <button
            className={`hamburger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
          <div className="mobile-menu-inner">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="mobile-link" onClick={close}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary mobile-cta" onClick={close}>
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Backdrop rendered at body level so z-index stacking is clean */}
      {open && mounted && createPortal(
        <div className="nav-backdrop" onClick={close} aria-hidden />,
        document.body
      )}
    </>
  );
}
