import { createStore } from "vuex";
import axios from "axios";
const api = "http://localhost:5000";
export default createStore({
  state: {
    posts: [],
    users: [],
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
    getUsers({ commit }) {
      try {
        let res = axios.get(`${api}/users`);
        commit("GET_USERS", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    addUser(user) {
      try {
        axios.post(`${api}/users`, user);
      } catch (error) {
        console.log(error);
      }
    },
    removeUser(userId) {
      try {
        axios.delete(`${api}/users/${userId}`);
      } catch (error) {
        console.log(error);
      }
    },
    editUser(userId, newUser) {
      try {
        axios.put(`${api}/users/${userId}`, newUser);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    GET_USERS(state, users) {
      state.users = users;
    },
  },
  modules: {},
});
