import { createStore } from "vuex";
import users from "./modules/users";
import theme from "./modules/theme";
import axios from "axios";
const api = "http://localhost:5000";
export default createStore({
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  actions: {
    getPosts({ commit }) {
      axios
        .get(`http://localhost:5000/posts`)
        .then((res) => commit("SET_POSTS", res.data));
    },
    removePost(postId) {
      try {
        axios.delete(`${api}/posts/${postId}`);
      } catch (error) {
        console.log(error);
      }
    },
    addPost(post) {
      try {
        axios.post(`${api}/posts/`, post);
      } catch (error) {
        console.log(error);
      }
    },
    editPost(post, postId) {
      try {
        axios.put(`${api}/posts/${postId}`, post);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  modules: {
    users,
    theme,
  },
});
