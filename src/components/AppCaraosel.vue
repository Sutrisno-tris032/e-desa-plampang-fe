<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background">
    <div
      id="hero-carousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div class="carousel-item active">
        <img src="assets/img/hero-carousel/SuBesarPalace.jpg" alt="" />
        <!-- <img src="assets/img/hero-carousel/pegadaian-Empang-edit.jpg" alt="" /> -->
        <div class="container">
          <h2>Menelusuri Keindahan dan Kekayaan Budaya Desa Plampang</h2>
          <p>
            "Desa Plampang menyimpan kekayaan budaya yang tak ternilai, termasuk
            rumah adat khas yang menjadi simbol warisan leluhur. Rumah adat ini
            bukan hanya cerminan seni arsitektur tradisional, tetapi juga
            menjadi saksi sejarah dan identitas masyarakat Desa Plampang. Mari
            jelajahi lebih jauh budaya dan tradisi yang kami jaga dengan
            bangga."
          </p>
          <!-- <a href="about.html" class="btn-get-started">Read More</a> -->
        </div>
      </div>
      <!-- End Carousel Item -->
      class="carousel-control-next" href="#hero-carousel" role="button"
      data-bs-slide="next" >
      <span
        class="carousel-control-next-icon bi bi-chevron-right"
        aria-hidden="true"
      ></span>
    </div>
  </section>
  <!-- /Hero Section -->
</template>

<script>
export default {
  name: "AppCaraosel",
};
</script>

<style>
</style>