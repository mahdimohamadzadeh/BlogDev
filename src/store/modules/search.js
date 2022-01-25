export default {
  state: {
    isSearch: false,
    canNotFindSearch: "",
    inputSerach: "",
    isClickSearch: false,
  },
  mutations: {
    CHANGE_STATE_ISSEARCH(state, payload) {
      state.isSearch = payload;
    },
    CHANGE_STATE_INPUTSEARCH(state, payload) {
      state.inputSerach = payload;
    },
  },
  getters: {
    allowedValues: (state, rootGetters) => {
      const search = state.inputSerach;
      const getCatgories = (posts) => {
        const allCategories = [];
        const map = {};

        for (const post of posts) {
          const categories = post.category.split(",");

          categories.forEach((category) => {
            if (map[category]) return;

            map[category] = true;
            allCategories.push(category);
          });
        }
        return allCategories;
      };
      const categories = getCatgories(rootGetters.allPosts);

      let filter = categories.filter((category) => category === search);
      return filter[0];
    },
  },
};
