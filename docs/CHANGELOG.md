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

