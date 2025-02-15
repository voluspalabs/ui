import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*'],
  outDir: 'dist',
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  // splitting: true,
  skipNodeModulesBundle: true,
  target: 'es2022',
  external: [
    'react',
    'react-dom',
    '@tailwindcss/postcss',
    'tailwindcss',
    'tailwindcss-animate',
  ],
  minify: true,
  bundle: true,
})
