import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*'],
  outDir: 'dist',
  format: ['esm'],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: 'bundler',
      declarationMap: true,
      declaration: true,
    },
  },
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
  bundle: false,
})
