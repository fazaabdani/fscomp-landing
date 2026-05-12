export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white",
      flexDirection: "column",
      fontFamily: "Arial"
    }}>
      <h1>FS Comp</h1>
      <p>Pusat Laptop Second Pekalongan</p>
      <a
        href="https://wa.me/62816692428"
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#2563eb",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px"
        }}
      >
        Chat WhatsApp
      </a>
    </main>
  )
}
