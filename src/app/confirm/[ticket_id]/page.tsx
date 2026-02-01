'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmPage({ params }: { params: { ticket_id: string } }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        juego: 'BALOTO',
        variante: '',
        numeros: '12 25 31 04 18',
        estrella: '07',
        fecha: '2026-02-04'
    });

    const handleSave = () => {
        router.push('/email-consent');
    };

    return (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <header className="header">
                <h2>Confirma tus datos</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Verifica que los números coincidan con tu tiquete</p>
            </header>

            <div className="card">
                <div className="input-group">
                    <label>Juego</label>
                    <select value={formData.juego} onChange={e => setFormData({ ...formData, juego: e.target.value })}>
                        <option value="BALOTO">Baloto</option>
                        <option value="CHANCE">Chance</option>
                    </select>
                </div>

                {formData.juego === 'CHANCE' && (
                    <div className="input-group">
                        <label>Lotería / Variante</label>
                        <input
                            type="text"
                            placeholder="Ej: Chontico Noche"
                            value={formData.variante}
                            onChange={e => setFormData({ ...formData, variante: e.target.value })}
                        />
                    </div>
                )}

                <div className="input-group">
                    <label>Números Apostados</label>
                    <input
                        type="text"
                        value={formData.numeros}
                        onChange={e => setFormData({ ...formData, numeros: e.target.value })}
                        style={{ fontSize: '1.25rem', fontWeight: 'calc(600)', textAlign: 'center', letterSpacing: '2px' }}
                    />
                    <small style={{ color: 'var(--success)' }}>Confianza: Alta</small>
                </div>

                {formData.juego === 'BALOTO' && (
                    <div className="input-group">
                        <label>Súper Baloto / Estrella</label>
                        <input
                            type="text"
                            value={formData.estrella}
                            onChange={e => setFormData({ ...formData, estrella: e.target.value })}
                            style={{ width: '80px', margin: '0 auto', display: 'block', textAlign: 'center' }}
                        />
                    </div>
                )}

                <div className="input-group">
                    <label>Fecha del Sorteo</label>
                    <input
                        type="date"
                        value={formData.fecha}
                        onChange={e => setFormData({ ...formData, fecha: e.target.value })}
                    />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button className="btn btn-secondary" onClick={() => router.back()}>Repetir foto</button>
                    <button className="btn btn-primary" onClick={handleSave}>Confirmar y continuar</button>
                </div>
            </div>
        </main>
    );
}
