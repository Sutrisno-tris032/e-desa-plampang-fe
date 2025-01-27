<template>
  <div class="widgets-container">
    <!-- Search Widget -->
    <div class="search-widget widget-item">
      <h3 class="widget-title">Search</h3>
      <form @submit.prevent="onSearch">
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
        <time datetime="2020-01-01">{{ formatDate(post.created_at) }}</time>
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
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "AppRecentPost",
  props: ["recentPosts"],
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearch() {
      console.log("Emitting search event with query:", this.searchQuery);
      this.$emit("search", this.searchQuery);
    },
    formatDate(date) {
      return dayjs(date).locale("id").format("dddd, D MMMM YYYY");
    },
  },
};
</script>