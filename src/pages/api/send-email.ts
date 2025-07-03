import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Name, email, and message are required.' }),
        { status: 400 }
      );
    }

    // Send the email
    const response = await resend.emails.send({
      from: import.meta.env.FROM_EMAIL,
      to: import.meta.env.TO_EMAIL,
      subject: `New message from ${name} on Staticfish`,
      html: `<p>You have a new contact form submission:</p><br>
             <strong>Name:</strong> ${name}<br>
             <strong>Email:</strong> ${email}<br>
             <strong>Message:</strong><br>
             <p>${message}</p>`,
      replyTo: email,
    });

    if (response.error) {
        console.error({ error: response.error });
        return new Response(
            JSON.stringify({ message: 'Error sending email.' }),
            { status: 500 }
        );
    }

    return new Response(
      JSON.stringify({ message: 'Message sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Something went wrong.' }),
      { status: 500 }
    );
  }
};
