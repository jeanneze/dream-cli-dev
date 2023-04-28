#! /usr/bin/env node

const importLocal = require('import-local');
const log = require('npmlog');

if (importLocal(__filename)) {
  log.info('cli', '正在使用dream-cli-dev 本地版本');
} else {
  require('../lib')(process.argv.slice(2));  // 从第三位参数开始传入
}