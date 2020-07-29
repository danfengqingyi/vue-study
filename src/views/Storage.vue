<template>
  <div class="about">
    <button @click="setLocalStorage">setLocalStorage</button>
    <button @click="getLocalStorage">getLocalStorage</button>

    <button @click="setSessionStorage">setSessionStorage</button>
    <button @click="getSessionStorage">getSessionStorage</button>

    <button @click="setCookies">setCookies</button>
    <button @click="getCookies">getCookies</button>
  </div>
</template>
<script>
import * as storage from "../utils/storage";
export default {
  data() {
    return {};
  },
  mounted() {
    const params = this.$route.params;
    console.log("params", params);
    console.log("route", this.$route);
    console.log("storage", storage.getItemBySessionStorage("session"));
  },
  methods: {
    setLocalStorage() {
      storage.setItemByLocalStorage("local", "local");
    },
    getLocalStorage() {
      const local = storage.getItemByLocalStorage("local");
      console.log("local", local);
    },
    setSessionStorage() {
      storage.setItemBySessionStorage("session", "session");
    },
    getSessionStorage() {
      const session = storage.getItemBySessionStorage("session");
      console.log("session", session);
    },
    setCookies() {
      storage.setItemByCookies("cookies", "cookies");
    },
    getCookies() {
      const cookies = storage.getItemByCookies("cookies");
      console.log("cookies", cookies);
    }
  }
};
</script>

<style></style>
