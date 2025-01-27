<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>

<style>
</style>
