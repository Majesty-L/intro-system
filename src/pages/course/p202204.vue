<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">等等亭LOGO设计<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/11/28</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <div class="text">
        <p>2022年11月28日，东茅街小学开展了一个别开生面的活动，携手儿童色彩美育研究团队，邀请小朋友们为学校内新落成的“等等亭”设计logo。</p>
        <p>“孩子，我在等那个小小的你，我牵着你，你牵着我，童年的路，慢慢地走，等等，看那些可可爱爱的风景，等等，看那些欢欢喜喜的人儿，等等，看你们长成最好的模样，我们的日子，因为“等等”而惬意；我们在东小的岁月，因为彼此而温暖。”根据等等亭的设计主题，孩子们发挥了天马行空的想象力。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202204/1.png" />
        <div class="img-tip">▲等等亭</div>
      </div>
      <p class="text">征稿启事发下后，本团队收到了许多踊跃精彩的投稿，孩子们结合了图画、色彩和深层的含义，贡献出了自己的奇思妙想。</p>
      <div class="center-block-img">
        <div class="row">
          <img class="row1" src="/course/p202204/2.png" />
        </div>
        <div class="col2-2">
          <img class="" src="/course/p202204/3.png" />
          <img class="" src="/course/p202204/4.png" />
          <img class="" src="/course/p202204/5.png" />
          <img class="" src="/course/p202204/6.png" />
        </div>
        <div class="img-tip">▲部分优秀作品</div>
      </div>
      <p class="text">东茅街小学建设成立中国流行色协会儿童色彩素养科普基地，校园改造与色彩教育同步深入。色彩焕新东小，美在身边。在校园里的深化设计过程，一线老师带领孩子们深入设计，孩子们在主动性创造中，在校园美育中共同成长。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-202204',
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
    flex: 0 1 40%;
    min-width: 40%;
  }
}

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  .row1 {
    flex: 0 0 45%;
    max-width: 45%;
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
    flex: 1.85;
  }
}</style>