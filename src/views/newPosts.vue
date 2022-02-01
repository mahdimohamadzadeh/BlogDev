<template>
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
      src="../assets/image/"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Posts from "@/components/Posts.vue";
export default {
  components: { Posts },
  name: "NewPosts",
  mounted() {
    this.$store.dispatch("getNewPosts");
  },

  computed: {
    ...mapGetters({ theme: "getTheme" }),
    ...mapGetters({ posts: "allNewPosts" }),
  },
};
</script>

<style lang="scss" scoped></style>
