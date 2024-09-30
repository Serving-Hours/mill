import { getLinkById } from "@/app/db/queries/select";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const link = await getLinkById(params.id);
  
    if (!link) {
        return NextResponse.json({ error: 'Link not found' }, { status: 404 });
    }
    return NextResponse.json(link);
}


// todo : update endpoint