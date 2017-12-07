'use strict'
const fs = require('fs')

const exemtxt = fs.readFileSync('exemplo.txt', 'utf8')
const naoexiste = fs.readFileSync('estearquivonaoexiste', 'utf8')

fs.readFile('exemplo.txt', (err, data) => {
  err && console.error('ops')
  console.log(data);
})

fs.readFile('estearquivonaoexiste', (err, data) => {
  err && console.error('ops')
  console.log(data);
})

/*
** escrever um json no arquivo
** na callback ler de volta o json
*/
