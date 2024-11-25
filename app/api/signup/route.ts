import { UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const userData = await req.json();
    const hashedPass = await bcrypt.hash(userData.password, 12);
    const result = await UserModel.create({
      ...userData,
      password: hashedPass,
    });
    return NextResponse.json({
      success: true,
      message: "User created successfully",
      response: result,
    });
  } catch (err) {
    console.log(err);
  }
};
