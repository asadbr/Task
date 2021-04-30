<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <transition name="fade">
        <router-view :key="$route.fullPath" />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import Navbar from "./components/navbar/Navbar";
export default {
  components: { Navbar },
};
</script>
