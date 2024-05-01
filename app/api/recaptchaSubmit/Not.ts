// // Simplified for brevity
// export async function handler(req, res) {
//   if (req.method === "POST") {
//     const token = req.body.token;
//     const response = await post(`https://www.google.com/recaptcha/api/siteverify`, {
//       secret: process.env.RECAPTCHA_SECRET_KEY,
//       response: token,
//     });
//     // Check verification result and respond accordingly
//   }
// }
