function cashOut(money) {
  if (typeof money !== "number" || money < 0) return "Invalid";
  return (money * 1.75) / 100;
}

function validEmail(email) {
  if (typeof email !== "string") return "Invalid";

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
