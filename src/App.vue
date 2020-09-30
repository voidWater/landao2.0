<template>
  <div id="app">
    <!--header begin-->
        <header class="head">
          <el-menu text-color="#fff" background-color="#005bac" active-text-color="#fff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">走进蓝岛</template>
                <el-menu-item index="1-1">公司简介</el-menu-item>
                <el-menu-item index="1-2">子公司</el-menu-item>
                <el-menu-item index="1-3">企业历程</el-menu-item>
                <el-menu-item index="1-4">企业荣誉</el-menu-item>
              </el-submenu>
            <el-menu-item index="2">
             企业文化
            </el-menu-item>
            <el-menu-item index="3">
            新闻中心
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">产品中心</template>
                <el-menu-item index="4-1">新材料</el-menu-item>
                <el-menu-item index="4-2">环保材料</el-menu-item>
                <el-menu-item index="4-3">重点工程</el-menu-item>
                <el-menu-item index="4-4">技术与应用</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">人力资源</template>
              <el-menu-item index="5-1">人才战略</el-menu-item>
              <el-menu-item index="5-2">英才招聘</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">
              投资者关系
            </el-menu-item>
          </el-menu>
        </header>
    <!--header end-->
    <!--pageController begin-->
    <button><router-link :to="{name:'主页',params:{index:message}}">[text1]</router-link></button>
    <button><router-link to="/main/2312">[text2]</router-link></button>
    <Page-Controller :page="page"></Page-Controller>
    <!--pageController end-->
    <!--page begin-->
		<transition>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
    <!--page end-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      message:"begin",
      page:{
        subPage:false,
        pageArray:[{index:0,name:'第一'},{index:1,name:'第一'},{index:2,name:'第一'}]
      }
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style>
body{
  /* background-color: #005bac; */
  margin: 0 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head{
  height:3.75rem;
  background-color:#005bac;
  text-align: center;
  padding: 0.625rem
}
/* 去掉多余特性 */
.el-menu.el-menu--horizontal{
  border-bottom: solid 1px #005bac;
}
</style>
