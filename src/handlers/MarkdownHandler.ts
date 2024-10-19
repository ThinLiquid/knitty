import matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';

import type { IBaseHandler } from '..';

export default class MarkdownHandler implements IBaseHandler {
  fileExtensions = ['md']

  parse (code: string) {
    const frontmatter = matter(code)

    const compiledCode = remark()
      .use(html)
      .processSync(frontmatter.content)

    return { 
      frontmatter: frontmatter.data, 
      compiledCode: compiledCode.toString() 
    }
  }
}