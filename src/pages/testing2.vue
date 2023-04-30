<template>
  <div >
    <button :class="{ 'blue-bg': isBlue }" @click="toggleColor">Toggle Color</button>
    <!-- your content here -->
  </div>
</template>

<style>
.blue-bg {
  background-color: blue;
}
</style>

<script>
export default {
  data() {
    return {
      isBlue: true, // initial value of the color
    };
  },
  methods: {
    toggleColor() {
      this.isBlue = !this.isBlue; // toggle the value of the color
    },
  },
};
</script>