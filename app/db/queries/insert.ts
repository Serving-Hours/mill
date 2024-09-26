import { db } from "../index";
import { InsertLink, linksTable } from "../schema";

export async function createLink(link: InsertLink) {
  return await db.insert(linksTable).values(link).returning({ id: linksTable.id });
}