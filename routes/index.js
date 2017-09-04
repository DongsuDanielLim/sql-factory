'use strict'

var router = require('express').Router()

const define = require('../lib/define')
// const sqlBuilder = require('../lib/builder')
const repository = require('../lib/repository')

/* GET home page. */
router.route('/')
.get(
  function (req, res, next) {
    var test = define.define

    // var sql_insert = sqlBuilder.insert(test, {
    //   'field1': 'field1',
    //   'filed2': 'field2'
    // })

    var opts = {
      'filter': {
        'eq': {
          'provider_id': ""
        }
      }
    }
    repository.select(opts, function (err, result) {
      if (err) {
        return res.json({
          'message': 'internal error',
          'trace': err
        })
      }

      return res.json({
        'result': result
      })
    })

    // var sql_select = sqlBuilder.select(test, {
    //   'where': {
    //     'field1': 'field1'
    //   }
    // })

    // var sql_update = sqlBuilder.update(test, {
    //   'where': {}
    // }, {
    //   'field1': 'modi-field1',
    //   'field2': 'modi-field2'
    // })

    // var sql_delete = sqlBuilder.delete(test, {
    //   'where': {
    //     'field1': 'del_field1'
    //   }
    // })

    // res.json({
    //   'sql_insert': sql_insert,
    //   'sql_select': sql_select,
    //   'sql_update': sql_update,
    //   'sql_delete': sql_delete
    // })
  }
)

router.route('/select')
.get(
  function (req, res, next) {
    var define = define.define
  }
)

module.exports = router
