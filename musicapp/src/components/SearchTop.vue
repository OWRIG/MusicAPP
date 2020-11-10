<template>
  <div>
    <div class="searchTop">
      <div class="searchTopNav">
        <div class="back" @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibiaoti39"></use>
          </svg>
        </div>
        <div class="right">
          <input
            type="text"
            v-model="searchKeyWord"
            :placeholder="placeholder"
            @keydown.enter="saveKeyWord"
          />
        </div>
      </div>
      <div class="history" v-show="searchSongs.length == 0">
        <div class="hisLeft">历史</div>
        <div class="hisRight">
          <div @click="historySearch(item)" class="keywordItem" v-for="(item, i) in keywordList" :key="i">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div class="searchSongs" v-show="searchSongs.length !== 0">
      <div class="searchSongs-top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <div class="text">
            <div class="title">播放全部</div>
            <!-- <div class="num">(共{{ searchSongs.length }}首)</div> -->
          </div>
        </div>
      </div>
      <div class="list">
        <div class="playItem" v-for="(item, i) in searchSongs" :key="i">
          <div class="left">
            <div class="index">{{ i + 1 }}</div>
            <div class="content" @click="setplayIndex(i)">
              <div class="title">{{ item.name }}</div>
              <div class="author">
                <span
                  class="tag"
                  v-for="(tag, index) in searchSongs.tags"
                  :key="index"
                  >{{ tag }}</span
                >
                <span> {{ item.album.name }}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <svg class="icon play" aria-hidden="true" @click="setPlay(item,i)">
              <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon list" aria-hidden="true">
              <use xlink:href="#icon-Group-"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api, { searchMusic } from "../api/index";
import store from '../store/index'
export default {
  data() {
    return {
      placeholder: "陈奕迅",
      keywordList: [],
      searchKeyWord: "",
      searchSongs: [],
    };
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList
      ? JSON.parse(localStorage.keywordList)
      : [];
  },
  methods: {
    saveKeyWord: async function () {
      this.keywordList.push(this.searchKeyWord);
      this.keywordList = Array.from(new Set(this.keywordList));
      let len = this.keywordList.length;
      if (len > 10) {
        this.keywordList = this.keywordList.slice(len - 10, len);
      }
      localStorage.keywordList = JSON.stringify(this.keywordList);
      let result = await searchMusic(this.searchKeyWord);
      this.searchSongs = result.data.result.songs;
      console.log(result);
    },
    historySearch(keyword){
      this.searchKeyWord = keyword
      this.saveKeyWord()
    },
    setPlay(item,i){
      item.al = item.album
      item.al.picUrl = item.album.artist.img1v1Url
      this.$store.commit('pushplaylist',item)
      this.$store.commit('setplayIndex',this.$store.state.playlist.length-1)
    }
  },
};
</script>
<style lang="less" scoped>
.searchTop {
  width: 7.5rem;
  padding: 0 0.4rem;
  .searchTopNav {
    align-items: center;
    display: flex;
    height: 1.2rem;
    width: 100%;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .right {
      padding: 0 0 0 0.3rem;
      flex: 1;
      input {
        font-size: 0.35rem;
        width: 100%;
        height: 0.6rem;
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
      }
    }
  }
  .history {
    display: flex;
    .hisLeft {
      width: 1.2rem;
      height: 0.8rem;
      font-weight: 900;
      margin: 0.2rem 0;
      line-height: 0.8rem;
    }
    .hisRight {
      color: #666;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .keywordItem {
        background-color: #eee;
        height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        line-height: 0.6rem;
        margin: 0.1rem 0.1rem;
      }
    }
  }
}

.searchSongs {
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: #fff;
  .searchSongs-top {
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