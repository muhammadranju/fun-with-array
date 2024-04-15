const response = new Array(9);
response.fill(false);
for (let i = 0; i < response.length; i++) {
  const random = Math.floor(Math.random() * 10 + 1);
  response[i] = random > 5 ? "X" : "O";
}
console.log(response);
