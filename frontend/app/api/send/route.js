
import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server"
import EmailTemplate from '@/components/email-template';

const resend = new Resend("re_5MkBuw4q_5Yw6A2mRDejjHvPSfjmHsuSg");

export async function POST(req) {
  try {
    let { nombre,asunto,email } = await req.json()
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rafaeltreggia24@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ nombre:nombre,asunto:asunto, email:email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}