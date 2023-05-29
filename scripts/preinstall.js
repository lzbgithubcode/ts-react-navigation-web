#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

//1. 判断node的版本
// 限制的版本 node 14.18.0
const limitNodeVersion = '14.18.0';
const version = process.versions.node;
const versionList = version.split('.');
const limitVersionList = limitNodeVersion.split('.');

for (let i = 0, len = versionList.length; i < len; i++) {
  const currentNumber = versionList[i];
  const limitNumber = limitVersionList[i];
  if (limitNumber > currentNumber) {
    console.warn(``);
    console.log(
      `\n【此处警告⚠️】😄😄😄😄 node 版本必须>= ${limitNodeVersion}！！！！！！！\n`
    );
    process.exit(1);
  } else if (limitNumber == currentNumber) {
    continue;
  } else {
    break;
  }
}

/**
 * @description: 移除文件夹
 * @param {*} dir
 * @return {*}
 */
function removeDir(dir) {
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      //如果是文件夹就递归下去
      removeDir(newPath);
    } else {
      //删除文件
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
}

// 2. 判断pnpm
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log(`\n【此处警告⚠️】😂😂😂😂请使用pnpm包管理安装！！！！！！！\n`);
  removeDir('node_modules');
  process.exit(1);
}
