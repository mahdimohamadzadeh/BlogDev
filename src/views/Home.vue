<template>
  <div class="Home">
    <Posts
      class="inline-flex"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :date="post.date"
      :category="post.categories"
      :id="post.id"
      :url="post.image_url"
      :theme="theme"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Posts from "@/components/Posts.vue";
export default {
  components: { Posts },
  name: "Home",
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    posts() {
      let isSearch = this.$store.state.search.isSearch;
      if (isSearch) {
        return this.getPostByCategory(this.allowedValues);
      } else {
        return this.allPosts;
      }
    },
    ...mapGetters({ theme: "getTheme" }),
    ...mapGetters(["allowedValues", "getPostByCategory", "allPosts"]),
  },
};
</script>
