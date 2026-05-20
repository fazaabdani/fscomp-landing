import { ShieldCheck, BadgeCheck, Wrench, Truck, MapPin, MessageCircle, Monitor, Cpu, Keyboard, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const waNumber = "62816660056";
  const wa = `https://wa.me/${waNumber}?text=Assalamualaikum%20FS%20Comp%2C%20saya%20mau%20konsultasi%20laptop`;
  const katalog = "https://katalog.fscomp.id";

  const features = [
    { icon: ShieldCheck, title: "QC Ketat", desc: "Unit dicek sebelum dijual" },
    { icon: BadgeCheck, title: "Garansi Toko", desc: "Belanja lebih tenang" },
    { icon: Wrench, title: "Servis Profesional", desc: "Teknisi berpengalaman" },
    { icon: Truck, title: "Pengiriman Aman", desc: "Packing rapi & aman" },
  ];

  const products = [
    { icon: Monitor, title: "Laptop Second", desc: "Pilihan terbaik untuk kerja, sekolah, kuliah, dan usaha." },
    { icon: Cpu, title: "Rakit PC", desc: "Rakit PC custom sesuai kebutuhan dan anggaran Anda." },
    { icon: Keyboard, title: "Aksesoris", desc: "Keyboard, mouse, kabel, adaptor, dan perlengkapan komputer." },
    { icon: Wrench, title: "Servis Laptop/PC", desc: "Install ulang, upgrade SSD/RAM, cleaning, dan pengecekan." },
  ];

  const qcItems = ["Fisik & engsel", "Layar", "Keyboard", "Touchpad", "Baterai", "SSD/RAM", "Port USB", "Charger", "WiFi", "Performa"];

  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(14,165,233,0.28),transparent_38%),radial-gradient(circle_at_20%_75%,rgba(37,99,235,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,7,18,0.1),#030712_85%)]" />

      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/10 bg-[#030712]/85 px-5 py-4 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20 text-slate-950">FS</div>
          <div>
            <div className="font-extrabold tracking-tight text-lg">FSCOMP</div>
            <div className="text-xs text-slate-400">Laptop • Second • Best PC</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#produk" className="hover:text-cyan-300">Produk</a>
          <a href={katalog} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Katalog</a>
          <a href="#keunggulan" className="hover:text-cyan-300">Keunggulan</a>
          <a href="#qc" className="hover:text-cyan-300">QC</a>
          <a href="#lokasi" className="hover:text-cyan-300">Lokasi</a>
        </nav>
        <a href={wa} className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/10 transition">
          <MessageCircle size={17} /> WhatsApp
        </a>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs md:text-sm text-cyan-100 mb-6">
            <ShieldCheck size={16} /> Pusat Laptop Second Berkualitas Terpercaya
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
            Laptop Second <span className="text-cyan-300">Berkualitas</span>, Rakit PC & Aksesoris
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-xl">
            FS Comp menyediakan laptop second pilihan dengan QC ketat, rakit PC custom, aksesoris komputer, dan servis pendukung untuk kebutuhan kerja, sekolah, kuliah, dan bisnis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={wa} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 text-slate-950 font-bold px-6 py-4 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition">
              Konsultasi Sekarang <MessageCircle size={18} />
            </a>
            <a href={katalog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-slate-100 hover:bg-white/10 transition">
              Lihat Katalog <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-cyan-500/20 blur-3xl" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40">
            <div className="aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-950 to-black flex items-center justify-center overflow-hidden">
              <div className="relative w-[86%] h-[56%] rounded-3xl border border-cyan-300/30 bg-slate-950 shadow-2xl shadow-cyan-500/30 -rotate-6">
                <div className="absolute inset-3 rounded-2xl bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.7),rgba(37,99,235,0.35)_30%,transparent_60%)]" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-10 rounded-b-[3rem] bg-slate-800 border border-white/10" />
              </div>
            </div>
            <div className="absolute top-8 right-6 rounded-2xl bg-white/95 text-slate-900 px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2 font-bold text-sm"><CheckCircle2 className="text-cyan-500" size={18} /> Unit Dicek</div>
              <div className="text-xs text-slate-500 mt-1">Sebelum dijual</div>
            </div>
          </div>
        </div>
      </section>

      <section id="keunggulan" className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
          {features.map((item) => (
            <div key={item.title} className="flex items-center gap-4 rounded-3xl p-4 hover:bg-white/[0.04] transition">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                <item.icon size={24} />
              </div>
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="produk" className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="mb-8">
          <p className="text-cyan-300 font-semibold mb-2">Produk & Layanan</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Solusi komputer untuk kebutuhan Anda</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((item) => (
            <div key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold group-hover:gap-3 transition-all">Konsultasi <ArrowRight size={16} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="qc" className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-6 md:p-10">
          <div>
            <p className="text-cyan-300 font-semibold mb-2">QC FS Comp</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">Setiap unit dicek sebelum dijual.</h2>
            <p className="text-slate-300 leading-relaxed">
              Kami tidak asal jual. Laptop second dicek dari fisik, fungsi utama, performa, hingga kelengkapan agar pelanggan mendapat unit yang layak pakai dan lebih aman.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {qcItems.map((item) => (
              <div key={item} className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3 text-sm text-slate-200 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="rounded-[2.5rem] bg-cyan-400 text-slate-950 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Butuh rekomendasi laptop yang cocok?</h2>
            <p className="mt-3 text-slate-800 max-w-2xl">Chat admin FS Comp. Sebutkan kebutuhan, budget, dan pemakaian Anda. Kami bantu pilihkan unit yang paling sesuai.</p>
          </div>
          <a href={wa} className="shrink-0 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 text-white font-bold px-7 py-4 hover:bg-slate-800 transition">
            Chat Admin FS Comp <MessageCircle size={19} />
          </a>
        </div>
      </section>

      <footer id="lokasi" className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-10 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="font-extrabold text-xl">FSCOMP</div>
            <p className="text-sm text-slate-400 mt-2">Laptop second, rakit PC, aksesoris, dan servis komputer.</p>
          </div>
          <div className="md:text-right text-slate-300">
            <div className="inline-flex md:justify-end items-start gap-2">
              <MapPin size={18} className="text-cyan-300 mt-1" />
              <span>FS Comp Wiradesa — Jl. Wiradesa No.1 RT22/RW05, Wiradesa, Kab. Pekalongan. WA: 0816660056</span>
            </div>
          </div>
        </div>
      </footer>

      <a href={wa} className="fixed z-30 right-5 bottom-5 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-bold text-white shadow-2xl shadow-green-900/30 hover:bg-green-400 transition">
        <MessageCircle size={20} /> Konsultasi Laptop
      </a>
    </main>
  );
}
