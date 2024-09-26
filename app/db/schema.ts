import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const linksTable = sqliteTable('links', {
  id: integer('id').primaryKey(),
  url: text('url').notNull(),
  slug: text('slug').unique().notNull()
});

export type InsertLink = typeof linksTable.$inferInsert;
export type SelectLink = typeof linksTable.$inferSelect;