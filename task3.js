function electionResult(votes) {
  if (!Array.isArray(votes)) return "Invalid";
  let mango = 0,
    banana = 0;
  for (const str of votes) {
    if (str === "mango") mango++;
    else if (str === "banana") banana++;
    else continue;
  }
  return mango === banana ? "Draw" : mango > banana ? "Mango" : "Banana";
}
let a = ["mango", "banana", "mango", "banana", "mango"],
  b = [],
  c = ["mango", "banana", "jaker party", "no"],
  d = ["mango"],
  e = ["banana", "banana", "age e valo chilam", "no"],
  f = { result: "mango , banana ,  mango" },
  g = "mango , banana",
  h = ["mango", "BananA", "na vote", "na vote"];
console.log(electionResult(a));
console.log(electionResult(b));
console.log(electionResult(c));
console.log(electionResult(d));
console.log(electionResult(e));
console.log(electionResult(f));
console.log(electionResult(g));
console.log(electionResult(h));
