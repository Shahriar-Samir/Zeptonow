import nodemailer from "nodemailer";

const EMAIL_SERVER_HOST = "smtp-relay.brevo.com";
const EMAIL_SERVER_PORT = 587;
const EMAIL_SERVER_USER = "806ad4001@smtp-brevo.com";
const EMAIL_SERVER_PASSWORD = "yKscObUhEVrtSvQI";
const EMAIL_FROM = "shahriar.samir80@gmail.com";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

  const transporter = nodemailer.createTransport({
    host: EMAIL_SERVER_HOST,
    port: EMAIL_SERVER_PORT,
    secure: false,
    auth: {
      user: EMAIL_SERVER_USER,
      pass: EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      to: email,
      from: EMAIL_FROM,
      subject: "Your OTP Code",
      html: `<p>Your OTP code is: <b>${otp}</b></p>`,
    });

    return new Response(
      JSON.stringify({
        message: "OTP sent successfully",
        otp, // Return the OTP in the response
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send OTP" }), {
      status: 500,
    });
  }
}
