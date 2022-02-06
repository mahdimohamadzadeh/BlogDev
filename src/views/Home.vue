<template>
  <div class="Home">
    <Loading/>
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
import Loading from "../components/Loading.vue";
export default {
  components: { Posts, Loading },
  name: "Home",
  beforeMount() {
    setTimeout(() => {
      this.$store.state.posts.isLoading = true;
    }, 100);
  },
  mounted() {
    this.$store.dispatch("getPosts");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
