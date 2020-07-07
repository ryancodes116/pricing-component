<template>
  <div class="card container" :class="{ middleCard: pricing.id === 2 }">
    <div class="card-content">
      <p class="title" :class="{ middleTitle: pricing.id === 2 }">{{ pricing.title }}</p>
      <h1 class="price" :class="{ middlePrice: pricing.id === 2 }">{{pricing.price}}</h1>
      <hr />
      <div v-for="features in pricing.features" :key="pricing.id">
        <p class="feature" :class="{ middleFeature: pricing.id === 2 }">{{features}}</p>
        <hr :class="{ middleLine: pricing.id === 2 }" />
      </div>
      <button class="btn" :class="{ middleBtn: pricing.id === 2 }">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  props: {
    pricing: Object
  }
};
</script>

<style scoped>
.card {
  text-align: center;
  margin-bottom: 2.5rem;
  width: 100%;
  background-color: #fff;
  border-radius: 0.6rem;
  padding: 2.5rem 0;
}

.middleCard {
  background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  color: #fff;
}

.card-content {
  width: 85%;
  margin: 0 auto;
}

.title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.middleTitle {
  color: #fff;
}

.price {
  color: hsl(232, 13%, 33%);
  font-size: 4rem;
  margin-bottom: 2rem;
}

.middlePrice {
  color: #fff;
}

hr {
  border-color: hsl(240, 78%, 98%);
}

.middleLine {
  border-color: #fff;
}

.feature {
  color: hsl(233, 13%, 49%);
  font-weight: 700;
  margin: 1.2rem 0;
}

.middleFeature {
  color: #fff;
}

.btn {
  margin-top: 2rem;
  width: 100%;
  color: #fff;
  background-image: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border: none;
  padding: 1rem 0;
  text-transform: uppercase;
  border-radius: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
  cursor: pointer;
}

.middleBtn {
  color: hsl(237, 63%, 64%);
  background-image: none;
  background-color: #fff;
}

.btn:hover {
  opacity: 0.9;
}
</style>