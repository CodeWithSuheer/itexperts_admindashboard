
import nodemailer from "nodemailer"

export async function sendEmail (to,from) {

    const {email,emailType,resetToken} = to;
    // console.log(email);
    // console.log(emailType);
    // console.log(resetToken);

    let output;

    if(emailType === "RESETPASSWORD"){

        output = `
        <h3>Password Reset Link</h3>
        <p>This link will expire in 15 minutes</p>
        <a href="http://localhost:5173/api/user/resetPassword?t=${resetToken}" target="_blank">Reset Link</a>
      `;

    }
    
    let transport = nodemailer.createTransport({
        service:"gmail",
        port:587,
        secure:false,
        auth:{
            user: process.env.EMAIL_AUTH_USER_EMAIL,
            pass: process.env.EMAIL_AUTH_PASSWORD, 
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    let mailoptions = {
        from,
        to:email,
        subject:emailType === 'RESETPASSWORD' ? 'Resst Password Link' : 'will Work',
        html:output
    };
    transport.sendMail(mailoptions,(error,info) => {
        if(error){
          return false;
        }
        return true;
    });
    };

    //module.exports = {sendEmail};
