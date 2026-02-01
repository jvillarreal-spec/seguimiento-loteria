'use client';

import React from 'react';

export default function MerchantsPage() {
    const merchants = [
        { id: '1', nombre: 'Super Inter - Centro', responsable: 'Carlos Gomez', celular: '3101234567', ciudad: 'Cali', status: 'active' },
        { id: '2', nombre: 'Gana Gana - Terminal', responsable: 'Marta Ruiz', celular: '3157654321', ciudad: 'Ibagué', status: 'active' },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Gestión de Comercios</h1>
                <button className="btn btn-primary" style={{ width: 'auto' }}>+ Nuevo Comercio</button>
            </div>

            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                            <th style={{ padding: '0.75rem' }}>Comercio</th>
                            <th>Responsable</th>
                            <th>Celular</th>
                            <th>Ciudad</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchants.map(m => (
                            <tr key={m.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '0.75rem' }}>
                                    <div style={{ fontWeight: '600' }}>{m.nombre}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {m.id}</div>
                                </td>
                                <td>{m.responsable}</td>
                                <td>{m.celular}</td>
                                <td>{m.ciudad}</td>
                                <td><span style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', background: '#dcfce7', color: '#166534' }}>Activo</span></td>
                                <td>
                                    <button style={{ border: 'none', background: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.875rem' }}>Ver QR</button>
                                    <span style={{ margin: '0 0.5rem' }}>|</span>
                                    <button style={{ border: 'none', background: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.875rem' }}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
