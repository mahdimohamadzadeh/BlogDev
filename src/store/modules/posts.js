import axios from "axios";
export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    getRandomPost: (state) => {
      let posts = state.posts;
      let randomItem = posts
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      return randomItem;
    },
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  actions: {
    getPosts({ commit }) {
      axios
        .get(`http://localhost:4000/posts`)
        .then((res) => commit("SET_POSTS", res.data));
    },
    removePost(postId) {
      try {
        axios.delete(`http://localhost:4000/posts/${postId}`);
      } catch (error) {
        console.log(error);
      }
    },
    addPost(post) {
      try {
        axios.post(`http://localhost:4000/posts/`, post);
      } catch (error) {
        console.log(error);
      }
    },
    editPost(post, postId) {
      try {
        axios.put(`http://localhost:4000/posts/${postId}`, post);
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
};
