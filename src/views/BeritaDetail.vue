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

          <!-- Blog Comments Section -->
          <section id="blog-comments" class="blog-comments section">
            <div class="container">
              <h4 class="comments-count">{{ commentCount }} Komentar</h4>

              <div
                id="comment"
                class="comment"
                v-for="comment in comments"
                :key="comment.id"
              >
                <div class="d-flex">
                  <div class="comment-img">
                    <img
                      class="border rounded-circle"
                      src="/assets/img/blog/comments-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>
                      <span class="p-1">{{ comment.author_name }}</span>
                    </h5>
                    <time datetime="{{ formatDate(comment.created_at) }}">
                      {{ formatDate(comment.created_at) }}
                    </time>
                    <p>
                      {{ comment.commentar }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- End comment #1 -->
            </div>
          </section>
          <!-- /Blog Comments Section -->

          <!-- Comment Form Section -->
          <section id="comment-form" class="comment-form section">
            <div class="container">
              <form action="" @submit.prevent="postComment">
                <h4>Post Comment</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      v-model="name"
                      name="name"
                      type="text"
                      class="form-control"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      v-model="email"
                      name="email"
                      type="text"
                      class="form-control"
                      placeholder="Your Email*"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col form-group">
                    <textarea
                      v-model="comment"
                      name="comment"
                      class="form-control"
                      placeholder="Your Comment*"
                    ></textarea>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
                    {{ loading ? "Submitting..." : "Post Comment" }}
                  </button>
                </div>
              </form>
            </div>
          </section>
          <!-- /Comment Form Section -->
        </div>

        <div class="col-lg-4 sidebar">
          <div class="widgets-container">
            <!-- Search Widget -->
            <div class="search-widget widget-item">
              <h3 class="widget-title">Search</h3>
              <form @submit.prevent="searchNews">
                <input type="text" v-model="searchQuery" />
                <button type="submit" title="Search">
                  <i class="bi bi-search"></i>
                </button>
              </form>
            </div>
            <!--/Search Widget -->

            <!-- Recent Posts Widget -->
            <div class="recent-posts-widget widget-item">
              <h3 class="widget-title">Recent Posts</h3>

              <div class="post-item" v-for="post in recentPosts" :key="post.id">
                <h4>
                  <router-link
                    :to="{
                      name: 'berita_detail',
                      params: { id: post.id },
                    }"
                  >
                    {{ post.news_title }}
                  </router-link>
                </h4>
                <time datetime="2020-01-01">{{
                  formatDate(post.created_at)
                }}</time>
              </div>
              <!-- End recent post item-->
            </div>
            <!--/Recent Posts Widget -->

            <!-- Tags Widget -->
            <div class="tags-widget widget-item">
              <h3 class="widget-title">Tags</h3>
              <ul>
                <li><a href="#">App</a></li>
                <li><a href="#">IT</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Creative</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Smart</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>
            <!--/Tags Widget -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import AppPageTitle from "@/components/AppPageTitle.vue";

export default {
  name: "BeritaDetail",
  components: {
    AppPageTitle,
  },
  data() {
    return {
      news: {}, // Data berita detail
      comments: [], // List komentar
      commentCount: '', // Total komentar
      recentPosts: [], // Postingan terbaru atau hasil pencarian
      searchQuery: "", // Input pencarian
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
    async searchNews() {
      if (this.searchQuery.trim()) {
        console.log(this.searchQuery);
        try {
          const response = await axios.get("/recent_posts", {
            params: {
              search: this.searchQuery.trim(), // Kirim query pencarian
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
      try {
        const response = await axios.post(`/comment`, {
          news_id: this.$route.params.id,
          comment: this.comment,
          author_email: this.email,
          author_name: this.name,
        });

        if (response.data.success) {
          alert(response.data.message); // Tampilkan pesan sukses
          this.comments.push(response.data.data); // Tambahkan komentar baru ke daftar komentar
          this.commentCount += 1;
          this.clearForm();
        }
      } catch (error) {
        console.error("Gagal mengirim komentar:", error);
        alert(error.response?.data?.message || "Terjadi kesalahan!");
        this.clearForm();
      }
    },

    // Format tanggal menggunakan dayjs
    formatDate(dateString) {
      return dayjs(dateString).locale("id").format("dddd, D MMMM YYYY");
    },

    clearForm() {
      this.comment = "";
      this.email = "";
      this.name = ""; 
    }
  },
};
</script>

