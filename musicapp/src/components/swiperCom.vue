<template>
  <div id="swiperCom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in imgs" :key="i">
          <img :src="item.pic" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
import { getBanner } from "@/api/index";

export default {
  data: function () {
    return {
      imgs: [
        { pic: require("../assets/cover1.jpg") },
        { pic: require("../assets/cover2.jpg") },
        { pic: require("../assets/cover3.jpg") },
      ],
    };
  },
  async mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });

    let res = await getBanner(1);
    this.imgs = res.data.banners;
  },
};
</script>

<style lang="less">
#swiperCom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 7.1rem;
    height: 2.75rem;
    border-radius: 0.15rem;
    .swiper-slide img {
      width: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
</style>
