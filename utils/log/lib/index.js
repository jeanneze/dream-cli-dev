/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-04-28 18:23:01
 * @LastEditors: zhaojing834 zhaojing834@jd.com
 * @LastEditTime: 2023-04-28 19:55:11
 * @FilePath: /dream-cli-dev/utils/log/lib/index.js
 * @Description: 日志函数
 */
'use strict';

const log = require('npmlog');

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'; // 判断debug 模式
log.heading = 'dream'; // 修改前缀
log.addLevel('success', 2000, { fg: 'green', bold: true }); // 添加自定义命令


module.exports = log;