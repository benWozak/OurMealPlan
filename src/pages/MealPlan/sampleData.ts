import { Week } from "./types";

const sampleData: Week[] = [
  {
    id: 1,
    name: "Week 1",
    days: [
      {
        id: 1,
        name: "Monday",
        date: "2023-05-01",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 2,
        name: "Tuesday",
        date: "2023-05-02",
        meals: [
          {
            id: 6,
            type: "breakfast",
            name: "Avocado Toast",
            recipe: {
              id: 6,
              title: "Avocado Toast",
              ingredients: [
                { name: "whole grain bread", amount: 2, unit: "slices" },
                { name: "avocado", amount: 1, unit: "medium" },
                { name: "lime juice", amount: 1, unit: "tsp" },
                { name: "salt", amount: 0.25, unit: "tsp" },
                { name: "pepper", amount: 0.125, unit: "tsp" }
              ],
              instructions: [
                "Toast the bread slices",
                "Mash avocado with lime juice, salt, and pepper",
                "Spread avocado mixture on toast"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 2,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 280,
              nutrition: { protein: 8, carbs: 30, fat: 16, fiber: 12 },
              image_urls: ["https://example.com/avocado-toast.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 7,
            type: "snack",
            name: "Protein Smoothie",
            recipe: {
              id: 7,
              title: "Protein Smoothie",
              ingredients: [
                { name: "banana", amount: 1, unit: "medium" },
                { name: "protein powder", amount: 1, unit: "scoop" },
                { name: "almond milk", amount: 1, unit: "cup" },
                { name: "spinach", amount: 1, unit: "cup" },
                { name: "ice", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Add all ingredients to a blender",
                "Blend until smooth",
                "Serve immediately"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 0,
              total_time_minutes: 5,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 220,
              nutrition: { protein: 25, carbs: 22, fat: 3, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 8,
            type: "lunch",
            name: "Quinoa Bowl",
            recipe: {
              id: 8,
              title: "Quinoa Bowl",
              ingredients: [
                { name: "quinoa", amount: 0.5, unit: "cup" },
                { name: "black beans", amount: 0.5, unit: "cup" },
                { name: "corn", amount: 0.25, unit: "cup" },
                { name: "bell pepper", amount: 0.5, unit: "cup" },
                { name: "lime vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Cook quinoa according to package directions",
                "Combine quinoa, beans, corn, and bell pepper",
                "Drizzle with vinaigrette and mix"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 15,
              total_time_minutes: 25,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mexican",
              course: "lunch",
              calories: 350,
              nutrition: { protein: 14, carbs: 58, fat: 8, fiber: 12 },
              image_urls: ["https://example.com/quinoa-bowl.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 9,
            type: "snack",
            name: "Hummus with Vegetables",
            recipe: {
              id: 9,
              title: "Hummus with Vegetables",
              ingredients: [
                { name: "hummus", amount: 0.25, unit: "cup" },
                { name: "carrot sticks", amount: 1, unit: "cup" },
                { name: "celery sticks", amount: 0.5, unit: "cup" },
                { name: "bell pepper strips", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Cut vegetables into sticks or strips",
                "Serve with hummus for dipping"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 0,
              total_time_minutes: 5,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "snack",
              calories: 150,
              nutrition: { protein: 6, carbs: 18, fat: 6, fiber: 8 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 10,
            type: "dinner",
            name: "Stir Fry with Tofu",
            recipe: {
              id: 10,
              title: "Stir Fry with Tofu",
              ingredients: [
                { name: "firm tofu", amount: 6, unit: "oz" },
                { name: "mixed vegetables", amount: 2, unit: "cups" },
                { name: "soy sauce", amount: 2, unit: "tbsp" },
                { name: "sesame oil", amount: 1, unit: "tbsp" },
                { name: "garlic", amount: 2, unit: "cloves" },
                { name: "ginger", amount: 1, unit: "tsp" }
              ],
              instructions: [
                "Press and cube the tofu",
                "Heat sesame oil in a wok or large pan",
                "Stir fry tofu until golden",
                "Add vegetables, garlic, and ginger",
                "Stir fry for 5-7 minutes",
                "Add soy sauce and toss"
              ],
              servings: 1,
              prep_time_minutes: 15,
              cook_time_minutes: 12,
              total_time_minutes: 27,
              source_type: "user_created",
              source_url: null,
              cuisine: "Asian",
              course: "dinner",
              calories: 320,
              nutrition: { protein: 18, carbs: 12, fat: 22, fiber: 4 },
              image_urls: ["https://example.com/tofu-stir-fry.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 3,
        name: "Wednesday",
        date: "2023-05-03",
        meals: [
          {
            id: 11,
            type: "breakfast",
            name: "Smoothie Bowl",
            recipe: {
              id: 11,
              title: "Smoothie Bowl",
              ingredients: [
                { name: "frozen berries", amount: 1, unit: "cup" },
                { name: "banana", amount: 0.5, unit: "medium" },
                { name: "yogurt", amount: 0.5, unit: "cup" },
                { name: "granola", amount: 0.25, unit: "cup" },
                { name: "chia seeds", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Blend frozen berries, banana, and yogurt until thick",
                "Pour into a bowl",
                "Top with granola and chia seeds"
              ],
              servings: 1,
              prep_time_minutes: 8,
              cook_time_minutes: 0,
              total_time_minutes: 8,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "breakfast",
              calories: 290,
              nutrition: { protein: 12, carbs: 52, fat: 6, fiber: 10 },
              image_urls: ["https://example.com/smoothie-bowl.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 12,
            type: "snack",
            name: "Trail Mix",
            recipe: {
              id: 12,
              title: "Trail Mix",
              ingredients: [
                { name: "mixed nuts", amount: 0.25, unit: "cup" },
                { name: "dried fruit", amount: 2, unit: "tbsp" },
                { name: "dark chocolate chips", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Mix all ingredients together",
                "Store in an airtight container"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 200,
              nutrition: { protein: 6, carbs: 18, fat: 14, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 13,
            type: "lunch",
            name: "Mediterranean Wrap",
            recipe: {
              id: 13,
              title: "Mediterranean Wrap",
              ingredients: [
                { name: "whole wheat tortilla", amount: 1, unit: "large" },
                { name: "hummus", amount: 3, unit: "tbsp" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "tomatoes", amount: 0.5, unit: "cup" },
                { name: "feta cheese", amount: 2, unit: "tbsp" },
                { name: "spinach", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Spread hummus on tortilla",
                "Add vegetables and feta cheese",
                "Roll up tightly and slice in half"
              ],
              servings: 1,
              prep_time_minutes: 7,
              cook_time_minutes: 0,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 320,
              nutrition: { protein: 12, carbs: 42, fat: 12, fiber: 8 },
              image_urls: ["https://example.com/mediterranean-wrap.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 14,
            type: "snack",
            name: "Cottage Cheese with Fruit",
            recipe: {
              id: 14,
              title: "Cottage Cheese with Fruit",
              ingredients: [
                { name: "cottage cheese", amount: 0.5, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Spoon cottage cheese into a bowl",
                "Top with fresh berries"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 120,
              nutrition: { protein: 14, carbs: 12, fat: 2, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 15,
            type: "dinner",
            name: "Vegetable Lasagna",
            recipe: {
              id: 15,
              title: "Vegetable Lasagna",
              ingredients: [
                { name: "lasagna noodles", amount: 6, unit: "sheets" },
                { name: "ricotta cheese", amount: 1, unit: "cup" },
                { name: "marinara sauce", amount: 2, unit: "cups" },
                { name: "zucchini", amount: 1, unit: "medium" },
                { name: "spinach", amount: 2, unit: "cups" },
                { name: "mozzarella cheese", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Preheat oven to 375°F",
                "Cook lasagna noodles according to package directions",
                "Slice zucchini thinly",
                "Layer noodles, ricotta, vegetables, and sauce",
                "Top with mozzarella",
                "Bake for 45 minutes"
              ],
              servings: 4,
              prep_time_minutes: 25,
              cook_time_minutes: 45,
              total_time_minutes: 70,
              source_type: "user_created",
              source_url: null,
              cuisine: "Italian",
              course: "dinner",
              calories: 380,
              nutrition: { protein: 22, carbs: 45, fat: 12, fiber: 6 },
              image_urls: ["https://example.com/vegetable-lasagna.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 4,
        name: "Thursday",
        date: "2023-05-04",
        meals: [
          {
            id: 16,
            type: "breakfast",
            name: "Egg Muffins",
            recipe: {
              id: 16,
              title: "Egg Muffins",
              ingredients: [
                { name: "eggs", amount: 6, unit: "large" },
                { name: "bell peppers", amount: 0.5, unit: "cup" },
                { name: "spinach", amount: 1, unit: "cup" },
                { name: "cheese", amount: 0.25, unit: "cup" },
                { name: "salt", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 350°F",
                "Whisk eggs with salt",
                "Add vegetables and cheese",
                "Pour into muffin tins",
                "Bake for 18-20 minutes"
              ],
              servings: 6,
              prep_time_minutes: 10,
              cook_time_minutes: 20,
              total_time_minutes: 30,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 95,
              nutrition: { protein: 8, carbs: 2, fat: 6, fiber: 1 },
              image_urls: ["https://example.com/egg-muffins.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 12,
            type: "snack",
            name: "Trail Mix",
            recipe: {
              id: 12,
              title: "Trail Mix",
              ingredients: [
                { name: "mixed nuts", amount: 0.25, unit: "cup" },
                { name: "dried fruit", amount: 2, unit: "tbsp" },
                { name: "dark chocolate chips", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Mix all ingredients together",
                "Store in an airtight container"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 200,
              nutrition: { protein: 6, carbs: 18, fat: 14, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 13,
            type: "lunch",
            name: "Mediterranean Wrap",
            recipe: {
              id: 13,
              title: "Mediterranean Wrap",
              ingredients: [
                { name: "whole wheat tortilla", amount: 1, unit: "large" },
                { name: "hummus", amount: 3, unit: "tbsp" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "tomatoes", amount: 0.5, unit: "cup" },
                { name: "feta cheese", amount: 2, unit: "tbsp" },
                { name: "spinach", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Spread hummus on tortilla",
                "Add vegetables and feta cheese",
                "Roll up tightly and slice in half"
              ],
              servings: 1,
              prep_time_minutes: 7,
              cook_time_minutes: 0,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 320,
              nutrition: { protein: 12, carbs: 42, fat: 12, fiber: 8 },
              image_urls: ["https://example.com/mediterranean-wrap.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 14,
            type: "snack",
            name: "Cottage Cheese with Fruit",
            recipe: {
              id: 14,
              title: "Cottage Cheese with Fruit",
              ingredients: [
                { name: "cottage cheese", amount: 0.5, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Spoon cottage cheese into a bowl",
                "Top with fresh berries"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 120,
              nutrition: { protein: 14, carbs: 12, fat: 2, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 15,
            type: "dinner",
            name: "Vegetable Lasagna",
            recipe: {
              id: 15,
              title: "Vegetable Lasagna",
              ingredients: [
                { name: "lasagna noodles", amount: 6, unit: "sheets" },
                { name: "ricotta cheese", amount: 1, unit: "cup" },
                { name: "marinara sauce", amount: 2, unit: "cups" },
                { name: "zucchini", amount: 1, unit: "medium" },
                { name: "spinach", amount: 2, unit: "cups" },
                { name: "mozzarella cheese", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Preheat oven to 375°F",
                "Cook lasagna noodles according to package directions",
                "Slice zucchini thinly",
                "Layer noodles, ricotta, vegetables, and sauce",
                "Top with mozzarella",
                "Bake for 45 minutes"
              ],
              servings: 4,
              prep_time_minutes: 25,
              cook_time_minutes: 45,
              total_time_minutes: 70,
              source_type: "user_created",
              source_url: null,
              cuisine: "Italian",
              course: "dinner",
              calories: 380,
              nutrition: { protein: 22, carbs: 45, fat: 12, fiber: 6 },
              image_urls: ["https://example.com/vegetable-lasagna.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 12,
        name: "Friday",
        date: "2023-05-05",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 13,
        name: "Saturday",
        date: "2023-05-06",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 14,
        name: "Sunday",
        date: "2023-05-07",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Week 2",
    days: [
      {
        id: 1,
        name: "Monday",
        date: "2023-05-08",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 2,
        name: "Tuesday",
        date: "2023-05-09",
        meals: [
          {
            id: 6,
            type: "breakfast",
            name: "Avocado Toast",
            recipe: {
              id: 6,
              title: "Avocado Toast",
              ingredients: [
                { name: "whole grain bread", amount: 2, unit: "slices" },
                { name: "avocado", amount: 1, unit: "medium" },
                { name: "lime juice", amount: 1, unit: "tsp" },
                { name: "salt", amount: 0.25, unit: "tsp" },
                { name: "pepper", amount: 0.125, unit: "tsp" }
              ],
              instructions: [
                "Toast the bread slices",
                "Mash avocado with lime juice, salt, and pepper",
                "Spread avocado mixture on toast"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 2,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 280,
              nutrition: { protein: 8, carbs: 30, fat: 16, fiber: 12 },
              image_urls: ["https://example.com/avocado-toast.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 7,
            type: "snack",
            name: "Protein Smoothie",
            recipe: {
              id: 7,
              title: "Protein Smoothie",
              ingredients: [
                { name: "banana", amount: 1, unit: "medium" },
                { name: "protein powder", amount: 1, unit: "scoop" },
                { name: "almond milk", amount: 1, unit: "cup" },
                { name: "spinach", amount: 1, unit: "cup" },
                { name: "ice", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Add all ingredients to a blender",
                "Blend until smooth",
                "Serve immediately"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 0,
              total_time_minutes: 5,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 220,
              nutrition: { protein: 25, carbs: 22, fat: 3, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 8,
            type: "lunch",
            name: "Quinoa Bowl",
            recipe: {
              id: 8,
              title: "Quinoa Bowl",
              ingredients: [
                { name: "quinoa", amount: 0.5, unit: "cup" },
                { name: "black beans", amount: 0.5, unit: "cup" },
                { name: "corn", amount: 0.25, unit: "cup" },
                { name: "bell pepper", amount: 0.5, unit: "cup" },
                { name: "lime vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Cook quinoa according to package directions",
                "Combine quinoa, beans, corn, and bell pepper",
                "Drizzle with vinaigrette and mix"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 15,
              total_time_minutes: 25,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mexican",
              course: "lunch",
              calories: 350,
              nutrition: { protein: 14, carbs: 58, fat: 8, fiber: 12 },
              image_urls: ["https://example.com/quinoa-bowl.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 9,
            type: "snack",
            name: "Hummus with Vegetables",
            recipe: {
              id: 9,
              title: "Hummus with Vegetables",
              ingredients: [
                { name: "hummus", amount: 0.25, unit: "cup" },
                { name: "carrot sticks", amount: 1, unit: "cup" },
                { name: "celery sticks", amount: 0.5, unit: "cup" },
                { name: "bell pepper strips", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Cut vegetables into sticks or strips",
                "Serve with hummus for dipping"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 0,
              total_time_minutes: 5,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "snack",
              calories: 150,
              nutrition: { protein: 6, carbs: 18, fat: 6, fiber: 8 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 10,
            type: "dinner",
            name: "Stir Fry with Tofu",
            recipe: {
              id: 10,
              title: "Stir Fry with Tofu",
              ingredients: [
                { name: "firm tofu", amount: 6, unit: "oz" },
                { name: "mixed vegetables", amount: 2, unit: "cups" },
                { name: "soy sauce", amount: 2, unit: "tbsp" },
                { name: "sesame oil", amount: 1, unit: "tbsp" },
                { name: "garlic", amount: 2, unit: "cloves" },
                { name: "ginger", amount: 1, unit: "tsp" }
              ],
              instructions: [
                "Press and cube the tofu",
                "Heat sesame oil in a wok or large pan",
                "Stir fry tofu until golden",
                "Add vegetables, garlic, and ginger",
                "Stir fry for 5-7 minutes",
                "Add soy sauce and toss"
              ],
              servings: 1,
              prep_time_minutes: 15,
              cook_time_minutes: 12,
              total_time_minutes: 27,
              source_type: "user_created",
              source_url: null,
              cuisine: "Asian",
              course: "dinner",
              calories: 320,
              nutrition: { protein: 18, carbs: 12, fat: 22, fiber: 4 },
              image_urls: ["https://example.com/tofu-stir-fry.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 3,
        name: "Wednesday",
        date: "2023-05-10",
        meals: [
          {
            id: 11,
            type: "breakfast",
            name: "Smoothie Bowl",
            recipe: {
              id: 11,
              title: "Smoothie Bowl",
              ingredients: [
                { name: "frozen berries", amount: 1, unit: "cup" },
                { name: "banana", amount: 0.5, unit: "medium" },
                { name: "yogurt", amount: 0.5, unit: "cup" },
                { name: "granola", amount: 0.25, unit: "cup" },
                { name: "chia seeds", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Blend frozen berries, banana, and yogurt until thick",
                "Pour into a bowl",
                "Top with granola and chia seeds"
              ],
              servings: 1,
              prep_time_minutes: 8,
              cook_time_minutes: 0,
              total_time_minutes: 8,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "breakfast",
              calories: 290,
              nutrition: { protein: 12, carbs: 52, fat: 6, fiber: 10 },
              image_urls: ["https://example.com/smoothie-bowl.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 12,
            type: "snack",
            name: "Trail Mix",
            recipe: {
              id: 12,
              title: "Trail Mix",
              ingredients: [
                { name: "mixed nuts", amount: 0.25, unit: "cup" },
                { name: "dried fruit", amount: 2, unit: "tbsp" },
                { name: "dark chocolate chips", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Mix all ingredients together",
                "Store in an airtight container"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 200,
              nutrition: { protein: 6, carbs: 18, fat: 14, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 13,
            type: "lunch",
            name: "Mediterranean Wrap",
            recipe: {
              id: 13,
              title: "Mediterranean Wrap",
              ingredients: [
                { name: "whole wheat tortilla", amount: 1, unit: "large" },
                { name: "hummus", amount: 3, unit: "tbsp" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "tomatoes", amount: 0.5, unit: "cup" },
                { name: "feta cheese", amount: 2, unit: "tbsp" },
                { name: "spinach", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Spread hummus on tortilla",
                "Add vegetables and feta cheese",
                "Roll up tightly and slice in half"
              ],
              servings: 1,
              prep_time_minutes: 7,
              cook_time_minutes: 0,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 320,
              nutrition: { protein: 12, carbs: 42, fat: 12, fiber: 8 },
              image_urls: ["https://example.com/mediterranean-wrap.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 14,
            type: "snack",
            name: "Cottage Cheese with Fruit",
            recipe: {
              id: 14,
              title: "Cottage Cheese with Fruit",
              ingredients: [
                { name: "cottage cheese", amount: 0.5, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Spoon cottage cheese into a bowl",
                "Top with fresh berries"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 120,
              nutrition: { protein: 14, carbs: 12, fat: 2, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 15,
            type: "dinner",
            name: "Vegetable Lasagna",
            recipe: {
              id: 15,
              title: "Vegetable Lasagna",
              ingredients: [
                { name: "lasagna noodles", amount: 6, unit: "sheets" },
                { name: "ricotta cheese", amount: 1, unit: "cup" },
                { name: "marinara sauce", amount: 2, unit: "cups" },
                { name: "zucchini", amount: 1, unit: "medium" },
                { name: "spinach", amount: 2, unit: "cups" },
                { name: "mozzarella cheese", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Preheat oven to 375°F",
                "Cook lasagna noodles according to package directions",
                "Slice zucchini thinly",
                "Layer noodles, ricotta, vegetables, and sauce",
                "Top with mozzarella",
                "Bake for 45 minutes"
              ],
              servings: 4,
              prep_time_minutes: 25,
              cook_time_minutes: 45,
              total_time_minutes: 70,
              source_type: "user_created",
              source_url: null,
              cuisine: "Italian",
              course: "dinner",
              calories: 380,
              nutrition: { protein: 22, carbs: 45, fat: 12, fiber: 6 },
              image_urls: ["https://example.com/vegetable-lasagna.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 4,
        name: "Thursday",
        date: "2023-05-11",
        meals: [
          {
            id: 16,
            type: "breakfast",
            name: "Egg Muffins",
            recipe: {
              id: 16,
              title: "Egg Muffins",
              ingredients: [
                { name: "eggs", amount: 6, unit: "large" },
                { name: "bell peppers", amount: 0.5, unit: "cup" },
                { name: "spinach", amount: 1, unit: "cup" },
                { name: "cheese", amount: 0.25, unit: "cup" },
                { name: "salt", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 350°F",
                "Whisk eggs with salt",
                "Add vegetables and cheese",
                "Pour into muffin tins",
                "Bake for 18-20 minutes"
              ],
              servings: 6,
              prep_time_minutes: 10,
              cook_time_minutes: 20,
              total_time_minutes: 30,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 95,
              nutrition: { protein: 8, carbs: 2, fat: 6, fiber: 1 },
              image_urls: ["https://example.com/egg-muffins.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 12,
            type: "snack",
            name: "Trail Mix",
            recipe: {
              id: 12,
              title: "Trail Mix",
              ingredients: [
                { name: "mixed nuts", amount: 0.25, unit: "cup" },
                { name: "dried fruit", amount: 2, unit: "tbsp" },
                { name: "dark chocolate chips", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Mix all ingredients together",
                "Store in an airtight container"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 200,
              nutrition: { protein: 6, carbs: 18, fat: 14, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 13,
            type: "lunch",
            name: "Mediterranean Wrap",
            recipe: {
              id: 13,
              title: "Mediterranean Wrap",
              ingredients: [
                { name: "whole wheat tortilla", amount: 1, unit: "large" },
                { name: "hummus", amount: 3, unit: "tbsp" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "tomatoes", amount: 0.5, unit: "cup" },
                { name: "feta cheese", amount: 2, unit: "tbsp" },
                { name: "spinach", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Spread hummus on tortilla",
                "Add vegetables and feta cheese",
                "Roll up tightly and slice in half"
              ],
              servings: 1,
              prep_time_minutes: 7,
              cook_time_minutes: 0,
              total_time_minutes: 7,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 320,
              nutrition: { protein: 12, carbs: 42, fat: 12, fiber: 8 },
              image_urls: ["https://example.com/mediterranean-wrap.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 14,
            type: "snack",
            name: "Cottage Cheese with Fruit",
            recipe: {
              id: 14,
              title: "Cottage Cheese with Fruit",
              ingredients: [
                { name: "cottage cheese", amount: 0.5, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" }
              ],
              instructions: [
                "Spoon cottage cheese into a bowl",
                "Top with fresh berries"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 120,
              nutrition: { protein: 14, carbs: 12, fat: 2, fiber: 3 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 15,
            type: "dinner",
            name: "Vegetable Lasagna",
            recipe: {
              id: 15,
              title: "Vegetable Lasagna",
              ingredients: [
                { name: "lasagna noodles", amount: 6, unit: "sheets" },
                { name: "ricotta cheese", amount: 1, unit: "cup" },
                { name: "marinara sauce", amount: 2, unit: "cups" },
                { name: "zucchini", amount: 1, unit: "medium" },
                { name: "spinach", amount: 2, unit: "cups" },
                { name: "mozzarella cheese", amount: 1, unit: "cup" }
              ],
              instructions: [
                "Preheat oven to 375°F",
                "Cook lasagna noodles according to package directions",
                "Slice zucchini thinly",
                "Layer noodles, ricotta, vegetables, and sauce",
                "Top with mozzarella",
                "Bake for 45 minutes"
              ],
              servings: 4,
              prep_time_minutes: 25,
              cook_time_minutes: 45,
              total_time_minutes: 70,
              source_type: "user_created",
              source_url: null,
              cuisine: "Italian",
              course: "dinner",
              calories: 380,
              nutrition: { protein: 22, carbs: 45, fat: 12, fiber: 6 },
              image_urls: ["https://example.com/vegetable-lasagna.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 12,
        name: "Friday",
        date: "2023-05-12",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 13,
        name: "Saturday",
        date: "2023-05-13",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
      {
        id: 14,
        name: "Sunday",
        date: "2023-05-14",
        meals: [
          {
            id: 1,
            type: "breakfast",
            name: "Oatmeal with Berries",
            recipe: {
              id: 1,
              title: "Oatmeal with Berries",
              ingredients: [
                { name: "rolled oats", amount: 1, unit: "cup" },
                { name: "mixed berries", amount: 0.5, unit: "cup" },
                { name: "milk", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Bring milk to a boil in a saucepan",
                "Add oats and reduce heat to low",
                "Cook for 5-7 minutes, stirring occasionally",
                "Top with berries and honey"
              ],
              servings: 1,
              prep_time_minutes: 5,
              cook_time_minutes: 7,
              total_time_minutes: 12,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "breakfast",
              calories: 320,
              nutrition: { protein: 12, carbs: 58, fat: 6, fiber: 8 },
              image_urls: ["https://example.com/oatmeal.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: {
              id: 2,
              title: "Apple with Almond Butter",
              ingredients: [
                { name: "apple", amount: 1, unit: "medium" },
                { name: "almond butter", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Wash and slice the apple",
                "Serve with almond butter for dipping"
              ],
              servings: 1,
              prep_time_minutes: 3,
              cook_time_minutes: 0,
              total_time_minutes: 3,
              source_type: "user_created",
              source_url: null,
              cuisine: null,
              course: "snack",
              calories: 250,
              nutrition: { protein: 8, carbs: 22, fat: 16, fiber: 5 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: {
              id: 3,
              title: "Chicken Salad",
              ingredients: [
                { name: "grilled chicken breast", amount: 6, unit: "oz" },
                { name: "mixed greens", amount: 2, unit: "cups" },
                { name: "cherry tomatoes", amount: 0.5, unit: "cup" },
                { name: "cucumber", amount: 0.5, unit: "cup" },
                { name: "olive oil vinaigrette", amount: 2, unit: "tbsp" }
              ],
              instructions: [
                "Slice the grilled chicken breast",
                "Combine mixed greens, tomatoes, and cucumber in a bowl",
                "Top with sliced chicken",
                "Drizzle with vinaigrette and toss"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 0,
              total_time_minutes: 10,
              source_type: "user_created",
              source_url: null,
              cuisine: "Mediterranean",
              course: "lunch",
              calories: 385,
              nutrition: { protein: 42, carbs: 8, fat: 18, fiber: 4 },
              image_urls: ["https://example.com/chicken-salad.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: {
              id: 4,
              title: "Greek Yogurt with Honey",
              ingredients: [
                { name: "Greek yogurt", amount: 1, unit: "cup" },
                { name: "honey", amount: 1, unit: "tbsp" }
              ],
              instructions: [
                "Spoon Greek yogurt into a bowl",
                "Drizzle with honey and mix"
              ],
              servings: 1,
              prep_time_minutes: 2,
              cook_time_minutes: 0,
              total_time_minutes: 2,
              source_type: "user_created",
              source_url: null,
              cuisine: "Greek",
              course: "snack",
              calories: 180,
              nutrition: { protein: 20, carbs: 22, fat: 0, fiber: 0 },
              image_urls: null,
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: {
              id: 5,
              title: "Salmon with Roasted Vegetables",
              ingredients: [
                { name: "salmon fillet", amount: 6, unit: "oz" },
                { name: "broccoli", amount: 1, unit: "cup" },
                { name: "carrots", amount: 1, unit: "cup" },
                { name: "olive oil", amount: 2, unit: "tbsp" },
                { name: "salt", amount: 1, unit: "tsp" },
                { name: "pepper", amount: 0.5, unit: "tsp" }
              ],
              instructions: [
                "Preheat oven to 425°F",
                "Toss vegetables with 1 tbsp olive oil, salt, and pepper",
                "Roast vegetables for 20 minutes",
                "Season salmon with remaining oil, salt, and pepper",
                "Add salmon to oven and bake for 12-15 minutes"
              ],
              servings: 1,
              prep_time_minutes: 10,
              cook_time_minutes: 25,
              total_time_minutes: 35,
              source_type: "user_created",
              source_url: null,
              cuisine: "American",
              course: "dinner",
              calories: 520,
              nutrition: { protein: 45, carbs: 15, fat: 32, fiber: 6 },
              image_urls: ["https://example.com/salmon-vegetables.jpg"],
              video_url: null,
              source_metadata: null,
              household_id: 1,
              created_by_id: 1,
              created_at: "2023-04-15T08:00:00Z",
              updated_at: "2023-04-15T08:00:00Z"
            }
          },
        ],
      },
    ],
  },
];

export default sampleData;