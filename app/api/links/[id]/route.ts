import { NextResponse } from "next/server";
import { updateLinkById } from "@/db/queries/update";
import { UpdateLinkSchema } from "@/lib/validation/links";

// PUT /api/links/:id
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const {
      url,
      slug,
      expiresAt,
      expiresUrl,
    }: { url: string; slug: string; expiresAt: string; expiresUrl: string } =
      await req.json();

    console.log({ url, slug, expiresAt, expiresUrl });
    const validatedLink = UpdateLinkSchema.safeParse({
      url,
      slug,
      expiresAt,
      expiresUrl,
    });
    if (!validatedLink.success) {
      console.log(validatedLink);
      return NextResponse.json(
        { error: validatedLink.error.errors },
        { status: 400 },
      );
    }

    const linkData = validatedLink.data;

    const updatedLink = await updateLinkById({
      LinkId: params.id,
      LinkData: linkData,
    });
    console.log("success");
    return NextResponse.json(
      { success: true, data: updatedLink },
      { status: 200 },
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: "Failed to update the link" },
      { status: 500 },
    );
  }
}
