import nodemailer from 'nodemailer';
import { adminNewsletterNotificationTemplate, newsletterSubscriptionTemplate } from '../emailTemplates.js';

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
            html: newsletterSubscriptionTemplate()
        }

        // Mail To Admin
        const adminMail = {
            from: process.env.OUTLOOK_USER,
            to: process.env.FORWARD_MAIL,
            subject: 'New Newsletter Subscription',
            html: adminNewsletterNotificationTemplate({email})
        }

        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(clientMail),
        ])

        res.status(200).json({ message: `Welcome To Nevas.ai Newsletter Family` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Failed to send email.` })
    }
};