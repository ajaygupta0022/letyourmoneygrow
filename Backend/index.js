require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 requests per 15 minutes to prevent spam
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, 
  legacyHeaders: false, 
});

// Configure Nodemailer transporter (Uses .env variables for Hostinger)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: process.env.SMTP_PORT || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      ageGroup,
      monthlyInvestmentCapacity,
      primaryFinancialPriority,
      notes
    } = req.body;

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address (Must be the same as SMTP_USER for Hostinger)
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER, // Where you want to receive the emails
      replyTo: email, // If you reply to the email, it will go to the customer
      subject: `New Advisory Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eaeaea; border-radius: 10px;">
            <h2 style="color: #f97316;">New Advisory Request</h2>
            <p>You have received a new consultation request from your website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${fullName}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${phoneNumber}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${email}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Age Group:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${ageGroup || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Investment Capacity:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${monthlyInvestmentCapacity || 'N/A'}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eaeaea;"><strong>Priority:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eaeaea;">${primaryFinancialPriority || 'N/A'}</td></tr>
                <tr><td style="padding: 8px;"><strong>Notes:</strong></td><td style="padding: 8px;">${notes || 'N/A'}</td></tr>
            </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Thank you! Sachin Gupta has received your advisory request and will contact you within 24 hours.");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while submitting your request. Please try again later.");
  }
});

module.exports = app;