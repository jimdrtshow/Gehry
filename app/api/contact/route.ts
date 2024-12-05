import { EmailTemplate } from "@/components/Email_template";
import { Resend } from "resend";
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);


export async function GET() {
  return NextResponse.json({ message: "Contact API is working!" });
}


export async function POST() {
  try {
    console.log("Starting to process the POST request");

    const email = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jimdrt@outlook.com"],
      subject: "Hello world",
      react: EmailTemplate({ mail: "JohnDoe@mail.com", lastName: "Doe", firstName:"Jhon", phone:"0635470456", message:"Test"  }),
    });

    console.log("Email sent successfully:", email);

    return new Response(JSON.stringify(email), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
