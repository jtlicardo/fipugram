<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <instagram-card></instagram-card>
      <instagram-card></instagram-card>
      <instagram-card></instagram-card>
    </div>
    <div class="col-3">
      <h2>Stories</h2>
      <instagram-story></instagram-story>
      <instagram-story></instagram-story>
      <instagram-story></instagram-story>
      <hr />
      <h2>Suggestions</h2>
      <instagram-suggestion></instagram-suggestion>
      <instagram-suggestion></instagram-suggestion>
      <instagram-suggestion></instagram-suggestion>
      <instagram-suggestion></instagram-suggestion>
    </div>
  </div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue"
import InstagramStory from "@/components/InstagramStory.vue"
import InstagramSuggestion from "@/components/InstagramSuggestion.vue"

export default {
  name: "Home",
  components: {
    InstagramCard,
    InstagramStory,
    InstagramSuggestion,
  },
}
</script>

<style scoped>
h1 {
  font-family: "Billabong", sans-serif;
}
</style>
