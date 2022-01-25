import { createStore } from "vuex";
import users from "./modules/users";
import theme from "./modules/theme";
import posts from "./modules/posts";
import search from "./modules/search";
export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    posts,
    users,
    theme,
    search,
  },
});
