import { NextResponse, NextRequest } from "next/server";

import { createLink } from "@/app/db/queries/insert";
import { CreateLinkSchema } from "@/app/lib/validation/links";
import { getLinks, getLinkBySlug } from "@/app/db/queries/select";

// GET /api/links
// Retrieve all links
export async function GET(req: NextRequest) {
  try {
    const links = await getLinks();

    if (!links) {
      return NextResponse.json({
        message: "Cannot find link"
      }, { status: 400 });
    }

    return NextResponse.json({ links }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      message: err
    }, { status: 500 });
  }
}

// POST /api/links
// Create a link
export async function POST(req: NextRequest) {
  try {
    const { url, slug }: { url: string, slug: string; } = await req.json();
    const validatedLink = CreateLinkSchema.safeParse({ url, slug });

    if (!validatedLink.success) {
      return NextResponse.json({
        error: validatedLink.error,
        message: "Failed to create link"
      }, { status: 400 });
    }

    const link = await getLinkBySlug(slug);

    if (link) {
      return NextResponse.json({
        message: "Link with this slug already exists"
      }, { status: 400 });
    }

    const [newLink] = await createLink({ url, slug });
    const newLinkId = newLink.id;

    return NextResponse.json({
      message: "Link created successfully!",
      data: {
        id: newLinkId,
        url: url,
        slug: slug
      }
    }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      message: err
    }, { status: 500 });
  }
}