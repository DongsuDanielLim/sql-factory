'use strict'

const models = require('./builder')
const defineObj = require('./defineObj')
const utility = require('./utility')

var opts = {
  'fields': {
    'idx': {
      'required': true
    },
    'provider_id': {
      'required': true
    },
    'dist_id': {
      'required': true
    },
    'company_name': {
      'required': true
    },
    'rep_comment': {
      'required': false
    },
    'biz_no': {
      'required': false
    },
    'zipcode': {
      'required': false
    },
    'address1': {
      'required': false
    },
    'address2': {
      'required': false
    },
    'homepage': {
      'required': false
    },
    'account': {
      'required': false
    },
    'bank': {
      'required': false
    },
    'manager_name': {
      'required': false
    },
    'call': {
      'required': false
    },
    'phone': {
      'required': false
    },
    'certification': {
      'required': false
    },
    'image': {
      'required': false
    },
    'verified': {
      'required': false
    },
    'note': {
      'required': false
    },
    'deleted': {
      'required': true
    },
    'utime': {
      'required': true
    },
    'ctime': {
      'required': true
    }
  }
}

var providers = defineObj.getDefine({
  'table': 'providers',
  'table_prefix': 'pr',
  'columns': utility.getFields(opts.fields)
}, opts)

var select = function (opts, cb) {
    var newModel = models.init()
    
    var joinArr = [
      {
        table: sql_user.TABLE_WITH_PREFIX[0],
        joinType: 'innerJoin',
        columns: knex.columnsWithPrefixAll(sql_user.COLUMNS, sql_user.TABLE_PREFIX),
        thisKey: sql_user.TABLE_PREFIX + '.uid',
        thatKey: this.TABLE_PREFIX + '.uid'
      }
    ]

    newModel.select(providers, {
        where: opts.filter,
        join: joinArr
    })
    
    // cb(null, newModel)
}

module.exports = providers