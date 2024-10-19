export interface IBaseHandler {
  fileExtensions: string[]

  parse(code: string): {
    frontmatter: Record<string, any>
    compiledCode: string
  }

}
export interface IKnittyConfig {
  handlers: IBaseHandler[]
}

export const defineConfig = (config: IKnittyConfig) => config