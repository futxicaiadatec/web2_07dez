const sckt = require('dgram').createSocket('udp4')

const broadcast = '192.168.0.255'

sckt.bind(() => {
  sckt.setBroadcast(true)
  const msg = Buffer.from('Olá broadcast')
  sckt.send(msg, 41234, broadcast, (err, size) => {
    err && console.error(err)
    sckt.close()
  })
})
