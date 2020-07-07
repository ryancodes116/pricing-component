<template>
  <div class="header">
    <div class="header-content container">
      <h1 class="title">Our Pricing</h1>
      <div class="toggleWrapper">
        <p class="annually">Annually</p>
        <!-- Toggle Button -->
        <label class="switch">
          <input @change="handleToggle" type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p class="monthly">Monthly</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleToggle: () => {
      console.log("toggled!");
    }
  }
};
</script>

<style>
.header {
  z-index: 1;
  text-align: center;
  margin-bottom: 5rem;
}

.title {
  color: hsl(233, 13%, 49%);
  letter-spacing: 0.04rem;
  margin-bottom: 2.5rem;
}

.toggleWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggleWrapper p {
  color: hsl(234, 14%, 74%);
  font-weight: 700;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 2rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-image: linear-gradient(
    0.25turn,
    hsl(236, 72%, 79%),
    hsl(237, 63%, 64%)
  );
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>