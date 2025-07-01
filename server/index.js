const express = require("express");
const nodeMailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit-form", async (req, res) => {
  const { name, email, phone, plan, billingCycle, addOns } = req.body;

  // const transporter = nodeMailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "j.elizabethbush@gmail.com",
  //   },
  // });

  const mailOptions = {
    from: "j.elizabethbush@gmail.com",
    to: email,
    subject: "Subscription Confirmation",
    text: `
Hi ${name},

Thanks for subscribing!

📦 Plan: ${plan} (${billingCycle})
✨ Add-ons: ${addOns.join(", ")}
📞 Phone: ${phone}

We're glad to have you on board!
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent");
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
