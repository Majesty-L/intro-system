<template>
  <a-layout>
    <a-layout-header class="header-menu">
      <div class="logo-wrap" @click="onClickMenuItem('home')">
        <a class="logo"><img src="/logo.png" alt=""></a>
      </div>
      <a-menu v-model="current" class="menu-wrap" theme="light" mode="horizontal">
        <a-menu-item key="home"> 
          <router-link :to="{ name: 'home' }">
            <div v-if="!windowWidth_max960">主页</div>
            <div v-else class="menu_icon"><img src="/icons/home.svg" alt="" /></div>
          </router-link> 
        </a-menu-item>
        <a-menu-item v-if="windowWidth_max960" key="menu"> 
          <a-dropdown placement="bottomRight" :trigger="['click','hover']">
            <div class="menu_icon"><img src="/icons/menu.svg" alt="" /></div>
            <a-menu slot="overlay">
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
          </a-dropdown>
        </a-menu-item>
        <template v-else>
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
        </template>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="content-container">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer class="footer">
      <div class="link">
        <div v-for="item in link_group" class="column" :key="item.title">
          <div class="title" @click="onClickMenuItem(item.url)">{{ item.title }}</div>
          <div v-for="link in item.link" class="list" :key="link.name">{{ link.name }}</div>
        </div>
      </div>
      <div class="contact_container">
        <div class="contact">
          <div class="footer_tip">
            <p class="title">
              联系我们
            </p>
            <p class="address">
              <img src="/icons/mail.svg" alt="">KHColor@126.com
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
        <div v-if="!windowWidth_max430" class="text">
          我们是一个儿童色彩美育研究团队，我们的愿景是传承中国传统色彩、提高国民色彩素养、促进跨学科色彩交流。我们长期致力于儿童色彩美育，期待着每一位热爱色彩的学者、设计师、教育者加入，携手点亮中国色彩的明天！
        </div>
        <div v-else class="text">
          我们是一个儿童色彩美育研究团队<br/>
          我们的愿景是传承中国传统色彩<br/>
          提高国民色彩素养<br/>
          促进跨学科色彩交流<br/>
          <br/>
          我们长期致力于儿童色彩美育<br/>
          期待着每一位热爱色彩的学者、设计师、教育者加入<br/>
          携手点亮中国色彩的明天！
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
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      current: [],
      link_group: [
        {
          title: '主页',
          url: 'home',
          link: [
            { name: '儿童色彩美育' },
            { name: '我们的行动' },
            { name: '工作动态' },
          ]
        },
        {
          title: '关于我们',
          url: 'about',
          link: [
            { name: '组织故事' },
            { name: '愿景、理念及目标' },
            { name: '团队架构' },
            { name: '战略合作机构' },
          ]
        },
        {
          title: '儿童色彩美育课程',
          url: 'lessons',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '儿童感想' },
          ]
        },
        {
          title: '儿童色彩美育活动',
          url: 'plays',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '儿童感想' },
          ]
        },
        {
          title: '儿童色彩美育教师培训',
          url: 'trains',
          link: [
            { name: '课程介绍' },
            { name: '进行中/即将举行' },
            { name: '历史课程回顾' },
            { name: '教师感想' },
          ]
        },
        {
          title: '成果墙',
          url: 'awards',
        },
      ],
      windowWidth: window.innerWidth,
    }
  },
  computed:{
    windowWidth_max960() {
      return this.windowWidth <= 960;
    },
    windowWidth_max430() {
      return this.windowWidth <= 430;
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
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
}
</script>

<style lang="less" scoped>
// 折叠头部导航
.header-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 60px;
  .ant-menu-horizontal > .ant-menu-item {
    padding: 0 8px;
  }
  .logo-wrap {
    // float: left;
    .logo {
      display: inline-block;
      height: 24px;
      img {
        height: 100%;
      }
    }
  }
  .menu-wrap {
    .menu_icon {
      display: inline-block;
      height: 24px;
      img {
        height: 100%;
      }
    }
  }
  .ant-menu-horizontal > .ant-menu-item-selected, .ant-menu-horizontal > .ant-menu-item-active {
    border-bottom: none;
  }
  .ant-menu-horizontal > .ant-menu-item {
    padding: 0 1rem;
    border-bottom: none;
  }
}
// 展开的头部导航
@media (min-width: 961px) {
  .header-menu {
    padding: 0 11.25rem;
    height: 6rem;
    .ant-menu-horizontal > .ant-menu-item {
      padding: 0 2rem;
    }
    .logo-wrap {
      .logo {
        height: 2.75rem;
      }
    }
  }
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
    background: url('../public/images/footer_wave.png') var(--BRAND-100, #FFEFD8) top / cover;
    padding: 8rem 10rem;
    display: flex;
    gap: 5rem;
    .column {
      .title {
        cursor: pointer;
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
  .contact_container {
    height: 34rem;
    background: var(--BRAND-400, #FB5);
    padding: 8rem;
    .contact {
      display: flex;
      justify-content: space-between;
      .footer_tip {
        .title {
          color: var(--PURPLE-800, #6A4DF9);
          font-family: TsangerFeiBai;
          font-size: 4rem;
          font-weight: 400;
          line-height: 4rem; /* 100% */
          margin-bottom: 1rem;
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
        .qr1, .qr2 {
          margin-top: 0;
        } 
        .qr1 {
          margin-right: 2rem;
        }
        img {
          width: 6rem;
        }
      }
    }
    .text {
      text-align: justify;
      width: 100%;
      max-width: 719px;
      margin-top: 3rem;
      color: var(--grey-600, #2C2B2B);
      font-family: "Alibaba PuHuiTi 2.0";
      font-size: 1.33331rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2rem; /* 150% */
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

@media (max-width: 961px) {
  
  .footer {
    .contact_container {
      height: 60rem;
      padding: 15rem;
      .contact {
        .footer_tip {
          .title {
            font-size: 9rem;
            line-height: 100%;
            margin-bottom: 3rem;
          }
          .address {
            font-size: 2.5rem;
            gap: 2rem;
            img {
              height: 4rem;
            }
          }
        }
        .search {
          div {
            margin-top: 1.5rem;
            font-size: 2rem;
          }
          .qr1 {
            margin-right: 6rem;
          }
          img {
            width: 10rem;
          }
        }
      }
      .text {
        margin-top: 6rem;
        font-size: 2rem;
        line-height: 150%; /* 150% */
      }
    }
    .copyright {
      height: 6rem;
      font-size: 2rem;
    }
  }
}

@media (max-width: 430px) {
  
.footer {
  .link {
    height: 85rem;
    padding: 12rem 8rem;
    flex-wrap: wrap;
    gap: 6rem;
    background: url('../public/images/footer_wave.png') var(--BRAND-100, #FFEFD8) top / 100% 100% no-repeat;
    .column {
      flex: 1 0 25%;
      .title {
        font-size: 3rem;
        font-weight: 1000;      
        margin-bottom: 4.8rem;
      }
      .list {
        font-size: 2.4rem;
        margin-bottom: 1.8rem;
      }
    }
  }
  .contact_container {
    height: 90rem;
    padding: 15rem;
    .contact {
      .footer_tip {
        .title {
          font-size: 9rem;
          line-height: 100%;
          margin-bottom: 3rem;
        }
        .address {
          font-size: 2.5rem;
          gap: 2rem;
          img {
            height: 4rem;
          }
        }
      }
      .search {
        float: right;
        div {
          margin-top: 1.5rem;
          font-size: 2rem;
        }
        .qr1 {
          margin-right: 6rem;
        }
        img {
          width: 16rem;
        }
      }
    }
    .text {
      margin-top: 6rem;
      font-size: 3rem;
      line-height: 150%; /* 150% */
    }
  }
  .copyright {
    height: 6rem;
    font-size: 2rem;
  }
}
}
</style>
