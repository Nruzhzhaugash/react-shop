import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import path from 'path';

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@shared': path.resolve(new URL(import.meta.url).pathname, './src/shared'),
  //     '@widgets': path.resolve(new URL(import.meta.url).pathname, './src/widgets'),
  //     '@entities': path.resolve(new URL(import.meta.url).pathname, './src/entities'),
  //     '@features': path.resolve(new URL(import.meta.url).pathname, './src/features'),
  //     '@pages': path.resolve(new URL(import.meta.url).pathname, './src/pages'),
  //     '@app': path.resolve(new URL(import.meta.url).pathname, './src/app')
  //   }
  // }
});