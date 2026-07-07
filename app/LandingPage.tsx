'use client';

import { useEffect, useRef, useState } from 'react';
import s from './landing.module.css';

const TICKER_ITEMS = [
  'Laptop Second Bergaransi',
  'QC Ketat 10+ Poin',
  'Rakit PC Custom',
  'Servis Profesional',
  'Aksesoris Lengkap',
  'Konsultasi Gratis',
  'Pengiriman Aman',
  'FS Comp Wiradesa Pekalongan',
];

const PRODUK = [
  { icon: '💻', title: 'Laptop Second', desc: 'Pilihan terbaik untuk kerja, sekolah, kuliah, dan usaha. Dicek QC ketat, bergaransi toko.', cta: 'Konsultasi' },
  { icon: '🖥️', title: 'Rakit PC Custom', desc: 'Rakit PC sesuai kebutuhan dan anggaran Anda. Konsultasikan spesifikasi dan budget dulu.', cta: 'Konsultasi' },
  { icon: '🖱️', title: 'Aksesoris', desc: 'Keyboard, mouse, kabel, adaptor, dan perlengkapan komputer lengkap dari brand terpercaya.', cta: 'Lihat Produk' },
  { icon: '🔧', title: 'Servis Laptop/PC', desc: 'Install ulang, upgrade SSD/RAM, cleaning, dan pengecekan oleh teknisi berpengalaman.', cta: 'Servis Sekarang' },
];

const QC_ITEMS = ['Fisik & Engsel', 'Layar', 'Keyboard', 'Touchpad', 'Baterai', 'SSD / RAM', 'Port USB', 'Charger', 'WiFi', 'Performa'];

const TESTI = [
  { text: '"Laptop second-nya bagus banget, kondisi mulus dan langsung bisa dipakai. Admin juga ramah dan sabar kasih rekomendasi sesuai budget saya."', name: 'Rizki A.', role: 'Mahasiswa · Pekalongan' },
  { text: '"Rakit PC gaming di sini hasilnya memuaskan. Harganya kompetitif, prosesnya cepat, dan hasilnya sesuai ekspektasi. Recommended!"', name: 'Dimas P.', role: 'Content Creator · Batang' },
  { text: '"Servis laptop saya yang lemot jadi kencang lagi. Upgrade SSD-nya terasa banget bedanya. Harga servis juga transparan dan wajar."', name: 'Bu Sari', role: 'Guru · Wiradesa' },
];

const STATS = [
  { target: 10, suffix: '+', label: 'Poin QC Check' },
  { target: 1000, suffix: '+', label: 'Unit Laptop Terjual' },
  { target: 5, suffix: '⭐', label: 'Rating Pelanggan' },
];

const WA = 'https://wa.me/62816660056';

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);
  const [statVals, setStatVals] = useState(STATS.map(() => 0));
  const statsDone = useRef(false);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let mouseX = 0, mouseY = 0;
    let animId: number;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      mouseX = W / 2;
      mouseY = H / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    class Dot {
      x = 0; y = 0; vx = 0; vy = 0; r = 0; alpha = 0;
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.6 + 0.2;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(61,142,255,${this.alpha})`;
        ctx!.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Dot());

    const onMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener('mousemove', onMouse);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(26,108,246,0.035)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(61,142,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        const dx = particles[i].x - mouseX;
        const dy = particles[i].y - mouseY;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(0,212,255,${0.2 * (1 - d / 160)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
        particles[i].update();
        particles[i].draw();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouse);
    };
  }, []);

  // Cursor glow
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMouse = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMouse);
    return () => document.removeEventListener('mousemove', onMouse);
  }, []);

  // Nav shrink on scroll
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle(s.navScrolled, window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(s.visible); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(`.${s.reveal}`).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Count-up stats
  useEffect(() => {
    const row = statsRowRef.current;
    if (!row) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsDone.current) {
          statsDone.current = true;
          STATS.forEach((stat, i) => {
            let cur = 0;
            const step = Math.ceil(stat.target / 60);
            const interval = setInterval(() => {
              cur = Math.min(cur + step, stat.target);
              setStatVals(prev => { const next = [...prev]; next[i] = cur; return next; });
              if (cur >= stat.target) clearInterval(interval);
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(row);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={s.root}>
      <canvas ref={canvasRef} className={s.bgCanvas} id="bg" />
      <div ref={glowRef} className={s.cursorGlow} />

      {/* NAV */}
      <nav ref={navRef} className={s.nav}>
        <div className={s.navLogo}>
          <div className={s.logoIcon}>FS</div>
          <span>FS Comp</span>
        </div>
        <ul className={s.navLinks}>
          <li><a href="#produk">Produk</a></li>
          <li><a href="#qc">QC</a></li>
          <li><a href="#testi">Testimoni</a></li>
          <li><a href="#lokasi">Lokasi</a></li>
        </ul>
        <a className={s.btnWa} href={WA}>💬 WhatsApp</a>
      </nav>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBadge}>
          <div className={s.badgeDot} />
          Pusat Laptop Second Terpercaya · Wiradesa, Pekalongan
        </div>
        <h1 className={s.heroH1}>
          <span className={s.line1}>Laptop Berkualitas,</span>
          <span className={s.line2}>Harga <span className={s.grad}>Masuk Akal</span></span>
        </h1>
        <p className={s.heroSub}>
          FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional untuk kebutuhan kerja, sekolah, dan bisnis Anda.
        </p>
        <div className={s.heroCta}>
          <a className={s.btnPrimary} href={WA}>💬 Konsultasi Sekarang</a>
          <a className={s.btnOutline} href="https://katalog.fscomp.id">Lihat Katalog →</a>
        </div>
        <div className={s.trustStrip}>
          {[['✓', 'Unit Dicek Sebelum Dijual'], ['🛡', 'Garansi Toko'], ['🔧', 'Servis Profesional'], ['📦', 'Pengiriman Aman']].map(([icon, label]) => (
            <div className={s.trustItem} key={label}>
              <span className={s.trustIcon}>{icon}</span> {label}
            </div>
          ))}
        </div>
        <div className={s.scrollInd}>
          <span>Scroll</span>
          <div className={s.scrollLine} />
        </div>
      </section>

      {/* TICKER */}
      <div className={s.tickerWrap}>
        <div className={s.ticker}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className={s.tickerItem} key={i}>
              <span className={s.tickerDot} />{item}
            </span>
          ))}
        </div>
      </div>

      {/* PRODUK */}
      <section className={`${s.produk} ${s.section} ${s.reveal}`} id="produk">
        <div className={s.produkHead}>
          <div className={s.sectionLabel}>Produk &amp; Layanan</div>
          <h2 className={s.sectionTitle}>Solusi komputer lengkap<br />untuk semua kebutuhan</h2>
          <p className={s.sectionSub}>Dari laptop second bergaransi sampai rakit PC custom — semua ada di FS Comp.</p>
        </div>
        <div className={s.produkGrid}>
          {PRODUK.map((p, i) => (
            <div className={`${s.card} ${s.reveal} ${[s.revealDelay1, s.revealDelay2, s.revealDelay3, s.revealDelay1][i]}`} key={p.title}>
              <div className={s.cardShine} />
              <div className={s.cardIcon}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={s.cardCta}>{p.cta} <span>→</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* QC */}
      <section className={s.qcSection} id="qc">
        <div className={s.qcInner}>
          <div className={`${s.qcText} ${s.reveal}`}>
            <div className={s.verifiedBadge}>✦ QC VERIFIED — Dicek Ketat Sebelum Dijual</div>
            <div className={s.sectionLabel}>Standar QC Kami</div>
            <h2 className={s.sectionTitle}>Kami tidak<br />asal jual.</h2>
            <p>Setiap laptop second dicek menyeluruh dari fisik, fungsi, hingga performa — sebelum sampai ke tangan Anda. Tenang, nyaman, terpercaya.</p>
            <div className={s.statsRow} ref={statsRowRef}>
              {STATS.map((stat, i) => (
                <div className={s.stat} key={stat.label}>
                  <div className={s.statNum}>{statVals[i]}{stat.suffix}</div>
                  <div className={s.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${s.qcGrid} ${s.reveal}`}>
            {QC_ITEMS.map(item => (
              <div className={s.qcItem} key={item}>
                <span className={s.qcCheck}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className={`${s.testiSection} ${s.reveal}`} id="testi">
        <div className={s.testiHead}>
          <div className={s.sectionLabel}>Testimoni</div>
          <h2 className={s.sectionTitle}>Yang mereka rasakan</h2>
          <p className={s.sectionSub}>Pelanggan FS Comp dari Pekalongan dan sekitarnya.</p>
        </div>
        <div className={s.testiGrid}>
          {TESTI.map((t, i) => (
            <div className={`${s.testiCard} ${s.reveal} ${[s.revealDelay1, s.revealDelay2, s.revealDelay3][i]}`} key={t.name}>
              <div className={s.testiStars}>★★★★★</div>
              <p className={s.testiText}>{t.text}</p>
              <div className={s.testiName}>{t.name}</div>
              <div className={s.testiRole}>{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.ctaBottom} ${s.reveal}`}>
        <div className={s.ctaGlow} />
        <div className={s.ctaBox}>
          <h2>Butuh rekomendasi<br />laptop yang tepat?</h2>
          <p>Ceritakan kebutuhan, budget, dan pemakaian Anda.<br />Admin FS Comp siap bantu carikan unit yang paling cocok.</p>
          <a className={s.btnPrimary} href={WA} style={{ justifyContent: 'center', fontSize: 15, padding: '16px 40px', margin: '0 auto', display: 'inline-flex' }}>
            💬 Chat Admin FS Comp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer} id="lokasi">
        <div className={s.footerBrand}>
          <div className={s.navLogo}>
            <div className={s.logoIcon}>FS</div>
            <span>FS Comp</span>
          </div>
          <p className={s.footerTagline}>Laptop second berkualitas,<br />Wiradesa, Pekalongan.</p>
        </div>
        <div className={s.footerInfo}>
          <a
            className={s.footerMapLink}
            href="https://share.google/Qfp4ZeCcdg3FFfJZp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.footerMapIcon}>📍</span>
            <span>Jalan Raya Wiradesa No.1 RT22, RW.05,<br />Ds. Wiradesa, Kec. Wiradesa,<br />Kabupaten Pekalongan, Jawa Tengah 51152</span>
          </a>
          <a className={s.footerPhone} href={WA}>
            <span>💬</span> 0816-660-056
          </a>
        </div>
        <div className={s.footerCopy}>
          © 2026 FS Comp · Website dibuat oleh{' '}
          <a href="https://fsdev.id" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
            FS Dev
          </a>
        </div>
      </footer>
    </div>
  );
}
