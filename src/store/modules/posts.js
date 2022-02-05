import axios from "axios";
const api = 'http://127.0.0.1:8000/api'
export default {
  state: {
    posts: [],
    newPosts: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    allNewPosts: (state) => state.newPosts,
    getPostById: (state) => (id) => {
      return state.posts.filter((post) => post.id === id);
    },
    getPostByCategory: (state) => (category) => {
      return state.posts.filter((post) => post.category == category);
    },
  },
  actions: {
    async getPosts({ commit }) {
      await axios
        .get(`${api}/randomPosts`)
        .then((res) => commit("SET_POSTS", res.data))
        .catch((error) => console.log(error));
    },
    async getNewPosts({ commit }) {
      await axios
        .get(`${api}/newProduct`)
        .then((res) => commit("SET_NEW_POSTS", res.data))
        .catch((error) => console.log(error));
    },
    async removePost(postId) {
      await axios
        .delete(`http://127.0.0.1:8000/api/randomPosts/${postId}`)
        .then((res) => {
          if (res.status == "ok") {
            alert("پست با موفقیت حذف شد");
          }
        })
        .catch((error) => console.log(error));
    },
    async addPost(post) {
      await axios
        .post("http://127.0.0.1:8000/api/randomPosts/", post)
        .then((res) => {
          if (res.status == "ok") {
            alert("پست با موفقیت اضافه شد");
          }
        })
        .catch((error) => console.log(error));
    },
    async editPost(post, postId) {
      await axios
        .put(`http://localhost:4000/posts/${postId}`, post)
        .then((res) => {
          if (res.status == "ok") {
            alert("پست با موفقیت ویرایش شد");
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_NEW_POSTS(state, newPosts) {
      state.newPosts = newPosts;
    },
  },
};
