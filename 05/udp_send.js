const sckt = require('dgram').createSocket('udp4')

const message = Buffer.from('Olá UDP!!!')

sckt.send(message, 41234, 'localhost', err => {
  err && console.error(err)
  sckt.close()
})
