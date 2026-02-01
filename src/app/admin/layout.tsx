'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{
                    position: 'fixed',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 1000,
                    background: '#0f172a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    cursor: 'pointer',
                    display: 'none'
                }}
                className="mobile-menu-btn"
            >
                ☰
            </button>

            {/* Sidebar */}
            <aside style={{
                width: sidebarOpen ? '280px' : '0',
                background: '#0f172a',
                color: '#f8fafc',
                padding: sidebarOpen ? '2rem 1.5rem' : '0',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '4px 0 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                position: 'relative'
            }}
                className="admin-sidebar">
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: sidebarOpen ? 1 : 0, transition: 'opacity 0.3s' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>SL</div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.025em', whiteSpace: 'nowrap' }}>Admin Lotería</h2>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, opacity: sidebarOpen ? 1 : 0, transition: 'opacity 0.3s' }}>
                    <MenuLink href="/admin" icon="📊">Dashboard</MenuLink>
                    <MenuLink href="/admin/merchants" icon="🏪">Comercios</MenuLink>
                    <MenuLink href="/admin/tickets" icon="🎟️">Tiquetes</MenuLink>
                    <MenuLink href="/admin/results" icon="🏆">Resultados</MenuLink>
                    <MenuLink href="/admin/logs" icon="📜">Logs Ops</MenuLink>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #1e293b', opacity: sidebarOpen ? 1 : 0, transition: 'opacity 0.3s' }}>
                    <button style={{
                        width: '100%',
                        padding: '0.75rem',
                        background: 'transparent',
                        border: '1px solid #1e293b',
                        color: '#94a3b8',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap'
                    }}>
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '2.5rem',
                overflowY: 'auto',
                width: '100%',
                maxWidth: '100%'
            }}
                className="admin-main">
                {children}
            </main>

            <style jsx global>{`
                @media (max-width: 1024px) {
                    .admin-sidebar {
                        position: fixed !important;
                        left: 0;
                        top: 0;
                        bottom: 0;
                        z-index: 999;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .admin-main {
                        padding: 5rem 1.5rem 1.5rem !important;
                    }
                }
                @media (max-width: 768px) {
                    .admin-main {
                        padding: 5rem 1rem 1rem !important;
                    }
                }
            `}</style>
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
            transition: 'all 0.2s',
            whiteSpace: 'nowrap'
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
