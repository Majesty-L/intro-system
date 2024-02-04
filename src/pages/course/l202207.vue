<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">走进唐三彩的彩色世界<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/10/24</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <div class="text">
        <p>唐三彩是一种盛行于唐代的陶器，关于唐三彩最早的记载是民国时期，因工程而毁损了一批唐代墓葬，结果人们发现了为数颇多的唐三彩作品，它被用作陪葬品，宗教用品，以及建筑材料。</p>
        <p>2022年10月24日，儿童色彩美育研究团队与东茅街小学的线上色彩视频课邀请了小朋友一起探索唐三彩中的色彩密码。志愿者林彦秀是本次线上公益课的主讲人，他以微课的形式带领孩子们探索唐三彩的色彩秘密。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202207/1.png" />
        <div class="img-tip">▲课程海报</div>
      </div>
      <div class="text">
        <p>唐三彩在中国文化中占有重要的历史地位，在中国的陶瓷史上留下了浓墨重彩的一笔。为了保证教学内容的准确性及丰富性，彦秀老师在课前做了充足的准备，搜集了大量视频、文献资料后整理出教学提纲，精心设计了教学内容和教学课堂。</p>
        <p>他首先解决了唐三彩名称的问题，用专业的知识解答了唐三彩的色彩问题。唐三彩上的黄釉呈现出浅黄色、深黄色、黄褐色、褐色等多种色彩，但以三色为主。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202207/2.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <p class="text">而后，他结合文物，如唐三彩凤冠天王俑、唐三彩兽面镇墓兽等诠释出唐三彩器物的色彩特征、材质特征。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202207/3.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <p class="text">而现在的唐三彩是什么样子的呢？彦秀老师结合唐三彩的创新性转化，以河南省老字号“高家三彩”非遗技术传承人高水旺先生为例，20世纪70年代以来，以村民高水旺为代表的艺人钻研出唐三彩制作的仿古工艺和新工艺，并结合时代发展赋予了创新和发展的力量，让老字号重新焕发出了新的活力。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202207/4.png" />
        <div class="img-tip">▲课程截图</div>
      </div>
      <p class="text">本次课程志愿者老师精心准备，查阅资料，带领孩子们学习了有关唐三彩的色彩知识，了解了现代手工艺人对唐三彩技艺的传承，为传统色彩知识的普及创造了新的路径。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202207',
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