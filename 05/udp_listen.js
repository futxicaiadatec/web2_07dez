const sckt = require('dgram').createSocket('udp4')

sckt.on('error', err => {
  console.log(JSON.stringify(err))
  sckt.close()
})

sckt.on('close', () => {
  console.log('tchau!')
})

sckt.on('message', (msg, rinfo) => {
  const req = Object.assign({}, rinfo, msg)
  console.log(JSON.stringify(req, null, 2))
})

sckt.on('listening', () => {
  const address = sckt.address()
  console.log(`server listening ${address.family} ${address.address}:${address.port}`)
})

sckt.bind(41234, '127.0.0.1')
