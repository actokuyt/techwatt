import nodemailer from "nodemailer"

interface ContactMail {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }
  
  export async function sendContactEmail(contactMail: ContactMail) {
    try {
      var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: contactMail.email,
        to: process.env.RECEIVING_EMAIL,
        subject: "New Message from TechWatt.ai",
        html: `<p>
              Full Name: ${contactMail.firstName} ${contactMail.lastName} <br>
              Email: ${contactMail.email} <br>
              Message: ${contactMail.message}
              </p>`,
      };
  
      const mailresponse = await transport.sendMail(mailOptions);
      return mailresponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  