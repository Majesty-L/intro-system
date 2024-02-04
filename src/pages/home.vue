<template>
  <a-layout>
    <div class="homepage-container">
      <div class="banner">
        <div class="bgImg">
          <div class="banner_title">色彩<br/>推动世界</div>
          <div class="banner_btn"><a-button shape="round">了解更多</a-button><a-button shape="round" ghost>加入我们</a-button></div>
        </div>
      </div>
      <div class="movie" id="video">
        <video src="/server-movie/movie.mov" controls width="100%" poster="/images/video.png"></video>
      </div>
      <div class="intro">
        <div class="title">
          <div class="en">Color aesthetic education for children</div>
          <div class="cn">儿童色彩美育</div>
        </div>
        <div class="tips">儿童色彩美育从色彩基础知识学习、色彩实践运用、校园空间色彩环境营造三个维度，并加人中国传统色彩教育的内容，通过科学美育培训安排和人才培养，达成对儿童色彩美育普及培训的目标。自2020年成立以来，我们致力于实现中国儿童色彩美育的体系化和专业化，通过色彩教育的不同内涵，培养孩子的逻辑力、创造力、融合力。</div>
        <div class="text_img">
          <div class="img_container text1">
            <p class="subtitle">创造力</p>
            <p class="intro_msg">在平面、立体、通感等设计中，进行色彩创造与表达，提升创造力。</p>
          </div>
          <div class="img_container text2">
            <p class="subtitle">逻辑力</p>
            <p class="intro_msg">在实验观察中，验证色彩的相关科学知识，提升逻辑力。</p>
          </div>
          <div class="img_container text3">
            <p class="subtitle">融合力</p>
            <p class="intro_msg">在与他人协作、社会服务中，提升融合力。</p>
          </div>
        </div>
      </div>
      <div class="action">
        <div class="title">
          <div class="en">What Do We Do</div>
          <div class="cn">我们的行动</div>
        </div>
        <a-row class="lesson">
          <a-col class="img" :xs="10" :sm="12" :lg="10" :xl="9" :xxl="8">
            <div>
              <img src="/bgImg/homepage_action1.png" alt=""/>
            </div>
          </a-col>
          <a-col :xs="14" :sm="12" :lg="14" :xl="15" :xxl="16">
            <div class="text lesson_text">
              <div class="action_header">
                儿童美育课程<div class="action_rec" />
              </div>
              <div class="action_paragraph">
                儿童色彩美育课程以建构主义、项目式学习、斯坦纳教育艺术理论等教育学理论作为学理基础，课程主要面向6-12岁儿童，内容涵盖色彩科学、色彩文化、色彩设计等，旨在激发儿童的艺术兴趣，提升儿童对传统文化审美感知，促进儿童的身心健全发展，最终成长为德才兼备的人才。
              </div>
            </div>
          </a-col>
        </a-row>
        <a-row class="play">
          <a-col :xs="14" :sm="12" :lg="14" :xl="15" :xxl="16">
            <div class="text play_text">
              <div class="action_header">
                <div class="action_rec" />儿童美育活动
              </div>
              <div class="action_paragraph">
                儿童色彩美育活动是由团队与实践平台、媒体平台及资源平台联合举办，包含学校、公众号、博物馆等平台，首创以色彩为主题的各项活动，如展览、社区设计、馆校体验、学术会议等。活动中不仅可以看到儿童的活动成果，更能感受到儿童们对于生活的热爱与表达。
              </div>
            </div>
          </a-col>
          <a-col class="img" :xs="10" :sm="12" :lg="10" :xl="9" :xxl="8">
            <div>
              <img src="/bgImg/homepage_action2.png" alt=""/>
            </div>
          </a-col>
        </a-row>
        <a-row class="train">
          <a-col class="img" :xs="10" :sm="12" :lg="10" :xl="9" :xxl="8">
            <div>
              <img src="/bgImg/homepage_action3.png" alt=""/>
            </div>
          </a-col>
          <a-col :xs="14" :sm="12" :lg="14" :xl="15" :xxl="16">
            <div class="text train_text">
              <div class="action_header">
                儿童美育教师培训<div class="action_rec" />
              </div>
              <div class="action_paragraph">
                教师色彩美育水平是色彩美育践行的重要保障。儿童色彩美育教师培训旨在培养具备美感、能够传播色彩素养的教师，使其成为科研创新和课程实践的先锋。培训以专家讲座、社会实践和工作坊等形式进行。
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="work">
        <div class="work_title">
          <div class="en">Work News</div>
          <div class="cn">工作动态</div>
        </div>
        <div class="work_list">
          <div v-for="item in 4" :key="item">
            <a-row class="list_container">
              <a-col :lg="11">
                <img class="list_img" :src="`/images/work${item}.png`"/>
              </a-col>
              <a-col :lg="13">
                <div class="caption">
                  <div class="title"><img src="/icons/right.svg" alt="">{{ caption_detail[item-1].title }}</div>
                  <div class="time">{{ caption_detail[item-1].time }}</div>
                  <div class="text">{{ caption_detail[item-1].text }}</div>
                </div>
              </a-col>
            </a-row>
            <divider v-if="item<4"></divider>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
import divider from '@/components/divider.vue';
export default {
  name: 'homePage',
  components: {
    divider,
  },
  data() {
    return {
      caption_detail: [
        {
          title: '2023年第二届“中国传统色彩研究青年论坛”发言',
          time: '2023-12-09',
          text: '第二届“中国传统色彩研究青年论坛（2023）”于2023年12月9日召开，本次论坛的主题为“中国传统色彩观念与应用”。团队负责人黄老师在线上进行了名为《中国传统色儿童美育研究与实践》的主题演讲。',
        },
        {
          title: '2023年国际色彩协会(AIC)大会',
          time: '2023-11-28',
          text: '2023年，AIC大会由泰国色彩协会 （CST）主办，主题为 “COLOR SPEAKS ALL LANGUAGES ”。团队负责人黄老师在清莱The Riverie by Kathathan 酒店Doi Tong会场发表了名为《中国儿童色彩教育教材设计与教育策略》的演讲。',
        },
        {
          title: '馆校合作儿童色彩美育主题综合实践活动之《遇见非遗 古法草木植物染》',
          time: '2023-11-10',
          text: '2023年11月10日，长沙市雨花区枫树山悦东方小学联动团队、郑州华彩艺术博物馆、湖南女子学院美术与设计学院、浏阳“原乡染坊.非遗传习所”展开了一场别致的儿童色彩美育主题综合实践活动——《遇见非遗 古法草木植物染》。',
        },
        {
          title: '馆校合作儿童色彩美育课程之《古建筑中的色彩》',
          time: '2023-10-31',
          text: '2023年10月31日，在团队的支持下，由大信华彩艺术博物馆与长沙市雨花区枫树山悦东方小学共同展开了一场围绕“传统色彩文化”主题的儿童色彩美育学习单元。',
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0,0);
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
    max-width: 60vw;
    padding-left: 9rem;
    .banner_title {
      color: var(--grey-100, #FEFEFE);
      font-family: TsangerFeiBai;
      font-size: 10rem;
      font-style: normal;
      font-weight: 400;
      line-height: 12.5rem; /* 117.188% */
    }
    .banner_btn {
      display: flex;
      margin-top: 3rem;
      width: 20rem;
      gap: 1.5rem;
      .ant-btn {
        color: var(--grey-100, #FEFEFE);
        background-color: var(--PURPLE-700, #7B77FB);
        &:first-child {
          border-color: var(--PURPLE-700, #7B77FB);
        }
      }
      .ant-btn:hover, .ant-btn:focus {
        border-color: var(--PURPLE-700, #7B77FB);
      }
    }
  }
}


// mobile banner换背景图
@media (max-width: 430px) {
  .banner {
    background: url('../../public/bgImg/homepage_banner_mobile.png') white top / cover no-repeat;
    height: 506px;
    .bgImg {
      .banner_title {
        font-size: 84px;
        line-height: 100px;
      }
    }
  }
}

.movie {
  height: 70rem;
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
  padding: 8rem 16rem 13rem;
  background: var(--PURPLE-BASE, #9EA2FF);
  gap: 5.3rem;
  .title {
    margin: 0 auto;
    border-radius: 6.25rem;
    padding: 1.5rem 5.33rem;
    text-align: center;
    background: var(--PURPLE-800, #6A4DF9);
    .en {
      color: var(--YELLOW-400, #FFD976);
      font-family: TsangerFeiBai;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
    .cn {
      color: var(--YELLOW-400, #FFD976);
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
  .tips {
    font-size: 1.66669rem;
    font-weight: 400;
    line-height: 140%;
  }
  .text_img {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 6rem;
    .img_container {
      flex: 1 0 25%;
      background-color: #fff;
      border-radius: 1.33331rem;
      box-shadow: 0px 2.267px 1.867px 0px rgba(31, 31, 31, 0.02), 0px 6px 4.667px 0px rgba(31, 31, 31, 0.03), 0px 10.667px 9.333px 0px rgba(31, 31, 31, 0.04), 0px 24px 20px 0px rgba(31, 31, 31, 0.05), 0px 33.333px 66.667px 0px rgba(31, 31, 31, 0.07);
      .subtitle {
        padding-top: 20rem;
        color: var(--PURPLE-800, #6A4DF9);
        text-align: center;
        font-size: 4rem;
        font-weight: 900;
        line-height: 150%;
      }
      .intro_msg {
        padding: 0 4rem 4rem;
        color: var(--grey-600, #2C2B2B);
        text-align: justify;
        font-size: 1.66669rem;
        font-weight: 400;
        line-height: 140%;
      }
    }
    .text1 {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 38.35%, #FFF 62.57%), url('../../public/bgImg/homepage_text1.png'), lightgray top / contain no-repeat;
      background-position: center top;
    }
    .text2 {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 38.35%, #FFF 62.57%), url('../../public/bgImg/homepage_text2.png'), lightgray top / contain no-repeat;
      background-position: center 20%;
    }
    .text3 {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.80) 38.35%, #FFF 62.57%), url('../../public/bgImg/homepage_text3.png'), lightgray top / contain no-repeat;
      background-position: center top;
    }
  }
}

// 儿童色彩美育 960px-1440px
@media (max-width: 1440px) {
  .intro {
    padding: 96px 150px 160px;
    gap: 5.3rem;
    .title {
      width: 512px;
      border-radius: 1332px;
      padding: 24px 64px;
      .en {
        font-size: 16px;
      }
      .cn {
        font-size: 64px;
      }
    }
    .text_img {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 4.5rem;
      .img_container {
        flex: 1 0 30%;
      }
    }
  }
}

// 儿童色彩美育 430px-960px
@media (max-width: 960px) {
  .intro {
    padding: 12rem 20rem 20rem;
    gap: 5.3rem;
    .title {
      border-radius: 166rem;
      padding: 3rem 8rem;
      .en {
        font-size: 2rem;
      }
      .cn {
        font-size: 8rem;
      }
    }
    .text_img {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 4.5rem;
      .img_container {
        flex: 1 0 30%;
      }
    }
  }
}
// 儿童色彩美育 mobile
@media (max-width: 430px) {
  .intro {
    padding: 15rem 18rem 25rem;
    gap: 10rem;
    .title {
      width: 100%;
      border-radius: 200rem;
      padding: 4rem 10rem;
      .en {
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 100%; /* 100% */
      }
      .cn {
        font-size: 10rem;
        font-weight: 400;
        line-height: 100%; /* 100% */
      }
    }
    .text_img {
      gap: 10rem;
      .img_container {
        flex: 1 0 80%;
        border-radius: 2.5rem;
        .subtitle {
          padding-top: 40rem;
          font-size: 8rem;
          line-height: 150%; /* 6rem */
        }
        .intro_msg {
          padding: 0 8rem 8rem;
          font-size: 4rem;
          line-height: 140%; /* 140% */
        }
      }
    }
  }
}
.action {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8rem 10rem 13rem;
  background: var(--grey-100, #FEFEFE);
  gap: 6.67rem;
  .title {
    margin: 0 auto;
    border-radius: 6.25rem;
    padding: 1.5rem 5.33rem;
    text-align: center;
    background: var(--RED-BASE, #F46803);
    .en {
      color: var(--YELLOW-100, #FFF4D6);
      font-family: TsangerFeiBai;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /*  */
    }
    .cn {
      color: var(--YELLOW-100, #FFF4D6);
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 100% */
    }
  }
  .lesson, .play, .train {
    display: flex;
    align-items: center;
    overflow: hidden;
    .img {
      height: 31rem;
      border-radius: 1.5rem;
      overflow: hidden;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
    .text {
      padding: 4.67rem 5.33rem;
      border-radius: 0 1.24rem 1.24rem 0;
      .action_header {
        display: flex;
        justify-content: flex-end;
        align-items: end;
        margin-bottom: 2rem;
        color: var(--BRAND-BASE, #F90);
        text-align: right;
        font-size: 3rem;
        font-style: normal;
        font-weight: 900;
        line-height: 100%; /* 48px */
        gap: 1.3rem;
        .action_rec {
          display: inline-block;
          width: 1.8rem;
          height: 1.8rem;
          background: var(--RED-BASE, #F46803);
        }
      }
      .action_paragraph {
        color: var(--grey-600, #2C2B2B);
        text-align: justify;
        font-size: 1.66669rem;
        font-weight: 400;
        line-height: 2.33331rem; /* 140% */
      }
    }
    .lesson_text {
      background: var(--BRAND-100, #FFEFD8);
    }
    .play_text {
      .action_header {
        text-align: left;
      }
      border-radius: 1.24rem 0 0 1.24rem;
      background: var(--RED-100, #FDE1CD);
    }
    .train_text {
      background: var(--YELLOW-100, #FFF4D6);
    }
  }
  .play {
    .text {
      .action_header {
        justify-content: flex-start;
      }
    }
  }
}

// 我们的行动 992px-1440px
@media (max-width: 1440px) {
.action {
  padding: 96px 120px 160px;
//   gap: 80px;
    .title {
      width: 512px;
      border-radius: 1332px;
      padding: 24px 64px;
      .en {
        font-size: 16px;
      }
      .cn {
        font-size: 64px;
      }
    }
  .lesson, .play, .train {
    .img {
      // height: 23.25rem;
//       border-radius: 16px;
    }
//     .text {
//       padding: 56px 64px 56px 80px;
//       .action_header {
//         display: flex;
//         justify-content: flex-end;
//         align-items: end;
//         text-align: right;
//         font-size: 48px;
//         line-height: 100%; /* 48px */
//         .action_rec {
//           display: inline-block;
//           width: 34px;
//           height: 35px;
//         }
//       }
//     }
  }
}
}

// 我们的行动 430px-992px
@media (max-width: 992px) {
.action {
  padding: 12rem 15rem 20rem;
  .title {
    border-radius: 170rem;
    padding: 3rem 4rem;
    .en {
      font-size: 2rem;
      line-height: 2rem; /* 100% */
    }
    .cn {
      font-size: 8rem;
      line-height: 8rem; /* 100% */
    }
  }
  .lesson, .play, .train {
    .img {
      height: 80rem;
      border-radius: 2rem;
    }
    .text {
      // border-radius: 2rem;
      padding: 7rem 8rem;
      .action_header {
//         display: flex;
//         justify-content: flex-end;
//         align-items: end;
//         text-align: right;
        font-size: 7rem;
//         line-height: 100%; /* 48px */
        .action_rec {
//           display: inline-block;
          width: 5rem;
          height: 4.25rem;
        }
      }
      .action_paragraph {
        font-size: 2.5rem;
        line-height: 140%;
      }
    }
    .lesson_text, .train_text {
      border-radius: 0 2rem 2rem 0;
    }
    .play_text {
      border-radius: 2rem 0 0 2rem;
    }
  }
}
}

// 我们的行动 mobile
@media (max-width: 576px) {
.action {
  padding: 12rem 18rem 24rem;
  .title {
    border-radius: 170rem;
    padding: 3rem 4rem;
    .en {
      font-size: 2rem;
      line-height: 2rem; /* 100% */
    }
    .cn {
      font-size: 8rem;
      line-height: 8rem; /* 100% */
    }
  }
  .lesson, .play, .train {
    .img {
      height: 100rem;
    }
    .text {
      // border-radius: 2rem;
      padding: 8rem 10rem;
      .action_header {
//         display: flex;
//         justify-content: flex-end;
//         align-items: end;
//         text-align: right;
        font-size: 8rem;
//         line-height: 100%; /* 48px */
        .action_rec {
//           display: inline-block;
          width: 5rem;
          height: 4.25rem;
        }
      }
      .action_paragraph {
        font-size: 3rem;
        line-height: 140%;
      }
    }
    .lesson_text, .train_text {
      border-radius: 0 2rem 2rem 0;
    }
    .play_text {
      border-radius: 2rem 0 0 2rem;
    }
  }
}
}
.work {
  background: var(--BRAND-100, #FFEFD8);
  text-align: center;
  padding: 0 12.5rem 8rem;
  .work_title {
    display: inline-block;
    margin: 4rem auto;
    padding: 1.5rem 6rem;
    border-radius: 6.25rem;
    background: var(--BRAND-BASE, #F90);
    .en {
      color: var(--PURPLE-900, #4228C5);
      font-family: yixinxiaojiling;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 100% */
    }
    .cn {
      color: var(--PURPLE-900, #4228C5);

      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 100% */
    }
  }
  .work_list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    .list_container {
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      .list_img {
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      }
      .caption {
        display: flex;
        margin-left: 28px;
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        justify-content: center;
        .title {
          color: var(--grey-600, #2C2B2B);
          font-size: 2rem;
          font-weight: 700;
          line-height: 166.667%;
          display: flex;
          align-items: flex-start;
          img {
            width: 2rem;
            margin-right: 0.8rem;
          }
        }
        .time {
          margin: 1.3rem 0 2rem 2.8rem;
          color: var(--grey-400, #959494);
          font-size: 1.33331rem;
          font-weight: 400;
          line-height: 150%;
        }
        .text {
          margin-left: 2.8rem;
          color: var(--grey-600, #2C2B2B);
          font-size: 1.33331rem;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }
}

// 工作动态 992px-1440px
@media (max-width: 1440px) {
.work {
  // padding: 96px 150px 160px;
//   gap: 80px;
    .work_title {
      width: 479px;
      border-radius: 100px;
      padding: 24px 0;
      .en {
        font-size: 16px;
      }
      .cn {
        font-size: 64px;
      }
    }
  }
}


// 工作动态 576px-992px
@media (max-width: 992px) {
.work {
  padding: 12rem 19rem 15rem;
//   gap: 80px;
    .work_title {
      width: 60rem;
      border-radius: 12rem;
      padding: 3rem 0;
      .en {
        font-size: 2rem;
      }
      .cn {
        font-size: 8rem;
      }
    }
  .work_list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    .list_container {
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      .list_img {
        width: 100%;
        border-radius: 16px;
        box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      }
      .caption {
        margin: 4rem 0 0;
        .title {
          font-size: 3rem;
          img {
            width: 3rem;
            margin-right: 1rem;
          }
        }
        .time {
          margin: 2rem 0 2rem 4rem;
          font-size: 2rem;
        }
        .text {
          margin-left: 4rem;
          font-size: 2rem;
          text-align: justify;
        }
      }
    }
  }
  }
}
// 工作动态 mobile
@media (max-width: 576px) {
.work {
  padding: 12rem 19rem 20rem;
//   gap: 80px;
    .work_title {
      width: 100%;
      border-radius: 15rem;
      padding: 4rem 0;
    }
  }
}

</style>
