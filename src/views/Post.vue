<template>
  <div>
    <OnePost
      v-for="object in post"
      :key="object.id"
      :id="object.id"
      :title="object.title"
      :discreption="object.description"
      :date="object.date"
      :category="object.categories"
      :like="object.like"
      :url="object.image_url"
      @incrementLike="incrementLike"
    />
  </div>
</template>

<script>
import OnePost from "@/components/OnePost.vue";
export default {
  components: { OnePost },
  name: "Post",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
  computed: {
    post() {
      const id = this.$route.params.id;
      let post = this.$store.getters.getPostById(+id);
      return post;
    },
  },
  methods: {
    incrementLike(){
      
    }
  }
};
</script>

<style lang="scss" scoped></style>
