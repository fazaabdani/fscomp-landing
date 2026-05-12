export default function Home() {
  const waNumber = "62816660056";
  const wa = `https://wa.me/${waNumber}?text=Assalamualaikum%20FS%20Comp%2C%20saya%20ingin%20konsultasi%20laptop%20second`;
  const katalog = `https://wa.me/c/${waNumber}`;

  const items = [
    ["Laptop Pelajar", "Hemat untuk sekolah, kuliah, Zoom, dan tugas harian."],
    ["Laptop Kantoran", "ThinkPad, Latitude, EliteBook, siap kerja dan multitasking."],
    ["Laptop Premium", "Tipis, elegan, dan cocok untuk mobilitas profesional."],
    ["Rakit PC Custom", "PC kantor, kasir, gaming, editing, sesuai kebutuhan."],
    ["Aksesoris", "Mouse, keyboard, charger, SSD, RAM, kabel, dan lainnya."],
    ["Servis Pendukung", "Install ulang, upgrade SSD/RAM, cleaning, dan cek unit."]
  ];

  return (
    <main className="page">
      <style>{`
        *{box-sizing:border-box}
        body{
          margin:0;
          background:#020617;
          color:#fff;
          font-family:Arial,Helvetica,sans-serif
        }

        a{
          text-decoration:none;
          color:inherit
        }

        .page{
          min-height:100vh;
          background:
          radial-gradient(circle at 10% 10%,rgba(34,211,238,.2),transparent 30%),
          radial-gradient(circle at 85% 15%,rgba(37,99,235,.18),transparent 30%),
          #020617
        }

        .nav{
          position:sticky;
          top:0;
          z-index:10;
          background:rgba(2,6,23,.78);
          backdrop-filter:blur(18px);
          border-bottom:1px solid rgba(34,211,238,.14)
        }

        .wrap{
          max-width:1180px;
          margin:auto;
          padding:0 22px
        }

        .navin{
          height:76px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px
        }

        .brand{
          display:flex;
          gap:12px;
          align-items:center
        }

        .logo{
          width:44px;
          height:44px;
          border-radius:16px;
          background:linear-gradient(135deg,#22d3ee,#2563eb);
          color:#020617;
          display:grid;
          place-items:center;
          font-weight:900
        }

        .brand b{
          display:block
        }

        .brand span{
          font-size:12px;
          color:#94a3b8
        }

        .links{
          display:flex;
          gap:26px;
          color:#cbd5e1;
          font-size:14px
        }

        .links a:hover{
          color:#67e8f9
        }

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:14px 22px;
          border-radius:16px;
          font-weight:900;
          transition:.2s;
          border:1px solid transparent
        }

        .btn:hover{
          transform:translateY(-2px)
        }

        .primary{
          background:#22d3ee;
          color:#020617;
          box-shadow:0 18px 45px rgba(34,211,238,.22)
        }

        .outline{
          border-color:rgba(148,163,184,.35);
          background:rgba(15,23,42,.65)
        }

        .hero{
          display:grid;
          grid-template-columns:1.08fr .92fr;
          gap:56px;
          align-items:center;
          padding:90px 22px 78px
        }

        .badge{
          display:inline-flex;
          padding:9px 14px;
          border:1px solid rgba(34,211,238,.28);
          border-radius:999px;
          background:rgba(34,211,238,.1);
          color:#a5f3fc;
          font-size:14px;
          margin-bottom:24px
        }

        h1{
          font-size:clamp(44px,7vw,82px);
          line-height:.98;
          letter-spacing:-2.5px;
          margin:0;
          font-weight:950
        }

        .grad{
          display:block;
          color:transparent;
          background:linear-gradient(90deg,#67e8f9,#60a5fa,#a78bfa);
          -webkit-background-clip:text;
          background-clip:text
        }

        .lead{
          margin:26px 0 0;
          max-width:680px;
          color:#cbd5e1;
          font-size:18px;
          line-height:1.75
        }

        .actions{
          margin-top:34px;
          display:flex;
          flex-wrap:wrap;
          gap:14px
        }

        .stats{
          margin-top:36px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:12px
        }

        .stat{
          border:1px solid rgba(148,163,184,.14);
          background:rgba(15,23,42,.65);
          border-radius:18px;
          padding:16px
        }

        .stat b{
          color:#67e8f9;
          display:block
        }

        .stat span{
          color:#94a3b8;
          font-size:12px
        }

        .device{
          border:1px solid rgba(34,211,238,.22);
          border-radius:34px;
          padding:28px;
          background:linear-gradient(180deg,rgba(15,23,42,.9),rgba(2,6,23,.92));
          box-shadow:0 30px 90px rgba(34,211,238,.12)
        }

        .deviceTop{
          display:flex;
          justify-content:space-between;
          align-items:center
        }

        .device small{
          color:#94a3b8
        }

        .device h2{
          font-size:26px;
          margin:6px 0 0
        }

        .fs{
          width:58px;
          height:58px;
          border-radius:20px;
          background:rgba(34,211,238,.12);
          border:1px solid rgba(34,211,238,.25);
          display:grid;
          place-items:center;
          color:#67e8f9;
          font-weight:900
        }

        .visual{
          margin-top:30px;
          min-height:300px;
          border-radius:28px;
          background:
          radial-gradient(circle at center,rgba(34,211,238,.25),transparent 35%),
          linear-gradient(135deg,#0f172a,#020617);
          border:1px solid rgba(148,163,184,.13);
          display:grid;
          place-items:center;
          text-align:center;
          padding:28px
        }

        .screen{
          width:82%;
          max-width:360px;
          aspect-ratio:16/10;
          border-radius:18px;
          border:2px solid rgba(103,232,249,.45);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          box-shadow:0 0 60px rgba(34,211,238,.2)
        }

        .screen b{
          font-size:24px
        }

        .screen span{
          color:#94a3b8;
          margin-top:10px
        }

        .chips{
          margin-top:18px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:12px
        }

        .chip{
          border:1px solid rgba(148,163,184,.15);
          background:rgba(2,6,23,.55);
          border-radius:16px;
          padding:14px;
          text-align:center;
          font-weight:800
        }

        section{
          padding:82px 0
        }

        .center{
          text-align:center;
          max-width:760px;
          margin:0 auto 46px
        }

        .eye{
          color:#67e8f9;
          font-size:13px;
          letter-spacing:.28em;
          text-transform:uppercase;
          font-weight:900
        }

        h3{
          margin:14px 0 0;
          font-size:clamp(34px,5vw,54px);
          line-height:1.06;
          letter-spacing:-1.5px
        }

        .center p,.text{
          color:#94a3b8;
          line-height:1.75;
          font-size:17px
        }

        .grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:22px
        }

        .card{
          border:1px solid rgba(148,163,184,.14);
          background:rgba(15,23,42,.68);
          border-radius:28px;
          padding:26px;
          transition:.2s
        }

        .card:hover{
          border-color:rgba(34,211,238,.45);
          transform:translateY(-3px)
        }

        .card .ico{
          width:48px;
          height:48px;
          border-radius:16px;
          background:rgba(34,211,238,.1);
          border:1px solid rgba(34,211,238,.2);
          color:#67e8f9;
          display:grid;
          place-items:center;
          margin-bottom:20px;
          font-weight:900
        }

        .card h4{
          font-size:23px;
          margin:0
        }

        .card p{
          color:#94a3b8;
          line-height:1.7;
          margin:14px 0 0
        }

        .band{
          background:rgba(15,23,42,.58);
          border-top:1px solid rgba(148,163,184,.12);
          border-bottom:1px solid rgba(148,163,184,.12)
        }

        .split{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:48px;
          align-items:center
        }

        .list{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:14px
        }

        .li{
          border:1px solid rgba(148,163,184,.14);
          background:rgba(15,23,42,.8);
          border-radius:18px;
          padding:18px;
          font-weight:800
        }

        .cta{
          text-align:center;
          padding:86px 22px;
          background:
          linear-gradient(
            90deg,
            rgba(34,211,238,.16),
            rgba(37,99,235,.12),
            rgba(34,211,238,.16)
          );
          border-top:1px solid rgba(34,211,238,.15);
          border-bottom:1px solid rgba(34,211,238,.15)
        }

        .loc{
          border:1px solid rgba(148,163,184,.14);
          background:rgba(15,23,42,.75);
          border-radius:30px;
          padding:32px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:28px
        }

        .floatwa{
          position:fixed;
          right:18px;
          bottom:18px;
          z-index:30;
          background:#22c55e;
          color:#fff;
          border-radius:18px;
          padding:14px 18px;
          font-weight:900;
          box-shadow:0 18px 45px rgba(34,197,94,.25)
        }

        footer{
          border-top:1px solid rgba(148,163,184,.1);
          background:#000;
          color:#64748b
        }

        .foot{
          display:flex;
          justify-content:space-between;
          gap:24px;
          align-items:center;
          padding:34px 22px
        }

        .foot b{
          color:#67e8f9;
          font-size:24px
        }

        @media(max-width:900px){
          .links{display:none}
          .hero,.split{grid-template-columns:1fr}
          .stats{grid-template-columns:repeat(2,1fr)}
          .grid{grid-template-columns:1fr}
          .loc,.foot{flex-direction:column;align-items:flex-start}
        }

        @media(max-width:560px){
          .stats,.list{grid-template-columns:1fr}
          .btn{width:100%}
          .hero{padding-top:54px}
          .floatwa{left:18px;text-align:center}
        }
      `}</style>

      <nav className="nav">
        <div className="wrap navin">
          <a href="#home" className="brand">
            <div className="logo">FS</div>
            <div>
              <b>FS COMP</b>
              <span>Laptop Second • Rakit PC</span>
            </div>
          </a>

          <div className="links">
            <a href="#produk">Produk</a>
            <a href="#keunggulan">Keunggulan</a>
            <a href="#qc">QC</a>
            <a href="#lokasi">Lokasi</a>
          </div>

          <a className="btn primary" href={wa}>
            WhatsApp
          </a>
        </div>
      </nav>

      <div id="home" className="wrap hero">
        <div>
          <div className="badge">
            Pusat Laptop Second Berkualitas Pekalongan
          </div>

          <h1>
            Laptop Second
            <span className="grad">Berkualitas</span>
            Rakit PC & Aksesoris
          </h1>

          <p className="lead">
            FS Comp fokus pada penjualan laptop second berkualitas
            dengan QC ketat, rakit PC custom, aksesoris komputer,
            dan servis pendukung untuk kebutuhan Anda.
          </p>

          <div className="actions">
            <a className="btn primary" href={wa}>
              Konsultasi Sekarang
            </a>

            <a className="btn outline" href={katalog}>
              Lihat Katalog WA
            </a>
          </div>

          <div className="stats" id="keunggulan">
            <div className="stat"><b>QC Ketat</b><span>Unit dicek sebelum dijual</span></div>
            <div className="stat"><b>Garansi Toko</b><span>Belanja lebih tenang</span></div>
            <div className="stat"><b>Servis Profesional</b><span>Teknisi berpengalaman</span></div>
            <div className="stat"><b>Lokasi Jelas</b><span>FS Comp Wiradesa</span></div>
          </div>
        </div>

        <div className="device">
          <div className="deviceTop">
            <div>
              <small>FS Comp</small>
              <h2>Ready Laptop Second</h2>
            </div>
            <div className="fs">FS</div>
          </div>
          <div className="visual">
            <div className="screen">
              <b>QC Passed</b>
              <span>Laptop siap pakai</span>
            </div>
          </div>
          <div className="chips">
            <div className="chip">ThinkPad</div>
            <div className="chip">Latitude</div>
            <div className="chip">EliteBook</div>
          </div>
        </div>
      </div>

      <section id="produk">
        <div className="wrap">
          <div className="center">
            <div className="eye">Produk & Layanan</div>
            <h3>Solusi komputer untuk kebutuhan Anda</h3>
            <p>
              Mulai dari laptop second, rakit PC, aksesoris, sampai servis pendukung.
            </p>
          </div>

          <div className="grid">
            {items.map((item, index) => (
              <div className="card" key={item[0]}>
                <div className="ico">{index + 1}</div>
                <h4>{item[0]}</h4>
                <p>{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="qc" className="band">
        <div className="wrap split">
          <div>
            <div className="eye">QC FS Comp</div>
            <h3>Setiap unit dicek sebelum dijual.</h3>
            <p className="text">
              Laptop second tidak boleh asal terlihat menyala. Kami cek bagian penting
              agar pelanggan mendapat unit yang lebih layak, aman, dan siap dipakai.
            </p>
          </div>

          <div className="list">
            {[
              "Fisik & engsel",
              "Layar",
              "Keyboard",
              "Touchpad",
              "Baterai",
              "SSD/RAM",
              "Port USB",
              "Charger",
              "WiFi",
              "Performa"
            ].map((item) => (
              <div className="li" key={item}>✓ {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h3>Butuh rekomendasi laptop yang cocok?</h3>
          <p className="text">
            Chat admin FS Comp. Sebutkan kebutuhan, budget, dan pemakaian Anda.
            Kami bantu pilihkan unit yang paling sesuai.
          </p>
          <div className="actions" style={{justifyContent:"center"}}>
            <a className="btn primary" href={wa}>Chat Admin FS Comp</a>
            <a className="btn outline" href={katalog}>Lihat Katalog WA</a>
          </div>
        </div>
      </section>

      <section id="lokasi">
        <div className="wrap">
          <div className="loc">
            <div>
              <div className="eye">Lokasi Toko</div>
              <h3>FS Comp Wiradesa</h3>
              <p className="text">
                Jl. Wiradesa No.1 RT22/RW05, Wiradesa, Kab. Pekalongan.
              </p>
            </div>
            <a className="btn primary" href={wa}>Hubungi via WhatsApp</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <b>FS COMP</b>
            <p>Laptop second, rakit PC, aksesoris, dan servis komputer.</p>
          </div>
          <div>WhatsApp: 0816660056</div>
        </div>
      </footer>

      <a className="floatwa" href={wa}>Konsultasi Laptop</a>
    </main>
  )
}
