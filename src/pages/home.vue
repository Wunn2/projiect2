<template>
  <div id="homepage">
    <!-- 引入header -->
    <v-header></v-header>
    <div class="Vswiper" style="position: relative;">
      <img src="../assets/image/SLIDE_PIC.jpg" style="max-width: 100%;z-index: 1;" />
      <el-row style="top: 80%;: 2;position: absolute;width: 100%;">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <h2 style="text-align: center;">
            <img src="../assets/image/S_btn1.png" style="width: 35%;display: inline-block;">
            <img src="../assets/image/S_btn2.png" style="width: 35%;display: inline-block;">
          </h2>
        </el-col>
      </el-row>
      <div style="top: 0;z-index: 1;position: absolute;width: 100%;">
        <swiper :options="swiperOption">
          <swiper-slide>
            <el-row>
              <el-col :xs="12" :sm="12" :md="12" :lg="12">
                <img src="../assets/image/swiper_w1.png" style="max-width: 100%;">
              </el-col>
            </el-row>
          </swiper-slide>
          <swiper-slide>
            <el-row>
              <el-col :xs="12" :sm="12" :md="12" :lg="12">
                <img src="../assets/image/swiper_w2.png" style="max-width: 100%;">
              </el-col>
            </el-row>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          　　<div class="swiper-button-prev" slot="button-prev"></div>
          　　<div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '../common/header.vue'
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false // 手动切换之后继续自动轮播
          },
          loop: true,
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },

      }

    },
    components: {
      vHeader
    }
  }
</script>
