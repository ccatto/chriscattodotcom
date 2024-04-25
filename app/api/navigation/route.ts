// app/api/hello.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: Request) {
  // ...
  const navigationData = await prisma.navigation.findMany();
  return NextResponse.json(navigationData);
  // return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request: Request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}


// export default function handler(req, res) {
//   res.status(200).json({ text: 'Hello' });
// }