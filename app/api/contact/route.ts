
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const contactData = await prisma.contact.findMany();
  return NextResponse.json(contactData);
  // return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  const requestData = await request.json();
  console.log('inside route requestData === ', requestData);
  try {
    await prisma.contact.create({
      data: {
        email_address: requestData['email'],
        name: requestData['name'],
        message: requestData['userNote'],
      },
    });
    console.log('insert completed');
    return NextResponse.json({ message: 'Post data' });
  } catch (e) {
    console.log('we have an error YO e === ', e);
    // if (e instanceof prisma.PrismaClientKnownRequestError) {
    //   // The .code property can be accessed in a type-safe manner
    //   if (e.code === 'P2002') {
    //     console.log(
    //       'There is a unique constraint violation, a new user cannot be created with this email'
    //     )
    //   }
    // }
    return NextResponse.json({ message: 'ERROR Post data' });
  }
}

// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' });
// }
