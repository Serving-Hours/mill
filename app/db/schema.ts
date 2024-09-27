import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";

export const linksTable = sqliteTable("links", {
  id: text("id").primaryKey().$defaultFn(() => createId()),
  url: text("url").notNull(),
  slug: text("slug").unique().notNull()
});

export type InsertLink = typeof linksTable.$inferInsert;
export type SelectLink = typeof linksTable.$inferSelect;