'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
            <aside style={{
                width: '280px',
                background: '#0f172a',
                color: '#f8fafc',
                padding: '2rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '4px 0 10px rgba(0,0,0,0.05)'
            }}>
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>SL</div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.025em' }}>Admin Lotería</h2>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    <MenuLink href="/admin" icon="📊">Dashboard</MenuLink>
                    <MenuLink href="/admin/merchants" icon="🏪">Comercios</MenuLink>
                    <MenuLink href="/admin/tickets" icon="🎟️">Tiquetes</MenuLink>
                    <MenuLink href="/admin/results" icon="🏆">Resultados</MenuLink>
                    <MenuLink href="/admin/logs" icon="📜">Logs Ops</MenuLink>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #1e293b' }}>
                    <button style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'transparent',
                        border: '1px solid #1e293b',
                        color: '#94a3b8',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}>
                        Cerrar Sesión
                    </button>
                </div>
            </aside>
            <main style={{ flex: 1, padding: '2.5rem', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}

function MenuLink({ href, icon, children }: { href: string, icon: string, children: React.ReactNode }) {
    return (
        <Link href={href} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.875rem 1rem',
            color: '#94a3b8',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '0.925rem',
            fontWeight: '500',
            transition: 'all 0.2s'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1e293b';
                e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#94a3b8';
            }}>
            <span style={{ fontSize: '1.1rem' }}>{icon}</span>
            {children}
        </Link>
    );
}
