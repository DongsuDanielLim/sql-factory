'use strict'

const _ = require('lodash')

function Define () {}

/**
 * return new Define
 * @param  {Object} attr table meta information
 * @param  {Object} opts 
 * @return {[type]}      [description]
 */
function _getDefine (attr, opts) {
  opts.hawOwnProperty('fields')

  var newDefine = new Define()

  for (var field of _.keys(opts.fields)) {
    newDefine[field] = opts.fields[field]
  }

  return newDefine
}

module.exports = {
  'getDefine': _getDefine
}
