const trueArr = [];
const validateRecipe = (fridge, ingredients) => {
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < fridge.length; j++) {
      if (ingredients[i] === fridge[j]) {
        trueArr.push(ingredients[i]);
      }
    }
  }
  if (trueArr.length === 3) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
validateRecipe(
  ["olives", "onion", "lettuce"],
  ["onion", "banana", "lettuce", "olives"]
);
