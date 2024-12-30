import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// Create drizzle database instance
export const db = drizzle(pool, { schema });

// Types for our queries
export type CategoryType = typeof schema.categories.$inferSelect;
export type ItemType = typeof schema.items.$inferSelect;
export type GroceryListType = typeof schema.groceryLists.$inferSelect;
export type GroceryListItemType = typeof schema.groceryListItems.$inferSelect;