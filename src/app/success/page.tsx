'use client';

import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
    return (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--success)',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '2rem'
                }}>✓</div>
                <h1>¡Tiquete Registrado!</h1>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Te avisaremos por email en cuanto el sorteo sea oficial.
                </p>
            </div>

            <div className="card" style={{ background: '#f0fdf4', borderColor: '#bcf0da' }}>
                <p style={{ fontWeight: '600', color: '#166534' }}>Estado: Pendiente de sorteo</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <Link href="/upload" className="btn btn-primary">
                    Subir otro tiquete
                </Link>
                <Link href="/mis-tiquetes" className="btn btn-secondary">
                    Ver mis tiquetes
                </Link>
            </div>
        </main>
    );
}
