function reverseString(str) {
  console.log("let go! reverse!!");
  if (!str || str.length < 2 || typeof str !== "string") {
    return console.log(`We need only more than 2 characters of string `);
  }
  console.log(str);
  const backwards = [];
  const length = str.length - 1;
  console.log(str[length]);

  for (let i = length; i >= 0; i--) {
    backwards.push(str[i]);
    console.log(backwards);
  }

  return backwards.join("");
}

export default reverseString;
/*
String -> gnirtS
GNP -> PNG








String = index[0-5] = length:6


*/
