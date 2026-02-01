import React from 'react';

export default function AdminDashboard() {
    const stats = [
        { label: 'Escaneos hoy', value: '142', change: '+12%', color: '#2563eb' },
        { label: 'Tiquetes subidos', value: '89', change: '+5%', color: '#7c3aed' },
        { label: 'Usuarios únicos', value: '3,240', change: '+18%', color: '#059669' },
        { label: 'Conv. Scan → Ticket', value: '62%', change: '-2%', color: '#ea580c' },
    ];

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Dashboard General</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {stats.map((s, i) => (
                    <div key={i} className="card" style={{ borderLeft: `4px solid ${s.color}` }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{s.label}</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>{s.value}</span>
                            <span style={{ fontSize: '0.75rem', color: s.change.startsWith('+') ? 'var(--success)' : 'var(--error)' }}>{s.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Actividad Reciente</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                                <th style={{ padding: '0.75rem 0' }}>Ticket ID</th>
                                <th>Usuario</th>
                                <th>Juego</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map(i => (
                                <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '0.75rem 0' }}>#TK-00{i}</td>
                                    <td>user{i}@example.com</td>
                                    <td>Baloto</td>
                                    <td><span style={{ color: 'var(--warning)', fontWeight: '600' }}>Pending</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1rem' }}>Top Comercios</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Super Inter', 'Gana Gana', 'Red Servi'].map((name, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: '500' }}>{name}</span>
                                <span style={{ fontSize: '0.875rem', background: '#e0e7ff', padding: '0.25rem 0.75rem', borderRadius: '12px' }}>{100 - i * 20} tks</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
