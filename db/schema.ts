import {
  integer,
  sqliteTable,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import type { AdapterAccount } from "next-auth/adapters";
import { sql } from "drizzle-orm";

// Note: When updating this don't forget to update the type at @/lib/types
export const links = sqliteTable("links", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  url: text("url").notNull(),
  slug: text("slug").unique().notNull(),
  expiresAt: text("expiresAt"),
  expiresUrl: text("expiresUrl"),

  // Creation info
  userId: text("userId")
    // All links corresponding to a user will get deleted if the user gets deleted
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: text("createdAt")
    .default(sql`(strftime('%Y-%m-%d %H:%M:%f', 'now'))`)
    .notNull(),
  updatedAt: text("updatedAt")
    .$onUpdate(() => sql`(strftime('%Y-%m-%d %H:%M:%f', 'now'))`)
    .notNull(),
});

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
});

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = sqliteTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token],
    }),
  }),
);

export const authenticators = sqliteTable(
  "authenticator",
  {
    credentialID: text("credentialID").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: text("providerAccountId").notNull(),
    credentialPublicKey: text("credentialPublicKey").notNull(),
    counter: integer("counter").notNull(),
    credentialDeviceType: text("credentialDeviceType").notNull(),
    credentialBackedUp: integer("credentialBackedUp", {
      mode: "boolean",
    }).notNull(),
    transports: text("transports"),
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID],
    }),
  }),
);

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;

export type SelectUser = typeof users.$inferSelect;
