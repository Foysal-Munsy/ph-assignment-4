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
let a = "ferdous@gmail.com",
  b = "1zihad@gmail.com",
  c = "-king@yahoo.com",
  d = ["jhankar@hero.com"],
  e = "Mewo@cat.com",
  f = "programming-hero.com",
  g = "chat420@gpt.net",
  h = true,
  i = "he ro@alom.com";

console.log(validEmail(a));
console.log(validEmail(b));
console.log(validEmail(c));
console.log(validEmail(d));
console.log(validEmail(e));
console.log(validEmail(f));
console.log(validEmail(g));
console.log(validEmail(h));
console.log(validEmail(i));
