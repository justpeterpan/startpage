const app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
  computed: {
    getTime() {
      return new Date().toDateString();
    },
  },
});
