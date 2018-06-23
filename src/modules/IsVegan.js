import nonVeganList from '../util/nonvegan.json'

/**
 * This functions takes the given ingredient
 * and checks it against the non-vegan list of ingredients
 * @param {string} ingredientToCheck - the ingredient to check
 * @return <code>true</code> if ingredient is not in nonVeganList
 */
export function isVeganIngredient (ingredientToCheck) {
  // true if empty
  if (ingredientToCheck.length === 0) return true

  const formattedIngredientToCheck = ingredientToCheck.trim().toLowerCase()

  return !nonVeganList.includes(formattedIngredientToCheck)
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the non-vegan list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return <code>true</code> if ingredients are not in nonVeganList
 */
export function isVeganIngredientList (ingredientsToCheck) {
  return !ingredientsToCheck.some(ingredient => !isVeganIngredient(ingredient))
}

/**
 * This functions takes a given list of ingredients
 * and checks them against the non-vegan list of ingredients
 * @param {[string]} ingredientsToCheck - the lit of ingredients to check
 * @return Array of ingredients that are non-vegan
 */
export function containsNonVeganIngredients (ingredientsToCheck) {
  return ingredientsToCheck.filter(
    ingredient => !isVeganIngredient(ingredient)
  )
}
