const nodemailer = require('nodemailer');

class Email {
  constructor(user, url) {
    this.url = url;
    this.user = user;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        service: 'sendgrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
  }

  async send(subject, text) {
    const mailOption = {
      from: process.env.EMAIL_FROM,
      to: this.user.email,
      subject: subject,
      text,
    };

    await this.newTransport().sendMail(mailOption);
  }

  async sendPasswordResetEmail() {
    const text = `this url for Reset your password (10 Minutes to Expiers) ${this.url}`;
    await this.send('Reset Passwrod', text);
  }
}

module.exports = Email;
