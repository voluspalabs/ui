import { readFileSync, writeFileSync } from 'node:fs'

try {
  const formDtsPath = 'dist/form.d.ts'
  const content = readFileSync(formDtsPath, 'utf-8')

  const fixedContent = content.replace(
    /import { FieldComponent } from '\.\/useField\.js';\nimport { ReactFormExtendedApi } from '\.\/useForm\.js';/g,
    "import { FieldComponent, ReactFormExtendedApi } from '@tanstack/react-form';",
  )

  if (content !== fixedContent) {
    writeFileSync(formDtsPath, fixedContent)
  }
} catch (error) {
  console.error('⚠️ Failed to fix form.d.ts:', error)
}
