"use server";

import { deleteLink } from "@/app/db/queries/delete";
import { revalidatePath } from "next/cache";

export async function deleteLinkAction(linkId: string) {
  try {
    await deleteLink(linkId);
    revalidatePath("/dashboard/links");
    return { success: true, message: "Successfuly deleted link" };
  } catch (e) {
    return { success: false, error: "Failed to delete link" };
  }
}