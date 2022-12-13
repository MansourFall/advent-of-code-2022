const fs = require("fs");

try {
  const input = fs.readFileSync("input.txt", "utf8");
  const lines = input.split("\r\n");
  let elfIndex = 0;
  const inventory = [];

  inventory[elfIndex] = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "") {
      elfIndex++;
      inventory[elfIndex] = [];
    } else {
      inventory[elfIndex].push(+lines[i]);
    }
  }

  const elfTotalCaloryMap = {};

  for (let i = 0; i < inventory.length; i++) {
    let totalCalories = inventory[i].reduce((acc, cur) => acc + cur, 0);
    elfTotalCaloryMap[i] = totalCalories;
  }

  let maxCalories = 0;
  let elfWithMaxCalories = 0;

  const elfDataArrays = [];

  for (elfIdx in elfTotalCaloryMap) {
    if (elfTotalCaloryMap[elfIdx] > maxCalories) {
      maxCalories = elfTotalCaloryMap[elfIdx];
      elfWithMaxCalories = +elfIdx + 1;
    }

    elfDataArrays.push({
      elfIndex: +elfIdx,
      totalCalories: elfTotalCaloryMap[elfIdx],
    });
  }

  const sortedElfsByTotalCaloriesDesc = elfDataArrays.sort(
    (a, b) => b.totalCalories - a.totalCalories
  );

  const topThreeElfsByTotalCalories =
    sortedElfsByTotalCaloriesDesc[0].totalCalories +
    sortedElfsByTotalCaloriesDesc[1].totalCalories +
    sortedElfsByTotalCaloriesDesc[2].totalCalories;

  console.log(
    `Elf ${elfWithMaxCalories} has the most calories with ${maxCalories} calories.`
  );

  console.log(
    `The top three elves have a combined total of ${topThreeElfsByTotalCalories} calories.`
  );
} catch (err) {
  console.error(err);
}
