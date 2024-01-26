<template>
  <a-layout>
    <div class="plays-container">
      <div class="banner">
        <a-row>
          <a-col :span="2"></a-col>
          <a-col :span="12">
            <div class="bgImg">
              <div class="banner_title">儿童色彩美育活动</div>
              <div class="banner_tips">儿童色彩美育活动是由团队与实践平台、媒体平台及资源平台联合举办，包含学校、公众号、博物馆等平台，首创以色彩为主题的各项活动，如展览、社区设计、馆校体验、学术会议等。活动中不仅可以看到儿童的活动成果，更能感受到儿童们对于生活的热爱与表达。</div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="play_list">
        <div class="history">
          <div class="title">
            历史课程回顾
          </div>
          <div class="year">2023</div>
          <div class="plays">
            <div v-for="item,index in plays_2023" :key="index" class="play">
              <img :src="item.img" alt="">
              <p><b>{{ item.title }}</b></p>
              <p>{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
          <div class="year">2022</div>
          <div class="plays">
            <div v-for="item,index in plays_2022" :key="index" class="play">
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
  name: 'playsPage',
  components: {
  },
  data() {
    return {
      plays_2023: [
        {
          img: require('../../public/images/plays_2023_1.png'),
          title: '遇见非遗 古法草木植物染',
          type: '线上',
          time: '2024-01-16',
        },
      ],
      plays_2022: [
        {
          img: require('../../public/images/plays_2022_1.png'),
          title: '儿童色彩素养教育实践基地挂牌仪式暨东茅街小学六一庆祝活动',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/plays_2022_2.png'),
          title: '寻彩丰泉',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/plays_2022_3.png'),
          title: 'AIC国际会议',
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
  background: url('../../public/bgImg/plays_banner.png') white top / cover no-repeat;
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
.play_list {
  padding: 6rem;
  background: var(--PINK-100, #FFEBF4);
  .title {
    color: var(--grey-600, #2C2B2B);
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .plays {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    gap: 4.5rem;
    .play {
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
    margin-top: 2rem;
    display: inline-block;
    padding: 0.69rem 2.13rem;
    border-radius: 3.6875rem;
    background: var(--PINK-200, #FFCFE6);
    color: var(--PINK-BASE, #FF6FB4);
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
    color: var(--PINK-BASE, #FF6FB4);

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
    background: url('../../public/bgImg/swipe2-1.png')  white top / cover no-repeat;
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
    background: url('../../public/bgImg/swipe2-2.png')  white top / cover no-repeat;
  }
  .bg3 {
    background: url('../../public/bgImg/swipe2-3.png')  white top / cover no-repeat;
  }
}
</style>
