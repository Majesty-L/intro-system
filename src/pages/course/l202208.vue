<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">木兰如何“贴花黄”<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/11/08</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">“当窗理云鬓，对镜贴花黄”美丽的巾帼英雄花木兰到底是如何“贴花黄”的呢？带着这这样的疑问，儿童色彩美育研究团队与东茅街小学的线上色彩视频课在2022年11月8日如期开始。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202208/1.png" />
        <div class="img-tip">▲课程海报</div>
      </div>
      <p class="text">本次线上公益课的主讲人是志愿者姜宁宁，她为孩子们带来的主题是《木兰到底如何“贴花黄”》。隔着屏幕，姜宁宁老师课程通过微视频的形式，和孩子们展开交流了有关“额黄妆”的知识，共同探索了“额黄妆”中的中国传统色的魅力。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202208/2.png" />
        <div class="img-tip">▲姜老师正在备课</div>
      </div>
      <div class="text">
        <p>在准备课程的过程中，为了让小朋友们能够更好地理解有关色彩的知识，姜宁宁老师准备了一个充满插图、充满童趣的课件。</p>
        <p>在准备上课所用的讲稿时，为了能让小朋友们更容易理解，主讲人将一些晦涩难懂的术语转化为简单易懂的词汇，比如将“渐变”换成了“由深到浅”。在相关影像资料和讲稿、课件都准备完毕后，主讲人顺利地完成了课程的录制。在课程的一开始，姜宁宁老师播放了一段电影《花木兰》中木兰梳妆打扮的视频，引出了今天要学习的内容。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202208/3.png" />
        <div class="img-tip">▲《花木兰》电影片段</div>
      </div>
      <p class="text">接着，姜宁宁老师首先向小朋友们介绍了什么是“额黄妆”，再介绍了名字的由来、上妆原材料，课程结束，姜宁宁老师告诉大家希望小朋友能够去了解更多的有关色彩的知识，发挥想象力大胆运用色彩来创造美。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202208/4.png" />
        <div class="img-tip">▲“额黄妆”的颜料</div>
      </div>
      <p class="text">本次课程凝聚了志愿者团队的心血，用卡通形象的呈现和轻松的教学方式引导孩子们学习了有关“额黄妆”的色彩知识，让他们对我国的传统色有了更深刻的了解。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202208/5.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <div class="text">
        <p>课后，志愿者姜宁宁老师分享了本次课程的心得体会：</p>
        <p>“本次的线上视频课录制过程中让我收获颇丰，在老师的悉心指导下，我不断地完善、优化了课程的内容，同时我也收获了更多有关中国传统色的知识。作为志愿者我很荣幸参与到本次活动中来，希望这次的录播课能够让小朋友们了解到更多有关中国传统色的知识，也希望疫情期间小朋友们能够保持积极乐观的态度，在学习文化课的同时也能够去了解更多的有关色彩的知识，发挥想象力大胆运用色彩来创造美。”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202208',
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 20rem;
  background: url('../../../public/bgImg/artical_banner.png') white top / cover no-repeat;
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
      line-height: 3rem;

      /* 100% */
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

.col2-2 {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  img {
    flex: 1 0 20%;
    width: 40%;
  }
}

.col2-1 {
  display: flex;
  gap: 1rem;
  justify-content: center;

  .col2-1-1 {
    flex: 3;
  }

  .col2-1-2 {
    flex: 1.38;
  }
}</style>