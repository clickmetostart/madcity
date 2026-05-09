import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, loanType, method, message } = body;

    // In a production environment, you would use a service like Resend, Postmark, or Nodemailer here.
    // Example with a hypothetical mailer:
    /*
    await mailer.send({
      to: 'rob@provisor.com',
      bcc: 'clickme.tostart@gmail.com',
      subject: `New Lead: ${name} - ${interest}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Interest: ${interest}
        Loan Type: ${loanType}
        Preferred Contact: ${method}
        
        Message:
        ${message}
      `
    });
    */

    console.log('New Contact Form Submission:', body);

    // Simulate successful submission
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
