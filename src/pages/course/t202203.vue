<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">项目式儿童色彩素养美术教师培训<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/09/24</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">2022年9月24日上午，雨花区罗丽小学美术工作室部分成员以及砂子塘小学全体美术老师齐聚本部校区国画教室，由儿童色彩美育研究团队的黄茜副教授为老师们进行项目式教学为主题的儿童色彩素养培训。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202203/1.png" />
        <div class="img-tip">▲课程进行时</div>
      </div>
      <p class="text">本次培训黄教授主要从项目式学习、中国传统色、配色训练三个方面详细讲解。培训伊始，黄教授让老师们根据自己选定的感兴趣主题，以最短的时间成立团队小组、确定组员。并从选定主题、到提出问题、拆解小问题、再到引入学科知识、展示成果、评价成果、最后回顾问题、复盘等环节，给老师们带来一次项目式学习的切身体验，将真实情境和技术引入课堂，鼓励老师们成为项目中的参与者、协作者、主导者，让多学科知识融会贯通，利用项目运作来解决问题，真正做到学有所用。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202203/2.png" />
        <div class="img-tip">▲老师们踊跃提问</div>
      </div>
      <p class="text">在中国传统色的讲授中，黄教授首先向老师们抛出问题，“中国传统色是什么？”，老师们根据自身所带传统物件，表达自己的理解和感受。紧接着黄教授从“门当户对”、“朱门酒肉”等一个个典型鲜活的例子中，为老师们揭示出中国古代建筑的色彩同样体现着严格的等级制度，并让老师们利用色采APP，提取自身所带物品的色彩，归纳色彩特点，拍照分享，将所学进行内化。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202203/3.png" />
        <div class="img-tip">▲app辅助学习</div>
      </div>
      <div class="text">
        <p>最令人期待的食物色彩搭配环节中，石榴红、梅子青、瓜皮绿、萱草黄.....每个水果都用自己独特的色彩吸引着跃跃欲试、干劲十足的老师们。在黄教授的统筹安排下，以制作一组既有色彩美又有食欲的食物摆盘为任务，老师们明确任务，分工合作，安静的教室顿时热闹起来！色卡排序，水果摆盘、视频拍摄，短短的半个小时的时间，各组都高效有序的完成色彩任务。轻松愉悦的项目式学习，一群人，一个目标，各施展其能，相互合作，把知识融汇到学习过程中，各位老师真切地感受到色彩的魅力。</p>
        <p>色彩无声，却点亮着我们的生活。老师们在黄教授的色彩素养课程中，早已慢慢把“色彩”的种子埋在了自己的心田，相信在今后的时光中，这颗种子会不断成长、开花、结果，撒播在孩子们的心间，砂子塘教育集团也将继续以学生为中心，发挥美育优势，开启儿童色彩素养教育的教学创新探索之路。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-202203',
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