<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">小学美术教师色彩素养提升培训启动<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/08/18</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">为了提高美术老师的专业素养，探寻更具多样性的美术教育方式，2022年8月18日上午，一场主题为《小学美术教师色彩素养培训》的讲座在砂子塘小学国画功能室开展，主讲人为来自儿童色彩美育研究团队的黄茜副教授。本次讲座由砂子塘教育集团主办，雨花区罗丽（小学）美术名师工作室承办。砂子塘本部所有美术教师现场学习，并通过线上会议向雨花区罗丽美术工作室成员及砂子塘集团所有美术教师们进行同步直播。作为中国色彩科普的重要推进计划，此次培训以中国流行色协会向全国发布，共享开放线上资源。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202201/1.png" />
        <div class="img-tip">▲黄老师正在授课</div>
      </div>
      <div class="text">
        <p>国际色彩协会(AIC)上午九点半，讲座正式开始。黄茜老师从色彩教育的必要性出发，借鉴国内外相关教育经验，结合自身多年进行色彩教育研究的案例，从理论到实践，系统性阐述了色彩教育的内涵、教育途径、教育方法。一个个生动的课例，一处处精巧的设计，让人深切感受到了色彩教育独特的魅力。</p>
        <p>黄老师强调，色彩教育的初衷，是通过色彩这个人人能明白的元素，培养孩子们的逻辑力、创造力和融合力。色彩是基于色彩体系的基础上，遵循儿童教育学理论，建构嵌入式色彩教育。</p>
      </div>
      <div class="center-block-img">
        <div class="col2-2">
          <img class="" src="/course/t202201/2.png" />
          <img class="" src="/course/t202201/3.png" />
        </div>
        <div class="img-tip">▲一线美术教师的讨论与思考</div>
      </div>
      <p class="text">一次活动让一线美术教师收获颇丰，在课程中，他们不单单了解到很多有趣的了解色彩的工具，还学到了如何利用工具与孩子沟通，让孩子与色彩沟通，从而自然而然地建立色彩的概念，学会运用色彩搭配表达需求。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202201/4.png" />
        <div class="img-tip">▲线上会议截图</div>
      </div>
      <div class="text">
        <p>来自砂子塘小学的宋卉老师说：“黄茜教授的一句‘教色彩不讲色彩’让我茅塞顿开。在之后的教育教学中我也会不断地提高自己，让色彩教育融入到日常的美术课堂上。”</p>
        <p>来自砂子塘第六都校区的周扬老师说：“今天有幸能够听到黄茜教授的色彩素养培训课。在黄教授的主讲下，让我更深刻的知道美术教育的内涵并不是等于画画，是以色彩为桥梁，培养学生对色彩的感受能力，能够从学生的逻辑力、创造力、融合力三个维度来培养学生。作为一名小学美术老师，我们要让孩子主动发现，探索，并从中感受，实现价值，得到自己肯定。”</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/t202201/5.png" />
        <div class="img-tip">▲部分课程参与者合照</div>
      </div>
      <p class="text">在世界先进国家长期坚持开展色彩教育，中国儿童色彩教育亟需深入推广与实践。优质的色彩教育将开启儿童色觉感知系统训练，将潜藏在我们身上人人皆有的色彩美感，通过有趣生动的方式，得到提升。深入的儿童色彩教育需要优秀的一线教师，期待中国儿童色彩教育能形成科学有效的教学体系。砂子塘教育集团将协同本团队在小学美术教师色彩素养的提升培养上，进行探索与实践。同期汇入AIC国际色彩联盟色彩素养计划，助力中国儿童色彩素养提升计划。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-202201',
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
  // flex-wrap: wrap;
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
}
</style>