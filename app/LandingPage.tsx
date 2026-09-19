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
  'Pusat Laptop Second Pekalongan & Sekitarnya',
];

const WA_NUMBER = '62816660056';
const GMAPS_URL = 'https://share.google/Qfp4ZeCcdg3FFfJZp';
const IG_URL = 'https://www.instagram.com/fscomp.id/';

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function trackWaClick(label: string) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', 'whatsapp_click', { event_category: 'engagement', event_label: label });
  window.fbq?.('track', 'Contact', { content_name: label });
}

const PRODUK = [
  { icon: '💻', title: 'Laptop Second', desc: 'Pilihan terbaik untuk kerja, sekolah, kuliah, dan usaha. Dicek QC ketat, bergaransi toko.', cta: 'Konsultasi', href: waLink('Halo FS Comp, saya mau tanya-tanya soal laptop second.') },
  { icon: '🖥️', title: 'Rakit PC Custom', desc: 'Rakit PC sesuai kebutuhan dan anggaran Anda. Konsultasikan spesifikasi dan budget dulu.', cta: 'Konsultasi', href: waLink('Halo FS Comp, saya mau konsultasi rakit PC custom.') },
  { icon: '🖱️', title: 'Aksesoris', desc: 'Keyboard, mouse, kabel, adaptor, dan perlengkapan komputer lengkap dari brand terpercaya.', cta: 'Lihat Produk', href: 'https://katalog.fscomp.id' },
  { icon: '🔧', title: 'Servis Laptop/PC', desc: 'Install ulang, upgrade SSD/RAM, cleaning, dan pengecekan oleh teknisi berpengalaman.', cta: 'Servis Sekarang', href: waLink('Halo FS Comp, saya mau servis laptop/PC.') },
];

const QC_ITEMS = ['Fisik & Engsel', 'Layar', 'Keyboard', 'Touchpad', 'Baterai', 'SSD / RAM', 'Port USB', 'Charger', 'WiFi', 'Performa'];

const TESTI = [
  { text: '"Laptop second-nya bagus banget, kondisi mulus dan langsung bisa dipakai. Admin juga ramah dan sabar kasih rekomendasi sesuai budget saya."', name: 'Rizki A.', role: 'Mahasiswa · Pekalongan' },
  { text: '"Rakit PC gaming di sini hasilnya memuaskan. Harganya kompetitif, prosesnya cepat, dan hasilnya sesuai ekspektasi. Recommended!"', name: 'Dimas P.', role: 'Content Creator · Batang' },
  { text: '"Servis laptop saya yang lemot jadi kencang lagi. Upgrade SSD-nya terasa banget bedanya. Harga servis juga transparan dan wajar."', name: 'Bu Sari', role: 'Guru · Wiradesa' },
];

type Stat = { target: number; suffix: string; label: string; decimals?: number; href?: string };

const STATS: Stat[] = [
  { target: 10, suffix: '+', label: 'Poin QC Check' },
  { target: 1000, suffix: '+', label: 'Unit Laptop Terjual' },
  { target: 4.8, suffix: '★', label: 'Rating Google (124 Ulasan)', decimals: 1, href: GMAPS_URL },
];

const NAV_LINKS = [
  { href: '#produk', label: 'Produk' },
  { href: '#qc', label: 'QC' },
  { href: '#tukar-tambah', label: 'Jual Laptop' },
  { href: '#testi', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#lokasi', label: 'Lokasi' },
];

const TUKAR_TAMBAH_STEPS = [
  { icon: '📸', title: 'Foto Unit Anda', desc: 'Foto laptop dari beberapa sisi — bodi, layar, keyboard — biar admin bisa cek kondisinya.' },
  { icon: '💬', title: 'Kirim ke WhatsApp', desc: 'Sertakan merk, tipe, dan keluhan (kalau ada). Admin balas cepat dengan estimasi awal.' },
  { icon: '🔍', title: 'Dicek Sesuai Standar QC', desc: 'Unit dicek langsung di toko — sama seperti standar QC unit yang kami jual, biar harga yang ditawarkan adil.' },
  { icon: '🤝', title: 'Jual atau Tukar Tambah', desc: 'Cocok? Bisa dijual langsung dapat cash, atau dipakai buat tukar tambah ke unit lain yang Anda incar.' },
];

const FAQ_ITEMS = [
  {
    q: 'Berapa lama garansi laptop second di FS Comp?',
    a: 'Garansi mencakup software 3 bulan dan hardware 3 minggu sejak tanggal pembelian.',
  },
  {
    q: 'Apakah FS Comp menerima tukar tambah laptop lama?',
    a: 'Ya, FS Comp menerima tukar tambah/beli laptop bekas — khusus untuk unit yang kondisinya benar-benar normal dan lolos QC FS Comp. Chat admin dulu untuk cek kondisi dan estimasi harga.',
  },
  {
    q: 'Metode pembayaran apa saja yang tersedia?',
    a: 'Pembayaran cash atau transfer bank. Saat ini FS Comp belum menyediakan opsi cicilan/kredit.',
  },
  {
    q: 'Bagaimana cara membeli laptop di FS Comp?',
    a: 'Chat admin via WhatsApp untuk ceritakan kebutuhan dan budget, admin bantu rekomendasikan unit yang cocok, cek kondisi unit, lalu bayar cash/transfer — garansi langsung berlaku sejak itu.',
  },
];

const WA = waLink('Halo FS Comp, saya mau tanya-tanya.');

export default function LandingPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const statsRowRef = useRef<HTMLDivElement>(null);
  const [statVals, setStatVals] = useState(STATS.map(() => 0));
  const statsDone = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let W = 0, H = 0;
    let mouseX = 0, mouseY = 0;
    let animId: number;
    let running = true;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      mouseX = W / 2;
      mouseY = H / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) draw();
    };
    document.addEventListener('visibilitychange', onVisibility);

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

    const particleCount = window.innerWidth < 768 ? 30 : 80;
    const particles = Array.from({ length: particleCount }, () => new Dot());

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
      if (running) animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      running = false;
      document.removeEventListener('visibilitychange', onVisibility);
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
            const step = stat.target / 60;
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
      <canvas ref={canvasRef} className={s.bgCanvas} id="bg" aria-hidden="true" />
      <div ref={glowRef} className={s.cursorGlow} aria-hidden="true" />

      <a href="#produk" className={s.skipLink}>Langsung ke konten</a>

      {/* NAV */}
      <nav ref={navRef} className={s.nav}>
        <div className={s.navLogo}>
          <div className={s.logoIcon}>FS</div>
          <span>FS Comp</span>
        </div>
        <ul className={s.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <div className={s.navRight}>
          <a className={s.btnWa} href={WA} onClick={() => trackWaClick('nav')}>💬 WhatsApp</a>
          <button
            type="button"
            className={s.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`${s.menuBar} ${menuOpen ? s.menuBarOpen : ''}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={`${s.mobileMenu} ${menuOpen ? s.mobileMenuOpen : ''}`}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className={s.btnPrimary} href={WA} onClick={() => { trackWaClick('mobile_menu'); setMenuOpen(false); }}>💬 Chat WhatsApp</a>
      </div>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroBadge}>
          <div className={s.badgeDot} aria-hidden="true" />
          Pusat Laptop Second Terpercaya · Pekalongan &amp; Sekitarnya
        </div>
        <h1 className={s.heroH1}>
          <span className={s.line1}>Laptop Berkualitas,</span>
          <span className={s.line2}>Harga <span className={s.grad}>Masuk Akal</span></span>
        </h1>
        <p className={s.heroSub}>
          FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris, dan servis profesional untuk kebutuhan kerja, sekolah, dan bisnis Anda.
        </p>
        <div className={s.heroCta}>
          <a className={s.btnPrimary} href={WA} onClick={() => trackWaClick('hero')}>💬 Konsultasi Sekarang</a>
          <a className={s.btnOutline} href="https://katalog.fscomp.id">Lihat Katalog →</a>
        </div>
        <div className={s.trustStrip}>
          {[['✓', 'Unit Dicek Sebelum Dijual'], ['🛡', 'Garansi Toko'], ['🔁', 'Terima Tukar Tambah'], ['🔧', 'Servis Profesional'], ['📦', 'Pengiriman Aman']].map(([icon, label]) => (
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
            <a
              className={`${s.card} ${s.reveal} ${[s.revealDelay1, s.revealDelay2, s.revealDelay3, s.revealDelay1][i]}`}
              href={p.href}
              onClick={() => { if (p.href.includes('wa.me')) trackWaClick(p.title); }}
              key={p.title}
            >
              <div className={s.cardShine} aria-hidden="true" />
              <div className={s.cardIcon} aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className={s.cardCta}>{p.cta} <span>→</span></div>
            </a>
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
              {STATS.map((stat, i) => {
                const value = stat.decimals ? statVals[i].toFixed(stat.decimals) : Math.round(statVals[i]);
                const body = (
                  <>
                    <div className={s.statNum}>{value}{stat.suffix}</div>
                    <div className={s.statLabel}>{stat.label}</div>
                  </>
                );
                return stat.href ? (
                  <a className={s.stat} href={stat.href} target="_blank" rel="noopener noreferrer" key={stat.label}>
                    {body}
                  </a>
                ) : (
                  <div className={s.stat} key={stat.label}>
                    {body}
                  </div>
                );
              })}
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

      {/* TUKAR TAMBAH */}
      <section className={`${s.tukarSection} ${s.reveal}`} id="tukar-tambah">
        <div className={s.testiHead}>
          <div className={s.sectionLabel}>Jual / Tukar Tambah</div>
          <h2 className={s.sectionTitle}>Punya laptop lama?<br />Jual atau tukar tambah di sini.</h2>
          <p className={s.sectionSub}>FS Comp menerima laptop bekas Anda — dijual langsung dapat cash, atau dipakai sebagai tukar tambah ke unit lain.</p>
        </div>
        <div className={s.tukarGrid}>
          {TUKAR_TAMBAH_STEPS.map((step, i) => (
            <div className={`${s.tukarStep} ${s.reveal} ${[s.revealDelay1, s.revealDelay2, s.revealDelay3, s.revealDelay1][i]}`} key={step.title}>
              <div className={s.tukarStepNum}>{i + 1}</div>
              <div className={s.tukarStepIcon} aria-hidden="true">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={s.tukarNote}>
          ⚠️ Catatan: unit yang diterima harus dalam kondisi normal dan lolos QC FS Comp — bukan unit rusak berat/mati total.
        </div>
        <a
          className={s.btnPrimary}
          style={{ margin: '0 auto', display: 'inline-flex' }}
          href={waLink('Halo FS Comp, saya mau jual/tukar tambah laptop lama saya.')}
          onClick={() => trackWaClick('tukar_tambah')}
        >
          📸 Kirim Foto via WhatsApp
        </a>
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

      {/* FAQ */}
      <section className={`${s.faqSection} ${s.reveal}`} id="faq">
        <div className={s.testiHead}>
          <div className={s.sectionLabel}>FAQ</div>
          <h2 className={s.sectionTitle}>Pertanyaan yang sering ditanyakan</h2>
        </div>
        <div className={s.faqList}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div className={`${s.faqItem} ${isOpen ? s.faqItemOpen : ''}`} key={item.q}>
                <button
                  type="button"
                  className={s.faqQuestion}
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  {item.q}
                  <span className={s.faqIcon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className={s.faqAnswer}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.ctaBottom} ${s.reveal}`}>
        <div className={s.ctaGlow} aria-hidden="true" />
        <div className={s.ctaBox}>
          <h2>Butuh rekomendasi<br />laptop yang tepat?</h2>
          <p>Ceritakan kebutuhan, budget, dan pemakaian Anda.<br />Admin FS Comp siap bantu carikan unit yang paling cocok.</p>
          <a
            className={s.btnPrimary}
            href={WA}
            onClick={() => trackWaClick('cta_bottom')}
            style={{ justifyContent: 'center', fontSize: 15, padding: '16px 40px', margin: '0 auto', display: 'inline-flex' }}
          >
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
          <p className={s.footerTagline}>Pusat laptop second berkualitas,<br />Pekalongan &amp; sekitarnya.</p>
          <div className={s.footerSocial}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram FS Comp">📷 Instagram</a>
          </div>
        </div>
        <div className={s.footerInfo}>
          <a
            className={s.footerMapLink}
            href={GMAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.footerMapIcon}>📍</span>
            <span>Jalan Raya Wiradesa No.1 RT22, RW.05,<br />Ds. Wiradesa, Kec. Wiradesa,<br />Kabupaten Pekalongan, Jawa Tengah 51152</span>
          </a>
          <div className={s.footerHours}>
            <span className={s.footerMapIcon}>🕒</span>
            <span>Senin–Rabu &amp; Sabtu 09.00–17.00<br />Jumat 09.00–16.30 · Minggu Tutup</span>
          </div>
          <a className={s.footerPhone} href={WA} onClick={() => trackWaClick('footer_phone')}>
            <span>💬</span> 081 666 0056
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
