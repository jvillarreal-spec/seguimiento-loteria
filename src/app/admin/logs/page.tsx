'use client';

import React from 'react';

export default function LogsAdminPage() {
    const logs = [
        { id: '1', type: 'SCRAPE', message: 'Baloto results fetched successfully', time: '2026-02-01 10:00 AM' },
        { id: '2', type: 'MATCH', message: 'Matching job completed: 0 winners found', time: '2026-02-01 10:05 AM' },
        { id: '3', type: 'EMAIL', message: 'Confirmation sent to user1@gmail.com', time: '2026-02-01 10:06 AM' },
    ];

    return (
        <div>
            <h1>Logs de Operaciones</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Historial de scraping, emparejamiento y notificaciones.</p>

            <div className="card">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {logs.map(log => (
                        <div key={log.id} style={{ padding: '1rem', borderBottom: '1px solid #f1f5f9', fontSize: '0.875rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontWeight: 'bold', color: log.type === 'SCRAPE' ? 'blue' : log.type === 'MATCH' ? 'green' : 'orange' }}>
                                    [{log.type}]
                                </span>
                                <span style={{ color: 'var(--text-muted)' }}>{log.time}</span>
                            </div>
                            <div style={{ marginTop: '0.25rem' }}>{log.message}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
