"use server";

import { revalidatePath } from "next/cache";

export async function createLinkAction(formData: FormData) {
  const url = formData.get("url");
  const slug = formData.get("slug");
  const userId = formData.get("userId");

  const response = await fetch("http://localhost:3000/api/links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url,
      slug,
      userId: userId
    })
  });

  console.log(await response.json());
  revalidatePath("/dashboard/links");
}