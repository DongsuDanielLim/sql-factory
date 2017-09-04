'use strict'

function JoinFactory () {}

JoinFactory.prototype.innerJoin = function (sql, opts) {
  if (opts.hasOwnProperty('on')) {
    sql.innerJoin(opts.table, opts.on)
  } else {
    sql.innerJoin(opts.table, opts.thisKey, opts.thatKey)
  }
  return this
}

module.exports = new JoinFactory()