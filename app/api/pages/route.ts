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
  // ...
  return NextResponse.json({ message: 'Hello World' });
}
