const sckt = require('dgram').createSocket('udp4')

const broadcast = '192.168.0.255'

sckt.on('message', (msg, rinfo) => {
  const req = Object.assign({}, rinfo, msg)
  console.log(JSON.stringify(req, null, 2))
})

sckt.on('listening', function () {
  const address = sckt.address()
  console.log('escutando em ' + address.address + ';' + address.port + ' ' + address.family)
})

sckt.bind(41234, broadcast)
