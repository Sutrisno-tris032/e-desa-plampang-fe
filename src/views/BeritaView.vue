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
          <section id="blog-pagination" class="blog-pagination section">
            <div class="container">
              <div class="d-flex justify-content-center">
                <ul>
                  <li>
                    <a
                      href=""
                      @click.prevent="changePage(pagination.current_page - 1)"
                      :class="{ disabled: pagination.current_page == 1 }"
                      ><i class="bi bi-chevron-left"></i
                    ></a>
                  </li>
                  <li v-for="page in pagination.links" :key="page">
                    <a
                      href=""
                      :class="{ active: page.active }"
                      v-if="!isNaN(page.label)"
                      @click.prevent="
                        changePage((pagination.current_page = page.label))
                      "
                      >{{ page.label }}</a
                    >
                  </li>
                  <li>
                    <a
                      href=""
                      @click.prevent="changePage(pagination.current_page + 1)"
                      :class="{
                        disabled:
                          pagination.current_page == pagination.last_page,
                      }"
                      ><i class="bi bi-chevron-right"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <!-- /Blog Pagination Section -->
        </div>

        <div class="col-lg-4 sidebar">
          <div class="widgets-container">
            <!-- Recent Posts Widget -->
            <div class="recent-posts-widget widget-item">
              <h3 class="widget-title">Recent Posts</h3>

              <div class="post-item">
                <h4>
                  <a href="blog-details.html"
                    >Nihil blanditiis at in nihil autem</a
                  >
                </h4>
                <time datetime="2020-01-01">Jan 1, 2020</time>
              </div>
              <!-- End recent post item-->

              <div class="post-item">
                <h4><a href="blog-details.html">Quidem autem et impedit</a></h4>
                <time datetime="2020-01-01">Jan 1, 2020</time>
              </div>
              <!-- End recent post item-->

              <div class="post-item">
                <h4>
                  <a href="blog-details.html"
                    >Id quia et et ut maxime similique occaecati ut</a
                  >
                </h4>
                <time datetime="2020-01-01">Jan 1, 2020</time>
              </div>
              <!-- End recent post item-->

              <div class="post-item">
                <h4>
                  <a href="blog-details.html"
                    >Laborum corporis quo dara net para</a
                  >
                </h4>
                <time datetime="2020-01-01">Jan 1, 2020</time>
              </div>
              <!-- End recent post item-->

              <div class="post-item">
                <h4>
                  <a href="blog-details.html"
                    >Et dolores corrupti quae illo quod dolor</a
                  >
                </h4>
                <time datetime="2020-01-01">Jan 1, 2020</time>
              </div>
              <!-- End recent post item-->
            </div>
            <!--/Recent Posts Widget -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageTitle from "@/components/AppPageTitle.vue";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/id";

export default {
  name: "BeritaView",
  components: {
    AppPageTitle,
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
    };
  },
  mounted() {
    this.getNews();
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
