import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

async function sendMail(to, subject, text) {
    const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        text: text,
    });

    console.log("Message sent: %s", info.messageId);
}

export default sendMail;