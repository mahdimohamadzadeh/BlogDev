<template>
  <Loading class="absolute top-0" />
  <div>
    <h1
      class="border-b-2 w-2/3 dark:text-very-light-blue mx-auto pb-2 border-border text-center text-dark-blue text-2xl"
    >
      آخرین پست ها
    </h1>
    <Posts
      class="inline-flex"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :discreption="post.description"
      :date="post.date"
      :category="post.categories"
      :id="post.id"
      :theme="theme"
      :url="post.image_url"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Posts from "@/components/Posts.vue";
import Loading from "../components/Loading.vue";
export default {
  components: { Posts, Loading },
  name: "NewPosts",
  beforeMount() {
    setTimeout(() => {
      this.$store.state.posts.isLoading = true;
    }, 100);
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch("getNewPosts");
    }, 200);
  },

  computed: {
    ...mapGetters({ theme: "getTheme" }),
    ...mapGetters({ posts: "allNewPosts" }),
  },
};
</script>

<style lang="scss" scoped></style>
