'use strict'
const chalk = require('chalk')

module.exports = (component, fn, count = 1) => {
  console.log(chalk.blue(`# ${component}`))
  fn({
    same: (actual, expected, msg) => {
      if (actual === expected) {
        console.log(chalk.green(`OK ${count} - ${msg}`))
      } else {
        console.log(chalk.red(`not OK ${count} -  ${msg}`))
        console.log(chalk.red(`      expected: ${expected}`))
        console.log(chalk.red(`      actual: ${actual}`))
      }
      count++
    }
  })
}
// Tiny tester function from Eric Eliot
