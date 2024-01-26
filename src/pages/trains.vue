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
              <img :src="item.img" alt="">
              <p><b>{{ item.title }}</b></p>
              <p>{{ item.type }}  {{ item.time }}</p>
            </div>
          </div>
          <div class="year">2022</div>
          <div class="trains">
            <div v-for="item,index in trains_2022" :key="index" class="train">
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
  name: 'trainsPage',
  components: {
  },
  data() {
    return {
      trains_2023: [
        {
          img: require('../../public/images/trains_2023_1.png'),
          title: 'AIC儿童色彩教育师资国际培训砂子塘站-1',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/trains_2023_2.png'),
          title: 'AIC儿童色彩教育师资国际培训砂子塘站-2',
          type: '线上',
          time: '2024-01-16',
        },
      ],
      trains_2022: [
        {
          img: require('../../public/images/trains_2022_1.png'),
          title: '儿童色彩素养教育实践基地挂牌仪式暨东茅街小学六一庆祝活动',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/trains_2022_2.png'),
          title: '寻彩丰泉',
          type: '线上',
          time: '2024-01-16',
        },
        {
          img: require('../../public/images/trains_2022_3.png'),
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
  background: url('../../public/bgImg/trains_banner.png') white top / cover no-repeat;
  display: flex;
  align-items: center;
  .bgImg {
    // width: 50vw;
    .banner_title {
      color: var(--BRAND-600, #FC8600);
      /* header/64 */
      font-family: TsangerFeiBai;
      font-size: 4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 4rem; /* 100% */
    }
    .banner_tips {
      color: var(--grey-600, #2C2B2B);
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
.train_list {
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
  .trains {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    gap: 4.5rem;
    .train {
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
    background: var(--YELLOW-200, #FFECBB);
    color: var(--YELLOW-600, #D4A52A);
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
    color: var(--BRAND-600, #FC8600);

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
    background: url('../../public/bgImg/swipe3-1.png')  white top / cover no-repeat;
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
    background: url('../../public/bgImg/swipe3-2.png')  white top / cover no-repeat;
  }
  .bg3 {
    background: url('../../public/bgImg/swipe3-3.png')  white top / cover no-repeat;
  }
}
</style>
