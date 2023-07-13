import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import type { ConfigEnv } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import reactPlugin from '@vitejs/plugin-react';

const plugins = [];

// 1.浏览器兼容
plugins.push(legacy({ targets: ['defaults', 'not IE 11'] }));

// 2. vite的react插件 -自动刷新与babel编译
plugins.push(reactPlugin());

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd());
  console.log('当前模式', command);
  console.log('当前环境配置', currentEnv); //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    // 构建的目录0
    build: {
      outDir: 'dist',
    },
    //     // 别名
    resolve: {
      alias: [
        { find: /^~/, replacement: resolve(__dirname, './') },
        { find: '@', replacement: resolve(__dirname, 'src') },
      ],
    },
    // 插件
    plugins: plugins,
    // vite 服务
    server: {
      host: true,
      port: 8009, // 开发环境启动的端口
    },
  });
};
