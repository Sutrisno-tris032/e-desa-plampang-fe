<template>
  <!-- Comment Form Section -->
  <section id="comment-form" class="comment-form section">
    <div class="container">
      <form action="" @submit.prevent="postComment">
        <h4>Post Comment</h4>
        <p>
          Your email address will not be published. Required fields are marked *
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
</template>

<script>
export default {
  name: "AppCommentForm",
  // props: ["loading"],
  data() {
    return {
      name: "",
      email: "",
      comment: "",
    };
  },

  methods: {
    postComment() {
      this.$emit("submit", {
        name: this.name,
        email: this.email,
        comment: this.comment,
      });
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.email = "";
      this.comment = "";
    },
  },
};
</script>