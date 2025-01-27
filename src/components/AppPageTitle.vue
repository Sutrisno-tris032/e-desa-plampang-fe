<template>
  <!-- Page Title -->
  <div class="page-title accent-background">
    <div class="container d-lg-flex justify-content-between align-items-center">
      <h1 class="mb-2 mb-lg-0">{{ title }}</h1>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li class="current">{{ title }}</li>
        </ol>
      </nav>
    </div>
  </div>
  <!-- End Page Title -->
</template>
<script>
export default {
  name: "AppPageTitle",
  props: {
    title: {
      type: String,
      default: "Page Title"
    }
  }
};
</script>