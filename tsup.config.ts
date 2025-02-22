import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*'],
  outDir: 'dist',
  format: ['esm'],
  sourcemap: true,
  dts: true,
  clean: true,
  skipNodeModulesBundle: true,
  target: 'esnext',
  external: [
    '@tailwindcss/postcss',
    'postcss',
    'class-variance-authority',
    'react',
    'react-dom',
    '@tailwindcss/postcss',
    'tailwindcss',
    'tailwindcss-animate',
    'sonner',
    'zod',
  ],
  minify: true,
  bundle: true,
  splitting: true,
  // treeshake: true,
  // banner: {
  //   js: `"use client"`,
  // },
})
