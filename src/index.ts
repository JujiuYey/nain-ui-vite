// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-browser';
import NainUI, { NainButton } from './entry';

createApp({
  template: `
      <div>
          <NainButton color="blue" size="large">普通按钮</NainButton>
          <NainButton color="purple"  size="small">普通按钮</NainButton>
          <NainButton color="indigo" size="medium">普通按钮</NainButton>
          <NainButton color="purple" plain>普通按钮</NainButton>
          <NainButton color="red">普通按钮</NainButton>
          <NainButton color="blue" round plain icon="search" ></NainButton>
          <NainButton color="green" round plain icon="edit" ></NainButton>
          <NainButton color="gray" round plain icon="check" ></NainButton>
          <NainButton color="yellow" round plain icon="message" ></NainButton>
          <NainButton color="red" round plain icon="delete" ></NainButton>
      </div>
  `
})
  .use(NainUI)
  .mount('#app');
