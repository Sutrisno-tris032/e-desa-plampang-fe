<template>
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
</template>
<script>
import dayjs from "dayjs";

export default {
  name: "AppCommentary",
  props:["comments"],
  methods: {
    formatDate(dateString) {
      return dayjs(dateString).locale("id").format("dddd, D MMMM YYYY");
    },
  },
};
</script>
