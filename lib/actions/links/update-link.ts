"use server";
import { revalidatePath } from "next/cache";

export async function updateLinkAction(id: string, formData: FormData) {
  const url = formData.get("url");
  const slug = formData.get("slug");
  const expiresAt = formData.get("expiresAt");
  const expiresUrl = formData.get("expiresUrl");

  if (!url || !slug) {
    throw new Error("URL and slug are required fields");
  }

  try {
    const response = await fetch(`http://localhost:3000/api/links/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        slug,
        expiresAt,
        expiresUrl,
      }),
    });

    console.log(response);
    revalidatePath(`/link/${id}/edit`);
  } catch (error) {
    console.log(error);
  }
}
