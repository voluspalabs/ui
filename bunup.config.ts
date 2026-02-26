import { defineConfig } from 'bunup'

export default defineConfig({
  entry: ['src/*.tsx', 'src/blocks/*.tsx'],
  format: 'esm',
  dts: {
    inferTypes: true,
    splitting: true,
  },
  sourcemap: 'linked',
  clean: true,
  splitting: true,
  target: 'browser',
  sourceBase: './src',
  exports: true,
  emitDCEAnnotations: true,
  drop: ['debugger'],
  unused: {
    level: 'error',
  },
})
