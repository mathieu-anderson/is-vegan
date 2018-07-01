import { isVeganIngredient } from './IsVegan'
import { isFlaggedIngredient } from './CanBeVegan'

export function isNotInLists (ingredientsToCheck) {
  return ingredientsToCheck.filter(ingredient =>
    isVeganIngredient(ingredient) &&
    !isFlaggedIngredient(ingredient)
  )
}
