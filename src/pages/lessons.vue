<template>
  <a-layout>
    <div class="lessons-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">课程介绍</div>
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
              <img :src="item.img" alt="">
              <p><b>{{ item.title }}</b></p>
              <p>{{ item.type }}  {{ item.time }}</p>
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
              <img :src="item.img" alt="">
              <p><b>{{ item.title }}</b></p>
              <p>{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
          <div class="year">2022</div>
          <div class="lessons">
            <div v-for="item,index in lessons_2022" :key="index" class="lesson">
              <img :src="item.img" alt="">
              <p><b>{{ item.title }}</b></p>
              <p>{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="callback">
        <div class="title">儿童感想</div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide bg1">
              儿童感想儿童感想儿童感想儿童感想儿童感想儿童感想儿童感想儿童感想
              <div class="foot">-------  姓名  XX小学XX年级XX班</div>
            </div>
            <div class="swiper-slide bg2"></div>
            <div class="swiper-slide bg3"></div>
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
          img: require('../../public/images/pre_lesson_1.png'),
          title: 'xx',
          type: '线上',
          time: '2024-01-16',
        }
      ],
      lessons_2023: [
        {
          img: require('../../public/images/lessons_2023_1.png'),
          title: '《虎虎生威存钱罐》',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/lessons_2023_2.png'),
          title: '《古建筑中的色彩》',
          type: '线上',
          time: '2024-01-16',
        }
      ],
      lessons_2022: [
        {
          img: require('../../public/images/lessons_2022_1.png'),
          title: '《色光协奏曲》',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/lessons_2022_2.png'),
          title: '《为校园赋彩》',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/lessons_2022_3.png'),
          title: '《色彩与味觉》',
          type: '线上',
          time: '2024-01-16',
        }
      ],
      swiper: '',
    }
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 2.5,
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
  },
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 30rem;
  background: url('../../public/bgImg/lessons_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    // width: 50vw;
    .banner_title {
      color: var(--grey-100, #FEFEFE);
      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
    .banner_tips {
      color: var(--grey-100, #FEFEFE);
      /* body/16 */
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      margin-top: 1.5rem;
    }
  }
}
.lesson_list {
  padding: 6rem;
  background: var(--BRAND-50, #FFFCF2);
  .title {
    color: var(--grey-600, #2C2B2B);
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .lessons {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    gap: 4.5rem;
    .lesson {
      flex: 0 0 300px;
      max-width: 90%;
    }
    img {
      background: var(--grey-300, #C0C0C0);
      border-radius: 1rem;
      margin: 2.25rem 0 1rem;
      max-width: 100%;
    }
    p {
      font-size: 1.5rem;
    }
  }
  .year {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.69rem 2.13rem;
    border-radius: 3.6875rem;
    background: var(--BRAND-200, #FDA);
    color: var(--BRAND-BASE, #F90);
    text-align: center;
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 100% */
  }
}
.callback {
  padding: 6rem;
  background: var(--grey-100, #FEFEFE);
  .title {
    color: var(--BRAND-BASE, #F90);

    /* header/64 */
    font-family: TsangerFeiBai;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 4rem; /* 100% */
  }
  .swiper-container {
    width: 100%;
    height: 26rem;
    margin: 5rem 0;
    padding-bottom: 1rem;
  }
  .swiper-slide {
    color: var(--grey-600, #2C2B2B);
    border-radius: 1rem;
    /* body/48 */
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; /* 150% */

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    transform: scale(0.8);
    transition: 300ms;
    box-shadow: 0px 1.7px 1.4px 0px rgba(31, 31, 31, 0.02), 0px 4.5px 3.5px 0px rgba(31, 31, 31, 0.03), 0px 8px 7px 0px rgba(31, 31, 31, 0.04);
  }
  .swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
  }
  .bg1 {
    padding: 3rem 9rem;
    background: url('../../public/bgImg/swipe1-1.png')  white top / cover no-repeat;
    .foot {
      color: var(--grey-600, #2C2B2B);

      /* body/16 */
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
    }
  }
  .bg2 {
    background: url('../../public/bgImg/swipe1-2.png')  white top / cover no-repeat;
  }
  .bg3 {
    background: url('../../public/bgImg/swipe1-3.png')  white top / cover no-repeat;
  }
}
</style>
