import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import topLevelAwait from "vite-plugin-top-level-await";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })

  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 为 src 目录的别名
    },
  },
});