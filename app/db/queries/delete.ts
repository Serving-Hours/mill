import { eq } from "drizzle-orm";

import { db } from "../index";
import { links } from "../schema";

export async function deleteLink(id: string) {
  await db.delete(links).where(eq(links.id, id));
}