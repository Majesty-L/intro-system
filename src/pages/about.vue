<template>
  <a-layout>
    <div class="about-container">
      <div class="banner">
        <a-row>
          <a-col :span="3"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">关于我们</div>
              <div class="banner_tips">在中国流行色协会儿童色彩素养科普基地建立，AIC国际色彩联盟色彩教育小组，湖南省美术家协会美术教育委员会的关怀与支持下，成立的非营利儿童美育研究团队，我们的愿景是传承中国传统色彩、提高国民色彩素养、促进跨学科色彩交流。</div>
              <div class="operate">
                <a-button shape="round">加入我们</a-button>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="intro">
        <div class="text"> 
          <div class="title">
            <p class="pre">Our Story</p>
            <p class="head">团队故事</p>
          </div>
          <div class="tips">
            <p>儿童色彩美育研究团队成立于2020年，致力于实现中国儿童色彩美育的体系化和专业化，通过色彩教育的不同内涵，培养孩子能力的三个维度--逻辑力、创造力、融合力。</p>
            <p>逻辑力是指对于某件事物进行观察，分析，判断之后，进行推理、论证的一种综合能力。色彩是科学的存在，孩子们在实验观察中，验证色彩的相关科学知识，提升逻辑力。创造力是指产生新思想，发现和创造新事物的能力。让孩子们在平面、立体、通感等色彩设计中，进行色彩创造与表达，提升创造力。融合力是指如何与他人协作，为社会服务，与世界融合在一起的能力。在色彩教育中，孩子们会通过一个又一个的团队实际项目为社会做出自己的贡献，增强自我价值感与存在感，提升融合力。</p>
          </div>
        </div>
        <div class="text_img"><img src="/bgImg/about_text.png"/></div>
      </div>
      <div class="work">
        <div class="work_title">
          <div class="title_text">
            <p class="pre">Our Mission</p>
            <p class="head">我们的目标</p>
          </div>
        </div>
        <div class="work_list">
          <div class="list_container mr">
            <div class="goal">
              <h3 style="color:var(--YELLOW-600, #F8B405);">儿童色感启蒙</h3>
              <p>开启儿童色觉感知系统训练，将潜藏在我们身上人人皆有的色彩美感，通过有趣生动的方式，得到提升。</p>
            </div>
            <div class="list_img"><img class="br" :src="`/bgImg/about_work1.png`"/></div>
          </div>
          <div class="list_container ml">
            <div class="list_img"><img class="bl" :src="`/bgImg/about_work2.png`"/></div>
            <div class="goal">
              <h3 style="color:var(--RED-BASE, #F46803);">儿童色彩心理研究</h3>
              <p>有效促进儿童良好心理品质的养成，系统化提升孩子们的色彩艺术素养和美学素养。</p>
            </div>
          </div>
          <div class="list_container mr">
            <div class="goal">
              <h3 style="color:var(--PURPLE-600, #8989FE);">儿童色彩应用实践</h3>
              <p>以动手实践为导向，提倡儿童运用色彩参与公益活动，用美育引导德育，提高动手能力、增强责任意识。</p>
            </div>
            <div class="list_img"><img class="br" :src="`/bgImg/about_work3.png`"/></div>
          </div>
        </div>
      </div>
      <div class="wish">
        <div class="wish_title">
          <div class="title_text">
            <p class="pre">Theories Behind</p>
            <p class="head">我们的理念</p>
          </div>
        </div>
        <div class="wish_list">
          <div class="list_container">
            <div class="bt subtitle1">建构主义</div>
            <p>建构主义是一种关于知识和学习的理论，强调学习者的主动性，认为学习是学习者基于原有的知识经验生成意义、建构理解的过程，而这一过程常常是在社会文化互动中完成的。</p>
          </div>
          <div class="list_container">
            <div class="bt subtitle2">项目式学习</div>
            <p>项目式学习是一种以学生为中心的教学方法,它提供一些关键素材构建一个环境，学生组建团队通过在此环境里解决一个开放式问题的经历来学习。</p>
          </div>
          <div class="list_container">
            <div class="bl subtitle3">斯坦纳<br/>教育艺术理论</div>
            <p>鲁道夫·斯坦纳在20世纪初期创立了华德福教育，并进行了丰富的教育理论以及实践的探究。斯坦纳教育艺术理论主要包含以下观点:儿童的认知发展理论，利用五种感官指导感官和心理进行学习;华德福教育的节奏、模仿和秩序原则;教育材料，重视过程，而不是结果。</p>
          </div>
        </div>
      </div>
      <div class="team">
        <p class="team_header">
          战略合作机构
        </p>
        <div class="team_list">
          <div v-for="item in 6" class="item" :key="item">
            <img class="list_img" :src="`/images/team${item}.png`"/>
            <span>{{teamName[item-1]}}</span>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
const teamName = ['长沙市芙蓉区东茅街小学', '长沙市雨花区砂子塘小学', '长沙市雨花区枫树山悦东方小学', '长沙县育英会展中心小学', '大信华彩艺术博物馆', '春虫社创室'];
export default {
  name: 'aboutPage',
  components: {
  },
  data() {
    return {
      teamName,
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
  background: url('../../public/bgImg/about_banner.png') var(--YELLOW-200, #FFECBB) top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 55vw;
    .banner_title {
      max-width: 100%;
      color: var(--grey-100, #FEFEFE);
      font-family: TsangerFeiBai;
      font-size: 5.33331rem;
      font-weight: 400;
      line-height: 100%;
    }
    .banner_tips {
      text-align: justify;
      color: var(--grey-100, #FEFEFE);
      font-size: 2rem;
      font-weight: 400;
      line-height: 150%;
      margin: 1.44rem 0;
    }

    .operate {
      margin-top: 3rem;
      .ant-btn {
        color: var(--grey-100, #FEFEFE);
        background-color: var(--RED-BASE, #F46803);
        &:first-child {
          border-color: var(--RED-BASE, #F46803);
        }
      }
      .ant-btn:hover, .ant-btn:focus {
        border-color: var(--RED-BASE, #F46803);
      }
    }
  }
}
@media (max-width: 960px) {
.banner {
  height: 95rem;
  background: url('../../public/bgImg/about_banner.png') var(--YELLOW-200, #FFECBB) top / 100% 100% no-repeat;
  .bgImg {
    width: 80vw;
    .banner_title {
      font-size: 8rem;
    }
    .banner_tips {
      font-size: 3rem;
      margin: 2rem 0;
    }

    .operate {
      margin-top: 8rem;
    }
  }
}
}
.intro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10rem 15rem;
  background: var(--YELLOW-300, #FFECBB);
  gap: 4.5rem;
  .text {
    flex: 1 0 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      margin-bottom: 4rem;
      border-radius: 111rem;
      background: var(--YELLOW-BASE, #FFC632);
      padding: 2rem 5rem;
      .pre {
        color: var(--RED-BASE, #F46803);
        text-align: center;
        font-family: yixinxiaojiling;
        font-size: 1.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      .head {
        color: var(--RED-BASE, #F46803);
        text-align: center;
        font-family: TsangerFeiBai;
        font-size: 5.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 0;
      }
    }
    .tips {
      color: var(--BRAND-1000, #743600);
      text-align: justify;
      font-size: 1.33331rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; 
    }
  }
  .text_img {
    flex: 1 0 40%;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 960px) {
.intro {
  .text {
    flex: 1 0 80%;
    .title {
      border-radius: 165rem;
      padding: 3rem 8rem;
      margin-bottom: 8rem;
      .pre {
        font-size: 2rem;
      }
      .head {
        font-size: 8rem;
      }
    }
    .tips {
      font-size: 2rem;
    }
  }
  .text_img {
    flex: 1 0 40%;
  }
}
}
@media (max-width: 430px) {
.intro {
  padding: 10rem 18rem;
  .text {
    .title {
      border-radius: 200rem;
      padding: 3.6rem 10rem;
      margin-bottom: 8rem;
    }
    .tips {
      font-size: 2.4rem;
    }
  }
}
}

.work {
  background: var(--BRAND-300, #FFCC80);
  padding-bottom: 8rem;
  .work_title {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 6rem;
    .title_text {
      border-radius: 111rem;
      background: var(--BRAND-BASE, #F90);
      padding: 2rem 5rem;
      .pre {
        color: var(--PURPLE-900, #4228C5);
        text-align: center;
        font-family: yixinxiaojiling;
        font-size: 1.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      .head {
        color: var(--PURPLE-900, #4228C5);
        text-align: center;
        font-family: TsangerFeiBai;
        font-size: 5.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 0;
      }
    }
  }
  .work_list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
    .list_container {
      border-radius: 1rem;
      background: var(--grey-100, #FEFEFE);
      /* shadow */
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      flex: 0 0 27rem;
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0;
      .br {
        border-radius: 0 1rem 1rem 0;
      }
      .bl {
        border-radius: 1rem 0 0 1rem;
      }
      .goal {
        margin: 0 3rem;
        h3 {
          font-size: 4rem;
          text-align: right;
          font-weight: 900;
        }
        p {
          color: var(--grey-600, #2C2B2B);
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 160%; /* 150% */
        }
      }
      .list_img {
        flex: 1 0 50%;
        img {
          width: 100%;
        }
      }
    }
    .ml {
      margin-left: 6rem;
    }
    .mr {
      margin-right: 6rem;
    }
  }
}

@media (max-width: 960px) {
  .work {
  .work_title {
    padding: 12rem 0 9rem;
    .title_text {
      border-radius: 165rem;
      padding: 3rem 8rem;
      .pre {
        font-size: 2rem;
      }
      .head {
        font-size: 8rem;
      }
    }
  }
  .work_list {
    gap: 10rem;
    margin: 0 8rem 20rem;
    .list_container {
      /* shadow */
      flex: 0 0 80rem;
      max-width: 80%;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      .br {
        border-radius: 0 0 1rem 1rem;
      }
      .bl {
        border-radius: 1rem 1rem 0 0;
      }
      .goal {
        margin: 10rem 8rem;
        h3 {
          font-size: 6rem;
        }
        p {
          font-size: 2.5rem;
        }
      }
      .list_img {
        flex: 1 0 50%;
        img {
          max-width: 100%;
        }
      }
    }
  }
}
}

@media (max-width: 430px) {
.work {
  .work_list {
    .ml {
      margin-left: 0;
    }
    .mr {
      margin-right: 0;
    }
  }
}
}
.wish {
  background: var(--BRAND-100, #FFEFD8);
  .wish_title {
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 4rem 0 0;
    .title_text {
      border-radius: 111rem;
      background: var(--RED-BASE, #F46803);
      padding: 2rem 5rem;
      .pre {
        color: var(--YELLOW-100, #FFF4D6);
        text-align: center;
        font-family: yixinxiaojiling;
        font-size: 1.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
      }
      .head {
        color: var(--YELLOW-100, #FFF4D6);
        text-align: center;
        font-family: TsangerFeiBai;
        font-size: 5.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 0;
      }
    }
  }
  .wish_list {
    display: flex;
    flex-wrap: wrap;
    padding: 6rem 10rem 13rem;
    gap: 4rem;
    .list_container {
      flex: 1 0 40%;
      max-width: 100%;
      border-radius: 1rem;
      min-height: 29rem;
      background: var(--grey-100, #FEFEFE);
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      &:nth-child(1) {
        .subtitle1 {
          background: url('../../public/bgImg/about_wish1.png') white top / cover no-repeat;
          height: 13rem;
        }
      }
      &:nth-child(2) {
        .subtitle2 {
          background: url('../../public/bgImg/about_wish2.png') white top / cover no-repeat;
          height: 13rem;
        }
      }
      &:nth-child(3) {
        display: flex;
        .subtitle3 {
          background: url('../../public/bgImg/about_wish3.png') white top / cover no-repeat;
          flex: 0 0 50%;
        }
      }
      .bt {
        border-radius: 1rem 1rem 0 0;
      }
      .bl {
        border-radius: 1rem 0 0 1rem;
      }
      p {
        display: flex;
        align-items: center;
        padding: 3rem;
        color: var(--grey-600, #2C2B2B);
        text-align: justify;
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 36px */
      }
      div {
        display: flex;
        align-items: center;
        padding-left: 3rem;
        color: var(--grey-100, #FEFEFE);
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 3rem;
        font-style: normal;
        font-weight: 900;
        line-height: 150%; /* 72px */
      }
    }
  }
}
@media (max-width: 960px) {
.wish {
  .wish_title {
    padding: 12rem 0 0;
    .title_text {
      border-radius: 165rem;
      padding: 3rem 8rem;
      .pre {
        font-size: 2rem;
      }
      .head {
        font-size: 8rem;
      }
    }
  }
  .wish_list {
    padding: 9rem 15rem 20rem;
    gap: 9rem;
    .list_container {
      flex: 1 0 80%;
      min-height: 29rem;
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      &:nth-child(1) {
        .subtitle1 {
          background: url('../../public/bgImg/about_wish1.png') white top / cover no-repeat;
          height: 20rem;
        }
      }
      &:nth-child(2) {
        .subtitle2 {
          background: url('../../public/bgImg/about_wish2.png') white top / cover no-repeat;
          height: 20rem;
        }
      }
      &:nth-child(3) {
        display: block;
        .subtitle3 {
          background: url('../../public/bgImg/about_wish3.png') white top / cover no-repeat;
          height: 40rem;
        }
      }
      .bl {
        border-radius: 1rem 1rem 0 0;
      }
      p {
        padding: 6rem;
        font-size: 3rem;
      }
      div {
        padding-left: 8rem;
        font-size: 6rem;
      }
    }
  }
}
}
@media (max-width: 430px) {
.wish {
  .wish_list {
    padding: 9rem 18rem 20rem;
  }
}
}
.team {
  padding: 8rem 10rem 13rem;
  background: var(--grey-100, #FEFEFE);
  .team_header {
    color: var(--BRAND-BASE, #F90);
    font-family: TsangerFeiBai;
    font-size: 5.33331rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
  .team_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6rem;
    .item {
      flex: 1 0 25%;
      display: flex;
      align-items: center;
      .list_img {
        width: 8rem;
        margin-right: 1.3rem;
      }
      span {
        color: var(--grey-600, #2C2B2B);
        font-size: 1.66669rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
@media (max-width: 960px) {
.team {  
  padding: 12rem 15rem;
  .team_header {
    font-size: 8rem;
  }
  .team_list {
    .item {
      flex: 1 0 40%;
      .list_img {
        width: 12rem;
        margin-right: 2rem;
      }
      span {
        font-size: 2.5rem;
      }
    }
  }
}
}
@media (max-width: 430px) {
.team {  
  padding: 14.4rem 18rem;
  .team_header {
    font-size: 9.6rem;
  }
  .team_list {
    gap: 5rem;
    .item {
      flex: 1 0 80%;
      .list_img {
        width: 14.4rem;
        margin-right: 2.4rem;
      }
      span {
        font-size: 3rem;
      }
    }
  }
}
}
</style>
