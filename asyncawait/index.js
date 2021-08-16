const fs = require('fs');

const readFile = file =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });

const init = async () => {
  try {
    const contents1 = await readFile('./files/music1.txt', 'utf8');
    const contents2 = await readFile('./files/music2.txt', 'utf8');

    return contents1 + '\n\n' + contents2;
  } catch (err) {
    console.log(err);
  }
};

//init().then(console.log);

//init().then(contents => console.log(contents));

//init().then(contents => console.log(contents));

/*
function result(contents) {
  console.log(contents);
}

init().then(result);
*/
