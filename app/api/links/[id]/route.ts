import { NextResponse, NextRequest } from "next/server";

import { deleteLink } from "@/app/db/queries/delete";
import { getLinkById } from "@/app/db/queries/select";

// GET /api/links/:id
// Retrieve a link
export const GET = async (req: NextRequest, { params }: { params: { id: string; }; }) => {
  try {
    const link = await getLinkById(params.id);

    if (!link) {
      return NextResponse.json({
        message: "Link with this slug doesn't exist"
      }, { status: 400 });
    }

    return NextResponse.json({ link });
  } catch (e) {
    return NextResponse.json({
      message: e
    }, { status: 500 });
  }
};

// TODO: Delete a link
// DELETE /api/links/:id
// Delete a link
export const DELETE = async (req: NextRequest, { params }: { params: { id: string; }; }) => {
  try {
    const link = await getLinkById(params.id);

    if (!link) {
      return NextResponse.json({
        message: "Link with this slug doesn't exist"
      }, { status: 400 });
    }

    await deleteLink(params.id);

    return NextResponse.json({
      message: "Successfuly deleted link"
    }, { status: 200 });
  } catch (e) {
    return NextResponse.json({
      message: e
    }, { status: 500 });
  }
};