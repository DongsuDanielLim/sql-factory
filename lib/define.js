'use strict'

const defineObj = require('./defineObj')

var table = 'table1'

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

var _define = defineObj.getDefine({
  'table': table
}, opts)

module.exports = {
  'define': _define
}
