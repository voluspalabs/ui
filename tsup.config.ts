import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
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
  bundle: true,
  splitting: false,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    }
  },
})
