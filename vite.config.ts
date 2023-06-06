import { defineConfig, loadEnv } from 'vite';
import type { ConfigEnv } from 'vite';
import { resolve } from 'node:path';
import legacy from '@vitejs/plugin-legacy';
import reactPlugin from '@vitejs/plugin-react';

const plugins = [];

// 1. vite的react插件 -自动刷新与babel编译
plugins.push(reactPlugin({ include: /\.(js|jsx|ts|tsx)$/ }));

// 2. 兼容传统浏览器
plugins.push(legacy({ targets: ['defaults', 'not IE 11'] }));

// vite 配置
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd());
  console.log('当前模式', command);
  console.log('当前环境配置', currentEnv); //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    // 构建的目录0
    build: {
      outDir: 'dist',
    },
    // 插件
    plugins: plugins,

    // 别名
    resolve: {
      alias: [
        { find: /^~/, replacement: resolve(__dirname, './') },
        { find: '@', replacement: resolve(__dirname, 'src') },
      ],
      extensions: ['.ts', '.tsx'],
    },
    // vite 服务
    server: {
      host: true,
      port: 8009, // 开发环境启动的端口
    },
  });
};
