'use strict';

const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('db/clean-db.json', 'db/e2e-db.json', (err) => {
  if (err) throw err;
  console.log('DB was cleaned');
});
