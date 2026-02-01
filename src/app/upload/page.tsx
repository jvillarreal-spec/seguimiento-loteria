'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const router = useRouter();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
                // Simulate processing and move to confirmation
                startProcessing();
            };
            reader.readAsDataURL(file);
        }
    };

    const startProcessing = () => {
        setIsProcessing(true);
        // In a real app, we would upload to server and get OCR results
        setTimeout(() => {
            // Mock ticket_id for redirection
            router.push('/confirm/mock-ticket-id');
        }, 2000);
    };

    return (
        <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <header className="header">
                <h2>Captura tu tiquete</h2>
            </header>

            <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    border: '2px dashed var(--border)',
                    borderRadius: 'var(--radius)',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#000'
                }}>
                    {preview ? (
                        <img src={preview} alt="Vista previa" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                        <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
                            <p>Encuadra el tiquete con buena luz</p>
                            <p style={{ fontSize: '0.75rem', marginTop: '1rem' }}>Evita reflejos sobre los números</p>
                        </div>
                    )}

                    {isProcessing && (
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff'
                        }}>
                            <div className="loader" style={{ marginBottom: '1rem' }}></div>
                            <p>Procesando imagen...</p>
                            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>Leyendo números / Validando sorteo</p>
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    {!isProcessing && (
                        <button
                            className="btn btn-primary"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Capturar tiquete
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
        .loader {
          border: 4px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top: 4px solid #fff;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </main>
    );
}
