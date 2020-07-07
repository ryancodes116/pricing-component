<template>
  <div class="cards container">
    <Card v-for="pricing in allPricing" :key="pricing.id" :pricing="pricing" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";

export default {
  name: "Cards",
  components: {
    Card
  },
  computed: mapGetters(["allPricing"])
};
</script>

<style>
.cards {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>