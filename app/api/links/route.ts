import { NextResponse, NextRequest } from "next/server";

import { getServerSession } from "next-auth";

import { createLink } from "@/app/db/queries/insert";
import { CreateLinkSchema } from "@/lib/validation/links";
import { getLinks, getLinkBySlug, getLinksByUserId } from "@/app/db/queries/select";
import { authConfig } from "@/lib/auth/auth.config";

// GET /api/links
// Retrieve all links
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authConfig);

    // console.log(session);

    if (!session?.user) {
      return NextResponse.json({
        message: "Unauthorized"
      }, { status: 401 });
    };

    const user = session.user;
    const links = await getLinksByUserId(user.id);

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
    const { url, slug, userId }: { url: string, slug: string, userId: string | undefined; } = await req.json();
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

    const [newLink] = await createLink({
      url,
      slug,
      userId: userId
    });

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