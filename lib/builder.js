'use strict'

const _ = require('lodash')

const knex = require('./knex')
const joinFactory = require('./joinFactory')
const utility = require('./utility')

function Builder () {
  this.sql = ''
  this.resultSet = []
}

/**
 * insert sql builder
 * @param  {Object} define target table define
 * @param  {Object} input
 * @return {String} sql
 */
Builder.prototype.insert = function (define, input) {
  return knex(define.table).insert(input).toString()
}

/**
 * select sql builder
 * @param  {Object} define common table define
 * @param  {Object} opts   sql options
 * @return {String} sql
 */
Builder.prototype.select = function (define, opts) {
  var sql = knex.select(_.keys(utility.getFields(define, opts))).from(define.table).where(opts.where)
  
  for (var eachJoin of opts.join) {
    
  }

  this.sql = sql.toString()
  return this
}

/**
 * update sql builder
 * @param  {Object} define target table define
 * @param  {Object} upt
 * @return {String} sql
 */
Builder.prototype.update = function (define, opts, upt) {
  return knex(define.table).where(opts.where).update(upt).toString()
}

/**
 * delete sql builder
 * @return {[type]} [description]
 */
Builder.prototype.delete = function (define, opts) {
  return knex(define.table).where(opts.where).del().toString()
}

module.exports = {
  init: function () {
    return new Builder()
  }
}
