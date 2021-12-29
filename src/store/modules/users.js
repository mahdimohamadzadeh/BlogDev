import axios from "axios";
const api = "http://localhost:5000";
export default {
  state: {
    users: [],
  },
  actions: {
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
    GET_USERS(state, users) {
      state.users = users;
    },
  },
};
