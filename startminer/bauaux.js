const fs = require('fs');


const saveToFile = (data, filename = 'log.txt') => new Promise((resolve, reject) => {
  fs.writeFile(filename, data, function(err) {
      if(err) {
          reject(err)
          return console.log(err);
      }
      resolve()
  });
})
const appendToFile = (data, filename = 'log.txt') => new Promise((resolve, reject) => {
  fs.appendFile(filename, data, function(err) {
      if(err) {
          reject(err)
          return console.log(err);
      }
      resolve()
  });
})

module.exports = {
  saveToFile,
  appendToFile
}