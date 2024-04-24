import { NextResponse } from "next/server";

// try {
//   const results = await new Promise((resolve, reject) => {
//     db.query('SELECT * FROM department', (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });

//   return NextResponse.json({ data: results }, { status: 201 });
// } catch (error) {
//   return NextResponse.json({ error: error}, { status: 500 });
// }