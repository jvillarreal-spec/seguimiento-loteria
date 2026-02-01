'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f1f5f9' }}>
            <aside style={{ width: '240px', background: '#1e293b', color: '#fff', padding: '1.5rem' }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>Admin Loteria</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link href="/admin" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Dashboard</Link>
                    <Link href="/admin/merchants" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Comercios</Link>
                    <Link href="/admin/tickets" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Tiquetes</Link>
                    <Link href="/admin/results" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Resultados</Link>
                    <Link href="/admin/logs" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Logs Ops</Link>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
}
