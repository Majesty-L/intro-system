<template>
  <a-layout>
    <div class="homepage-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <img class="banner_title" src="../../public/bgImg/homepage_title.png"/>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="movie">
        <video src="../../public/bgImg/video.png" controls width="100%"></video>
      </div>
      <div class="intro">
        <div class="text"> 
          <div class="title">
            <div class="en">Color aesthetic education for children</div>
            <div class="cn">儿童色彩美育</div>
          </div>
          <div class="tips">儿童色彩美育从色彩基础知识学习、色彩实践运用、校园空间色彩环境营造三个维度，并加人中国传统色彩教育的内容，通过科学美育培训安排和人才培养，达成对儿童色彩美育普及培训的目标。</div>
        </div>
        <div class="text_img">
          <img src="/bgImg/homepage_text.png"/>
        </div>
      </div>
      <div class="work">
        <div class="work_title">
          <div class="en">Work News</div>
          <div class="cn">工作动态</div>
        </div>
        <div class="work_list">
          <div v-for="item in 4" :key="item" class="list_container">
            <img class="list_img" :src="`/images/work${item}.png`"/>
            <div class="caption">
              <div class="text">{{ caption_list[item-1] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
export default {
  name: 'homePage',
  components: {
  },
  data() {
    return {
      caption_list: ['2023年国际色彩协会(AIC)大会', '2023年第二届“中国传统色彩研究青年论坛”发言', '馆校合作儿童色彩美育主题综合实践活动之《遇见非遗 古法草木植物染》', '馆校合作儿童色彩美育课程之《古建筑中的色彩》'],
    }
  },
  methods: {
  },
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 70rem;
  background: url('../../public/bgImg/homepage_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 50vw;
    .banner_title {
      max-width: 100%;
    }
  }
}
.movie {
  height: 60rem;
  display: flex;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  background: white;
}
.intro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10rem 15rem;
  background: var(--PURPLE-BASE, #9EA2FF);
  gap: 4rem;
  .text {
    flex: 1;
    .title {
      text-align: center;
      border-radius: 6.25rem;
      padding: 1.5rem 0;
      background: var(--PURPLE-800, #6A4DF9);
      .en {
        color: var(--YELLOW-400, #FFD976);

        /* header/64 */
        font-family: TsangerFeiBai;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem; /* 100% */
      }
      .cn {
        color: var(--YELLOW-400, #FFD976);

        /* header/64 */
        font-family: TsangerFeiBai;
        font-size: 4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 4rem; /* 100% */
      }
    }
    .tips {
      margin-top: 3.5rem;
      color: var(--grey-600, #2C2B2B);
      text-align: justify;
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 120% */
    }
  }
  .text_img {
    flex: 1;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 1200px) {
  
  .intro {
    .text {
      .tips {
        margin: 5rem 0;
        font-size: 3rem;
        line-height: 3.6rem; /* 120% */
      }
    }
    .text_img {
      flex: 100%;
      img {
        max-height: 240px;
      }
    }
  }
}
.work {
  background: var(--BRAND-50, #FFFCF2);
  text-align: center;
  .work_title {
    display: inline-block;
    margin: 4rem auto;
    padding: 1.5rem 6rem;
    border-radius: 6.25rem;
    background: var(--YELLOW-200, #FFECBB);
    .en {
      color: var(--BRAND-BASE, #F90);
      font-family: yixinxiaojiling;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1rem; /* 100% */
    }
    .cn {
      color: var(--BRAND-BASE, #F90);

      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
  }
  .work_list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4.5rem;
    .list_container {
      position: relative;
      flex: 0 0 600px;
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      .list_img {
        width: 100%;
        border-radius: 16px;
        box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      }
      .caption {
        position: absolute;
        width: 100%;
        height: 15%;
        border-radius: 0 0 16px 16px;
        bottom: 0;
        display: flex;
        padding-left: 28px;
        align-items: center;
        background: var(--gradient-black, rgba(44, 43, 43, 0.50));
        backdrop-filter: blur(10px);
        .text {
          overflow: hidden;
          color: var(--grey-100, #FEFEFE);
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: "Alibaba PuHuiTi 2.0";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 32px; /* 133.333% */
        }
      }
    }
  }
}

@media (max-width: 550px) {
  
  .work {
    .work_list {
      .list_container {
        .caption {
          padding-left: 5rem;
          .text {
            font-size: 5rem;
            line-height: 5rem;
          }
        }
      }
    }
  }
}
</style>
