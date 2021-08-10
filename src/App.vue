<template>
  <div id="app">
    <div class="ace">
      <div class="chos">
        <router-link to="/" exact>首页</router-link>
        <router-link to="/news">新闻</router-link>
      </div>
      <div class="chi">
        <router-view></router-view>
      </div>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import main from './components/main.vue'
// import news from './components/news.vue'
// import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: "App",
  components: {
    // main,
    // news
  },
};
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;

  /* width: 800px; */
  justify-content: center;
  /* align-items: center; */
}
#app .ace {
  display: flex;
  width: 800px;
  height: 500px;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
}

#app .ace .chos {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 500px;
  border-radius: 30px;
  z-index: 1000;
  overflow: hidden;
  background-color: rgb(20, 128, 110);
  /* flex: 1; */
}
#app .ace .chi {
  flex: 1;
  background-color: rgb(40, 247, 212);
  border-radius: 30px;
}
#app .chos > a {
  text-decoration: none;
  font-size: 24px;
  flex: 1;
  text-align: center;
  margin-top: 110px;
  color: rgb(15, 14, 14);
  /* color: rgb(241, 248, 230); */
}

#app .ace .router-link-active {
  color: rgb(248, 242, 242);
}
</style>
