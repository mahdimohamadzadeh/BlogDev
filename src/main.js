import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";
import "./style.css";

createApp(App).use(store).use(store).use(router).mount("#app");
