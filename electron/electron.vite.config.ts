import { defineConfig } from 'vite';
import { builtinModules } from 'module';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist-electron',
    sourcemap: true,
    target: 'esnext',
    minify: false,
    rollupOptions: {
      external: [...builtinModules, 'electron'],
      input: {
        main: path.resolve(__dirname, 'main.ts'),
        preload: path.resolve(__dirname, 'preload.ts'),
      },
      output: {
        format: 'cjs',
        dir: path.resolve(__dirname, 'dist-electron'),
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    emptyOutDir: true,
  },
});
