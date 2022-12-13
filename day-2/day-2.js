const fs = require("fs");
const scoreMap = {
  AA: 4,
  AB: 8,
  AC: 3,
  BA: 1,
  BB: 5,
  BC: 9,
  CA: 7,
  CB: 2,
  CC: 6,
};

const playMap = {
  AX: "AC",
  AY: "AA",
  AZ: "AB",
  BX: "BA",
  BY: "BB",
  BZ: "BC",
  CX: "CB",
  CY: "CC",
  CZ: "CA",
};

try {
  const input = fs.readFileSync("input.txt", "utf8");
  const lines = input.split("\r\n");
  const trimmedLines = lines.map((line) => line.replace(" ", ""));
  const translatedLines = trimmedLines.map((line) => playMap[line]);

  const totalScore = translatedLines.reduce((acc, cur) => {
    const score = scoreMap[cur];
    return acc + score;
  }, 0);

  console.log("totalScore: ", totalScore);
} catch (err) {
  console.error(err);
}
