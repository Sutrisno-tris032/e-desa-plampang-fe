<template>
  <div>
    <header id="header" class="header d-flex align-items-center sticky-top">
      <div class="container position-relative d-flex align-items-center">
        <a href="index.html" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1 class="sitename">Plampang</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" class="navmenu">
          <ul>
            <li><router-link to="/" exact-active-class="active">Home</router-link></li>
            <li><a href="#hero">Profil Desa</a></li>
            <li class="dropdown">
              <a href="about.html"
                ><span>Layanan Desa</span>
                <i class="bi bi-chevron-down toggle-dropdown"></i
              ></a>
              <ul>
                <li><a href="team.html">Pengajuan</a></li>
                <li>
                  <a href="testimonials.html">Informasi Layanan Public</a>
                </li>
              </ul>
            </li>
            <li><router-link to="/berita" exact-active-class="active">Berita</router-link></li>
            <li><a href="portfolio.html">Galeri</a></li>
            <li><a href="contact.html">APBDes</a></li>
            <li><a href="contact.html">Kontak</a></li>
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <!-- <div class="header-social-links">
          <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>