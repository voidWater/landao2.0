<template>
  <div id="app">
    <div class="scoll-bar">
      <div>{{page.curPage}}</div>
      <a v-if="page.subPage" href="#" @click="reback"><span class="back_title"><i class="el-icon-back"></i>返回上级</span></a>
      <div v-for="item in page.pageArray" @click="selecPage(item)">
        <a href="#"><div class="item"  v-bind:class="{ item_cur: curPage==item.index}"></div><router-link to="/main"><span class="item_title" v-bind:class="{ item_title_cur: page==item.page}">{{item.name}}</span></router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    props: ['page'],
    data:function(){
      return {
        message : "begin",
        curPage : 0
      }
    },
    created() {

    },
    mounted() {
        window.addEventListener('mousewheel',this.handleScroll,false)
    },
    methods:{
      reback:function(){
        alert(1)
      },
      handleScroll:function(){
        if( this.curPage+1 >= this.page.pageArray.length){
          this.curPage=0
        }else{
          ++this.curPage
        }
      }
    }
  }
</script>

<style scoped>
  .scoll-bar{
    position: fixed;
    left:3.75rem;
    top: 5rem;
    z-index: 99999;
  }
  .scoll-bar .item{
    width: 0.425rem;
    height: 3rem;
    display: inline-block;
    background-color: #dad6d69e;
    margin-top: 1.25rem;
  }
  .scoll-bar .back_title{
    margin-top: 1.25rem;
    color: #005BAC;
    font-size: 1.2rem;
    background-color: #ffffff80;
    border: 1px solid #aaad84;
    padding: 0.3125rem 0.625rem;
    border-radius: 1.8rem;
  }
  .scoll-bar .item_title{
    font-size: 1.2rem;
    padding: 0.625rem;
    color: #dad6d69e;
  }
  .scoll-bar .item_cur{
    background-color: #005BAC;
  }
  .scoll-bar .item_title_cur{
    color: #005BAC;
  }
</style>
