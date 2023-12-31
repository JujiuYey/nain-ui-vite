import { App } from "vue";
import NainButton from "./button";
import "uno.css";

// 导出单独组件
export { NainButton };


// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(NainButton.name, NainButton);
  },
};