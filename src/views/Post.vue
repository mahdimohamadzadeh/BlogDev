<template>
  <div>
    <div class="onePost" v-if="!edit">
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
        @showEdit="showEdit"
      />
    </div>
    <FormPost
      @closeForm="closeForm"
      @sendPostById="sendPostById"
      v-if="edit"
      btn-text="ویرایش"
      header-text="ادیت پست"
    />
  </div>
</template>

<script>
import OnePost from "@/components/OnePost.vue";
import FormPost from "../components/FormPost.vue";
export default {
  components: { OnePost, FormPost },
  emits:['sendPostById'],
  name: "Post",
  data() {
    return {
      edit: false,
    };
  },
  mounted() {
    this.$store.dispatch("getPosts");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  computed: {
    post() {
      const id = this.$route.params.id;
      let post = this.$store.getters.getPostById(+id);
      return post;
    },
  },
  methods: {
    sendPostById(post) {
      this.$store.dispatch("editPost", post);
    },
    showEdit() {
      this.edit = true;
    },
    closeForm() {
      this.edit = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
