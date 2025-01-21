<template>
  <div
    id="undefined-sticky-wrapper"
    class="sticky-wrapper is-sticky"
    style="height: 79px"
  >
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-custom sticky"
      style=""
    >
      <div class="container">
        <!-- LOGO -->
        <a class="navbar-brand logo text-uppercase" href="index.html">
          <img src="images/logo.png" alt="logo" height="24" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="ti-menu"></i>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto navbar-center" id="mySidenav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link" :class="{ active: $route.path === '/profile' }">Profile</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/info" class="nav-link" :class="{ active: $route.path === '/info' }">Info Grafis</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/berita" class="nav-link" :class="{ active: $route.path === '/berita' }">Berita</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pengaduan" class="nav-link" :class="{ active: $route.path === '/pengaduan' }">Pengaduan</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style>
</style>