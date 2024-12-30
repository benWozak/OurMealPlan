export type Category = {
  id: number;
  name: string;
};

export type Item = {
  id: number;
  name: string;
};

export type GroceryListItem = {
  id: number;
  itemId: number;
  categoryId: number | null;
  quantity: number;
  checked: boolean;
  item: Item;
  category?: Category;
};

export type GroceryListType = {
  id: number;
  name: string;
  items: GroceryListItem[];
  createdAt: string;
  updatedAt: string;
};