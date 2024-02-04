<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">腾讯支教 启动推送<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/10/08</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">为了科普中小学生色彩美育知识，将更多更优质的教育资源倾向贫困地区与乡村小学，2023年10月8日下午，儿童色彩美育研究团队召开了腾讯SSV数字支教实验室数字支教启动会议。企鹅支教是腾讯SSV数字支教实验室规划并建设的在线支教平台，通过联合内外部公益志愿者和行业生态伙伴共创优质教学资源和内容，借助信息化、数字化能力，给孩子带去优质教学内容和全新的双师教学模式，从而为教育公平普惠贡献一份力量。该项目把传统的线下支教搬到了线上，让远程支教这个事成为了现实。本次支教活动将持续到2024年春季学期。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202401/1.png" />
        <div class="img-tip">▲志愿团成员合照</div>
      </div>
      <p class="text">会议伊始，徐浩森老师进行了简要讲话，对此次支教计划表达了强烈支持，鼓励儿童色彩美育团队利用所学的专业知识积极进行色彩美育的科普与推广，也表达了对于志愿者在支教中不断提高自身知识水平、展现自我与集体风采的期望和希冀，最后对童心溢彩志愿团队的志愿者表达了感谢。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202401/2.png" />
        <div class="img-tip">▲徐浩森老师讲话</div>
      </div>
      <p class="text">而后团队负责人黄茜老师从内容、形式和目的对腾讯SSV数字支教计划作出了详细的介绍，铺开式地说明了详细任务，并对志愿团成员提出了严格要求，确保支教的效度和深度，最后在其具有感染力的号召下，志愿团队成员得到了有力的动员，纷纷表示会全力以赴完成支教任务。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202401/3.png" />
        <div class="img-tip">▲黄茜老师讲话</div>
      </div>
      <div class="text">
        <p>志愿者小队长马嫣然同学展开了支教教学方面的介绍，本学期的数字支教计划共设置了六次课程，每周课前，志愿者们将提前熟悉教学内容，进行详细备课，根据自身教学风格不断磨课；课中，志愿者们在教学的同时进行课堂观察，选择适合当地儿童学情的教学模式，吸引孩子们的兴趣，并及时调整教学方式；课后，志愿者们将布置相应作业并完成批改，及时巩固知识。</p>
        <p>同时，组员还将记录课堂中的重难点，进行记录与反馈，打磨教学方法，提升教学水平，确保教学效果，为小朋友们带来理论与实践并行的色彩课堂，开启儿童色彩美育新篇章。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202401/4.png" />
        <div class="img-tip">▲黄茜老师为志愿者颁发志愿证书</div>
      </div>
      <div class="text">
        <p>最后，徐老师与黄老师为志愿团队的志愿者们颁发了证书，表示了对志愿团成员的认可，鼓励志愿者们的热情。</p>
        <p>以志愿之名，赴青春之约。来自天南海北的志愿者将自己的善意播撒进山间，知识和力量会来到孩子们的身旁，为他们照亮缤纷多彩的未来。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202401',
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