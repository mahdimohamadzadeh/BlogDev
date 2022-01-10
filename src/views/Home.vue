<template>
  <div class="Home mt-14">
    <Post
      class="inline-flex"
      v-for="value in posts"
      :key="value.id"
      :title="value.title"
      :discreption="value.discreption"
      :date="value.date"
      :category="value.category"
      :id="value.id"
      :theme="theme"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "@/components/Post.vue";
export default {
  components: { Post },
  name: "Home",
  computed: {
    posts() {
      let isSearch = this.$store.state.posts.isSearch;
      let searchResult = this.$store.getters.AllowedValues;
      if (isSearch) {
        return this.$store.getters.getPostByCategory(searchResult);
      } else {
        return this.$store.getters.allPosts;
      }
    },
    ...mapGetters({ theme: "getTheme" }),
  },
};
</script>
