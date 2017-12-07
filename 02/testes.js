'use strict'
const ttf = require('./tinytestfunction')


ttf('upper case', assert => {
  {
    let up = false
    try {
      up = require('./upper')
    } catch (e) {
      console.error(e)
    }

    const msg = 'o pacote upper.js deve exportar uma função'

    const actual = typeof(up)
    const expected = 'function'

    assert.same(actual, expected, msg)
  }

  {
    let up = false
    try {
      up = require('./upper')
    } catch (e) {
      console.error(e)
    }

    const msg = 'upper deve receber uma string e a retornar em caixa alta'

    const actual = up(msg)
    const expected = 'UPPER DEVE RECEBER UMA STRING E A RETORNAR EM CAIXA ALTA'

    assert.same(actual, expected, msg)
  }

  {
    const msg = 'mensagem mostrada ao usuário'

    const actual = 'valor atual'
    const expected = 'valor esperado'

    assert.same(actual, expected, msg)
  }
})
