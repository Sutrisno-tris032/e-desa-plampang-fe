<template>
  <!-- Comment Form Section -->
  <section id="comment-form" class="comment-form section">
    <div class="container">
      <form>
        <h4>Post Comment</h4>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div class="row">
          <div class="col-md-6 form-group">
            <input
              v-model="payload.name"
              name="name"
              type="text"
              class="form-control"
              placeholder="Your Name*"
            />
          </div>
          <div class="col-md-6 form-group">
            <input
              v-model="payload.email"
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
              v-model="payload.comment"
              name="comment"
              class="form-control"
              placeholder="Your Comment*"
            ></textarea>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary" @click="postComment">Post Comment</button>
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
      payload: { name: "", email: "", comment: "" },
    };
  },

  methods: {
    async postComment() {
      // console.log(this.payload);

      this.$emit("submit", this.payload ); // this.postComment(this.name, this.email, this.comment); // this.postComment(this.name, this.email, this.comment);
      this.clearForm();
    },
/**
 * Resets the form fields by clearing the name, email, and comment inputs.
 */

    clearForm() {
      this.payload.name = "";
      this.payload.email = "";
      this.payload.comment = "";
    },
  },
};
</script>