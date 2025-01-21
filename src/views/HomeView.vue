<template>
  <div>
    <AppHeader />

    <!-- FEATURES -->
    <section class="section bg-lightgray" id="features">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h2>Menjelajahi Kecamatan Plampang Dengan Teknologi Digital</h2>
              <span class="text-sm"
                >Website ini menyediakan informasi, layanan, dan berita terkini
                seputar Kecamatan Plampang.</span
              >
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row vertical-content features">
          <div class="col-sm-5">
            <div class="features-box">
              <div class="number">1</div>
              <h3>Profil Desa</h3>

              <p>
                Kecamatan Plampang adalah salah satu kecamatan di Kabupaten
                Sumbawa, Nusa Tenggara Barat, Indonesia. Terletak di bagian
                timur Kabupaten Sumbawa, kecamatan ini berjarak sekitar 63 km
                dari ibu kota kabupaten, Sumbawa Besar.
              </p>
            </div>
          </div>
          <!-- end col -->

          <div class="col-sm-6 offset-sm-1">
            <img src="images/mac.png" class="img-fluid" alt="img" />
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row vertical-content features">
          <div class="col-sm-4">
            <img src="images/watch-1.png" class="img-fluid" alt="img" />
          </div>
          <!-- end col -->

          <div class="col-sm-6 offset-sm-1">
            <div class="features-box">
              <div class="number">2</div>
              <h3>Sambutan Kepala Desa</h3>
              <p class="text-black font-weight-bold">
                Coming Soon
              </p>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end FEATURES -->
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    AppHeader,
  },
};
</script> 
