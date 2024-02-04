<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">携手国际色彩专家 共研儿童色彩教育新发展<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/05/13</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">五月，暖阳和煦。5月13日上午，在砂子塘本部校区国画教室里，雨花区罗丽小学名师工作室进行了本学期第二次AIC色彩培训活动。本次培训活动在儿童色彩美育研究团队的黄茜副教授支持下，工作室的老师与AIC国际色彩专家再一次在线上进行研讨，他们有来自美国的国际色彩协会（AIC）色彩教育研究小组的联合主席Maggie Maggio（玛吉·马吉奥），澳大利亚的国际色彩协会执行委员会成员和澳大利亚色彩学会主席Paul Green-Armytage（保罗·格林-阿米蒂奇），加拿大的画家和色彩科学课程教师Robin Kingsburgh（罗宾-金斯堡）。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202302/1.png" />
        <div class="img-tip">▲线上视频课程截图 </div>
      </div>
      <p class="text">雨花区罗丽美术工作室部分成员以及砂子塘小学全体美术老师积极参与学习。课程首先从分析彩虹的色彩入手，老师们在学习的过程中通过尝试分析、发现问题、讨论问题等方式完成了光的色散原理的学习。</p>
      <div class="center-block-img">
        <img class="mb" src="/course/t202302/2.png" />
        <img class="" src="/course/t202302/3.png" />
        <div class="img-tip">▲老师正在研究学习</div>
      </div>
      <p class="text">初步感知彩虹光谱后，各位老师们一起探索光谱，利用CD以及滤光片观察光中色彩，在一系列的体验活动中，老师们通过学具的辅助发现了光中的色彩秘密，大家都为自己的发现发出了惊叹。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202302/4.png" />
        <div class="img-tip">▲不同光有不同波长</div>
      </div>
      <p class="text">随后，老师们用手电筒做光的混合叠加练习，用LED手电筒搭建了迷你舞台，在此环节中老师们了解到色光混合的特点以及色光与色料混合的差别。接下来老师们将各种色彩的小积木堆积在一起，探索彩色光源下积木的影子的色彩变化。在红、绿、蓝色光的照射下一个个美丽的彩色影子跃然纸上。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202302/5.png" />
        <div class="img-tip">▲部分课程参与者合照</div>
      </div>
      <div class="text">
        <p>探索完色光的混合，老师们借用陀螺探索色料的混合，制作旋转磁盘体会色光混合与色料混合的对比效果。紧接着，英国小学美术教师Colette分享了她三年来小学色彩教育的实践经验，从活动的选择、组织及课后的反思与老师们进行深入交流，老师们从中获得了很多色彩教学的启示。</p>
        <p>活动最后，黄茜教授进从色光的波长、色光及色料的混合、人眼视认知三个方面进行了今日课程的总结。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/t202302/6.png" />
        <div class="img-tip">▲黄茜教授进行课程总结</div>
      </div>
      <p class="text">在这次宝贵的学习中，老师们不仅探索了色光的奥秘，体验和感受了色彩美学，也明确了自己作为一线教师推动中国儿童色彩教育的责任。光是色彩的另外一支画笔，老师们在学习中不断提升。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202302/7.png" />
        <div class="img-tip">▲部分课程参与人员合照</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-202302',
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
    width: 60vw;

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