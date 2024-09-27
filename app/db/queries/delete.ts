import { eq } from "drizzle-orm";

import { db } from "../index";
import { linksTable } from "../schema";

export async function deleteLink(id: string) {
  await db.delete(linksTable).where(eq(linksTable.id, id));
}