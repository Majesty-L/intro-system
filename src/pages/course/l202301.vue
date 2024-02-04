<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">虎虎生威存钱罐<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/05</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">从古至今，虎都被誉为“百兽之王”，是勇猛与力量的象征。中国人崇敬猛虎的威风八面，很早就形成了对虎图腾的崇拜。早在“仰韶文化”时代，龙虎图案便代表了力量与尊贵。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202301/1.png" />
        <div class="img-tip">▲布老虎</div>
      </div>
      <p class="text">2023年5月，儿童色彩美育团队走进东茅街小学，携手蔡老师带大家走进色彩课堂，通过解构布老虎的创作过程，认识传统民间工艺品，领略民俗文化的魅力，学会冷暖色搭配，进而发现美、感受美、欣赏美、创造美。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202301/2.png" />
        <div class="img-tip">▲孩子们在认真学习</div>
      </div>
      <p class="text"> 活动伊始，蔡老师以问答的方式，跟孩子们讲解虎头存钱罐的相关知识点，以及粘土操作的技巧。在制作过程中，同学们运用简洁的线条和形状，概括出老虎五官的造型，并为老虎设计和搭配美丽的花纹和色彩，感受中国民间工艺之美的同时，让孩子们表达心目中老虎的模样、特征，锻炼孩子们的感知能力、动手能力、想象力和创造力。孩子们在课程中发挥自己“天马行空”的创意，用超轻黏土，创造出了独一无二的老虎存钱罐。他们一丝不苟，严肃认真，仿佛在与古人的工匠精神进行时空对话。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202301/3.png" />
        <div class="img-tip">▲正在制作布老虎的孩子们</div>
      </div>
      <p class="text">同学们制作的萌虎存钱罐作品改变了布老虎原形，在材质上变废为美，采用当今非常贴近生活的快递纸箱为骨架；以头大、眼大、嘴大来突出老虎勇猛威严的神态，凸显了"不肖形似，而求神似"的传统艺术风格。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202301/4.png" />
        <div class="img-tip">▲作品展示</div>
      </div>
      <p class="text">活动在孩子们的欢乐声中圆满结束，相信愉快的气氛会陪伴大家度过今后的每一次色彩课程。通过此次活动，不仅让孩子们了解了“虎文化”，还倡导孩子们养成存储的习惯；更重要的是希望同学们存储健康、存储快乐、存储希望！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202301',
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
}</style>