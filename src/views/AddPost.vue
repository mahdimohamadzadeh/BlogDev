<template>
  <div>
    <FormPost @sendPost="sendPost" btnText="پست"  header-text="اضافه کردن پست"/>
  </div>
</template>

<script>
import FormPost from "../components/FormPost.vue";
export default {
  components: { FormPost },
  methods: {
    sendPost(post) {
      this.$store.dispatch("addPost", post);
    },
  },
};
</script>

<style lang="scss" scoped></style>
