import http from "http";
import dotenv from "dotenv";
import newArray from "./array/array.js";
import reverseString from "./array/string.js";

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello! `);
});

console.log(newArray);
console.log(reverseString("ABC"));
console.log(newArray.findRepetition([1, 2, 3, 4, 5, 6, 7]));
server.listen(port, () => {
  process.stdout.write(`This server is running on ${port}`);
});
