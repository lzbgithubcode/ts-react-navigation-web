##### 1.【warn】导入路径不能以“.tsx”扩展名结束。考虑改为导入“./App.js”。

解决办法：配置路径别名 + 取出扩展名称


##### 2.ts 找不到模块“xxx”或其相应的类型声明


##### 2.github访问443问题
解决方案: https://houbb.github.io/2021/03/06/github-access
方案2： 查看`github.com`的[ip地址查询](https://whatismyipaddress.com/hostname-ip)
`配置给本地/etc/host`
刷新DNS `sudo killall -HUP mDNSResponder`

##### 3.git访问“git Empty reply from server”
解决方案：`git config  http.sslVerify "true" `


##### 4. vite 报错 `[plugin: vite:dep-pre-bundle] Failed to resolve entry for package "@ant-design/colors". The package may have incorrect main/module/exports specified in its package.json`

解决方案: resolve中的extensions选项去掉，才能在.vite中预编译文件

##### 5. vite 报错`vite Transforming const to the configured target environment ("ES5") is not supported yet`
解决方案: 更新vite版本是最新的版本`"vite": "^4.2.0"`




