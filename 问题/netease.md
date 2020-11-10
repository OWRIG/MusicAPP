*斜体标题为已解决问题*

### *Vue路由实现页面跳转的两种方式*

https://www.cnblogs.com/Leophen/p/11265833.html

### *保证内容只有一行，剩余缩写*

保证musiclist和playcontroller播放状态的一致

### *vh、vw 和 %*
使用 width：100vw 而不是 width：100％是， 100％会使元素适合所有可用空间，视口宽度有一个特定的度量，在这种情况下是可用屏幕的宽度，包括文档边距。

如果设置style body {margin：0} ，100vw的行为应该与100％相同。

### *vuex中 this.$store.dispatch() 与 this.$store.commit()方法的区别*
https://blog.csdn.net/qq_34246965/article/details/107386391?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.pc_relevant_is_cache&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.pc_relevant_is_cache

### *关于走马灯总结*
https://www.cnblogs.com/feixiablog/p/10303928.html
https://www.cnblogs.com/tuyile006/archive/2007/03/28/691329.html

### *关于_ctx.$store.state.lyric.split is not a function的问题*
https://www.jianshu.com/p/c751c803cdd0
尝试join()失败，toString成功

后改类型为字符串

### 搜索界面的第一个历史记录无法正常跳转

未能解决

### 所有歌单只有三首歌，更换网络即可显示正确数目

不能理解

### 播放完一首歌会报错

![Snipaste_2020-11-10_00-00-39](..\问题\Snipaste_2020-11-10_00-00-39.png)

自动循环歌曲列表&&循环播放——尝试中

### createHashHistory无法正常使用

![Snipaste_2020-11-09_22-51-02](..\问题\Snipaste_2020-11-09_22-51-02.png)

#### Unexpected token u in JSON at position 0

![Snipaste_2020-11-09_22-42-05](..\问题\Snipaste_2020-11-09_22-42-05.png)

一开始出现过这个问题，刷新几次后就没有了，一直显示正常。但在部署过程中再次出现，并且无法显示正常界面。按提示说是json字符类型有问题，但是每个都用typeof试了一下并没有发现什么问题，强行用tostring等方法转换类型也无法修复。未能解决。

### 部署至github过程中不知为何的报错

![Snipaste_2020-11-07_19-30-58](..\问题\Snipaste_2020-11-07_19-30-58.png)

![Snipaste_2020-11-09_22-26-51](..\问题\Snipaste_2020-11-09_22-26-51.png)

### 正在尝试中的功能：

- 视频页
- 歌曲进度条
- 列表显示
- 每日推荐/排行榜