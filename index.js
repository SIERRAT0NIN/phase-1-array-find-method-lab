// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

const superbowlWin = (record) => {
  const broncosWin = record.find((wYear) => wYear.result === "W");
  if (broncosWin) {
    return broncosWin.year;
  }
};
const findWin = superbowlWin(record);
console.log(findWin);
