<template>
  <div class="Home mt-14">
    <Post
      class="inline-flex"
      v-for="value in posts"
      :key="value.id"
      :title="value.title"
      :discreption="value.discreption"
      :src="value.src"
      :date="value.date"
      :category="value.category"
      :id="value.id"
      :icon="icon"
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
      return this.$store.getters.getRandomPost;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>
