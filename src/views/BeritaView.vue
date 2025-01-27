<template>
  <div class="main">
    <AppPageTitle title="Berita" />

    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- Blog Posts Section -->
          <section id="blog-post" class="section">
            <div class="container">
              <div class="row gy-4">
                <div class="col-lg-12" v-for="news in newsList" :key="news.id">
                  <article class="position-relative">
                    <div class="row gy-4">
                      <div class="col-md-4">
                        <div class="post-img position-relative overflow-hidden">
                          <img
                            src="assets/img/blog/blog-1.jpg"
                            class="img-fluid"
                            alt=""
                          />
                          <!-- <span class="post-date">December 12</span> -->
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="post-content d-flex flex-column">
                          <h3 class="post-title">
                            <router-link
                              :to="{
                                name: 'berita_detail',
                                params: { id: news.id },
                              }"
                            >
                              {{ news.news_title }}
                            </router-link>
                          </h3>
                          <p>
                            {{ news.news_tag }}
                          </p>
                          <div class="meta d-flex align-items-center">
                            <div class="d-flex align-items-center">
                              <i class="bi bi-folder2"></i>
                              <span class="ps-2">{{ news.category_name }}</span>
                            </div>
                            <span class="px-2 text-black-50"></span>
                            <div class="d-flex align-items-center">
                              <i class="bi bi-person"></i>
                              <span class="ps-2">{{ news.author }}</span>
                            </div>
                            <span class="px-2 text-black-50"></span>
                            <div class="d-flex align-items-center">
                              <i class="bi bi-calendar"></i>
                              <span class="ps-2">{{
                                formatDate(news.created_at)
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <hr style="margin-bottom: -1px" />
                </div>
              </div>
            </div>
          </section>
          <!-- /Blog Posts Section -->

          <!-- Blog Pagination Section -->
          <AppPagination :pagination="pagination" @change-page="changePage" />
          <!-- /Blog Pagination Section -->
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
import "dayjs/locale/id";

import AppRecentPost from "@/components/AppRecentPost.vue";
import AppPagination from "@/components/AppPagination.vue";
import AppPageTitle from "@/components/AppPageTitle.vue";

export default {
  name: "BeritaView",
  components: {
    AppPageTitle,
    AppRecentPost,
    AppPagination
  },

  data() {
    return {
      newsList: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 5,
        total: 0,
        links: [],
      },
      recentPosts: [],
    };
  },
  mounted() {
    this.getNews();
    this.getRecentPosts();
  },
  methods: {
    async getNews(page = 1) {
      try {
        const response = await axios.get("/news?page=" + page);
        this.newsList = response.data.data;
        this.pagination = {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
          per_page: response.data.per_page,
          total: response.data.total,
          links: response.data.links,
        };
      } catch (error) {
        console.error("terjadi kesalahan saat get data", error);
      }
    },

    formatDate(dateString) {
      return dayjs(dateString).locale("id").format("dddd, D MMMM YYYY");
    },

    changePage(page) {
      if (page > 0 && page <= this.pagination.last_page) {
        this.getNews(page);
      }
    },

    async getRecentPosts() {
      try {
        const response = await axios.get("/recent_posts");
        this.recentPosts = response.data;
      } catch (error) {
        console.error("Gagal mengambil postingan terbaru:", error.message);
        this.recentPosts = [];
      }
    },

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
  },
};
</script>

<style>
.article_date {
  font-size: 12px;
  display: inline-block;
}
.article_title {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 10px;
}

.article_title_medium {
  font-size: 26px;
  line-height: 1.3;
}

.article__list__title {
}
</style>
