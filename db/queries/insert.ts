import { db } from "../index";
import { InsertLink, links } from "../schema";

export async function creaetLink(link: InsertLink) {
  return await db.insert(links).values(link);
}
