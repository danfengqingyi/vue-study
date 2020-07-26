<template>
  <div class="about">
    <div id="nav">
      <router-link to="/about/job/2">Job</router-link> |
      <router-link to="/about/live">Live</router-link>
    </div>
    <button @click="navToLive">跳转</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const params = this.$route.params;
    console.log("params", params);
    console.log("route", this.$route);
  },
  methods: {
    navToLive() {
      this.$router.push({ name: "live", params: { id: "123" } });
    }
  }
};
</script>

<style></style>
