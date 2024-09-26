export async function GET(request: Request) {
  return Response.json({ message: 'TODO: Get Link' });
}

export async function POST(request: Request) {
  const { url, slug }: Link = await request.json();

  return Response.json({
    message: 'Received!',
    data: {
      url: url,
      slug: slug
    }
  });
}

export async function DELETE(request: Request) {
  return Response.json({ message: 'TODO: delete link' });
}