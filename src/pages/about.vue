<template>
  <a-layout>
    <div class="about-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">关于我们</div>
              <div class="banner_tips">我们是一个儿童美育研究团队，我们的愿景是传承中国传统色彩、提高国民色彩素养、促进跨学科色彩交流。</div>
              <div class="operate">
                <a-button>了解更多</a-button>
                <a-button>加入我们</a-button>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="intro">
        <div class="text"> 
          <div class="title">团队故事</div>
          <div class="tips">
            <p>儿童色彩美育研究团队成立于2020年，致力于实现中国儿童色彩美育的体系化和专业化，通过色彩教育的不同内涵，培养孩子能力的三个维度——逻辑力、创造力、融合力。</p>
            <p>在实验观察中，验证色彩的相关科学知识，提升逻辑力。在平面、立体、通感等设计中，进行色彩创造与表达，提升创造力。</p>
            <p>在与他人协作、社会服务中，提升融合力。</p>
          </div>
        </div>
        <img class="text_img" src="/bgImg/about_text.png"/>
      </div>
      <div class="work">
        <div class="work_title">
          <div class="title_text">
            我们的愿景
          </div>
        </div>
        <div class="work_list">
          <div class="list_container mr">
            <p>开启儿童色觉感知系统训练，将潜藏在我们身上人人皆有的色彩美感，通过有趣生动的方式，得到提升。</p>
            <img class="list_img br" :src="`/bgImg/about_work1.png`"/>
          </div>
          <div class="list_container ml">
            <img class="list_img bl" :src="`/bgImg/about_work2.png`"/>
            <p>有效促进儿童良好心理品质的养成，系统化提升孩子们的色彩艺术素养和美学素养。</p>
          </div>
          <div class="list_container mr">
            <p>以动手实践为导向，提倡儿童运用色彩参与公益活动，用美育引导德育，提高动手能力、增强责任意识。</p>
            <img class="list_img br" :src="`/bgImg/about_work3.png`"/>
          </div>
        </div>
      </div>
      <div class="wish">
        <div class="wish_title">
          <div class="title_text">
            我们的愿景
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
          <div v-for="item in 5" :key="item">
            <img class="list_img" :src="`/images/team${item}.png`"/>
            <span>{{teamName[item-1]}}</span>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
const teamName = ['长沙市芙蓉区东茅街小学', '长沙市雨花区砂子塘小学', '长沙市雨花区枫树山悦东方小学', '长沙县育英会展中心小学', '大信华彩艺术博物馆'];
export default {
  name: 'aboutPage',
  components: {
  },
  data() {
    return {
      teamName,
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
  background: url('../../public/bgImg/about_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 50vw;
    .banner_title {
      max-width: 100%;
      color: var(--grey-100, #FEFEFE);
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
    .banner_tips {
      color: var(--grey-100, #FEFEFE);
      /* body/24 */
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.25rem; /* 150% */
      margin: 1rem 0;
    }
  }
}
.intro {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10rem 15rem;
  background: var(--YELLOW-300, #FFE298);
  gap: 2rem;
  .text {
    flex: 0 0 400px;
    .title {
      display: inline-block;
      margin-bottom: 4rem;
      border-radius: 100px;
      background: var(--BRAND-BASE, #F90);
      padding: 1rem 3rem;
      color: var(--grey-100, #FEFEFE);

      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
    .tips {
      color: var(--grey-600, #2C2B2B);

      /* body/16 */
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
    }
  }
  .text_img {
    width: 50%;
  }
}
.work {
  background: var(--PURPLE-100, #ECECFF);
  padding-bottom: 8rem;
  .work_title {
    text-align: center;
    padding: 4rem;
    .title_text {
      display: inline-block;
      padding: 1rem 3rem;
      border-radius: 100px;
      background: var(--PURPLE-300, #CED0FF);
      color: var(--PURPLE-800, #6A4DF9);
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
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    .list_container {
      border-radius: 16px;
      background: var(--grey-100, #FEFEFE);
      /* shadow */
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      flex: 0 0 12rem;
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      font-size: 0;
      .list_img {
        width: 50%;
        height: 100%;
      }
      .br {
        border-radius: 0 16px 16px 0;
      }
      .bl {
        border-radius: 16px 0 0 16px;
      }
      p {
        color: var(--grey-600, #2C2B2B);
        /* body/24 */
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 36px; /* 150% */
        margin: 0 3rem;
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

.wish {
  background: var(--grey-100, #FEFEFE);
  .wish_title {
    text-align: center;
    padding: 4rem 0 0;
    .title_text {
      display: inline-block;
      padding: 1rem 3rem;
      border-radius: 100px;
      background: var(--PINK-BASE, #FF6FB4);
      color: var(--BRAND-200, #FDA);
      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
  }
  .wish_list {
    display: flex;
    flex-wrap: wrap;
    padding: 7rem;
    gap: 3rem;
    justify-content: center;
    .list_container {
      flex: 1 0 500px;
      max-width: 100%;
      border-radius: 16px;
      height: 24rem;
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04), 0px 18px 15px 0px rgba(31, 31, 31, 0.05), 0px 25px 50px 0px rgba(31, 31, 31, 0.07);
      &:nth-child(1) {
        background: var(--PINK-100, #FFEBF4);
        .subtitle1 {
          background: url('../../public/bgImg/about_wish1.png') white top / cover no-repeat;
          height: 10rem;
        }
      }
      &:nth-child(2) {
        background: var(--YELLOW-100, #FFF4D6);
        .subtitle2 {
          background: url('../../public/bgImg/about_wish2.png') white top / cover no-repeat;
          height: 10rem;
        }
      }
      &:nth-child(3) {
        background: var(--PURPLE-100, #ECECFF);
        display: flex;
        .subtitle3 {
          background: url('../../public/bgImg/about_wish3.png') white top / cover no-repeat;
          flex: 0 0 25rem;
        }
      }
      .bt {
        border-radius: 16px 16px 0 0;
      }
      .bl {
        border-radius: 16px 0 0 16px;
      }
      p {
        display: flex;
        align-items: center;
        padding: 3rem;
        color: var(--grey-600, #2C2B2B);
        text-align: justify;
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1.5rem;
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
.team {
  padding: 6rem 10rem;
  background: var(--YELLOW-100, #FFF4D6);
  .team_header {
    color: var(--BRAND-BASE, #F90);

    /* header/64 */
    font-family: TsangerFeiBai;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 64px; /* 100% */
  }
  .team_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    span {
      color: var(--grey-600, #2C2B2B);
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
