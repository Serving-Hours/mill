import { NextRequest, NextResponse } from "next/server";
import { getLinkBySlug } from "@/db/queries/select";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const slug = req.url.split("/").pop();

  if (!slug) {
    return NextResponse.json(
      {
        message: "Not Found",
      },
      { status: 404 },
    );
  }

  const link = await getLinkBySlug(slug);

  if (!link) {
    return NextResponse.json(
      {
        message: "Not Found",
      },
      { status: 404 },
    );
  }

  redirect(link.url);
}
