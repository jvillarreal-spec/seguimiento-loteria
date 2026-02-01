import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h1>Seguimiento Lotería Colombia</h1>
      <p style={{ margin: '1rem 0', color: '#666' }}>
        Plataforma B2B2C para el seguimiento de tiquetes de lotería.
      </p>

      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
          <h3>Vista Usuario (Demo)</h3>
          <p style={{ fontSize: '0.875rem', margin: '0.5rem 0', color: '#444' }}>
            Simula la entrada por un código QR de un comercio (ej. Super Inter).
          </p>
          <Link href="/demo-comercio" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
            Ir a Landing de Usuario →
          </Link>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left' }}>
          <h3>Panel Administrador</h3>
          <p style={{ fontSize: '0.875rem', margin: '0.5rem 0', color: '#444' }}>
            Gestión de comercios, tiquetes registrados y resultados oficiales.
          </p>
          <Link href="/admin" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>
            Ir al Dashboard Admin →
          </Link>
        </div>
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.75rem', color: '#999' }}>
        Seguimiento Lotería MVP - 2026
      </footer>
    </main>
  );
}
