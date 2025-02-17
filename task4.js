function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") return "Invalid";

  if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) return true;
  return false;
}

let a = { name: "hashem", roll: 1, bestFriend: 1 },
  b = { name: "kashem", roll: 1, bestFriend: 1 };

console.log(isBestFriend(a, b));
