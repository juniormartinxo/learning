const fs = require('fs');

console.log(1);

fs.readFile('./files/in1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

console.log(2);

console.log(3);
