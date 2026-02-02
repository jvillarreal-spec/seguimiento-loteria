'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EmailConsentPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [consent, setConsent] = useState(false);

    const handleActivate = () => {
        if (email && phone && consent) {
            router.push('/success');
        } else {
            alert('Por favor, ingresa tu email, celular y acepta los términos.');
        }
    };

    return (
        <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <header className="header">
                <h2>Notificaciones</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Te avisaremos por aquí si ganas</p>
            </header>

            <div className="card">
                <div className="input-group">
                    <label>Tu Email</label>
                    <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Tu Celular</label>
                    <input
                        type="tel"
                        placeholder="3001234567"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        maxLength={10}
                    />
                    <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
                        Te enviaremos notificaciones por WhatsApp
                    </small>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', margin: '1.5rem 0' }}>
                    <input
                        type="checkbox"
                        checked={consent}
                        onChange={e => setConsent(e.target.checked)}
                        style={{ width: '20px', height: '20px', marginTop: '2px' }}
                    />
                    <label style={{ fontSize: '0.75rem', fontWeight: 'normal', color: 'var(--text-muted)' }}>
                        Acepto los <Link href="/terms" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Términos y Condiciones</Link> y el <Link href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Tratamiento de Datos Personales</Link>.
                    </label>
                </div>

                <button className="btn btn-primary" onClick={handleActivate}>
                    Guardar y activar seguimiento
                </button>
            </div>
        </main>
    );
}
