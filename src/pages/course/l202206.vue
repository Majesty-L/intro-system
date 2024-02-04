<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">解读《山海经》中神兽的色彩<span class="banner_search"><img src="/icons/search.svg" />查看原文</span></div>
            <div class="banner_tips">2022/05/15</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <div class="text">
        <p>《山海经》是我国古代重要的志怪小说，也是上古三大奇书之一。书中记录了各式各样的奇异动物，基于此，2022年5月24日，儿童色彩美育研究团队与东茅街小学的线上色彩视频课与小朋友一起探索了《山海经》中神奇动物的色彩密码。</p>
        <p>志愿者牛艺凝是本次线上公益课的主讲人，她为孩子们带来的主题为《探秘&lt;山海经>中神奇动物的颜色》。课程延续了线上视频课的形式，她用饱满的热情，为孩子们讲述了《山海经》中的中国传统色故事。</p>
      </div>
      <div class="center-block-img">
          <img class="" src="/course/l202206/1.png" />
          <div class="img-tip">▲小牛同学备课中</div>
      </div>
      <div class="text">
          <p>作为一本上古时期的书籍，《山海经》对于小学生而言有一定的阅读难度。因此老师就选中了书中小朋友们都感兴趣的神兽作为切入点，向小朋友们缓缓展现了这本奇书中关于中国传统颜色的奥秘，希望可以让小朋友们对中国传统文化产生兴趣，从而增强文化自信。</p>
          <p>为了保证教学内容的准确性及趣味性，老师在授课前也在网络上搜集了大量的文献资料，并且活用当下热门的视频平台寻找到了适宜小朋友们年龄的视频素材，用心准备了教学内容。</p>
      </div>
      <div class="center-block-img">
          <img class="" src="/course/l202206/2.png" />
          <div class="img-tip">▲视频《讲给孩子们的山海经》</div>
      </div>
      <p class="text">课程开始，小牛老师直奔主题，在课程的第一部分大体介绍了《山海经》这本书的主要概况，并利用脍炙人口的神话故事加深了小朋友们对《山海经》这本书的理解。又通过一段讲述书中五彩斑斓的动物—凤凰的动画片，将本节课的话题引向了书中神奇动物的颜色。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202206/3.png" />
        <div class="img-tip">▲《山海经》中的神话故事</div>
      </div>
      <div class="text">
        <p>课程还讲述了《山海经》中颜色的总述，老师列举了书中出现过的二十多种颜色，并最终可以总结为红、白、黄、青、黑五种颜色体系及每种颜色的表现形式、色彩来源、给人的感受以及相关的成语，为小朋友们全面展示了这五种颜色的知识，还选取了书中每种颜色的代表动物，将书中对神奇动物的文字记载具象化，并提取出每个神兽身上的颜色极其搭配，以便小朋友们更好的理解和感知。</p>
        <p>本次传统色彩课程，志愿者老师带着孩子们阅读《山海经》神兽的色彩故事，让孩子们沐浴在中国传统色彩的玄妙之中。课程结束后，志愿者牛艺凝老师分享了她的心得体会：</p>
        <p>“对我而言这次《讲给你的中国传统色》课程是一次非常难得的机会，也带给了我一些考验。在这个过程中，我也收获了不少新的知识，随着深入的学习和研究，我对中国传统文化以及色彩知识都有了更深入的理解。我希望看到视频的小朋友们也可以产生对中国传统文化的浓厚兴趣，并由衷的对我们国家文化产生自豪感。当然我也希望小朋友们可以多多感知日常生活中的色彩，观察我们身边事物的色彩，以提升自己的审美能力和美学素养。”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202206',
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
}
</style>