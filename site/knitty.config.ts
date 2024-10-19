import { defineConfig } from "../src";

import MarkdownHandler from "../src/handlers/MarkdownHandler";

export default defineConfig({
  handlers: [new MarkdownHandler()],
  publicFolder: "./public",
  outputDirectory: "dist",
});
