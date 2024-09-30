import { NextResponse, NextRequest } from "next/server";
import { createLink } from "@/app/db/queries/insert";
import { CreateLinkSchema } from "@/lib/validation/links";
import { getLinkBySlug } from "@/app/db/queries/select";

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