<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">皇袍一定是黄色的吗？<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/04/01</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <div class="text">
        <p>“一袭黄色龙袍，高坐于殿堂，朝见文武百官。这是人们对古代帝王的普遍印象。但皇袍一直是黄色的吗？各朝各代的皇袍的颜色又有什么不同？古代帝王在不同场合的着装如何？“</p>
        <p>这是儿童色彩美育研究团队与东茅街小学的线上色彩视频课第二讲过程中的一幕，志愿者李裕萱是本次线上公益课的主讲人，他用生动的表达，热情的肢体语言带孩子们走进传统文化，揭开皇帝皇袍的色彩密码。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202205/1.png" />
        <div class="img-tip">▲裕萱老师在认真备课</div>
      </div>
      <div class="text">
        <p>在选题上，裕萱老师多端思考，最后通过搜集网络文献、整理《色彩密码》慕课资料，对比相关史料与相关影像资料之后，和本团队伙伴商议，确定授课的具体题目与内容，并制作了课件PPT。</p>
        <p>课程伊始，裕萱老师播放了一段纪录片作为引入，激起了小朋友的好奇心，并提出了两个核心问题。而后，经过老师的皇袍类别介绍后，课程进入到了本课的重点问题：皇袍是否都是黄色的？老师对孩子们耐心解释了在不同的场合，不同色彩皇袍的不同代表含义。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202205/2.png" />
        <div class="img-tip">▲皇帝服装分类</div>
      </div>
      <p class="text">整个授课过程，孩子们都听得津津有味，目不转睛地盯着屏幕。在这样愉快的氛围中，老师结束了本次课程。</p>
      <div class="center-block-img">
        <div class="col2-2">
          <div class="col2">
            <img class="" src="/course/l202205/3.png" />
            <img class="" src="/course/l202205/4.png" />
          </div>
          <img class="" src="/course/l202205/5.png" />
        </div>
        <div class="img-tip">▲孩子们学习中</div>
      </div>
      <div class="text">
        <p>本次课程凝聚了团队的心血，用卡通形象的呈现和轻松的教学方式引导孩子们学习了皇袍的色彩知识，让他们对我国的传统色有了更深刻的了解。</p>
        <p>课后，志愿者李裕萱老师分享了本次课程的心得体会：“色彩素养视频课不仅是对儿童美学知识的提升，也让对我们视频制作者们对中国传统色有了更深刻的认识。史料文献通常晦涩难懂，而儿童的理解能力却有限，如何将课程做到深入浅出，是对我的一大考验。同时，受疫情防控影响，视频录制条件有限，最终的呈现也经过了多轮的录制剪辑以及修改。但所有的付出都是值得的，我很荣幸能作为视频课的主讲人，作为志愿者，以我一人之力传播知识给无数的小朋友们。在知识的海洋里，没有人是一片孤岛。期待有更多的志愿者们，用色彩的力量点亮孩子的未来！”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202205',
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
    width: 50%;
  }

  .col2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    img {
      width: 100%;
    }
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
}</style>