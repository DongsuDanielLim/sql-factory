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

console.log('define : ', _define)

module.exports = {
  'define': _define
}

// 1 PV5586194841aCksJig NULL  Charis  Three Goddesses attended to the beauty of the most beautiful Goddesses in Greece, Aphrodite, Venus, and Hera.         ''        NULL  0 NULL  [{"url":"https://s3.ap-northeast-2.amazonaws.com/beta.charis.img/charis/brand/brand_charis.jpg","priority":1,"type":1},{"url":"https://s3.ap-northeast-2.amazonaws.com/beta.charis.img/kiehls2.png","priority":2,"type":1},{"url":"https://s3.ap-northeast-2.amazonaws.com/beta.charis.img/kiehls3.png","priority":3,"type":1},{"url":"https://s3.ap-northeast-2.amazonaws.com/beta.charis.img/kiehls4.png","priority":4,"type":2},{"url":"https://s3.ap-northeast-2.amazonaws.com/beta.charis.img/kiehls5.png","priority":5,"type":2}] 1   0 1455861948  1455861948