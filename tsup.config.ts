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
  target: 'esnext',

  // Prod
  minify: true,
  bundle: true,
})
