<template>
  <div class="container">
    <div class="banner">
      <a-row>
        <a-col :span="4"></a-col>
        <a-col :span="12">
          <div class="bgImg">
            <div class="banner_title">焕彩东小<span class="banner_search"><img src="/icons/search.svg" />查看原文</span>
            </div>
            <div class="banner_tips">2022/11/15</div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="article">
      <p class="text">
        2022年11月15日下午，团队来到了东茅街小学，在美丽的校园里，小学生和大学生一起，对学校的各个细节设计为主题，推动儿童色彩素养科普，促进孩子们对于身边的环境和空间的色彩设计和理解感知，共同建设美好的校园。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202203/1.png" />
        <div class="img-tip">▲东茅街小学集体合照</div>
      </div>
      <p class="text">
        本次活动准备了色卡、IPAD、线稿、相机等工具。志愿者们提前带领孩子们熟悉周围场地，挑选想要选择的校园与社区设计专题。在殷校长、蔡雅阁老师带领下，志愿者们与孩子们孩子们分成10个小组，对校园进行色彩设计。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202203/2.png" />
        <div class="img-tip">▲大朋友小朋友们都在认真听黄老师进行活动前授课</div>
      </div>
      <p class="text">大学生志愿者戴宇菲、张峻玮的抱抱屋设计方案以鲜艳明丽的色彩为主，主色调为自然色系，在抱抱屋拱门处营造出静谧柔和的色彩氛围，为校园增添安静和谐又不失欢快的一角。</p>
      <div class="center-block-img">
        <img class="" src="/course/p202203/3.png" />
        <img class="" src="/course/p202203/4.png" />
        <div class="img-tip">▲创作过程与作品照片</div>
      </div>
      <p class="text">
        志愿者罗彩舂、郑丞恩在色彩设计中充分运用了色彩的联想功能。“爱”代表爱心涂成红色，“惜”看到了下面的“日”想到了太阳涂成了橙色。“花”联想到了花园的粉花，“草”联想到了绿色的草，“春”联想到了春天的紫藤萝花。“满”联想到了蓝色的大海和水，“东”联想到了东茅街的植物，“小”则是小朋友自己最喜欢的紫色。
      </p>
      <div class="center-block-img">
        <div class="col2-1">
          <div class="col2-1-1">
            <img class="" src="/course/p202203/5.png" />
          </div>
          <div class="col2-1-2">
            <img class="" src="/course/p202203/6.png" />
          </div>
        </div>
        <div class="img-tip">▲活动照片</div>
      </div>
      <p class="text">
        其他志愿者组别也是匠心独运，设计出了许多独特的作品，如毛嫣清和贺晓楠的井盖设计方案主色调以蓝色、黄色、绿色为主，与东茅街小学的教学楼色彩相协调，设计图案，是两只绿苗和一双小手，意在倡导小朋友们热爱大自然，保护环境；代表东茅街小学的老师们悉心呵护学生健康成长。
      </p>
      <div class="center-block-img">
        <img class="" src="/course/p202203/7.png" />
        <div class="img-tip">▲合照和工作照，作品</div>
      </div>
      <div class="text">
        <p>
          在活动最后，评委们为东茅街小学的同学们和志愿者团队颁奖。志愿者张峻玮说：“这是我第一次来到东茅街小学，刚进大门，这座小学就以丰富的色彩和精致的细节吸引了我。在本次色彩活动中，我们小组负责的是抱抱屋拱门的设计。在设计过程中，小朋友们用极大的热情和丰富的想象力鼓励温暖着我。能参与到东茅街小学的建设中来，是我的荣幸。”
        </p>
        <p>
          本次活动，志愿者们与孩子们合作，在真实的场景中，感受色彩，创造色彩。2022年6月1日，东茅街小学建设成立中国流行色协会儿童色彩素养科普基地，校园改造与色彩教育同步深入。色彩焕新东小，美在身边。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-202203',
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
}</style>