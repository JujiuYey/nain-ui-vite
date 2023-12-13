module.exports = {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "ignore",
  parsers: {
      ".jsx": "flow",
      ".scss": "scss",
      ".ts": "typescript",
      ".less": "css",
      ".vue": "vue",
      ".nvue": "vue",
      ".ux": "vue",
      ".yml": "yaml",
  }
}