<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">砂子塘小学美术教师现场实训<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/09/17</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">9月17日上午9时，黄茜老师以儿童色彩美育研究团队负责人的身份到砂子塘小学进行第二次色彩素养培训，《新课程评论》的郑与点、余孟孟主编、雨花区罗丽美术工作室部分成员以及砂子塘小学全体美术老师齐聚砂子塘小学本部校区国画教室。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202202/1.png" />
        <div class="img-tip">▲黄茜老师上课</div>
      </div>
      <p class="text">黄老师从色彩体系的秩序、色光混合以及色彩配色逻辑三个方面为老师们搭建了色彩知识体系大厦的框架。黄老师从眼睛生理结构、心理学等角度科学的为老师们进行了解答，整个场域在“无彩色系人肉色卡明度排列”、“有彩色系人肉色卡明度排列”、“色块纯度和明度排列”这些互动中流动起来，明度、纯度、色相这三个要素无形中与在场的每一位老师有了连接，融入了老师们日常生活中的同时也走进了大家的心里。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202202/2.png" />
        <div class="img-tip">▲一线教师正在认真听课</div>
      </div>
      <p class="text">色即是光。培训的第二部分，黄老师引导大家运用聚光手电与三原色色片进行分组实验，大家从实验中验证了三原色的聚合点是白色这个现象。第三部分——色彩配色逻辑，是本次培训的重点，每位老师轮流阐述这四大区域的正面感受和负面感受，这个环节让老师们有意识地去思考，如何更好的运用不同色调的正面情绪，同时破解不同色调给人的负面感受。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202202/3.png" />
        <div class="img-tip">▲课堂氛围非常好</div>
      </div>
      <p class="text">十分钟、几十本彩色杂志、每人一张纸、一把剪刀，再结合本次培训所获得的色彩体系秩序、配色逻辑，形成了老师们手上一幅幅生动的色彩构成作品，匿名评价和黄老师最后的点评环节让大家感受到这不仅仅是一张张作品，体现的正是每个人当前的一种生命状态。</p>
      <div class="center-block-img">
        <img class="" src="/course/t202202/4.png" />
        <div class="img-tip">▲作品展示</div>
      </div>
      <p class="text">黄老师的专业魅力和色彩无穷的吸引力让大家意犹未尽，已经迫不及待地期待下一次的探索色彩奥秘之旅。秋天不仅可以带来丰收的喜悦，还给了我们奋发向上筑牢色彩知识体系大厦的勇气和力量。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-202202',
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