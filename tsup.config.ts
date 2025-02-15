import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/components/ui/*'],
  outDir: 'dist',
  format: ['esm'],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: 'bundler',
      declarationDir: './dist',
    },
  },
  clean: true,
  treeshake: true,
  splitting: false,
  skipNodeModulesBundle: true,
  target: 'es2022',

  external: ['react', '@voluspalabs/lib'],

  // Prod
  minify: true,
  bundle: true,
})
