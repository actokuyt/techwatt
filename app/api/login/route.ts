import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { user, password } = reqBody;

    const hashedPassword = process.env.HASHED_PASSWORD!;
    const tokenSecret = process.env.TOKEN_SECRET!;

    if (user !== "admin") {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, hashedPassword);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 400 }
      );
    }

    const tokenData = { user };
    const token = await jwt.sign(tokenData, tokenSecret, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Authentication successful",
    });
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error" });
  }
}
