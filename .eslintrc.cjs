const eslintConfig = {
  root: true,
  // 指定环境
  env: {
    browser: true, // 浏览器全局变量
    es2022: true,
    node: true, // Node.js 的全局变量和 Node.js 的范围。
  },
  // 解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // 扩展配置
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  // 插件
  plugins: ['react', '@typescript-eslint'],

  // 共享配置
  settings: {
    react: {
      version: 'detect',
    },
  },

  // 配置规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
};

module.exports = eslintConfig;
