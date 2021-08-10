<template>
  <div>
    <h1>朋友分类</h1>
    <div class="new">
      <router-link to="/news/" exact>全部朋友</router-link>
      <router-link to="/news/news1">情深意重</router-link>
      <router-link to="/news/news2">反目成仇</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "news",

};


</script>
<style scoped>
h1 {
  color: #000;
}
.new {
    display: flex;
}
a {
  flex: 1;
  text-decoration: none;
  font-size: 20px;
  color: rgb(135, 233, 7);
  /* width: 50px ; */
  border-radius: 20px;
  background-color: rgb(31, 104, 9);
  margin-left: 40px;
  
}
a:last-child {
  margin-right: 40px;
}
.router-link-active{
  color: rgb(97, 224, 12);
}
</style>
