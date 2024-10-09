"use server";

import { revalidatePath } from "next/cache";
import { CreateLinkSchema } from "./validation";
import { creaetLink } from "@/db/queries/insert";
import { getLinkBySlug } from "@/db/queries/select";
import { deleteLink } from "@/db/queries/delete";

export type State = {
  errors?: {
    url?: string[];
    slug?: string[];
  };
  message?: string | null;
  success: boolean;
};

export async function createLinkAction(prevState: State, formData: FormData) {
  const validatedLink = CreateLinkSchema.safeParse({
    url: formData.get("url"),
    slug: formData.get("slug"),
    userId: formData.get("userId"),
  });

  // NOTE: We already did these fields in client side
  // But we're doing both client and server side validation
  if (!validatedLink.success) {
    return {
      errors: validatedLink.error.flatten().fieldErrors,
      success: false,
    };
  }

  const link = await getLinkBySlug(validatedLink.data.slug);

  if (link) {
    return {
      message: "Link with this slug already exists",
      success: false,
    };
  }

  try {
    await creaetLink(validatedLink.data);
    revalidatePath("/dashboard/links");

    return {
      success: true,
    };
  } catch (_) {
    return {
      message: "Something went wrong while trying to create link",
      success: false,
    };
  }
}

export async function deleteLinkAction(linkId: string) {
  try {
    await deleteLink(linkId);
    revalidatePath("/dashboard/links");

    return {
      message: "Successfuly deleted link",
      success: true,
    };
  } catch (_) {
    return {
      message: "Failed to delete link",
      success: false,
    };
  }
}
