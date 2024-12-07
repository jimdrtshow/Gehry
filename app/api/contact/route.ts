
import { EmailTemplate } from '@/components/Email_template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';



const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Récupération du corps de la requête
    const body = await req.json();
    const { fullName, email, phoneNumber, message } = body;


    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jimdrt@outlook.com'],
      subject: 'Hello world',
      react: EmailTemplate({
        fullName,   
        email,      
        phoneNumber, 
        message,    
      }),    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

