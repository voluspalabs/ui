import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  splitting: true,
  skipNodeModulesBundle: true,
  sourcemap: true,
  target: 'es2022',

  // Dev
  // external: ['react', 'react-dom', 'react-hook-form'],

  // Prod
  minify: true,
  bundle: true,
})
