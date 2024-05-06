// app/api/hello.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const pageData = await prisma.pages.findMany();
  return NextResponse.json(pageData);
}

// Handles POST requests to /api
export async function POST(request: Request) {
  const requestData = await request.json();
  console.log('inside route requestData === ', requestData);
  try {
    await prisma.pages.create({
      data: {
        // page_title: requestData['email'],
        page_description: requestData['name'],
        page_body: requestData['userNote'],
      },
    });
    console.log('insert completed');
    return NextResponse.json({ message: 'Success: Post data' });
  } catch (e) {
    console.log('we have an error YO e === ', e);
    return NextResponse.json({ message: 'ERROR Post data' });
  }

  // return NextResponse.json({ message: 'Hello World' });
}
