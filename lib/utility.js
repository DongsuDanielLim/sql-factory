'use strict'

const _ = require('lodash')

/**
 * return select fields
 * @param {Object} define table define
 * @param {Object} opts   options
 */
function _getFields (define, opts) {
  return _.pickBy(define.fields, function (value, key) {
    return (value.required) ? key : null
  })
}

module.exports = {
  'getFields': _getFields
}
