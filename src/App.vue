<template>
  <a-layout>
    <a-layout-header class="header-menu">
      <div class="logo-wrap" @click="onClickMenuItem('home')">
        <a>LOGO</a>
      </div>
      <a-menu v-model="current" class="menu-wrap" theme="light" mode="horizontal">
        <a-menu-item key="about"> 
          <router-link :to="{ name: 'about' }">
            关于我们
          </router-link> 
        </a-menu-item>
        <a-menu-item key="lessons">
          <router-link :to="{ name: 'lessons' }">
            儿童色彩美育课程
          </router-link> 
        </a-menu-item>
        <a-menu-item key="plays">
          <router-link :to="{ name: 'plays' }">
            儿童色彩美育活动
          </router-link> 
        </a-menu-item>
        <a-menu-item key="trains">
          <router-link :to="{ name: 'trains' }">
            儿童色彩美育教师培训
          </router-link> 
        </a-menu-item>
        <a-menu-item key="awards">
          <router-link :to="{ name: 'awards' }">
            成果墙
          </router-link> 
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="content-container">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">
      <div class="link">
        <div v-for="item in link_group" class="column" :key="item.title">
          <div class="title">{{ item.title }}</div>
          <div v-for="link in item.link" class="list" :key="link.name">{{ link.name }}</div>
        </div>
      </div>
      <div class="contact">
        <div class="footer_tip">
          <p class="title">
            联系我们
          </p>
          <p class="address">
            <img src="/bgImg/mail.svg" alt="">KHColor@126.com
          </p>
          <p class="text">
            我们是一个儿童色彩美育研究团队，我们的愿景是传承中国传统色彩、提高国民色彩素养、促进跨学科色彩交流。
          </p>
        </div>
        <div class="search">
          <div class="qr1">
            <img src="/images/qrcode.png" alt="">
            <div>公众号</div>
          </div>
          <div class="qr2">
            <img src="/images/qrcode.png" alt="">
            <div>中国慕课网</div>
          </div>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2024 开禾
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      current: [],
      link_group: [
        {
          title: '关于组织',
          link: [
            { name: '组织故事' },
            { name: '愿景、理念及目标' },
            { name: '团队架构' },
            { name: '战略合作机构' },
          ]
        },
        {
          title: '儿童色彩美育课程',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '儿童感想' },
          ]
        },
        {
          title: '儿童色彩美育活动',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '儿童感想' },
          ]
        },
        {
          title: '儿童色彩美育教师培训',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '教师感想' },
          ]
        },
        {
          title: '成果墙',
        },
      ]
    }
  },
  watch: {
    '$route.name': {
      handler(name) {
        if (name) {
          this.current = [name];
        } else {
          this.activeMenu = [];
        }
      },
      immediate: true,
    },
  },
  methods: {
    onClickMenuItem(key) {
      this.$router.replace({ name: key }).catch(()=>{});
    },
  },
}
</script>

<style lang="less" scoped>
.logo-wrap {
  float: left;
}
.menu-wrap {
  display: flex;
  justify-content: flex-end;
}
.ant-layout-header {
  background-color: white;
  .ant-menu-horizontal {
    border-bottom: none;
  }
}
.footer {
  padding: 0;
  .link {
    height: 30rem;
    background: var(--BRAND-400, rgb(255, 208, 137));
    padding: 8rem 10rem;
    display: flex;
    gap: 5rem;
    .column {
      .title {
        color: var(--PURPLE-800, #6A4DF9);
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1.66669rem;
        font-style: normal;
        font-weight: 1000;
        line-height: normal;
        margin-bottom: 2rem;
      }
      .list {
        color: var(--grey-600, #2C2B2B);
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1.33331rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 1rem;
      }
    }
  }

  .contact {
    height: 34rem;
    background: var(--BRAND-400, #FB5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 8rem;
    .footer_tip {
      .title {
        color: var(--PURPLE-800, #6A4DF9);
        font-family: TsangerFeiBai;
        font-size: 4rem;
        font-weight: 400;
        line-height: 4rem; /* 100% */
        margin-bottom: 1rem;
      }
      .text {
        max-width: 418px;
        color: var(--grey-600, #2C2B2B);
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
      }
      .address {
        color: var(--PURPLE-800, #6A4DF9);
        font-family: "Alibaba PuHuiTi 2.0";
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        display: flex;
        gap: 0.3rem;
        align-items: center;
        img {
          height: 1rem;
        }
      }
    }
    .search {
      display: flex;
      div {
        text-align: center;
        margin-top: 0.75rem;
        font-size: 1rem;
      }
      .qr1 {
        margin-right: 2rem;
      }
      img {
        width: 6rem;
      }
    }
  }
  .copyright {
    height: 4rem;
    background: var(--PURPLE-BASE, #9EA2FF);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-100, #FEFEFE);
    font-family: "Alibaba PuHuiTi 2.0";
    font-size: 1rem;
    font-weight: 400;
  }
}
</style>
