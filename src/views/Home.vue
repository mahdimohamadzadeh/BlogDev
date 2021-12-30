<template>
  <div class="Home mt-20">
    <Post
      v-for="value in posts"
      :key="value.id"
      :title="value.title"
      :discreption="value.discreption"
      :url="value.url"
      :data="value.data"
      :category="value.category"
    />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
export default {
  components: { Post },
  name: "Home",
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
