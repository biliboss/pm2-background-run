let fs = require('fs');

function main() {
  fs.appendFile('file.txt', '\n' + new Date(), (err, f) => {
    if (err) throw err;
  });
}

setInterval(main, 1000);

