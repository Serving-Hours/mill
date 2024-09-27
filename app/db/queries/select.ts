import { eq } from "drizzle-orm";

import { db } from "../index";
import { SelectLink, linksTable } from "../schema";

export async function getLinks(): Promise<SelectLink[] | undefined> {
  return await db.select().from(linksTable);
};

export async function getLinkById(id: string): Promise<SelectLink | undefined> {
  return await db.select().from(linksTable).where(eq(linksTable.id, id)).get();
}

export async function getLinkBySlug(slug: string): Promise<SelectLink | undefined> {
  return await db.select().from(linksTable).where(eq(linksTable.slug, slug)).get();
};