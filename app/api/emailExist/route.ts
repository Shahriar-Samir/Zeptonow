import { UserModel } from "@/models/user.model";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const userData = await req.json();
    const isExist = await UserModel.findOne({ email: userData.email });
    if (!isExist) {
      return NextResponse.json({
        success: true,
        message: "User created successfully",
        isExist: false,
      });
    }
    return NextResponse.json({
      success: false,
      message: "User email already exist",
      isExist: true,
    });
  } catch (err) {
    console.log(err);
  }
};
