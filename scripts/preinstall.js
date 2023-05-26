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

// 2. 判断pnpm
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log(`\n【此处警告⚠️】😂😂😂😂请使用pnpm包管理安装！！！！！！！\n`);
  process.exit(1);
}
