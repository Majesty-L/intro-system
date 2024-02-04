<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">为校园赋彩<span class="banner_search"><img src="/icons/search.svg" />查看原文</span></div>
            <div class="banner_tips">2022/06/24</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">2022年6月24日下午，儿童色彩美育研究团队为东茅街小学的孩子们带来了一节项目式校园色彩设计课，志愿者们化身“设计小老师”，让不同年级的孩子们当一回“校园小导游”，与他们一起感知校园空间，畅想未来校园的模样，共同为东茅街小学赋彩。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202202/1.png" />
        <div class="img-tip">▲课程合照</div>
      </div>
      <p class="text">设计课堂的第一个环节，黄茜老师为孩子们展示了世界各地的小学都长什么样子，孩子们都瞪大了眼睛，他们经过介绍后，才发现校园空间的颜色原来可以如此丰富多彩。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202202/2.png" />
        <div class="img-tip">▲小小设计师教师团队“豪华”亮相</div>
      </div>
      <p class="text">看完其他小学色彩缤纷的样子，孩子们已经迫不及待想要给自己的学校“换件新衣”，然而设计并不是拍脑袋决定的，志愿者们发挥专业特长，手把手教孩子们开启设计之旅。志愿者们先引导孩子们凭借自己的记忆画出学校的认知地图，以此来判断孩子们对学校各空间的熟悉与喜爱程度，并让他们发现平时容易忽略却可以通过设计变得更加精彩的角落。</p>
      <div class="center-block-img">
        <img class="" src="/course/l202202/3.png" />
        <div class="img-tip">▲志愿者引导孩子们绘制记忆地图</div>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202202/4.png" />
        <div class="img-tip">▲孩子们画的记忆地图</div>
      </div>
      <p class="text">之后孩子们按年级被分成六组，拿着自己画的地图，兴致勃勃地向每组的带队志愿者介绍自己的校园，并带他们从学校大门出发重走一遍自己在学校一天的活动路线。</p>
      <div class="center-block-img">
        <div class="col2-2">
          <img class="" src="/course/l202202/5.png" />
          <img class="" src="/course/l202202/6.png" />
        </div>
        <div class="img-tip">▲孩子们作为校园小导游向志愿者们介绍印象深刻的校园空间</div>
      </div>
      <div class="text">
        <p>在这个过程中，孩子们向志愿者们描述自己对各栋教学楼、各个教室模样的畅想。孩子们头脑中已经有了一定的设计思维，没有只考虑自己喜欢的颜色，而是理性地思考每种颜色给人心理上的不同感受。</p>
        <p>孩子们带着志愿者走完校园的每一处角落，同时或感性或理性地对校园空间进行了认知与口头设计。回到教室，孩子们迫不及待地拿出马克笔，将志愿者们提前准备好的校园空间线稿图涂成漂亮的彩色画面。</p>
        <p>除了纸上的画面，还有开始准备的场地模型，孩子们在代表小学教学楼的白盒子上进行了色彩、图案设计，并放到周边环境场地模型中去观察是否精彩或和谐，模拟体验了校园色彩设计师的角色。</p>
      </div>
      <div class="center-block-img">
        <img class="" src="/course/l202202/7.png" />
        <div class="img-tip">▲作品呈现</div>
      </div>
      <p class="text">这次活动的意义不言而喻，东茅街小学的孩子们在志愿者与老师们的带领下真正参与到校园空间的色彩设计当中，课程不仅让孩子们接触到色彩在建筑空间上的应用，体会到空间色彩的奥秘与魅力，懂得设计的方法与逻辑，更为后续学校色彩改造提供了学生视角的思路与方案，从而增强了孩子们的自信，进一步帮助他们肯定了自我价值。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'l-202202',
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
      line-height: 3rem; /* 100% */
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