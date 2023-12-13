import prisma from "@/app/prismadb";
import bcrypt from "bcrypt";
import { NextResponse, NextRequest} from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
    });
    return Response.json({ status: "OK", user });
  } catch (error) {
    console.log(error);

    return Response.json({ status: "ERROR", message: error });
  }
}
