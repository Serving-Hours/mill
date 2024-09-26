import { createLink } from "@/app/db/queries/insert";
import { getLinks, getLinkBySlug } from "@/app/db/queries/select";
import { CreateLinkSchema } from "@/app/lib/validation/links";

export async function GET(request: Request) {
  const links = await getLinks();

  if (!links) {
    return Response.json({
      message: "Cannot find link"
    }, { status: 400 });
  }

  return Response.json({ links }, { status: 200 });
}

export async function POST(request: Request) {
  const { url, slug } = await request.json();
  const validatedLink = CreateLinkSchema.safeParse({ url, slug });

  if (!validatedLink.success) {
    return Response.json({
      error: validatedLink.error,
      message: "Failed to create link"
    }, { status: 400 });
  }

  const link = await getLinkBySlug(slug);

  if (link) {
    return Response.json({
      message: "Link with slug already exist"
    }, { status: 400 });
  }

  const [newLink] = await createLink({ url, slug });
  const newLinkId = newLink.id;

  return Response.json({
    message: "Received!",
    data: {
      id: newLinkId,
      url: url,
      slug: slug
    }
  }, { status: 200 });
}