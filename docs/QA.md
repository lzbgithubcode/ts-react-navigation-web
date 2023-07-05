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
