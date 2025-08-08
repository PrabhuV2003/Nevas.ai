import nodemailer from 'nodemailer';
import { adminEmailTemplate, clientEmailTemplate } from '../emailTemplates.js';

export const submitContactForm = async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !phone || !company || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

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

        const adminMail = {
            from: process.env.OUTLOOK_USER,
            to: process.env.OUTLOOK_USER,
            subject: 'New Contact Form Submission - Nevas.ai',
            html: adminEmailTemplate({ name, email, phone, company, message }),
        };

        const clientMail = {
            from: process.env.OUTLOOK_USER,
            to: email,
            subject: 'Thank you for contacting us',
            html: clientEmailTemplate({ name, message }),
        };

        await Promise.all([
            transporter.sendMail(adminMail),
            transporter.sendMail(clientMail),
        ]);

        res.status(200).json({ message: 'We Received Your Hello!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send emails.' });
    }
};
