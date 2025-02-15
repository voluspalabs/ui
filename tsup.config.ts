import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components/ui/*'],
  outDir: 'dist',
  format: ['esm'],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: 'node',
      declarationDir: './dist',
    },
  },
  clean: true,
  treeshake: true,
  splitting: true,
  skipNodeModulesBundle: true,
  target: 'es2022',

  external: ['react'],

  // Prod
  minify: true,
  bundle: true,
})
