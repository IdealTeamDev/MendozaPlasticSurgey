import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, celular, procedimiento, formSource } = data;

    // Usar SMTP como servicio de correo
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Contraseña de aplicación (App Password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: 'manuel@idealteamcolombia.com',
      subject: `Nuevo Contacto Web - ${formSource || 'Mendoza Plastic Surgery'}`,
      html: `
        <h2>Nuevo contacto desde la página web</h2>
        <p><strong>Nombre:</strong> ${nombre || 'No provisto'}</p>
        <p><strong>Email:</strong> ${email || 'No provisto'}</p>
        <p><strong>Celular:</strong> ${celular || 'No provisto'}</p>
        <p><strong>Procedimiento deseado:</strong> ${procedimiento || 'No especificado'}</p>
        <p><strong>Origen:</strong> ${formSource || 'Formulario general'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { success: false, error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
}
