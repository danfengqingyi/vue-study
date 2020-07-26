<template>
  <div class="about">
    <h1>This is an about Live page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const params = this.$route.params;
    const id = params.id;
    console.log("params", params);
    console.log("id", id);
    console.log("route", this.$route);
  }
};
</script>

<style></style>
