##### 一、 配置 eslint + prettier  + git-commit + Husky + lint-staged

1. 安装 eslint / prettier, 

* 创建`touch .eslintrc.js`/`touch .eslintrc.js` 配置 eslint
* 创建`touch .prettierrc.json` / ` touch .prettierignore` 配置prettier

```json
 "@commitlint/cli": "^17.6.3",
    "@commitlint/config-conventional": "^17.6.3",  //commit 提交校验
    "@typescript-eslint/eslint-plugin": "^5.59.7",
    "@typescript-eslint/parser": "^5.59.7",  // eslint 的解析器
    "@vitejs/plugin-legacy": "^4.0.4",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.41.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "^7.32.2",
    "husky": "^8.0.3",   // git 的hooks
    "lint-staged": "^13.2.2",  // linter 
    "prettier": "^2.8.8",
```


2. 增加组件库 [ant](https://ant.design/docs/react/introduce-cn)

3. css处理器(使用postcss替换sass)
* [postcss插件列表](https://github.com/postcss/postcss/blob/main/docs/plugins.md)
* [PostCSS](https://github.com/postcss/postcss/blob/main/docs/README-cn.md) css转换工具
* [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)转化css的新特性到目标浏览器（包含autoprefixer）
* [postcss-nested](https://github.com/postcss/postcss-nested)像sass一样的切套规则
* [postcss-import](https://github.com/postcss/postcss-import)css中使用@import



4. 路由
* [react-router-dom]react的路由
* [react-router-config]用于静态路由配置
* [react-router] react-router-config的依耐 -v6版本已经弃用


二、 安装组件库
* [antd组件库](https://ant.design/docs/react/introduce-cn)