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
            recipe: "oatmeal-recipe",
          },
          {
            id: 2,
            type: "snack",
            name: "Apple with Almond Butter",
            recipe: "apple-almond-recipe",
          },
          {
            id: 3,
            type: "lunch",
            name: "Chicken Salad",
            recipe: "chicken-salad-recipe",
          },
          {
            id: 4,
            type: "snack",
            name: "Greek Yogurt with Honey",
            recipe: "yogurt-recipe",
          },
          {
            id: 5,
            type: "dinner",
            name: "Salmon with Roasted Vegetables",
            recipe: "salmon-recipe",
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
            recipe: "avocado-toast-recipe",
          },
          {
            id: 7,
            type: "snack",
            name: "Protein Smoothie",
            recipe: "smoothie-recipe",
          },
          {
            id: 8,
            type: "lunch",
            name: "Quinoa Bowl",
            recipe: "quinoa-bowl-recipe",
          },
          {
            id: 9,
            type: "snack",
            name: "Hummus with Vegetables",
            recipe: "hummus-recipe",
          },
          {
            id: 10,
            type: "dinner",
            name: "Stir Fry with Tofu",
            recipe: "stir-fry-recipe",
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
            recipe: "smoothie-bowl-recipe",
          },
          {
            id: 12,
            type: "snack",
            name: "Trail Mix",
            recipe: "trail-mix-recipe",
          },
          {
            id: 13,
            type: "lunch",
            name: "Mediterranean Wrap",
            recipe: "wrap-recipe",
          },
          {
            id: 14,
            type: "snack",
            name: "Cottage Cheese with Fruit",
            recipe: "cottage-cheese-recipe",
          },
          {
            id: 15,
            type: "dinner",
            name: "Vegetable Lasagna",
            recipe: "lasagna-recipe",
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
            recipe: "egg-muffins-recipe",
          },
          {
            id: 17,
            type: "snack",
            name: "Banana with Peanut Butter",
            recipe: "banana-pb-recipe",
          },
          {
            id: 18,
            type: "lunch",
            name: "Tuna Salad Sandwich",
            recipe: "tuna-sandwich-recipe",
          },
          { id: 19, type: "snack", name: "Edamame", recipe: "edamame-recipe" },
          {
            id: 20,
            type: "dinner",
            name: "Chicken Curry",
            recipe: "curry-recipe",
          },
        ],
      },
      {
        id: 5,
        name: "Friday",
        date: "2023-05-05",
        meals: [
          {
            id: 21,
            type: "breakfast",
            name: "Yogurt Parfait",
            recipe: "parfait-recipe",
          },
          {
            id: 22,
            type: "snack",
            name: "Rice Cakes with Avocado",
            recipe: "rice-cakes-recipe",
          },
          {
            id: 23,
            type: "lunch",
            name: "Buddha Bowl",
            recipe: "buddha-bowl-recipe",
          },
          {
            id: 24,
            type: "snack",
            name: "Protein Bar",
            recipe: "protein-bar-recipe",
          },
          {
            id: 25,
            type: "dinner",
            name: "Grilled Fish Tacos",
            recipe: "fish-tacos-recipe",
          },
        ],
      },
      {
        id: 6,
        name: "Saturday",
        date: "2023-05-06",
        meals: [
          {
            id: 26,
            type: "breakfast",
            name: "Pancakes with Berries",
            recipe: "pancakes-recipe",
          },
          {
            id: 27,
            type: "snack",
            name: "Fruit Salad",
            recipe: "fruit-salad-recipe",
          },
          {
            id: 28,
            type: "lunch",
            name: "Veggie Burger",
            recipe: "veggie-burger-recipe",
          },
          { id: 29, type: "snack", name: "Popcorn", recipe: "popcorn-recipe" },
          {
            id: 30,
            type: "dinner",
            name: "Homemade Pizza",
            recipe: "pizza-recipe",
          },
        ],
      },
      {
        id: 7,
        name: "Sunday",
        date: "2023-05-07",
        meals: [
          {
            id: 31,
            type: "breakfast",
            name: "Breakfast Burrito",
            recipe: "breakfast-burrito-recipe",
          },
          {
            id: 32,
            type: "snack",
            name: "Nuts and Dried Fruit",
            recipe: "nuts-recipe",
          },
          {
            id: 33,
            type: "lunch",
            name: "Pasta Salad",
            recipe: "pasta-salad-recipe",
          },
          {
            id: 34,
            type: "snack",
            name: "Cheese and Crackers",
            recipe: "cheese-crackers-recipe",
          },
          {
            id: 35,
            type: "dinner",
            name: "Roast Chicken with Potatoes",
            recipe: "roast-chicken-recipe",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Week 2",
    days: [
      {
        id: 8,
        name: "Monday",
        date: "2023-05-08",
        meals: [
          {
            id: 36,
            type: "breakfast",
            name: "Chia Pudding",
            recipe: "chia-pudding-recipe",
          },
          {
            id: 37,
            type: "snack",
            name: "Celery with Peanut Butter",
            recipe: "celery-pb-recipe",
          },
          {
            id: 38,
            type: "lunch",
            name: "Lentil Soup",
            recipe: "lentil-soup-recipe",
          },
          {
            id: 39,
            type: "snack",
            name: "Hard-Boiled Eggs",
            recipe: "boiled-eggs-recipe",
          },
          {
            id: 40,
            type: "dinner",
            name: "Beef Stir Fry",
            recipe: "beef-stir-fry-recipe",
          },
        ],
      },
      {
        id: 9,
        name: "Tuesday",
        date: "2023-05-09",
        meals: [
          {
            id: 41,
            type: "breakfast",
            name: "Protein Pancakes",
            recipe: "protein-pancakes-recipe",
          },
          {
            id: 42,
            type: "snack",
            name: "Carrot Sticks with Hummus",
            recipe: "carrot-hummus-recipe",
          },
          {
            id: 43,
            type: "lunch",
            name: "Chicken Wrap",
            recipe: "chicken-wrap-recipe",
          },
          {
            id: 44,
            type: "snack",
            name: "Protein Shake",
            recipe: "protein-shake-recipe",
          },
          {
            id: 45,
            type: "dinner",
            name: "Vegetable Curry",
            recipe: "vegetable-curry-recipe",
          },
        ],
      },
      // More days for week 2...
      {
        id: 10,
        name: "Wednesday",
        date: "2023-05-10",
        meals: [
          {
            id: 46,
            type: "breakfast",
            name: "Greek Yogurt with Granola",
            recipe: "yogurt-granola-recipe",
          },
          {
            id: 47,
            type: "snack",
            name: "Apple Slices",
            recipe: "apple-slices-recipe",
          },
          {
            id: 48,
            type: "lunch",
            name: "Cobb Salad",
            recipe: "cobb-salad-recipe",
          },
          { id: 49, type: "snack", name: "Almonds", recipe: "almonds-recipe" },
          {
            id: 50,
            type: "dinner",
            name: "Grilled Chicken with Vegetables",
            recipe: "grilled-chicken-recipe",
          },
        ],
      },
      {
        id: 11,
        name: "Thursday",
        date: "2023-05-11",
        meals: [
          {
            id: 51,
            type: "breakfast",
            name: "Breakfast Sandwich",
            recipe: "breakfast-sandwich-recipe",
          },
          { id: 52, type: "snack", name: "Yogurt", recipe: "yogurt-recipe" },
          {
            id: 53,
            type: "lunch",
            name: "Vegetable Soup",
            recipe: "vegetable-soup-recipe",
          },
          {
            id: 54,
            type: "snack",
            name: "Rice Cakes",
            recipe: "rice-cakes-recipe",
          },
          {
            id: 55,
            type: "dinner",
            name: "Baked Salmon",
            recipe: "baked-salmon-recipe",
          },
        ],
      },
      {
        id: 12,
        name: "Friday",
        date: "2023-05-12",
        meals: [
          {
            id: 56,
            type: "breakfast",
            name: "Overnight Oats",
            recipe: "overnight-oats-recipe",
          },
          {
            id: 57,
            type: "snack",
            name: "Protein Bar",
            recipe: "protein-bar-recipe",
          },
          {
            id: 58,
            type: "lunch",
            name: "Turkey Sandwich",
            recipe: "turkey-sandwich-recipe",
          },
          {
            id: 59,
            type: "snack",
            name: "Mixed Berries",
            recipe: "mixed-berries-recipe",
          },
          {
            id: 60,
            type: "dinner",
            name: "Spaghetti with Meatballs",
            recipe: "spaghetti-recipe",
          },
        ],
      },
      {
        id: 13,
        name: "Saturday",
        date: "2023-05-13",
        meals: [
          {
            id: 61,
            type: "breakfast",
            name: "Waffles",
            recipe: "waffles-recipe",
          },
          {
            id: 62,
            type: "snack",
            name: "Smoothie",
            recipe: "smoothie-recipe",
          },
          {
            id: 63,
            type: "lunch",
            name: "Grilled Cheese Sandwich",
            recipe: "grilled-cheese-recipe",
          },
          {
            id: 64,
            type: "snack",
            name: "Cucumber Slices",
            recipe: "cucumber-recipe",
          },
          {
            id: 65,
            type: "dinner",
            name: "Steak with Potatoes",
            recipe: "steak-recipe",
          },
        ],
      },
      {
        id: 14,
        name: "Sunday",
        date: "2023-05-14",
        meals: [
          {
            id: 66,
            type: "breakfast",
            name: "Eggs Benedict",
            recipe: "eggs-benedict-recipe",
          },
          {
            id: 67,
            type: "snack",
            name: "Granola Bar",
            recipe: "granola-bar-recipe",
          },
          {
            id: 68,
            type: "lunch",
            name: "Caesar Salad",
            recipe: "caesar-salad-recipe",
          },
          {
            id: 69,
            type: "snack",
            name: "Orange Slices",
            recipe: "orange-slices-recipe",
          },
          {
            id: 70,
            type: "dinner",
            name: "Grilled Vegetables with Quinoa",
            recipe: "grilled-vegetables-recipe",
          },
        ],
      },
    ],
  },
];

export default  sampleData