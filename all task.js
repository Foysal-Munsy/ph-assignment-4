function cashOut(money) {
  if (typeof money !== "number" || money < 0) return '"Invalid"';
  return (money * 1.75) / 100;
}

function validEmail(email) {
  if (typeof email !== "string") return '"Invalid"';

  const first_char = email[0];
  if (
    first_char === "." ||
    first_char === "-" ||
    first_char === "_" ||
    first_char === "+" ||
    first_char === "@" ||
    !email.includes("@") ||
    !email.endsWith(".com") ||
    email.indexOf(" ") !== -1
  ) {
    return false;
  }

  return true;
}

function electionResult(votes) {
  if (!Array.isArray(votes)) return '"Invalid"';
  let mango = 0,
    banana = 0;
  for (const str of votes) {
    if (str === "mango") mango++;
    else if (str === "banana") banana++;
    else continue;
  }
  return mango === banana ? "Draw" : mango > banana ? "Mango" : "Banana";
}

function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") return '"Invalid"';

  if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) return true;
  return false;
}

function calculateWatchTime(times) {
  let totalSec = 0;
  for (const val of times) {
    if (typeof val !== "number") return '"Invalid"';
    totalSec += val;
  }
  let h = Math.floor(totalSec / 3600),
    m = Math.floor((totalSec % 3600) / 60),
    s = totalSec % 60;

  return { hour: h, minute: m, second: s };
}
