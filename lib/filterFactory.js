'use strict'

function FilterFactory () {}

FilterFactory.prototype.eq = function (inlineFunc, opts) {
  return inlineFunc.where(opts)
},

FilterFactory.prototype.like = function (inlineFunc, opts) {
  return inlineFunc.whereRaw([opts.key, '%?%'].join(' like '), otps.value)
},

FilterFactory.prototype.gt = function (inlineFunc, opts) {
  return inlineFunc.where(opts.key, '> ', opts.value)
},

FilterFactory.prototype.lt = function (inlineFunc, opts) {
  return inlineFunc.where(opts.key, '<', opts.value)
},

FilterFactory.prototype.in = function (inlineFunc, opts) {
  return inlineFunc.whereIn(opts)
},

FilterFactory.prototype.between = function (inlineFunc, opts) {
  return inlineFunc.whereBetween(opts.key, [opts.start, opts.end])
},

FilterFactory.prototype.isNull = function (inlineFunc, opts) {
  return inlineFunc.whereNull(opts)
}

module.exports = new FilterFactory()