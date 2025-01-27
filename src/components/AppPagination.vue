<template>
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
                changePage((page.current_page = page.label))
              "
              >{{ page.label }}</a
            >
          </li>
          <li>
            <a
              href=""
              @click.prevent="changePage(pagination.current_page + 1)"
              :class="{
                disabled: pagination.current_page == pagination.last_page,
              }"
              ><i class="bi bi-chevron-right"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- /Blog Pagination Section -->
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    pagination: Object
  },
  methods: {
    changePage(page) {
      if (page > 0 && page <= this.pagination.last_page) {
        this.$emit("changePage", page);
      }
    },
  },
};
</script>