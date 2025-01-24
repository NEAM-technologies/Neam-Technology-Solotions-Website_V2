// src/app/api/send/contactForm/route.ts
import { NextResponse } from "next/server";
import { mailOptions, transporter } from "./nodemailer";

type ContactFormData = {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  service: string;
  notes: string;
};

const generateEmailContent = (data: ContactFormData) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${key}: \n${val} \n \n`),
    ""
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    const displayKeys = {
      'fname': "First Name",
      'lname': "Last Name",
      'phone': "Phone Number",
      'email': "Email",
      'service': "Service",
      'notes': "Additional Notes",
    }

    return (str += `<h3 class="form-heading" align="left">${displayKeys[key as keyof typeof displayKeys]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<html lang="en"> 
      <head> 
        <meta charset="UTF-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <title>New Contact Request</title> 
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" /> 
        <style> 
          a { color: #c21d0e; text-decoration: none; } 
          .maintable { width: 75%; border-collapse: collapse; margin: auto; } 
          .maintable { border: 1px solid #eaeaea; } 
          .footertext { font-size: 12px; } 
          @media (min-width: 640px) { .footertext { font-size: 16px; } } 
        </style> 
      </head> 
      <body style="background-color: #f1f0f0; font-family: Nunito, sans-serif"> 
        <table align="center" cellpadding="0" cellspacing="0" style="margin: 0 auto; text-align: center; max-width: 42rem; width: 100%"> 
          <tr> 
            <td colspan="1" style="text-align: center; background-color: #ffffff"> 
              <a href="#"> 
                <h2 style="width: 200px; margin-bottom: 20px; font-weight: bold;">NEAM TECH</h2> 
              </a> 
            </td> 
          </tr> 
          <tr> 
            <td colspan="1" style="background-color: #c21d0e; height: 55px"> 
              <table role="presentation" style="border-collapse: collapse; margin: auto" > 
                <tr> 
                  <td style="width: 2.5rem; height: 1px; padding-right: 10px"> 
                    <hr style="border: 0; border-top: 1px solid #fff" /> 
                  </td> 
                  <td> 
                    <img src="https://firebasestorage.googleapis.com/v0/b/you-insurance-893e5.firebasestorage.app/o/emaillogo.png?alt=media&token=344c2677-e026-4867-a340-157d2f97d231" alt="Logo" style="width: 20px; display: inline-block; margin: 0 10px" /> 
                  </td> 
                  <td style="width: 2.5rem; height: 1px; padding-left: 10px"> 
                    <hr style="border: 0; border-top: 1px solid #fff" /> 
                  </td> 
                </tr> 
              </table> 
            </td> 
          </tr> 
          <tr> 
            <td colspan="1" style="background-color: #c21d0e; height: 55px"> 
              <div style="font-size: 20px; font-weight: normal; margin: auto; margin: 0; color: #fff;"> A CLIENT WANTS TO GET IN CONTACT! </div> 
            </td> 
          </tr> 
          <tr> 
            <td colspan="1" style="background-color: #fff; padding: 20px;"> 
              <div style="font-size: 16px; color: #374151; margin: 0;">Hello Team,</div>
              <p style="line-height: 1.5; color: #4b5563; margin: 20px 0;">We have received a new contact request from a potential client. Please review the submitted details below:</p> 
              <div>${htmlData}</div> 
            </td> 
          </tr> 
          <tr> 
            <td colspan="1" style="background-color: #cc1616; height: 80px">
              <div style="font-size: 16px; margin: 5px 0; color: #fff;">
                <p class="footertext">© 2025 NEAM Tech. All Rights Reserved.</p>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>`,
  };
};

export async function POST(req: Request) {
  try {
    const data: ContactFormData = await req.json();
    const { fname, lname, email, phone, service } = data;

  
    // Check for missing fields
    if (!fname || !lname || !email || !phone || !service) {
      return NextResponse.json({ message: "Bad Request" }, { status: 400 });
    }

    // Sending the email
    console.log(transporter)
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: `New Contact Request from ${fname} ${lname}`,
    });

    // Success response
    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
