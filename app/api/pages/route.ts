// app/api/hello.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const pageData = await prisma.pages.findMany();
  console.log('----------- inside ------- GET ');
  return NextResponse.json(pageData);
}

// Handles POST requests to /api
export async function POST(request: Request) {
  console.log('----------- inside ------- POST Pages ================= ');
  console.log('----------- 2 inside ------- POST Pages ================= ');
  const requestData = await request.json();
  console.log('inside route requestData === ', requestData);
  try {
    await prisma.pages.create({
      data: {
        page_name: requestData['page_name'],
        page_title: requestData['page_title'],
        page_description: requestData['page_description'],
        page_body: requestData['page_body'],
        is_active: requestData['is_active'],
        is_draft: requestData['is_draft'],
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
