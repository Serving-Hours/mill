import { db } from "../index";
import { links } from "../schema";
import { eq } from "drizzle-orm";
import { Link } from "@/lib/types";

export async function updateLinkById({
  LinkId,
  LinkData,
}: {
  LinkId: string;
  LinkData: Partial<Link>;
}) {
  return await db.update(links).set(LinkData).where(eq(links.id, LinkId));
}
