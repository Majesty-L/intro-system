<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">AIC国际会议<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/11/29</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">2023年11月29日13:45 - 14:00 ，儿童色彩美育研究团队负责人黄茜老师在清莱The Riverie by Kathathan 酒店Doi Tong会场发表了名为《中国儿童色彩教育教材设计与教育策略》的演讲，从儿童色彩教育领域的相关研究出发，引出了对中国儿童的色彩教育的思考，从现状、理念、组织、工具等四个方面，分析了中国与日本、韩国、芬兰等国的差异，结合国情，探索了中国儿童色彩美育的发展方向。黄茜老师在演讲中提到：“我十分渴望中国近两亿孩子能更早地打开欣赏色彩的眼睛，感受色彩的力量，在色彩中看到过去与现在，链接自我与他人”。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202302/1.png" />
        <div class="img-tip">▲本届会议</div>
      </div>
      <div class="text">
        <p>国际色彩协会(AIC)大会是一个多学科参与的国际会议，汇集了来自各行各业的学者和专业人士，旨在共同培养促进人们对艺术、人文、科学和技术领域的色彩现象和文化的认识。2023年，AIC大会由泰国色彩协会 （CST）主办，主题为 “COLOR SPEAKS ALL LANGUAGES ”，为来自不同学科的参与者提供丰富的学习交流机会，推动色彩学科的发展。</p>
        <p>此次大会于2023年11月28日在泰国清莱举行，为期五天（11.28-12.2），全世界的色彩专家，教师，爱好者等汇聚在一起，交流最新的研究成果，会议分为三个会场，从色觉、颜色和照明、色彩心理学、艺术与设计中的色彩、彩色成像、色彩与教育、色彩与文化、色彩交流、色彩技术与应用等多个方面展开演讲与讨论。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/p202302/2.png" />
        <div class="img-tip">▲11月29日Doi Tong会场时间表</div>
      </div>
      <p class="text">而后黄茜老师介绍了中国儿童色彩教材内容以及儿童色彩美育研究团队在中国儿童色彩教育方面的实践。例如用参与式教学法，带着孩子们一起设计自己的校园、社区门牌和地图等，让孩子更加深刻地理解了色彩与生活的关系；在中国传统色彩教学中，引入了与传统色相关的色彩研制小游戏、青花瓷制作等参与式活动，让孩子们能听懂中国古代抽象的色彩哲学等等。旨在通过这些活动，使孩子们的色觉得到启蒙，能辨识色彩的微妙区别，感受色彩组合的魅力。此外通过色彩教育，能让中华民族的色彩文化得以传承。同时展示了与长沙市雨花区砂子塘小学、长沙市雨花区枫树山悦东方小学、长沙市芙蓉区东茅街小学的儿童教育实践案例。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202302/3.png" />
        <div class="img-tip">▲黄老师的演讲内容</div>
      </div>
      <p class="text">黄茜老师的演讲得到会场专家的一致好评，多位国际专家热情表达有意共同促进中国儿童色彩教育的发展。AIC色彩素养教育小组Maggie副主席长期支持中国儿童色彩教育的发展，以期联合国内外力量，推动国际色彩素养计划。同时预计将链接印度、美国、巴西等更多的国际合作力量，推进儿童色彩美育的研究与实践。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202302/4.png" />
        <div class="img-tip">▲演讲现场照片</div>
      </div>
      <p class="text">此次大会，黄茜老师与各国的专家学者们进行了深入的学习交流，了解了其他国家儿童教育事业的发展现状，有助于推动中国儿童美育的发展。同时，此次会议也是儿童色彩美育研究团队在国际舞台中展示色彩教育在中国践行成果的宝贵机会，演讲赢得了广泛的赞誉。这是中国色彩素养教育团队工作的一个里程碑，向国际专家们展示了团队的风采，为团队进一步链接国际专家提供了契机和平台，为儿童色彩教育贡献力量。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-202302',
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
}
</style>