import { db } from "../index";
import { InsertLink, links } from "../schema";

export async function createLink(link: InsertLink) {
  return await db.insert(links).values(link).returning({ id: links.id });
}