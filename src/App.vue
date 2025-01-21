<template>
  <router-view />
  <AppNavbar />
  <AppFooter />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

<style>
</style>
