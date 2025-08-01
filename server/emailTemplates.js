// ✅ Admin Email Template
export function adminEmailTemplate({ name, email, phone, company, message }) {
  return `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; padding: 20px 0;">
      <img src="https://yourdomain.com/logo.png" alt="Nevas.ai Logo" style="max-width: 150px; height: auto;">
    </div>
    <img src="https://yourdomain.com/banner.jpg" alt="Banner" style="width: 100%; max-width: 600px; height: auto; display: block;">

    <h2 style="color: #0052cc; margin-top: 20px;">New Contact Form Submission</h2>
    <p>You have received a new message from your website contact form:</p>
    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tbody>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Name:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Phone:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Company:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Message:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top: 30px;">Best regards,<br />The Nevas.ai Team</p>
  </div>
  `;
}

// ✅ Client Email Template
export function clientEmailTemplate({ name, message }) {
  return `
  <div style="font-family: Arial, sans-serif; color: #444; max-width: 600px; margin: 0 auto;">
    <div style="text-align: center; padding: 20px 0;">
      <img src="https://yourdomain.com/logo.png" alt="Nevas.ai Logo" style="max-width: 150px; height: auto;">
    </div>
    <img src="https://yourdomain.com/banner.jpg" alt="Banner" style="width: 100%; max-width: 600px; height: auto; display: block;">

    <h2 style="color: #007bff; margin-top: 20px;">Thank you for contacting Nevas.ai, ${name}!</h2>
    <p>We have received your message and will get back to you shortly.</p>
    <blockquote style="font-style: italic; color: #666; border-left: 4px solid #007bff; padding-left: 10px; margin: 20px 0;">
      "${message}"
    </blockquote>
    <p>If you have any urgent questions, feel free to reply to this email.</p>

    <p style="margin-top: 30px;">Best regards,<br />The Nevas.ai Team</p>
  </div>
  `;
}
