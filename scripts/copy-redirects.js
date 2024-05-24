const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', '_redirects');
const destination = path.join(__dirname, '..', 'dist', '_redirects');

fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('Error copying _redirects file:', err);
    } else {
        console.log('_redirects file copied to dist folder.');
    }
});