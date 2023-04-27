/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-04-27 17:23:27
 * @LastEditors: zhaojing834 zhaojing834@jd.com
 * @LastEditTime: 2023-04-27 18:32:48
 * @FilePath: /dream-cli-dev/packages/core/lib/core.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

module.exports = core;

function core() {
  const addResult = add(1, 5);
  return 'Hello from core';
}

function add(a, b) {
  return a + b;
}
