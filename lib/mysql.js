'use strict'

module.exports = require('mysql').createPool({
  'mysql': 'beta-charis.c4bsrjhcsbjv.ap-northeast-2.rds.amazonaws.com',
  'user': 'charis',
  'password': 'Madsq0116',
  'database': 'charis',
  'connectionLimit': 100
})
