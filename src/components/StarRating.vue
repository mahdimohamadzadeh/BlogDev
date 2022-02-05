<template>
  <div>
    <star-rating
      :read-only="true"
      :rating="rate"
      :increment="0.5"
      :show-rating="true"
      text-class="text-dark-blue text-xl mt-2"
      :rtl="true"
      :clearable="true"
      :star-size="22"
      inactive-color="#DAF7F1"
      border-color="#08786E"
      :border-width="1"
      :glow="5"
      glow-color="#DAF7F1"
    ></star-rating>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  props: ["idPost", "rate"],
  components: {
    StarRating,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
