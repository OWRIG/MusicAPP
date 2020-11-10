<template>
  <div class="listViewTop">
    <img :src="playlist.coverImgUrl" alt="" class="bg" />
    <div class="listViewTopNav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrowLeft"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true" @click="$router.push('/searchview')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon list" aria-hidden="true">
          <use xlink:href="#icon-Group-"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" alt="" class="contentBg" />
        <span>{{ changeValue(playlist.playCount) }}</span>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <span>{{ changeValue(playlist.commentCount) }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ changeValue(playlist.shareCount) }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
};
</script>
<style lang="less" scoped>
.listViewTop {
  width: 7.5rem;
  padding: 0 0.4rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(35px);
  }
  .listViewTopNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    font-size: 0.3rem;
    .icon {
      width: 0.5rem;
      height: 0.4rem;
      fill: #fff;
    }
    .title {
      margin-left: 0.35rem;
    }
    .search {
      margin-right: 0.4rem;
    }
  }
  .back,
  .right {
    display: flex;
    color: #fff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    .contentLeft {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.15rem;
      }
      span {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        color: #fff;
        font-size: 0.24rem;
      }
    }
    .contentRight {
      width: 3.5rem;
      h3 {
        color: #fff;
        font-size: 0.35rem;
      }
      .author {
        margin: 0.2rem 0;
        display: flex;
        align-items: center;
        img.header {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
        span {
          color: #ccc;
          font-size: 0.28rem;
        }
      }
      .description {
        color: rgb(255, 255, 255);
        font-size: 0.26rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.iconList {
  display: flex;
  justify-content: space-around;

  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 0.7rem;
      height: 0.7rem;
      fill: #fff;
    }
    span {
      font-size: 0.3rem;
      color: #fff;
      padding-top: 0.1rem;
    }
  }
}
</style>