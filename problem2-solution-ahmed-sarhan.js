const validateRecipeWithQuantity = (fridge, ingredients) => {
  const trueObj = {};
  for (const [key, value] of Object.entries(fridge)) {
    for (const [key1, value1] of Object.entries(ingredients)) {
      if (key === key1 && value === value1) {
        trueObj[key1] = value1;
      }
    }
  }
  if (Object.keys(ingredients).length === Object.keys(trueObj).length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
validateRecipeWithQuantity(
  { tomato: 2, onion: 3, olives: 1 },
  { tomato: 2, onion: 3 }
);
