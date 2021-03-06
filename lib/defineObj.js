'use strict'

const _ = require('lodash')

function Define () {
  this.table = null
  this.fields = {}
}

/**
 * return new Define
 * @param  {Object} attr table meta information
 * @param  {Object} opts 
 * @return {[type]}      [description]
 */
function _getDefine (attr, opts) {
  // var test = opts.hawOwnProperty('fields')

  var newDefine = new Define()
  newDefine.table = attr.table

  for (var field of _.keys(opts.fields)) {
    newDefine.fields[field] = opts.fields[field]
  }

  return newDefine
}

module.exports = {
  'getDefine': _getDefine
}
