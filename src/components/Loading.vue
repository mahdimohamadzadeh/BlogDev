<template>
  <div class="vld-parent">
    <loading
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      background-color="#F1FEF5"
      :active="this.$store.state.posts.isLoading"
      color="#28F100"
      loader="dots"
      :lock-scroll="true"
      :height="150"
      :width="150"
    />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {
    onCancel() {
      this.$router.push({ path: "/" });
      this.$store.state.posts.isLoading = false;
    },
  },
};
</script>
