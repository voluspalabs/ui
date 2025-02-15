import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*'],
  outDir: 'dist',
  format: ['esm'],
  sourcemap: true,
  dts: true,
  clean: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  target: 'es2022',
  external: [
    'react',
    'react-dom',
    '@tailwindcss/postcss',
    'tailwindcss',
    'tailwindcss-animate',
  ],
  minify: false,
  bundle: true, // Change this back to true
  splitting: true, // Add splitting for better tree-shaking
})
