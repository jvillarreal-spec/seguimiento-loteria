'use client';

import React from 'react';

export default function TicketsAdminPage() {
    const tickets = [
        { id: '1', usuario: 'usuario1@gmail.com', juego: 'BALOTO', fecha: '2026-02-04', status: 'PENDING' },
        { id: '2', usuario: 'usuario2@outlook.com', juego: 'CHANCE', fecha: '2026-01-31', status: 'LOST' },
    ];

    return (
        <div>
            <h1>Monitoreo de Tiquetes</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Todos los tiquetes registrados por los usuarios.</p>

            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '0.75rem' }}>ID</th>
                            <th>Usuario</th>
                            <th>Juego</th>
                            <th>Fecha Sorteo</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(t => (
                            <tr key={t.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '0.75rem' }}>{t.id}</td>
                                <td>{t.usuario}</td>
                                <td>{t.juego}</td>
                                <td>{t.fecha}</td>
                                <td>{t.status}</td>
                                <td>
                                    <button style={{ border: 'none', background: 'none', color: 'var(--primary)', cursor: 'pointer' }}>Ver Detalle</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
