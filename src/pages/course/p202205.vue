<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">古色新花<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/12/13</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">追逐绚丽的和风，沐浴银冬的阳光。2022年12月13日，砂子塘小学美术学科节拉开了序幕。本次学科节由砂小携手儿童儿童色彩美育研究团队、学习强国长沙学习平台联合主办，雨花区罗丽（小学）美术名师工作室承办，三校区美术老师共同筹备。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202205/1.png" />
        <img class="mt" src="/course/p202205/2.png" />
        <div class="img-tip">▲活动合照</div>
      </div>
      <p class="text">学科节围绕主题“古色新花——中国传统建筑色彩润童心”开展。团队黄茜教授、砂子塘教育集团总校长、砂子塘小学党总支书记李臻、砂子塘教育集团总校长助理李静、砂子塘小学副校长李东亚、砂子塘小学办公室主任唐萍出席了开幕式，雨花区罗丽美术名师工作室首席名师罗丽老师担任主持。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202205/3.png" />
        <div class="img-tip">▲教师队伍</div>
      </div>
      <p class="text">在开幕式上，黄茜教授带领1905、1802班的同学们进行了一场“中国传统色彩赏析”的赏美之旅。黄教授从色彩的文化内涵、中国色彩哲学、中国宗教文化色彩三个方面，带领同学们共同探索中国传统色彩的秘密。黄茜教授的讲述生动而引人入胜，跨越千年时空赏看凝聚历史与文化的艺术品，品味独具东方韵味的传统美学。黄教授还对儿童色彩教育进行了介绍，它不仅仅是美育的过程，更是另一种更为深刻和鲜活的社会实践过程。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202205/4.png" />
        <div class="img-tip">▲黄茜教授讲座照片</div>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202205/5.png" />
        <div class="img-tip">▲小朋友积极互动</div>
      </div>
      <div class="text">
        <p>本次学科节，除了主题讲学，还开设了主题艺术展。一件件作品主题鲜明、风格多样、笔精墨妙，展现着砂小学子眼中的中国传统建筑色彩。每一件作品都凝聚着孩子们的智慧和心血，倾注着他们的思考和创意。</p>
        <p>美术展开展当天，迎来了1901班全班同学。步入展厅的同学们时而驻足细细欣赏，时而与同伴小声交流，从他们欣喜的目光、专注的神情中，能看到这场主题艺术展带给他们的惊喜和震撼。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202205/6.png" />
        <div class="img-tip">▲小朋友为精美的色彩与工艺震撼</div>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202205/7.png" />
        <div class="img-tip">▲作品一览</div>
      </div>
      <p class="text">观展之后，同学们和嘉宾们一起在日新楼游艺园进行了一系列主题体验活动，在活动中，同学们感受着丰富多样的艺术形式，也感受着华夏五千年悠悠历史长河的民族文化印记和民族审美追求。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202205/8.png" />
        <div class="img-tip">▲老师指导学生进行活动</div>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202205/9.png" />
        <div class="img-tip">▲学生尝试拓印</div>
      </div>
      <p class="text">古色新花，让传统焕发出新的艺术魅力，砂小学子将怀着对中国传统文化的无限热爱，传承与发扬祖国优秀传统文化，以更加昂扬自信的姿态面向未来，真正成为自信豪迈的砂小少年。而本团队也将不断努力，致力于打造中国儿童色彩美育新的明天。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-202205',
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
    flex: 1 1 20%;
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
    flex: 1.85;
  }
}
</style>