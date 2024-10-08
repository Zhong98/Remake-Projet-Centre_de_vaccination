/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from '@/router';

import '@/assets/css/common.css';
import "@/assets/css/iconfont.css";

import 'amfe-flexible';
import '@/rem'

const app = createApp(App)

registerPlugins(app)

app
  .use(createPinia())
  .use(router)
  .mount('#app')
