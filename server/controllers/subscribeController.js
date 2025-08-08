import nodemailer from 'nodemailer';

export const submitNewsletterFrom = async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: 'Email is required' });

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.OUTLOOK_USER,
                pass: process.env.OUTLOOK_PASS,
            },
        });

        // Mail TO Client
        const clientMail = {
            from: process.env.OUTLOOK_USER,
            to: email,
            subject: 'Thanks for subscribing!',
            text: `You have successfully subscribed to our newsletter.`
        }

        // Mail To Admin
        const adminMail = {
            from: process.env.OUTLOOK_USER,
            to: process.env.OUTLOOK_USER,
            subject: 'New Newsletter Subscription',
            text: `New user subscribed: ${email}`
        }

        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(clientMail),
        ])

        res.status(200).json({ message: `Newsletter sent to both client and admin.` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Failed to send email.` })
    }
};