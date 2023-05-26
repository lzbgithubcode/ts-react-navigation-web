import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import legacy from '@vitejs/plugin-legacy';
import reactPlugin from '@vitejs/plugin-react';

const plugins = [];

// 1. vite的react插件 -自动刷新与babel编译
plugins.push(reactPlugin({ include: /\.(js|jsx|ts|tsx)$/ }));

// 2. 兼容传统浏览器
plugins.push(legacy({ targets: ['defaults', 'not IE 11'] }));

// vite 配置
export default defineConfig({
  // 构建的目录
  build: {
    outDir: 'dist',
  },
  // 插件
  plugins: plugins,

  // 别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx'],
  },
});
