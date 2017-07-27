'use strict'

const defineObj = require('./defineObj')

var table = 'table1'

var opts = {
  'fields': {
    'field1': {},
    'field2': {}
  }
}

var define = defineObj.getDefine({
  'table': table
}, opts)

console.log('define : ', define)

module.exports = {}
