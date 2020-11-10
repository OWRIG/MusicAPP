<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="btn">+收藏{{ changeValue(playlist.subscribedCount) }}</div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="left">
          <div class="index">{{ i + 1 }}</div>
          <div class="content" @click="setplayIndex(i)">
            <div class="title">{{ item.name }}</div>
            <div class="author">
              <span
                class="tag"
                v-for="(tag, index) in playlist.tags"
                :key="index"
                >{{ tag }}</span
              >
              <span> {{ item.al.name }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <svg class="icon play" aria-hidden="true" @click="setplayIndex(i)">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon list" aria-hidden="true">
            <use xlink:href="#icon-Group-"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["playlist"],
  methods: {
    changeValue: function (num) {
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
    },
    ...mapMutations(["setplayIndex"]),
  },
};
</script>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-top: 0.25rem;
  .playlist-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
      }
      .title {
        font-size: 0.35rem;
        font-weight: 900;
      }
      .num {
        font-size: 0.28rem;
        color: #ccc;
      }
      .text {
        display: flex;
        align-items: center;
        margin-left: 0.2rem;
      }
    }
    .btn {
      font-size: 0.3rem;
      color: #fff;
      background-color: orangered;
      line-height: 0.6rem;
      padding: 0 0.1rem;
      border-radius: 0.4rem;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      margin: 0.1rem;
      .left {
        display: flex;
        align-items: center;
        color: #666;
        .index {
          width: 0.3rem;
        }
        .content {
          margin-left: 0.4rem;
        }
        .title {
          font-size: 0.3rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 0.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .tag {
          font-size: 0.2rem;
          color: orangered;
          border: 1px solid orangered;
          padding: 0 0.05rem;
          margin-right: 0.1rem;
        }
        .author {
          margin: 0 0.05rem;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .right {
        display: flex;
        flex-direction: row;
        .icon {
          width: 0.4rem;
          height: 0.4rem;
          margin: 0 0.15rem;
        }
      }
    }
  }
}
</style>