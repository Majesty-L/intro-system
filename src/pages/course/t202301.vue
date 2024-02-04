<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">AIC儿童色彩教育师资国际培训砂子塘站<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/04/01</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <div class="text">
        <p>春至花如锦，学光润日泽。2023年4月1日上午8：30，在砂子塘小学本部校区国画教室里，雨花区罗丽小学美术名师工作室进行了一次别开生面的色彩培训。</p>
        <p>本次培训在儿童色彩美育研究团队的黄茜副教授支持下，工作室的老师与AIC国际色彩专家线上共聚，他们有来自美国的国际色彩协会（AIC）色彩教育研究小组的联合主席Maggie Maggio（玛吉·马吉奥），澳大利亚的国际色彩协会执行委员会成员和澳大利亚色彩学会主席Paul Green-Armytage（保罗·格林-阿米蒂奇），加拿大的画家和色彩科学课程教师Robin Kingsburgh（罗宾-金斯堡）。雨花区罗丽美术工作室部分成员以及砂子塘小学全体美术老师积极参与学习。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/t202301/1.png" />
        <div class="img-tip">▲老师在认真学习</div>
      </div>
      <p class="text">本次课程使用的是AIC培训资料与科学流程。首先，Robin老师引导老师根据教具呈现效果说明了“色彩在二维平面上由于背景不同所呈现的相对效果也不同”这一原理，即色彩互动学。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202301/2.png" />
        <div class="img-tip">▲视频授课</div>
      </div>
      <p class="text">随后，Maggie老师使用色彩训练网站，通过提出不同的要求，引导老师们对36个色块进行分类与排布以及同色系的色调练习，进一步感受什么是色彩的色相、明度、纯度，感受不同色调下的色彩所传达的独特性格特点。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202301/3.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <p class="text">到了最有趣的环节，大家被分为色彩小组，每组都拿出了事先准备好的对应颜色的物品，并在Maggie老师的引导下将各种同一色相的物品按照明度、纯度渐变规律依次排布，最后呈现出同一色系物品组成的和谐却丰富的效果。进而，Maggie老师向老师们重点展示了完全对称和孟塞尔色立体两种三维色立体卡，并详细解说了两种色立体卡的设置原理和方法。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202301/4.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <p class="text">最后的答疑环节，针对罗丽老师提出的如何在游戏中提升学生对色彩的感知，提高学生的色彩素养一问，Maggie老师通过当地老师们开展的各项有趣的活动，直观讲述了活动方法和意义。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202301/5.png" />
        <div class="img-tip">▲部分课程参与者合照</div>
      </div>
      <p class="text">本次培训从基本的平面色块到实际的立体色块到日常生活中的多彩的物品，老师们在三位老师的带领下从看到和注意到颜色的变化开始，认识色彩情绪，感受色彩逻辑，进一步确定了如何在背景中看待颜色的重要性；巩固了能够描述颜色的所有属性，并探索了颜色空间的三维性质。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202301/6.png" />
        <div class="img-tip">▲部分课程参与者合照</div>
      </div>
      <p class="text">老师们对色彩专家老师们表达了真诚的感谢，Maggie老师及其他专家高度评价了大家的学习工作，对中国色彩普及给予鼓励与认可。在这次宝贵的学习中，提高了老师们的色彩专业知识，也和国内外的色彩专家建立起沟通的桥梁。也很老师们提升色彩素养，推动色彩课程创新，，用色彩推动课程创新，让孩子真正享受优质的色彩教育。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-202301',
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