<template>
  <div id="app">
    <img src="@/assets/images/bg-top.svg" class="bg-top" />
    <Header />
    <img src="@/assets/images/bg-bottom.svg" class="bg-bottom" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

#app {
  position: relative;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  background-image: linear-gradient(#f7f7ff, #f6f6ff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.bg-top,
.bg-bottom {
  position: absolute;
}

.bg-top {
  top: -1rem;
  right: -13rem;
}

.bg-bottom {
  display: none;
}

/* Media Queries */
@media (min-width: 990px) {
  .bg-top {
    top: 0;
    right: 0;
  }

  .bg-bottom {
    display: block;
    bottom: 0;
    left: 0;
  }
}
</style>
