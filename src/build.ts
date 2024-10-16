import fs from 'fs/promises'
import path from 'path'

import { glob } from 'glob'

const currentDirectory = process.cwd()

const { default: config } = await import(path.join(currentDirectory, 'knitty.config.ts'))
console.log(config)

const pages = await glob(`src/pages/**/*.{md,knit.html}`)
console.log(pages)

fs.mkdir('dist')

for (const pagePath of pages) {
  const file = await fs.readFile(pagePath, 'utf-8')

  
  
}