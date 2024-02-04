<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">古建筑中的色彩<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/10/31</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">“如果要从色彩的角度，来介绍我们中华民族悠久的历史和璀璨的文化，你会想到哪种颜色？”围绕这个特别的命题，2023年10月31日，在儿童色彩美育研究团队的支持下，由大信华彩艺术博物馆与长沙市雨花区枫树山悦东方小学共同展开了一场特别的博物馆审美之旅。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202302/1.png" />
        <div class="img-tip">▲长沙市雨花区枫树山悦东方小学黄老师课堂教学</div>
      </div>
      <p class="text">这是一个围绕“传统色彩文化”主题设计的儿童色彩美育学习单元。教师根据艺术课程标准中所倡导的将“社会主义先进文化、革命文化、中华优秀传统文化”等重大主题教育有机融入课程，增强课程思想性。引导孩子们从传统色彩入手，结合古建筑、传统绘画、经典文物、民俗物件等进行探究学习，提升孩子们的审美素养和人文素养，坚定文化自信，以美育人，以美化人，以美润心，以美培元，进一步激发孩子们的主人翁意识，担当起继承和传播优秀传统文化的责任。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202302/2.png" />
        <div class="img-tip">▲课堂精彩瞬间</div>
      </div>
      <div class="text">
        <p>课堂伊始，黄溶华老师以核心问题引入，引发学生思考“作为中国的小主人可以怎样来宣传和介绍中华民族优秀的传统文化”。同学们踊跃思考，积极回答，“古建筑”、“博物馆中展出的文物”、“传统绘画作品”等等都是他们心目中最好的文化名片。</p>
        <p>顺着同学们的思路，黄老师带领孩子们云游北京故宫。借助“全景故宫”这一网站，同学们实现了与传统古建筑的近距离接触。在兴致盎然的云游览中，同学们惊喜地发现了故宫建筑群中高频出现的色彩分别是黄色、红色、绿色、白色和蓝色。这些颜色引发了同学们新一轮的审美思考。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202302/3.png" />
        <div class="img-tip">▲课堂互动精彩瞬间</div>
      </div>
      <p class="text">黄老师立马与郑州大信华彩艺术博物馆的色彩老师迭小方进行现场视频连线，迭老师在大信华彩艺术博物馆展厅内为同学们介绍了中国传统“五色观”，从哲学、人文精神等层面带领同学们了解五色的缘起。在迭老师深入浅出的生动讲解中，同学们了解到中国传统的“五色观”，也进一步深刻体悟到了故宫每一处色彩都有着深刻的文化内涵和悠久的历史渊源，它们一同构成了中华民族所特有的色彩美学。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202302/4.png" />
        <div class="img-tip">▲现场视频连线教学</div>
      </div>
      <p class="text">观色彩之绚烂，悟文化之悠远。这一次馆校合作的儿童色彩美育课程为孩子们开启了走近中国传统色彩的大门，进一步拓宽了孩子们的审美视野，期待更多的孩子走近中国传统色彩，一同踏上中华民族优秀传统文化的审美之旅。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202302',
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