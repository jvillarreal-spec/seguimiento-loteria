'use client';

import React from 'react';

export default function MerchantsPage() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [merchants, setMerchants] = React.useState([
        { id: '1', nombre: 'Super Inter - Centro', responsable: 'Carlos Gomez', celular: '3101234567', ciudad: 'Cali', status: 'active' },
        { id: '2', nombre: 'Gana Gana - Terminal', responsable: 'Marta Ruiz', celular: '3157654321', ciudad: 'Ibagué', status: 'active' },
    ]);

    const [form, setForm] = React.useState({
        nombre: '',
        responsable: '',
        celular: '',
        ciudad: ''
    });

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        const newMerchant = {
            id: Math.random().toString(36).substr(2, 9),
            ...form,
            status: 'active'
        };
        setMerchants([...merchants, newMerchant]);
        setIsModalOpen(false);
        setForm({ nombre: '', responsable: '', celular: '', ciudad: '' });
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Gestión de Comercios</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Administra los puntos de venta y sus códigos QR.</p>
                </div>
                <button className="btn btn-primary" style={{ width: 'auto' }} onClick={() => setIsModalOpen(true)}>
                    + Nuevo Comercio
                </button>
            </div>

            <div className="card" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #f1f5f9', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                            <th style={{ padding: '1rem' }}>Comercio</th>
                            <th style={{ padding: '1rem' }}>Responsable</th>
                            <th style={{ padding: '1rem' }}>Celular</th>
                            <th style={{ padding: '1rem' }}>Ciudad</th>
                            <th style={{ padding: '1rem' }}>Estado</th>
                            <th style={{ padding: '1rem' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchants.map(m => (
                            <tr key={m.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ fontWeight: '600' }}>{m.nombre}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {m.id}</div>
                                </td>
                                <td style={{ padding: '1rem' }}>{m.responsable}</td>
                                <td style={{ padding: '1rem' }}>{m.celular}</td>
                                <td style={{ padding: '1rem' }}>{m.ciudad}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.625rem',
                                        borderRadius: '9999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        background: '#dcfce7',
                                        color: '#166534'
                                    }}>Activo</span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <button style={{ border: 'none', background: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: '600' }}>QR</button>
                                        <button style={{ border: 'none', background: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>Editar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', width: '100%', maxWidth: '450px' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Nuevo Comercio</h2>
                        <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="input-group">
                                <label>Nombre del Comercio</label>
                                <input required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="Ej: Super Inter Aranjuez" />
                            </div>
                            <div className="input-group">
                                <label>Responsable</label>
                                <input required value={form.responsable} onChange={e => setForm({ ...form, responsable: e.target.value })} placeholder="Nombre del administrador" />
                            </div>
                            <div className="input-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label>Celular</label>
                                    <input required value={form.celular} onChange={e => setForm({ ...form, celular: e.target.value })} placeholder="310..." />
                                </div>
                                <div>
                                    <label>Ciudad</label>
                                    <input required value={form.ciudad} onChange={e => setForm({ ...form, ciudad: e.target.value })} placeholder="Cali, Medellín..." />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                                <button type="submit" className="btn btn-primary">Crear Comercio</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
