<template>
  <div class="main">
    <AppCaraosel />

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-7 about-img">
            <img class="border rounded-3" src="assets/img/jaran-pusang.jpg" />
          </div>

          <div class="col-lg-7">
            <h2 class="inner-title">Potret Desa Plampang, Alam & Budaya</h2>
            <div class="our-story rounded-3">
              <h4>Est 1950</h4>
              <h3>Tentang Desa Plampang</h3>
              <p>
                Desa Plampang adalah sebuah desa yang terletak di Kecamatan
                Plampang, Kabupaten Sumbawa, Nusa Tenggara Barat. Desa ini
                dikenal sebagai salah satu pusat agraris dengan pemandangan alam
                yang indah dan masyarakat yang ramah. Sejak didirikan, Desa
                Plampang menjadi rumah bagi keberagaman budaya dan tradisi yang
                masih terjaga hingga saat ini.
              </p>
              <p>
                Visi: "Mewujudkan Desa Plampang yang Mandiri, Berdaya Saing, dan
                Berkelanjutan."
              </p>
              <p>Misi:</p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span
                    >Mengembangkan potensi ekonomi lokal, terutama pertanian dan
                    perikanan.</span
                  >
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span>Melestarikan budaya lokal dan tradisi adat.</span>
                </li>
                <li>
                  <i class="bi bi-check-circle"></i>
                  <span
                    >Meningkatkan kualitas layanan desa melalui digitalisasi dan
                    inovasi.</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->

    <!-- Services Section -->
    <section id="services" class="services section light-background">
      <div class="container section-title">
        <h2>Wisata & Budaya</h2>
      </div>
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="team-member">
              <div class="member-img">
                <img
                  src="assets/img/jaran-pusang.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="team-member">
              <div class="member-img">
                <img
                  src="assets/img/jaran-pusang.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="team-member">
              <div class="member-img">
                <img
                  src="assets/img/jaran-pusang.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="team-member">
              <div class="member-img">
                <img
                  src="assets/img/jaran-pusang.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="team-member">
              <div class="member-img">
                <img
                  src="assets/img/jaran-pusang.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Services Section -->

    <!-- Location Section -->
    <section id="location" class="location section">
      <div class="container section-title">
        <h2>Lokasi Geografis Desa</h2>
      </div>
      <div class="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.882774657895!2d117.77572907579605!3d-8.797082691255255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcb07d83c05741d%3A0xc8ac1418fafc7f71!2sKantor%20Desa%20Plampang!5e0!3m2!1sid!2sid!4v1737914071815!5m2!1sid!2sid"
          width="100%"
          height="550"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <!-- /Location Section -->
  </div>
</template>

<script>
import AppCaraosel from "@/components/AppCaraosel.vue";

export default {
  name: "HomeView",
  components: {
    AppCaraosel,
  },
};
</script> 
