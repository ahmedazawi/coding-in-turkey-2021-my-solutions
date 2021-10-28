const whereIsMyFood = (fridge, item) => {
  for (let i = 0; i < fridge.length; i++) {
    if (fridge[i] === item) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};

whereIsMyFood(["apple", "meat", "orange", "banana", "milk", "onion"], "banana");
