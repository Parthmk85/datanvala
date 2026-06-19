import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Simulate backend processing delay (e.g., saving to DB, Mailchimp, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would integrate with your Node.js backend logic or external service
    console.log(`Successfully subscribed: ${email}`);

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
