<template>
  <div>
    <router-view />
    <play-controller></play-controller>
  </div>
</template>
<script>
import playController from "@/components/playController.vue";
import store from "@/store/index.js";

export default {
  components: {
    playController,
  },
  
  // mounted() {
  //   a = JSON.parse(localStorage.userData);
  //   if (a) {
  //     let userData = a;
  //     this.$store.commit("setUser", userData);
  //   }
  // },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
