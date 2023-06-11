const nodemailer = require('nodemailer');
import 'dotenv/config'

export const transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORTMAIL,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
});