'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MisTiquetesPage() {
    const router = useRouter();
    const [filter, setFilter] = useState('TODOS');

    // Mock data for UI
    const tickets = [
        { id: '1', juego: 'BALOTO', fecha: '2026-02-04', status: 'PENDING', numbers: [12, 25, 31, 4, 18], star: 7 },
        { id: '2', juego: 'CHANCE', variante: 'Antioqueñita', fecha: '2026-01-31', status: 'LOST', numbers: [4, 5, 2, 1] },
    ];

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'PENDING': return { text: 'Pendiente', color: 'var(--warning)' };
            case 'WON': return { text: '¡GANASTE!', color: 'var(--success)' };
            case 'LOST': return { text: 'No premiado', color: 'var(--text-muted)' };
            case 'NEEDS_REVIEW': return { text: 'Revisión requerida', color: 'var(--error)' };
            default: return { text: status, color: 'var(--text)' };
        }
    }

    return (
        <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <header className="header" style={{ textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Mis Tiquetes</h2>
                <Link href="/upload" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>+ Nuevo</Link>
            </header>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                {['TODOS', 'BALOTO', 'CHANCE'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            border: '1px solid var(--border)',
                            background: filter === f ? 'var(--primary)' : 'var(--surface)',
                            color: filter === f ? '#fff' : 'var(--text)',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tickets.filter(t => filter === 'TODOS' || t.juego === filter).map(ticket => {
                    const status = getStatusLabel(ticket.status);
                    return (
                        <div key={ticket.id} className="card" style={{ padding: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <span style={{ fontWeight: 'bold' }}>{ticket.juego} {ticket.variante && `- ${ticket.variante}`}</span>
                                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: status.color }}>{status.text}</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                                Sorteo: {ticket.fecha}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {ticket.numbers.map((n, i) => (
                                    <span key={i} style={{
                                        width: '32px',
                                        height: '32px',
                                        background: '#f1f5f9',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold'
                                    }}>{n}</span>
                                ))}
                                {ticket.star && (
                                    <span style={{
                                        width: '32px',
                                        height: '32px',
                                        background: 'var(--warning)',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold'
                                    }}>{ticket.star}</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: 'auto', padding: '2rem 0' }}>
                <button className="btn btn-primary" onClick={() => router.push('/upload')}>Subir nuevo tiquete</button>
            </div>
        </main>
    );
}
