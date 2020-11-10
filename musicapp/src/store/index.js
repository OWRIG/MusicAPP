import { createStore } from "vuex";
import axios from "axios";
import api from "../api/index";

export default createStore({
  state: {
    playlist: [
      {
        name: "Hi",
        id: 1378926217,
        al: {
          id: 80499323,
          name: "一直很安静",
          pic: 109951164224451900,
          picUrl:
            "http://p3.music.126.net/7eeOyFpQo1SQY4UpqNGnwA==/109951164224451906.jpg",
          pic_str: "109951164224451906",
        },
      },
    ],
    playCurrentIndex: 0,
    lyric: "",
    currentTime: 0,
    interval: 0,
    user: {
      isLogin: false,
      account: {},
      userDetail: {},
    },
  },
  getters: {
    lyricList: function(state) {
      let arr = state.lyric.split(/\n/gis).map((item, i) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 10));

        return {
          min,
          sec,
          mill,
          lyric: item.slice(11, item.length),
          item,
          time: mill + sec * 1000 + min * 60000,
        };
      });
      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time;
        }
      });
      return arr;
    },
  },
  mutations: {
    setplaylist: function(state, value) {
      state.playlist = value;
    },
    pushplaylist: function(state, value) {
      state.playlist.push(value);
    },
    setplayIndex(state, value) {
      state.playCurrentIndex = value;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async reqLyric(content, payload) {
      let result = await api.getLyric(payload.id);
      content.commit("setLyric", result.data.lrc.lyric);
      // console.log(result);
    },
    async phoneLogin(content, payload) {
      let result = await api.phoneLogin(payload.phone, payload.password);
      if (result.data.code == 200) {
        content.state.user.isLogin = true;
        content.state.user.account = result.data.account;
        // console.log(result);

        let userDetail = await api.userDetail(result.data.account.id);
        content.state.user.userDetail = userDetail.data;
        // console.log(content.state)
        // console.log(content.state.user.userDetail)
        // console.log(content.state.user)
        // a = JSON.stringify(content.state.user)
        // // console.log(a)
        // localStorage.userData = a
        // console.log( typeof localStorage.userData)
        // console.log(localStorage.userData);
        content.commit("setUser", content.state.user);
      }
      return result;
    },
  },
  modules: {},
});
