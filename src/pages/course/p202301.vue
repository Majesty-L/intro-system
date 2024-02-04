<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">遇见非遗 古法草木植物染<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2023/11/10</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text"></p>
      <div class="text">
          <p>为传承优秀中华传统文化，以非遗文化为美育载体，长沙市雨花区枫树山悦东方小学联动儿童色彩美育研究团队、郑州华彩艺术博物馆、浏阳“原乡染坊.非遗传习所”于2023年11月10日展开了一场别致的儿童色彩美育主题综合实践活动。</p>
          <p>“桃之夭夭，其叶蓁蓁”“终朝采绿，不盈一匊。予发曲局，薄言归沐。终朝采蓝，不盈一襜。五日为期，六日不詹”……《诗经》的寥寥数字中，各种与草木缠绕的情思便跃然纸上。</p>
      </div>
      <div class="center-block-img">
          <img class="" src="/course/p202301/1.png" />
          <div class="img-tip">▲课堂精彩瞬间</div>
      </div>
      <div class="text">
          <p>中国古人以织物为载体，顺应四时的变化，染出了独属于中国人的浪漫和智慧。黄茜副教授从草木染的中国传统历史为孩子们进行介绍，孩子们感受植物染的魅力，鼓励孩子们传承创新。</p>
          <p>现场视频连线的郑州华彩艺术博物馆色彩老师迭小方在展厅内从色彩寓意、人文精神等角度，结合展厅内展出的植物染料标本、少数民族服饰，生动具象地介绍了传统五正色、五间色的运用。孩子们惊叹于传统色彩的绚烂，更惊叹古人的智慧与诗意。</p>
      </div>
      <div class="center-block-img">
          <img class="" src="/course/p202301/2.png" />
          <div class="img-tip">▲郑州大信华彩艺术博物馆迭老师为长沙市<br/>雨花区枫树山悦东方小学同学线上教学</div>
      </div>
      <p class="text">肖琼琼教授和浏阳“原乡染坊.非遗传习所”何伊曼老师一起系统介绍古法草木染的起源及制作工艺流程、传统染材建缸制作过程，带领孩子们体验了非遗手工扎结和糊染刮板两种工艺的染色、清洗浮色、晾晒全过程，让孩子们体验了一场浸润在历史长河中的文化、艺术、科学、思维之旅。</p>
      <div class="center-block-img">
          <img class="" src="/course/p202301/3.png" />
          <div class="img-tip">▲黄茜副教授课堂瞬间</div>
      </div>
      <p class="text">草木不言，深情常在。这一场别致的儿童色彩美育主题综合实践活动开启了美育新形式，引领孩子们与古老的草木染技艺对话，感受了人间草木染就的中国传统色，感悟了传统文化的诗意与浪漫，进一步丰富了孩子们的审美感知，以优秀传统文化艺术滋养了孩子们的心灵，播撒了美育的种子，进一步厚植了民族情怀和爱国情怀。以美润心，以文化人。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-202301',
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
    flex: 1 1 20%;
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
    flex: 1.85;
  }
}
</style>