'use client';

import { use } from 'react';
import Link from 'next/link';

export default function LandingPage({ params }: { params: Promise<{ qr_id: string }> }) {
    const { qr_id } = use(params);
    const merchantName = qr_id === 'demo-comercio' ? "servicio de notificación de Loterías" : "Punto de Venta";

    return (
        <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="header">
                <div className="logo-placeholder">SL</div>
                <h1>Bienvenido al {merchantName}</h1>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Sube tu tiquete y te avisamos por email y WhatsApp si ganaste.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/upload" className="btn btn-primary">
                        Subir foto de tiquete
                    </Link>
                    <Link href="/upload?gallery=true" className="btn btn-secondary">
                        Subir desde galería
                    </Link>
                </div>

                <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    No guardamos tu tarjeta, solo tu tiquete.
                </p>
            </div>
        </main>
    );
}
