<template>
  <div id="homepage">
    <el-row :gutter="20" class="header" style="background-color: #7c6ebd;margin: 0;box-shadow: 0px -10px 32px 5px #6653bb;">
      <el-col :xs="24" :sm="8" :md="4" style="height: 2rem;position: relative;">
        <img src="@/assets/LOGO.png" height="50%" style="position: absolute;height: 50%;width:70%;top: 0; bottom: 0; right: 0;left: 0; margin: auto;" />
        <div class="hidden-md-and-up" @click="MENUView" style="height: 0.8rem;width: 0.8rem; position: absolute;top: 0px; bottom: 0px; right: 0px; margin: auto;border:0.01rem solid #ddd;border-radius: 0.2rem;  padding: 0.1rem 0.15rem;box-sizing: border-box; ">
          <hr style="    height: 0;">
          <hr style="    height: 0;">
          <hr style="    height: 0;">
        </div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" v-if="show&&show1">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="box-shadow: 0px -10px 32px -15px #6653bb;margin-top: 0.8rem;border-top-left-radius: 0.2rem;border-top-right-radius: 0.2rem;background-color: #FFFFFF;display: flex;height: 1.2rem;"
          active-text-color="#fff">
          <el-menu-item index="1" style="    padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">主页</el-menu-item>
          <el-menu-item index="2" style="padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">关于我们</el-menu-item>
          <el-menu-item index="2" style="padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">关于我们</el-menu-item>
          <el-menu-item index="2" style="padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">关于我们</el-menu-item>
          <el-menu-item index="2" style="padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">关于我们</el-menu-item>
          <el-menu-item index="2" style="padding: 0 ;flex: 1;text-align: center;border-right: 0.04rem solid #dcd6fc;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">关于我们</el-menu-item>
          <el-menu-item index="3" style="padding: 0 ;flex: 1;text-align: center;color: #7d6cbc;font-weight: bold;font-size: 0.4rem;line-height: 0.4rem;height: 0.4rem;    margin: auto;">慈善资讯</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" style="height: 2rem;position: relative;" v-if="show&&show1">
        <ul style="padding-left:15px; position: absolute;top: 0; left: 0; bottom: 0; right: 0; margin: auto;height: fit-content;text-align: left;color:#fff;font-size: 0.3rem;line-height: 0.4rem;">
          <li style="list-style-type:disc ;display: inline-block;">救助帮扶咨询电话
            <br>
            0575-87108916、87108916、87108916、
          </li>
          <li style="list-style-type:disc ;display: inline-block;">救助帮扶咨询电话
            <br>
            0575-87108916、87108916、87108916、</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        // 点击显示
        show: false,
        // 页面大于771px时显示
        show1: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // 点击显示
      MENUView() {
        this.show = !this.show
      },

    },
    mounted() {
      const that = this
      window.onresize = () => {
        console.log(document.body.clientWidth)
        if (document.body.clientWidth > 991) {
          this.show1 = true
          this.show = true
        } else {
          this.show1 = true
          this.show = false
        }
      }
    },
  }
</script>
