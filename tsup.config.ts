import { defineConfig } from 'tsup'

export default defineConfig({
  // entry: ['src/components/ui/*'],
  entry: ['src/index.ts', 'src/components/ui/*'],
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
  splitting: true,
  skipNodeModulesBundle: true,
  target: 'es2022',
  external: ['react', '@voluspalabs/lib'],
  minify: true,
  bundle: true,
})
