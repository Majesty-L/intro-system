<template>
  <a-layout>
    <div class="lessons-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">儿童色彩美育课程</div>
              <div class="banner_tips">儿童色彩美育将成为儿童美育重要的一环。儿童色彩美育课程以建构主义、项目式学习、斯坦纳教育艺术理论等教育学理论作为学理基础，课程主要面向6-12岁儿童，内容涵盖色彩科学、色彩文化、色彩设计等，旨在激发儿童的艺术兴趣，提升儿童对传统文化审美感知，促进儿童的身心健全发展，最终成长为德才兼备的人才。</div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="lesson_list">
        <div class="pre">
          <div class="title">
            进行中/即将举行
          </div>
          <div class="lessons">
            <div v-for="item,index in pre_lessons" :key="index" class="lesson">
              <img :src="item.img" alt="" @click="openCourse(item.url, item.disabled)">
              <p class="first-line"><b>{{ item.title }}</b></p>
              <p class="second-line">{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
        </div>
        <div class="history">
          <div class="title">
            历史课程回顾
          </div>
          <div class="year">2023</div>
          <div class="lessons">
            <div v-for="item,index in lessons_2023" :key="index" class="lesson">
              <img :src="item.img" alt="" @click="openCourse(item.url)">
              <p class="first-line"><b>{{ item.title }}</b></p>
              <p class="second-line">{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
          <div class="year">2022</div>
          <div class="lessons">
            <div v-for="item,index in lessons_2022" :key="index" class="lesson">
              <img :src="item.img" alt="" @click="openCourse(item.url)">
              <p class="first-line"><b>{{ item.title }}</b></p>
              <p class="second-line">{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="callback">
        <div class="title">儿童感想</div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide bg1">
              色彩课程和有趣，我们全面进入了一个有趣的色彩世界。在了解色彩基础原理的基本点上，我们创作叻一些作品，比如同类色，对比色等。色彩确实可以玩起来。
              <!-- <div class="foot">-------  姓名  XX小学XX年级XX班</div> -->
            </div>
            <div class="swiper-slide bg2">我很喜欢中国传统色这一篇章的学习。我们重点学了传统色中间的“青”这一部分，在石青、石绿、靛青蓝、花青中学习到了古人制作颜料的过程，更是领略到老祖宗高情趣的审美。</div>
            <div class="swiper-slide bg3">我们色彩课有很多，最喜欢中国传统色“花青”。它和赭石的搭配真的很雅致，是一种很稳重的美。我们在欣赏蓝印花布的同时也不得不感叹古人的智慧和其非凡的审美情趣。色彩课程更是带我们进入了传统色的奇妙天地，不仅提高了我的审美，更是让我创作了很多有趣的作品。</div>
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
  name: 'lessonsPage',
  components: {
  },
  data() {
    return {
      pre_lessons: [
        {
          img: require('../../public/lessons/pre_lesson_1.png'),
          title: '腾讯支教 启动推送',
          type: '线下',
          time: '2023-10-08',
          url: 'l202401',
        }
      ],
      lessons_2023: [
        {
          img: require('../../public/lessons/lessons_2023_1.png'),
          title: '虎虎生威存钱罐',
          type: '线下',
          time: '2023-05',
          url: 'l202301',
        },
        {
          img: require('../../public/lessons/lessons_2023_2.png'),
          title: '古建筑中的色彩',
          type: '线下',
          time: '2023-10-31',
          url: 'l202302',
        }
      ],
      lessons_2022: [
        {
          img: require('../../public/lessons/lessons_2022_1.png'),
          title: '《色光协奏曲》',
          type: '线下',
          time: '2022-03',
          url: 'l202201',
        },
        {
          img: require('../../public/lessons/lessons_2022_2.png'),
          title: '为校园赋彩',
          type: '线下',
          time: '2022-06-24',
          url: 'l202202',
        },
        {
          img: require('../../public/lessons/lessons_2022_3.png'),
          title: '色彩与味觉',
          type: '线下',
          time: '2022-10-11',
          url: 'l202203',
        },
        {
          img: require('../../public/lessons/lessons_2022_4.png'),
          title: '苗绣——你绣山川我绣你',
          type: '线下',
          time: '2022-04-14',
          url: 'l202204',
        },
        {
          img: require('../../public/lessons/lessons_2022_5.png'),
          title: '皇袍一定是黄色的吗？',
          type: '线上',
          time: '2022-04-01',
          url: 'l202205',
        },
        {
          img: require('../../public/lessons/lessons_2022_6.png'),
          title: '解读《山海经》中神兽的色彩',
          type: '线上',
          time: '2022-05-15',
          url: 'l202206',
        },
        {
          img: require('../../public/lessons/lessons_2022_7.png'),
          title: '走进唐三彩的彩色世界',
          type: '线上',
          time: '2022-10-24',
          url: 'l202207',
        },
        {
          img: require('../../public/lessons/lessons_2022_8.png'),
          title: '木兰如何“贴花黄”',
          type: '线上',
          time: '2022-11-08',
          url: 'l202208',
        }
      ],
      swiper: '',
    }
  },
  mounted() {
    window.scrollTo(0,0);
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: window.innerWidth<=960 ? 1.25 : 2.25,
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
    openCourse(url, disabled) {
      if (!disabled) {
        const { href } = this.$router.resolve({name:url});
        window.open(href, '_blank');
      }
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
  background: url('../../public/bgImg/lessons_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    width: 70vw;
    .banner_title {
      color: var(--grey-100, #FEFEFE);
      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 5.33331rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
    .banner_tips {
      color: var(--grey-100, #FEFEFE);
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
.lesson_list {
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
  .lessons {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8rem;
    gap: 4.5rem;
    color: var(--grey-600, #2C2B2B);
    .lesson {
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
    display: inline-block;
    margin-top: 3rem;
    padding: 1rem 2.67rem;
    border-radius: 83.25rem;
    background: var(--BRAND-100, #FFEFD8);
    color: var(--BRAND-BASE, #F90);
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
    color: var(--BRAND-BASE, #F90);

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
    background: url('../../public/bgImg/swipe1-1.png')  white 100% 100% / cover no-repeat;
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
    width: 60vw;
    .banner_title {
      font-size: 8rem;
    }
    .banner_tips {
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
}
.lesson_list {
  padding: 12rem;
  .title {
    font-size: 4rem;
  }
  .lessons {
    gap: 6rem;
    .lesson {
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
      margin-right: 30%;
    }
    .banner_tips {
      text-align: justify;
      font-size: 4rem;
      margin-top: 6rem;
    }
  }
}
.lesson_list {
  padding: 14rem;
  .title {
    font-size: 4.8rem;
  }
  .lessons {
    gap: 4.8rem;
    .lesson {
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
