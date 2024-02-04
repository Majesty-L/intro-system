<template>
  <a-layout>
    <div class="trains-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">儿童色彩美育教师培训</div>
              <div class="banner_tips">教师色彩美育水平是色彩美育践行的重要保障。儿童色彩美育教师培训旨在培养具备美感、能够传播色彩素养的教师，使其成为科研创新和课程实践的先锋。培训以专家讲座、社会实践和工作坊等形式进行。</div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="train_list">
        <div class="history">
          <div class="title">
            历史课程回顾
          </div>
          <div class="year">2023</div>
          <div class="trains">
            <div v-for="item,index in trains_2023" :key="index" class="train">
              <img :src="item.img" alt="" @click="openCourse(item.url)">
              <p class="first-line"><b>{{ item.title }}</b></p>
              <p class="second-line">{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
          <div class="year">2022</div>
          <div class="trains">
            <div v-for="item,index in trains_2022" :key="index" class="train">
              <img :src="item.img" alt="" @click="openCourse(item.url)">
              <p class="first-line"><b>{{ item.title }}</b></p>
              <p class="second-line">{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="callback">
        <div class="title">教师感想</div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide bg1">
              我作为一名教师，不仅收获了丰富的色彩知识，还对教育工作有了更深的认识和思考。这次培训不仅仅是一次技能的提升，更是一次心灵的触动，它让我意识到色彩在教学中的重要性，以及如何更好地将色彩知识融入日常教学之中。
              <!-- <div class="foot">-------  姓名  XX小学XX年级XX班</div> -->
            </div>
            <div class="swiper-slide bg2">在培训过程中，我学习到了色彩的基本原理、色彩搭配的技巧以及色彩在心理层面上的影响。通过对色彩理论的学习，我了解到每一种颜色都有其独特的语言和情感表达，这让我认识到在课堂教学中运用色彩可以极大地提升学生的学习兴趣和情感体验。</div>
            <!-- <div class="swiper-slide bg3"></div> -->
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
  name: 'trainsPage',
  components: {
  },
  data() {
    return {
      trains_2023: [
        {
          img: require('../../public/trains/trains_2023_1.png'),
          title: 'AIC儿童色彩教育师资国际培训砂子塘站',
          type: '线下',
          time: '2023-04-01',
          url: 't202301',
        },
        {
          img: require('../../public/trains/trains_2023_2.png'),
          title: '携手国际色彩专家 共研儿童色彩教育新发展',
          type: '线下',
          time: '2023-05-13',
          url: 't202302',
        },
      ],
      trains_2022: [
        {
          img: require('../../public/trains/trains_2022_1.png'),
          title: '小学美术教师色彩素养提升培训启动',
          type: '线下',
          time: '2022-08-18',
          url: 't202201',
        },
        {
          img: require('../../public/trains/trains_2022_2.png'),
          title: '砂子塘小学美术教师现场实训',
          type: '线下',
          time: '2022-09-17',
          url: 't202202',
        },
        {
          img: require('../../public/trains/trains_2022_3.png'),
          title: '项目式儿童色彩素养美术教师培训',
          type: '线下',
          time: '2022-09-24',
          url: 't202203',
        }
      ],
      swiper: '',
    }
  },
  mounted() {
    window.scrollTo(0,0);
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.8,
      spaceBetween: 0,
      // centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  methods: {
    openCourse(url) {
      const { href } = this.$router.resolve({name:url});
      window.open(href, '_blank');
    },
  },
}
</script>

<style lang="less" scoped>
img {
  cursor: pointer;
}
.banner {
  width: 100%;
  height: 30rem;
  background: url('../../public/bgImg/trains_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 70vw;
    .banner_title {
      color: var(--RED-BASE, #F46803);
      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 5.33331rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
    .banner_tips {
      color: var(--grey-600, #2C2B2B);
      /* body/16 */
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1.33331rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      margin-top: 2.25rem;
    }
  }
}
.train_list {
  padding: 6rem;
  background: var(--BRAND-50, #FFFCF2);
  .title {
    color: var(--grey-600, #2C2B2B);
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 2.66669rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .trains {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8rem;
    gap: 4.5rem;
    color: var(--grey-600, #2C2B2B);
    .train {
      flex: 0 0 30rem;
      max-width: 90%;
    }
    img {
      background: var(--grey-300, #C0C0C0);
      border-radius: 1rem;
      margin: 2.25rem 0 1rem;
      width: 100%;
      box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04);
    }
    .first-line {
      font-size: 2rem;
      margin-bottom: 0.6rem;
    }
    .second-line {
      margin-left: 1rem;
      font-size: 1.33331rem;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .year {
    margin-top: 2rem;
    display: inline-block;
    margin-top: 3rem;
    padding: 1rem 2.67rem;
    border-radius: 83.25rem;
    background: var(--YELLOW-100, #FFF4D6);
    color: var(--YELLOW-BASE, #FFC632);
    text-align: center;
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 2.33331rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
}
.callback {
  padding: 8rem;
  background: var(--grey-100, #FEFEFE);
  .title {
    color: var(--YELLOW-BASE, #FFC632);

    /* header/64 */
    font-family: TsangerFeiBai;
    font-size: 5.33331rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 35rem;
    margin: 7.5rem 0;
    padding-bottom: 1rem;
  }
  .swiper-slide {
    color: var(--grey-600, #2C2B2B);
    border-radius: 1rem;  
  
    /* body/48 */
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 150% */

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    transform: scale(0.8);
    transition: 300ms;
    box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04);
    background: url('../../public/bgImg/swipe3-1.png')  white 100% 100% / cover no-repeat;
    padding: 0 3rem;
    text-indent: 10%;
    text-align: justify;
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
    font-size: 1.8rem;
  }
}
@media (max-width: 960px) {

.banner {
  height: 47.5rem;
  .bgImg {
    width: 70vw;
    .banner_title {
      font-size: 8rem;
    }
    .banner_tips {
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
}
.train_list {
  padding: 12rem;
  .title {
    font-size: 4rem;
  }
  .trains {
    gap: 6rem;
    .train {
      flex: 0 0 40rem;
    }
    img {
      border-radius: 2rem;
      margin: 3rem 0 3rem;
    }
    .first-line {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .second-line {
      margin-left: 1.5rem;
      font-size: 2rem;
    }
  }
  .year {
    margin-top: 4.5rem;
    padding: 1.5rem 4rem;
    border-radius: 124rem;
    font-size: 3.5rem;
  }
}
.callback {
  padding: 12rem;
  .title {
    font-size: 8rem;
  }
  .swiper-container {
    height: 52rem;
    margin: 12rem 0;
  }
  .swiper-slide {
    font-size: 2.5rem;
    padding: 0 5rem;
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    font-size: 3rem;
  }
}
}
@media (max-width: 430px) {

.banner {
  height: 120rem;
  .bgImg {
    width: 85vw;
    .banner_title {
      font-size: 16rem;
    }
    .banner_tips {
      text-align: justify;
      font-size: 4rem;
      margin-top: 6rem;
    }
  }
}
.train_list {
  padding: 14rem;
  .title {
    font-size: 4.8rem;
  }
  .trains {
    gap: 4.8rem;
    .train {
      flex: 0 0 52rem;
    }
    img {
      border-radius: 2rem;
      margin: 3rem 0 3rem;
    }
    .first-line {
      font-size: 4rem;
      margin-bottom: 1.2rem;
    }
    .second-line {
      margin-left: 1.8rem;
      font-size: 4rem;
    }
  }
  .year {
    margin-top: 4.8rem;
    padding: 1.8rem 4.8rem;
    border-radius: 140rem;
    font-size: 4rem;
  }
}
.callback {
  padding: 12rem;
  .title {
    font-size: 8rem;
  }
  .swiper-container {
    height: 52rem;
    margin: 12rem 0;
  }
  .swiper-slide {
    font-size: 2.5rem;
    padding: 0 5rem;
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    font-size: 3rem;
  }
}
}
</style>
