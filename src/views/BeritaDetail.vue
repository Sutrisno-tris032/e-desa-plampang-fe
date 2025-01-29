<template>
  <div class="main">
    <AppPageTitle title="Detail Berita" />

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- Blog Details Section -->
          <section id="blog-details" class="blog-details section">
            <div class="container">
              <article class="article">
                <div class="post-img">
                  <img
                    src="/assets/img/blog/blog-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <h2 class="title">
                  {{ news.news_title }}
                </h2>

                <div class="meta-top">
                  <ul>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-person"></i>
                      <span class="ps-2">{{ news.author }}</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-clock"></i>
                      <span>
                        <time datetime="2020-01-01">
                          {{ formatDate(news.created_at) }}
                        </time>
                      </span>
                    </li>
                    <li class="d-flex align-items-center">
                      <i class="bi bi-folder2"></i>
                      <span class="ps-2">{{ news.category_name }}</span>
                    </li>
                  </ul>
                </div>
                <!-- End meta top -->

                <div class="content">
                  <p>
                    {{ news.news_description }}
                  </p>

                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut.
                      Deleniti sunt animi aut. Aut eos aliquam doloribus minus
                      autem quos.
                    </p>
                  </blockquote>
                </div>
                <!-- End post content -->
              </article>
            </div>
          </section>
          <!-- /Blog Details Section -->

          <!-- comment -->
          <AppCommentary :comments="comments" />
          <!-- comment end -->

          <!-- Comment Form Section -->
          <AppCommentForm  @submit="postComment" />
          <!-- /Comment Form Section -->
        </div>

        <div class="col-lg-4 sidebar">
          <AppRecentPost :recentPosts="recentPosts" @search="searchNews" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import AppPageTitle from "@/components/AppPageTitle.vue";

import AppCommentary from "@/components/AppCommentary.vue";
import AppCommentForm from "@/components/AppCommentForm.vue";
import AppRecentPost from "@/components/AppRecentPost.vue";

export default {
  name: "BeritaDetail",
  components: {
    AppPageTitle,
    AppCommentary,
    AppCommentForm,
    AppRecentPost
  },
  data() {
    return {
      news: {}, // Data berita detail
      comments: [], // List komentar
      commentCount: '', // Total komentar
      recentPosts: [], // Postingan terbaru atau hasil pencarian
    };
  },
  mounted() {
    // Ambil data saat komponen dimuat
    this.getNewsDetail();
    this.getCommentary();
    this.getRecentPosts();
  },
  methods: {
    // Ambil detail berita berdasarkan ID dari route params
    async getNewsDetail() {
      try {
        const response = await axios.get(`/news/${this.$route.params.id}`);
        this.news = response.data;
      } catch (error) {
        console.error("Gagal mengambil detail berita:", error.message);
        this.news = null;
      }
    },

    // Ambil komentar berdasarkan ID berita
    async getCommentary() {
      try {
        const response = await axios.get(
          `/news/${this.$route.params.id}/commentar`
        );
        this.comments = response.data;
        this.commentCount = this.comments.length;
      } catch (error) {
        console.error("Gagal mengambil komentar berita:", error.message);
        this.comments = [];
      }
    },

    // Ambil daftar postingan terbaru
    async getRecentPosts() {
      try {
        const response = await axios.get("/recent_posts");
        this.recentPosts = response.data;
      } catch (error) {
        console.error("Gagal mengambil postingan terbaru:", error.message);
        this.recentPosts = [];
      }
    },

    // Fungsi pencarian berita
    async searchNews(searchQuery) {
      if (searchQuery.trim()) {
        console.log(searchQuery);
        try {
          const response = await axios.get("/recent_posts", {
            params: {
              search: searchQuery.trim(), // Kirim query pencarian
            },
          });
          this.recentPosts = response.data; // Update recentPosts dengan hasil pencarian
          console.log("Hasil pencarian:", response.data);
        } catch (error) {
          console.error("Gagal melakukan pencarian berita:", error.message);
          this.recentPosts = []; // Kosongkan jika gagal
        }
      } else {
        // Jika input kosong, tampilkan kembali semua postingan terbaru
        this.getRecentPosts();
      }
    },

    async postComment() {
      // console.log(submit.name, submit.email, submit.comment);
      
      // try {
      //   const response = await axios.post(`/comment`, {
      //     news_id: this.$route.params.id,
      //     comment: comment,
      //     author_email: email,
      //     author_name: name,
      //   });

      //   if (response.data.success) {
      //     alert(response.data.message); // Tampilkan pesan sukses
      //     this.comments.push(response.data.data); // Tambahkan komentar baru ke daftar komentar
      //     this.commentCount += 1;
      //     this.clearForm();
      //   }
      // } catch (error) {
      //   console.error("Gagal mengirim komentar:", error);
      //   alert(error.response?.data?.message || "Terjadi kesalahan!");
      //   this.clearForm();
      // }
    },

    // Format tanggal menggunakan dayjs
    formatDate(dateString) {
      return dayjs(dateString).locale("id").format("dddd, D MMMM YYYY");
    },

    // clearForm() {
    //   this.comment = "";
    //   this.email = "";
    //   this.name = ""; 
    // }
  },
};
</script>

