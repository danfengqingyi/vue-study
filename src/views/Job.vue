<template>
  <div class="about">
    <h1>This is an about Job page</h1>
  </div>
</template>
<script>
import * as storage from "../utils/storage";
export default {
  data() {
    return {};
  },
  watch: {
    $route: function(newVal, oldVal) {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
    }
  },
  mounted() {
    const params = this.$route.params;
    console.log("params", params);
    console.log("route", this.$route);
    console.log("storage", storage.getItemBySessionStorage("session"));
  }
};
</script>

<style></style>
