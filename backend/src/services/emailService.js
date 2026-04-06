import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.EMAIL_FROM || "Autism Circle <onboarding@resend.dev>";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const COMPANY_NAME = process.env.COMPANY_NAME || "Autism Circle";

// 🎨 BRAND GRADIENT (UPDATED)
const gradient = "linear-gradient(135deg,#F9C20A,#E85D04)";


// =======================
// 🔥 ADMIN EMAIL
// =======================
export const sendAdminEmail = async ({ name, email, phone, message }) => {
  try {
    if (!ADMIN_EMAIL) throw new Error("ADMIN_EMAIL not defined");

    return await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Inquiry - ${COMPANY_NAME}`,

      html: `
<div style="font-family:Arial,sans-serif;background:#FFF8E1;padding:30px;">

  <div style="max-width:620px;margin:auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.08);">

    <!-- HEADER -->
    <div style="background:${gradient};padding:25px;text-align:center;color:#fff;">
      <h2 style="margin:0;font-size:22px;">📩 New Client Inquiry</h2>
      <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
        ${COMPANY_NAME}
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:25px;">

      <p style="color:#555;margin-bottom:20px;">
        A new inquiry has been submitted through your website:
      </p>

      <div style="border-radius:12px;overflow:hidden;border:1px solid #eee;">

        ${[
          ["Name", name],
          ["Email", email],
          ["Phone", phone || "N/A"],
          ["Message", message],
        ]
          .map(
            ([label, value], i) => `
          <div style="display:flex;padding:12px;background:${
            i % 2 === 0 ? "#fff" : "#FFF3CC"
          };">
            <div style="width:120px;font-weight:600;color:#0A2540;">
              ${label}
            </div>
            <div style="flex:1;color:#555;">
              ${value}
            </div>
          </div>
        `
          )
          .join("")}

      </div>

    </div>

    <!-- FOOTER -->
    <div style="padding:15px;text-align:center;font-size:12px;color:#777;background:#FFF3CC;">
      © ${new Date().getFullYear()} ${COMPANY_NAME} <br/>
      Supporting Every Step 💛
    </div>

  </div>
</div>
`,
    });
  } catch (error) {
    console.error("❌ Admin Email Error:", error.message);
  }
};



// =======================
// 🔥 USER AUTO REPLY
// =======================
export const sendUserEmail = async ({ name, email }) => {
  try {
    return await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `We’ve Received Your Request - ${COMPANY_NAME}`,

      html: `
<div style="font-family:Arial,sans-serif;background:#FFF8E1;padding:30px;">

  <div style="max-width:620px;margin:auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.08);">

    <!-- HEADER -->
    <div style="background:${gradient};padding:30px;text-align:center;color:#fff;">
      <h2 style="margin:0;font-size:24px;">${COMPANY_NAME}</h2>
      <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">
        Care • Support • Growth
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:28px;">

      <h3 style="margin-top:0;color:#0A2540;">Hello ${name}, 👋</h3>

      <p style="color:#555;line-height:1.6;">
        Thank you for reaching out to <strong>${COMPANY_NAME}</strong>.
        We’ve received your message and our team will connect with you shortly.
      </p>

      <p style="color:#555;line-height:1.6;">
        ⏱ Expected response time: <strong>within 24 hours</strong>
      </p>

      <!-- CTA -->
      <div style="margin:30px 0;text-align:center;">
        <a href="mailto:${ADMIN_EMAIL}"
           style="background:#E85D04;color:#fff;padding:14px 22px;border-radius:999px;text-decoration:none;font-weight:bold;box-shadow:0 8px 20px rgba(232,93,4,0.3);">
          Contact Support →
        </a>
      </div>

      <p style="font-size:13px;color:#777;text-align:center;">
        If your request is urgent, feel free to reply directly to this email.
      </p>

    </div>

    <!-- FOOTER -->
    <div style="padding:18px;text-align:center;font-size:12px;color:#777;background:#FFF3CC;">
      © ${new Date().getFullYear()} ${COMPANY_NAME}<br/>
      You’re in safe hands 💛
    </div>

  </div>
</div>
`,
    });
  } catch (error) {
    console.error("❌ User Email Error:", error.message);
  }
};