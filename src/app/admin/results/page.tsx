'use client';

import React from 'react';

export default function ResultsAdminPage() {
    const results = [
        { id: '1', juego: 'BALOTO', fecha: '2026-02-04', numeros: '12 25 31 04 18', estrella: '07', origen: 'Scraper Official' },
        { id: '2', juego: 'CHONTICO', fecha: '2026-01-31', numeros: '4 5 2 1', origen: 'Scraper Colombia' },
    ];

    return (
        <div>
            <h1>Resultados Oficiales</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Resultados obtenidos por los scrapers automáticos.</p>

            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '0.75rem' }}>Juego</th>
                            <th>Fecha</th>
                            <th>Números</th>
                            <th>Origen</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(r => (
                            <tr key={r.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{r.juego}</td>
                                <td>{r.fecha}</td>
                                <td>{r.numeros} {r.estrella && `(E: ${r.estrella})`}</td>
                                <td>{r.origen}</td>
                                <td><span style={{ color: 'var(--success)' }}>Validado</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
