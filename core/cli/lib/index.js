/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-04-27 17:23:27
 * @LastEditors: zhaojing834 zhaojing834@jd.com
 * @LastEditTime: 2023-04-28 19:57:03
 * @FilePath: /dream-cli-dev/packages/core/lib/core.js
 * @Description: 核心函数
 */
'use strict';

module.exports = core;

// require可加载的文件类型: .js .json .node ...
// .js => module.exports/exports
// .json -> JSON.parse
// .node -> c++文件，通过process.dlopen 打开一个c++文件，该场景几乎不会用到
// any(其他后缀的文件) -> 当作 .js文件来加载
// 如果.md 改成js代码,require也能识别
const pkg = require('../package.json');
const log = require('@dream-cli-dev/log');

// a. 报错
// b. hello
const file = require('../file.txt');
file(); // 输出hello

function core() {
  checkPkgVersion();
  console.log('exec core~')
}

function checkPkgVersion () {
  log.notice('cli', pkg.version);
  console.log(pkg.version)
}