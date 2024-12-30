import { pgTable, serial, varchar, timestamp, integer, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const items = pgTable('items', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const groceryLists = pgTable('grocery_lists', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const groceryListItems = pgTable('grocery_list_items', {
  id: serial('id').primaryKey(),
  listId: integer('list_id').references(() => groceryLists.id, { onDelete: 'cascade' }),
  itemId: integer('item_id').references(() => items.id),
  categoryId: integer('category_id').references(() => categories.id),
  quantity: integer('quantity').default(1),
  checked: boolean('checked').default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Define relationships
export const groceryListsRelations = relations(groceryLists, ({ many }) => ({
  items: many(groceryListItems),
}));

export const groceryListItemsRelations = relations(groceryListItems, ({ one }) => ({
  list: one(groceryLists, {
    fields: [groceryListItems.listId],
    references: [groceryLists.id],
  }),
  item: one(items, {
    fields: [groceryListItems.itemId],
    references: [items.id],
  }),
  category: one(categories, {
    fields: [groceryListItems.categoryId],
    references: [categories.id],
  }),
}));