var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes [key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipes [key]
  
} // failing

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes [key];
  return recipes;
}


