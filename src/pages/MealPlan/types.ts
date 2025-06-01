export interface Meal {
  id: number
  type: string
  name: string
  recipe: string
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
