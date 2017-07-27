'use strict'

const pool = require('./mysql')
const DEBUG = false

function _debug (query) {
  console.log(query.sql + '\n')
}

function _excute (sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) throw err

    var query = conn.query(sql, function (err, result) {
      conn.release()
      callback(err, result)
    })

    if (DEBUG) return _debug(query)
  })
}

function _transaction (tasks, callback) {
  pool.getConnection(function (err, conn) {
    if (err) throw err

    conn.beginTransaction(function (err) {
      if (err) return callback(err)
    })

    recursiveTransaction(tasks, conn, callback)
  })
}

function recursiveTransaction (tasks, conn, callback) {
  var query = conn.query(tasks[0], function (err, results) {
    if (err) {
      return conn.rollback(function () {
        console.log('rollback')
        callback(err)
      })
    }

    if (tasks.length === 1) {
      conn.commit(function (err) {
        if (err) {
          return conn.rollback(function () {
            callback(err)
          })
        }
      })
    } else {
      tasks.shift()
      recursiveTransaction(tasks, conn, callback)
    }
  })

  if (DEBUG) return _debug(query)
}

module.exports = {
  'excute': _excute,
  'transaction': _transaction
}
