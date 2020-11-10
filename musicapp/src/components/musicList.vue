<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <div class="swiper-container" id="musicListindex">
        <div class="swiper-wrapper">
          <router-link
            :to="{ path: '/listview', query: { id: item.id } }"
            class="swiper-slide"
            v-for="(item, i) in state.musicList"
            :key="i"
          >
            <img :src="item.picUrl" alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-"></use>
              </svg>
              <span>{{ changeValue(item.playCount) }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import axios from "axios";
import { getMusicList } from "@/api/index";
import { reactive, onMounted, onUpdated } from "vue";
import store from "@/store/index.js";

/*
export default {
  data() {
    return {
      musicList: [],
    };
  },
  methods:{
      changeValue:function(num){
          let res = 0
          if(num >= 100000000){
              res = num/100000000
              res = res.toFixed(2) + '亿'

          }else if(num>10000){
              res = num/10000
              res = res.toFixed(2) + '万'
          }else {
              res = num
          }
          return res
      }
  },
  mounted: async function () {
    let result = await getMusicList();
    this.musicList = result.data.result;
  },
  updated() {
    var swiper = new Swiper("#musicListindex", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      spaceBetween: 10,
    });
  },
};

*/
export default {
  setup() {
    let state = reactive({ musicList: [] });
    function changeValue(num) {
      let res = 0;
      if (num >= 100000000) {
        res = num / 100000000;
        res = res.toFixed(2) + "亿";
      } else if (num > 10000) {
        res = num / 10000;
        res = res.toFixed(2) + "万";
      } else {
        res = num;
      }
      return res;
    }
    onMounted(async () => {
      let result = await getMusicList();
      state.musicList = result.data.result;
    });
    onUpdated(() => {
      var swiper = new Swiper("#musicListindex", {
        loop: true, // 循环模式选项
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      state,
      changeValue,
    };
  },
};
</script>

<style lang="less">
.musicList {
  width: 7.5rem;
  padding: 0 0.2rem;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    align-content: center;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      height: 0.5rem;
      width: 1.2rem;
      border: 1px solid rgb(213, 213, 213);
      border-radius: 0.2rem;
      font-size: 0.2rem;
      line-height: 0.5rem;
      text-align: center;
    }
  }
  .mlist {
    .swiper-container {
      width: 100%;
      height: 3rem;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          widows: 100%;
          height: auto;
          border-radius: 0.1rem;
        }
        .name {
          height: 0.6rem;
          width: 100%;
          font-size: 0.24rem;
          line-height: 0.4rem;
        }
        .count {
          position: absolute;
          right: 0.1rem;
          top: 0.08rem;
          font-size: 0.2rem;
          color: rgb(231, 231, 231);
          display: flex;
          align-items: center;
          .icon {
            fill: rgb(231, 231, 231);
          }
        }
      }
    }
  }
}
#musicListindex.swiper-container {
  width: 7.1rem;
  height: 3rem;
  border-radius: 0.15rem;
  .swiper-slide img {
    width: 100%;
  }
}
</style>
