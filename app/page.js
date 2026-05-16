export default function Home() {
  const waNumber = "62816660056";
  const wa = `https://wa.me/${waNumber}?text=Assalamualaikum%20FS%20Comp%2C%20saya%20mau%20konsultasi%20laptop`;
  const katalog = "https://katalog.fscomp.id";
  const maps = "https://maps.app.goo.gl/L4nybXTssgsqwxbH7";

  const features = [
    ["QC Ketat", "Unit dicek sebelum dijual"],
    ["Garansi Toko", "Belanja lebih tenang"],
    ["Servis Profesional", "Teknisi berpengalaman"],
    ["Pengiriman Aman", "Packing rapi & aman"],
  ];

  const products = [
    ["Laptop Second", "Pilihan terbaik untuk kerja, sekolah, kuliah, dan usaha."],
    ["Rakit PC", "Rakit PC custom sesuai kebutuhan dan anggaran Anda."],
    ["Aksesoris", "Keyboard, mouse, kabel, adaptor, dan perlengkapan komputer."],
    ["Servis Laptop/PC", "Install ulang, upgrade SSD/RAM, cleaning, dan pengecekan."],
  ];

  const qcItems = ["Fisik & engsel", "Layar", "Keyboard", "Touchpad", "Baterai", "SSD/RAM", "Port USB", "Charger", "WiFi", "Performa"];

  return (
    <main className="page">
      <style>{`
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;background:#030712;color:#fff;font-family:Arial,Helvetica,sans-serif}
        a{text-decoration:none;color:inherit}
        .page{min-height:100vh;position:relative;overflow:hidden;background:radial-gradient(circle at 70% 20%,rgba(14,165,233,.28),transparent 38%),radial-gradient(circle at 20% 75%,rgba(37,99,235,.18),transparent 35%),linear-gradient(to bottom,rgba(3,7,18,.1),#030712 85%),#030712}
        .wrap{max-width:1180px;margin:0 auto;padding:0 22px;position:relative;z-index:2}
        .header{display:flex;align-items:center;justify-content:space-between;padding:22px 22px;max-width:1180px;margin:0 auto;position:relative;z-index:5}
        .brand{display:flex;align-items:center;gap:12px}
        .logo{width:44px;height:44px;border-radius:16px;background:linear-gradient(135deg,#3b82f6,#22d3ee);display:grid;place-items:center;color:#020617;font-weight:900;box-shadow:0 20px 45px rgba(34,211,238,.18)}
        .brand-title{font-size:18px;font-weight:900;letter-spacing:-.3px}
        .brand-sub{font-size:12px;color:#94a3b8;margin-top:2px}
        .nav{display:flex;gap:30px;color:#cbd5e1;font-size:14px}
        .nav a:hover{color:#67e8f9}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:16px;padding:15px 22px;font-weight:900;transition:.2s;border:1px solid transparent}
        .btn:hover{transform:translateY(-2px)}
        .btn-primary{background:#22d3ee;color:#020617;box-shadow:0 18px 45px rgba(34,211,238,.22)}
        .btn-outline{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.14);color:#e2e8f0}
        .btn-wa{border:1px solid rgba(34,211,238,.4);color:#cffafe;padding:11px 16px;border-radius:14px;background:rgba(34,211,238,.06);font-weight:800}
        .hero{display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:center;padding:58px 22px 58px;max-width:1180px;margin:0 auto;position:relative;z-index:2}
        .badge{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(34,211,238,.22);background:rgba(34,211,238,.1);color:#cffafe;border-radius:999px;padding:10px 15px;font-size:14px;margin-bottom:24px}
        h1{font-size:clamp(42px,6.6vw,76px);line-height:.96;letter-spacing:-2.8px;margin:0;font-weight:950}
        .cyan{color:#67e8f9}
        .lead{margin:24px 0 0;max-width:620px;color:#cbd5e1;font-size:18px;line-height:1.75}
        .actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
        .visual-wrap{position:relative}
        .glow{position:absolute;inset:-28px;background:rgba(34,211,238,.2);filter:blur(60px);border-radius:50px}
        .visual-card{position:relative;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:40px;padding:18px;box-shadow:0 40px 90px rgba(0,0,0,.45)}
        .visual{aspect-ratio:4/3;border-radius:32px;background:linear-gradient(135deg,#0f172a,#172554,#020617);display:grid;place-items:center;overflow:hidden}
        .laptop{width:82%;height:52%;border:1px solid rgba(103,232,249,.35);border-radius:28px;background:#020617;box-shadow:0 0 70px rgba(34,211,238,.26);transform:rotate(-6deg);position:relative}
        .laptop:before{content:"";position:absolute;inset:14px;border-radius:20px;background:radial-gradient(circle at 50% 45%,rgba(34,211,238,.7),rgba(37,99,235,.35) 30%,transparent 62%)}
        .laptop:after{content:"";position:absolute;left:-10%;right:-10%;bottom:-42px;height:38px;border-radius:0 0 42px 42px;background:#1e293b;border:1px solid rgba(255,255,255,.1)}
        .unit{position:absolute;top:34px;right:34px;background:rgba(255,255,255,.95);color:#0f172a;border-radius:18px;padding:14px 16px;box-shadow:0 18px 40px rgba(0,0,0,.22)}
        .unit b{display:block;font-size:14px}.unit span{display:block;color:#64748b;font-size:12px;margin-top:4px}
        .trust{padding-bottom:52px}
        .trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:32px;padding:16px;backdrop-filter:blur(18px)}
        .trust-item{display:flex;gap:14px;align-items:center;border-radius:24px;padding:18px}
        .trust-icon,.product-icon{width:48px;height:48px;border-radius:18px;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.2);display:grid;place-items:center;color:#67e8f9;font-weight:900;flex:0 0 auto}
        .trust-item b{display:block}.trust-item span{display:block;color:#94a3b8;font-size:14px;margin-top:4px}
        section{position:relative;z-index:2;padding:70px 0}
        .section-title{margin-bottom:34px}.eyebrow{color:#67e8f9;font-weight:900;margin-bottom:12px}.section-title h2{font-size:clamp(32px,5vw,54px);line-height:1.05;letter-spacing:-1.6px;margin:0;font-weight:950}
        .products{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
        .product{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:32px;padding:26px;transition:.2s}
        .product:hover{background:rgba(255,255,255,.07);transform:translateY(-3px)}
        .product h3{margin:18px 0 10px;font-size:21px}.product p{margin:0;color:#94a3b8;line-height:1.65;font-size:14px}.product .link{margin-top:20px;color:#67e8f9;font-weight:900;font-size:14px}
        .qc-box{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center;border:1px solid rgba(255,255,255,.1);background:linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.03));border-radius:40px;padding:42px}
        .qc-box h2{font-size:clamp(32px,5vw,52px);line-height:1.05;margin:0 0 18px;font-weight:950;letter-spacing:-1.5px}.qc-box p{color:#cbd5e1;line-height:1.75;font-size:17px}
        .qc-list{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.qc-item{border:1px solid rgba(34,211,238,.16);background:rgba(34,211,238,.06);border-radius:18px;padding:14px 16px;color:#e2e8f0;font-weight:800;font-size:14px}
        .cta{background:#22d3ee;color:#020617;border-radius:40px;padding:42px;display:flex;justify-content:space-between;gap:30px;align-items:center}.cta h2{font-size:clamp(30px,5vw,50px);line-height:1.05;margin:0;font-weight:950;letter-spacing:-1.5px}.cta p{color:#0f172a;line-height:1.6;max-width:660px}.cta .btn{background:#020617;color:white}
        .footer{border-top:1px solid rgba(255,255,255,.1);padding:34px 22px;color:#cbd5e1}.footgrid{max-width:1180px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}.footbrand{font-size:22px;font-weight:950;color:white}.loc{text-align:right;color:#cbd5e1;line-height:1.6}.maps-link{color:#67e8f9;font-weight:900}.maps-link:hover{color:#22d3ee}.maps-btn{display:inline-flex;margin-top:10px;padding:10px 14px;border-radius:14px;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.25);color:#cffafe;font-weight:900}
        .float{position:fixed;right:20px;bottom:20px;z-index:50;background:#22c55e;color:#fff;border-radius:18px;padding:15px 19px;font-weight:900;box-shadow:0 20px 50px rgba(34,197,94,.28)}
        @media(max-width:900px){.nav{display:none}.hero{grid-template-columns:1fr;padding-top:34px}.trust-grid{grid-template-columns:1fr 1fr}.products{grid-template-columns:1fr 1fr}.qc-box{grid-template-columns:1fr}.cta{flex-direction:column;align-items:flex-start}.footgrid{grid-template-columns:1fr}.loc{text-align:left}}
        @media(max-width:560px){.header{padding:16px}.hero{padding-left:16px;padding-right:16px}.wrap{padding:0 16px}h1{font-size:44px}.lead{font-size:16px}.actions .btn{width:100%}.trust-grid,.products,.qc-list{grid-template-columns:1fr}.visual-card{border-radius:28px}.unit{right:18px;top:18px}.float{left:16px;right:16px;text-align:center;justify-content:center}.cta,.qc-box{padding:26px;border-radius:30px}}
      `}</style>

      <header className="header">
        <div className="brand">
          <div className="logo">FS</div>
          <div>
            <div className="brand-title">FSCOMP</div>
            <div className="brand-sub">Laptop • Second • Best PC</div>
          </div>
        </div>
        <nav className="nav">
          <a href="#produk">Produk</a>
          <a href="#keunggulan">Keunggulan</a>
          <a href="#qc">QC</a>
          <a href="#lokasi">Lokasi</a>
        </nav>
        <a className="btn-wa" href={wa}>WhatsApp</a>
      </header>

      <section className="hero">
        <div>
          <div className="badge">✓ Pusat Laptop Second Berkualitas Terpercaya</div>
          <h1>Laptop Second <span className="cyan">Berkualitas</span>, Rakit PC & Aksesoris</h1>
          <p className="lead">FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris komputer, dan servis pendukung untuk kebutuhan kerja, sekolah, kuliah, dan bisnis.</p>
          <div className="actions">
            <a className="btn btn-primary" href={wa}>Konsultasi Sekarang</a>
            <a className="btn btn-outline" href={katalog}>Lihat Katalog →</a>
          </div>
        </div>
        <div className="visual-wrap">
          <div className="glow" />
          <div className="visual-card">
            <div className="visual"><div className="laptop" /></div>
            <div className="unit"><b>✓ Unit Dicek</b><span>Sebelum dijual</span></div>
          </div>
        </div>
      </section>

      <div id="keunggulan" className="wrap trust">
        <div className="trust-grid">
          {features.map((item, i) => <div className="trust-item" key={item[0]}><div className="trust-icon">{i+1}</div><div><b>{item[0]}</b><span>{item[1]}</span></div></div>)}
        </div>
      </div>

      <section id="produk">
        <div className="wrap">
          <div className="section-title"><div className="eyebrow">Produk & Layanan</div><h2>Solusi komputer untuk kebutuhan Anda</h2></div>
          <div className="products">
            {products.map((item, i) => <div className="product" key={item[0]}><div className="product-icon">{i+1}</div><h3>{item[0]}</h3><p>{item[1]}</p><div className="link">Konsultasi →</div></div>)}
          </div>
        </div>
      </section>

      <section id="qc">
        <div className="wrap">
          <div className="qc-box">
            <div><div className="eyebrow">QC FS Comp</div><h2>Setiap unit dicek sebelum dijual.</h2><p>Kami tidak asal jual. Laptop second dicek dari fisik, fungsi utama, performa, hingga kelengkapan agar pelanggan mendapat unit yang layak pakai dan lebih aman.</p></div>
            <div className="qc-list">{qcItems.map((item) => <div className="qc-item" key={item}>✓ {item}</div>)}</div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap"><div className="cta"><div><h2>Butuh rekomendasi laptop yang cocok?</h2><p>Chat admin FS Comp. Sebutkan kebutuhan, budget, dan pemakaian Anda. Kami bantu pilihkan unit yang paling sesuai.</p></div><a className="btn" href={wa}>Chat Admin FS Comp</a></div></div>
      </section>

      <footer id="lokasi" className="footer">
        <div className="footgrid"><div><div className="footbrand">FSCOMP</div><p>Laptop second, rakit PC, aksesoris, dan servis komputer.</p></div><div className="loc"><a className="maps-link" href={maps} target="_blank" rel="noopener noreferrer">📍 FS Comp Wiradesa</a><br/>Jl. Wiradesa No.1 RT22/RW05, Wiradesa, Kab. Pekalongan.<br/>WA: 0816660056<br/><a className="maps-btn" href={maps} target="_blank" rel="noopener noreferrer">Buka Google Maps →</a></div></div>
      </footer>

      <a className="float" href={wa}>Konsultasi Laptop</a>
    </main>
  );
}
