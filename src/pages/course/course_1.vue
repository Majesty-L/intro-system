
import { component } from 'vue/types/umd';

<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">木兰如何贴花黄<span class="banner_search"><img src="/bgImg/search.svg" />查看原文</span></div>
            <div class="banner_tips">2024/1/7 20:18</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <img class="center-block-img mt" src="/bgImg/course/course1_1.png" />
      <divider/>
      <img class="center-block-img" src="/bgImg/course/course1_2.png" />
      <p class="text">“当窗理云鬓，对镜贴花黄”美丽的巾帼英雄花木兰到底是如何“贴花黄”的呢？带着这这样的疑问，湖南大学色彩科普基地与东茅街小学的线上色彩视频课第x讲，邀请你和我们一起探索“额黄妆”的色彩密码。</p>
      <img class="center-block-title" src="/bgImg/course/course1_title1.png" />
      <p class="text">本次线上公益课的主讲人是来自湖南大学工商管理学院的姜宁宁同学，她为孩子们带来的主题是《木兰到底如何“贴花黄”》。隔着屏幕，姜宁宁同学课程通过微视频的形式，和孩子们展开交流了有关“额黄妆”的知识，共同探索了“额黄妆”中的中国传统色的魅力。</p>
      <div class="center-block-img">
        <img class="" src="/bgImg/course/course1_3.png" />
        <div class="img-tip">▲宁宁老师开课啦！</div>
      </div>
      <img class="center-block-title" src="/bgImg/course/course1_title2.png" />
      <p class="text">在准备课程的过程中，为了让小朋友们能够更好地理解有关色彩的知识，姜宁宁老师准备了一个充满插图、充满童趣的课件。</p>
      <p class="text">在准备上课所用的讲稿时，为了能让小朋友们更容易理解，主讲人将一些晦涩难懂的术语转化为简单易懂的词汇，比如将“渐变”换成了“由深到浅”。在相关影像资料和讲稿、课件都准备完毕后，主讲人顺利地完成了课程的录制。</p>
      <div class="center-block-img">
        <img class="" src="/bgImg/course/course1_4.png" />
        <div class="img-tip">▲宁宁老师备课中</div>
      </div>
      <img class="center-block-title" src="/bgImg/course/course1_title3.png" />
      <p class="text">在课程的一开始，姜宁宁老师播放了一段电影《花木兰》中木兰梳妆打扮的视频，引出了今天要学习的内容：木兰是如何“贴花黄”的呢？</p>
      <div class="center-block-img">
        <img class="" src="/bgImg/course/course1_5.png" />
        <div class="img-tip">▲电影《花木兰》片段</div>
      </div>
      <img class="center-block-img" src="/bgImg/course/course1_2.png" />
      <div class="text">
        <p>本次课程凝聚了志愿者团队的心血，用卡通形象的呈现和轻松的教学方式引导孩子们学习了有关“额黄妆”的色彩知识，让他们对我国的传统色有了更深刻的了解。同时，我们自己在这件事情中收获助人的快乐，这是一种打心眼里的满足与踏实。</p>
        <p>如果你和我们一样，在这个面临挑战的时期，愿意为儿童色彩教育贡献自己的力量，我们期待你们的加入，共同为色彩普惠计划助航！</p>
      </div>
      <divider/>
      <div class="footer">
        <p>图文原稿 | 姜宁宁</p>
        <p>图文编辑 | 刘贝贝、高瑞晨</p>
        <p>图文审核 | 黄 茜</p>
      </div>
    </div>
  </div>
</template>

<script>
import divider from '@/components/divider.vue';
export default {
  components:{ divider },
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 20rem;
  background: url('../../../public/bgImg/course/course1_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 50vw;
    .banner_title {
      position: relative;
      color: var(--grey-600, #2C2B2B);
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem; /* 100% */
      .banner_search {
        position: absolute;
        color: var(--grey-600, #2C2B2B);
        font-family: Inter;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        img {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 0.3rem 0 0.5rem;
        }
      }
    }
    .banner_tips {
      color: var(--grey-600, #2C2B2B);
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 1.8rem;
    }
  }
}
</style>