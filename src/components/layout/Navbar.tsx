"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { INSTITUTE, NAV_LINKS } from "@/lib/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoHighlight}>Lakshya</span>March
        </Link>

        <nav className={`${styles.desktopNav}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={`tel:${INSTITUTE.primaryPhone}`}
            className={styles.contactBtn}
          >
            <span className={styles.btnIcon}>📞</span>
            <span className={styles.btnText}>Call Us</span>
          </a>
          
          <button 
            className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.open : ""}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}>
        <div className={styles.mobileNavContainer}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${
                pathname === link.href ? styles.active : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${INSTITUTE.primaryPhone}`}
            className={styles.mobileContactBtn}
          >
            Call {INSTITUTE.primaryPhone}
          </a>
        </div>
      </div>
    </header>
  );
}
