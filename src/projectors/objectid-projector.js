const ObjectID = require('mongodb').ObjectID

module.exports = (obj) => {
  if(obj === null || obj === undefined ) {
    return obj
  }
  if(ObjectID.isValid(obj)) {
    return ObjectID.createFromHexString(obj)
  }
  else {
    return undefined
  }
}
