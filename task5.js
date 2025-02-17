function calculateWatchTime(times) {
  let totalSec = 0;
  for (const val of times) {
    if (typeof val !== "number") return "Invalid";
    totalSec += val;
  }
  let h = Math.floor(totalSec / 3600),
    m = Math.floor((totalSec % 3600) / 60),
    s = totalSec % 60;

  return { hour: h, minute: m, second: s };
}
let a = [100, 3800, "90"];
console.log(calculateWatchTime(a));
