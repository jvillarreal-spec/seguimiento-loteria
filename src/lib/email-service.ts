export interface EmailOptions {
    to: string;
    subject: string;
    template: 'CONFIRMATION' | 'WINNER';
    data: any;
}

export async function sendEmail(options: EmailOptions) {
    console.log(`Sending ${options.template} email to ${options.to}`);
    // In a real implementation, use Resend, Amazon SES, or SendGrid
    // return resend.emails.send({
    //   from: 'Seguimiento Loteria <noreply@tusolucion.com>',
    //   to: options.to,
    //   subject: options.subject,
    //   html: renderTemplate(options.template, options.data)
    // });
    return { success: true, messageId: 'mock-msg-id' };
}

function renderTemplate(template: string, data: any): string {
    if (template === 'CONFIRMATION') {
        return `<h1>¡Tiquete registrado!</h1><p>Has registrado un tiquete de ${data.juego} para el sorteo del ${data.fecha}.</p>`;
    }
    if (template === 'WINNER') {
        return `<h1>¡FELICIDADES, GANASTE!</h1><p>Tu tiquete de ${data.juego} tiene premio. Revisa los detalles en la app.</p>`;
    }
    return '';
}
