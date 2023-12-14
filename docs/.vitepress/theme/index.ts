import Theme from 'vitepress/dist/client/theme-default'
import DefaultTheme from 'vitepress/theme'
import NainUI from '../../../dist/nain-ui.mjs'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NainUI)
  },
}