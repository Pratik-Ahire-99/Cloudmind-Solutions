
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { contactSchema } from "@/lib/validations/contact";
import Contact from "@/models/Contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the form fields.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await connectDB();

    const contact = await Contact.create({
      name: data.name,
      email: data.email,
      company: data.company ?? "",
      service: data.service,
      message: data.message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been saved successfully.",
        id: contact._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
