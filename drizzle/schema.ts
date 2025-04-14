import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
