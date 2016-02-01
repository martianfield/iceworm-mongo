'use strict'
const Double = require('mongodb').Double

module.exports = (obj) => {
  if(obj === null || obj === undefined) {
    return obj
  }
  let parsed = parseFloat(obj)
  if(isNaN(parsed)) {
    return undefined
  }
  return Double(parsed)
}
