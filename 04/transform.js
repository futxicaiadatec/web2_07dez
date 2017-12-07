'use strict'
const Stream = require('stream')

const entrada = process.stdin
const saida = process.stdout

const trans = new Stream.Transform()

trans._transform = function(chunk,enc,done){
  done(null,chunk.length.toString()+'\r\n')
}

entrada.pipe(trans).pipe(saida)

/*
** https://devhints.io/nodejs-stream
*/
