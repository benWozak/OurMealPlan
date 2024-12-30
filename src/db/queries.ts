import { eq, like } from 'drizzle-orm';
import { db } from './index';
import { groceryLists, groceryListItems, items, categories } from './schema';
import type { GroceryListType, GroceryListItemType } from './index';

export const groceryQueries = {
  // Lists
  createList: async (name: string) => {
    return await db.insert(groceryLists)
      .values({ name })
      .returning();
  },

  updateList: async (id: number, name: string) => {
    return await db.update(groceryLists)
      .set({ name, updatedAt: new Date() })
      .where(eq(groceryLists.id, id))
      .returning();
  },

  deleteList: async (id: number) => {
    return await db.delete(groceryLists)
      .where(eq(groceryLists.id, id))
      .returning();
  },

  getAllLists: async () => {
    return await db.query.groceryLists.findMany({
      with: {
        items: {
          with: {
            item: true,
            category: true,
          },
        },
      },
    });
  },

  // Items
  searchItems: async (searchTerm: string) => {
    return await db.select()
      .from(items)
      .where(like(items.name, `%${searchTerm}%`))
      .limit(10);
  },

  createItem: async (name: string) => {
    return await db.insert(items)
      .values({ name })
      .returning();
  },

  // Categories
  createCategory: async (name: string) => {
    return await db.insert(categories)
      .values({ name })
      .returning();
  },

  getAllCategories: async () => {
    return await db.select().from(categories);
  },

  // List Items
  addItemToList: async (
    listId: number,
    itemId: number,
    categoryId?: number,
    quantity: number = 1
  ) => {
    return await db.insert(groceryListItems)
      .values({
        listId,
        itemId,
        categoryId,
        quantity,
      })
      .returning();
  },

  updateListItem: async (
    id: number,
    updates: Partial<GroceryListItemType>
  ) => {
    return await db.update(groceryListItems)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(groceryListItems.id, id))
      .returning();
  },

  removeItemFromList: async (id: number) => {
    return await db.delete(groceryListItems)
      .where(eq(groceryListItems.id, id))
      .returning();
  },
};