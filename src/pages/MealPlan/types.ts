export interface Recipe {
  id: number;
  title: string;
  ingredients: any[];
  instructions: any[];
  servings?: number | null;
  prep_time_minutes?: number | null;
  cook_time_minutes?: number | null;
  total_time_minutes?: number | null;
  source_type: string;
  source_url?: string | null;
  cuisine?: string | null;
  course?: string | null;
  calories?: number | null;
  nutrition?: any | null;
  image_urls?: string[] | null;
  video_url?: string | null;
  source_metadata?: any | null;
  household_id: number;
  created_by_id: number;
  created_at: string;
  updated_at: string;
}

export interface Meal {
  id: number;
  type: string;
  name: string;
  recipe: Recipe;
}

export interface Day {
  id: number
  name: string
  date: string
  meals: Meal[]
}

export interface Week {
  id: number
  name: string
  days: Day[]
}
