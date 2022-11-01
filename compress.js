const fs = require('fs');
const path = require('path');
fs.readFile(path.resolve(__dirname, './js/plugins.js'), (err, data) => {
  fs.writeFile(
    path.resolve(__dirname, './plugins.min.js'),
    data
      .toString()
      .replace(/\n/g, ''),
    // .replace(/[\s]*/g, ''),
    () => {}
  );
});
