import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, country, course, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  // Configure SMTP transporter
  // Set these in Vercel Environment Variables:
  //   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipient = process.env.CONTACT_EMAIL || "muhammad.mudassir2001@gmail.com";

  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a1f1a; border-radius: 16px; overflow: hidden; border: 1px solid #c9a84c33;">
      <div style="background: linear-gradient(135deg, #0d2b22 0%, #1a3f32 100%); padding: 32px; text-align: center; border-bottom: 2px solid #c9a84c55;">
        <h1 style="color: #c9a84c; margin: 0; font-size: 24px;">✨ New Trial Request</h1>
        <p style="color: #d4c9a8; margin: 8px 0 0; font-size: 14px;">Nur Al-Quran Academy</p>
      </div>
      <div style="padding: 28px 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; color: #c9a84c; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; color: #e8e0d0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #c9a84c; font-weight: 600; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; color: #e8e0d0;"><a href="mailto:${email}" style="color: #7cc9a8;">${email}</a></td>
          </tr>
          ${phone ? `<tr><td style="padding: 12px 0; color: #c9a84c; font-weight: 600; vertical-align: top;">Phone</td><td style="padding: 12px 0; color: #e8e0d0;">${phone}</td></tr>` : ""}
          ${country ? `<tr><td style="padding: 12px 0; color: #c9a84c; font-weight: 600; vertical-align: top;">Country</td><td style="padding: 12px 0; color: #e8e0d0;">${country}</td></tr>` : ""}
          ${course ? `<tr><td style="padding: 12px 0; color: #c9a84c; font-weight: 600; vertical-align: top;">Course</td><td style="padding: 12px 0; color: #e8e0d0;">${course}</td></tr>` : ""}
          ${message ? `<tr><td style="padding: 12px 0; color: #c9a84c; font-weight: 600; vertical-align: top;">Message</td><td style="padding: 12px 0; color: #e8e0d0;">${message}</td></tr>` : ""}
        </table>
      </div>
      <div style="background: #0d2b22; padding: 16px 32px; text-align: center; border-top: 1px solid #c9a84c33;">
        <p style="color: #888; margin: 0; font-size: 12px;">Sent from Nur Al-Quran Academy website</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Nur Al-Quran Academy" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New Trial Request from ${name}${course ? ` — ${course}` : ""}`,
      html: htmlBody,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
}
