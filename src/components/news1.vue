<template>
  <div class="remain">

    <ul v-for="(item, index) in sortFriends" v-bind:key="index">
      <ol>
        <div class="txt">
          第{{ index + 1 }}个朋友:&nbsp;
          {{ sortFriends[index].name }}是我的朋友认识了{{
            sortFriends[index].age
          }}年，来自{{ sortFriends[index].from }}
        </div>
      </ol>
    </ul>
        <button title="按认识时间排序" @click="$store.commit('sort')">
      时间排序
    </button>
  </div>
</template>
<script>
export default {
  name: "news1",
  computed:{
    sortFriends() {
      return this.$store.state.sortFriends;
    },
  },
};
</script>
<style scoped>
.remain ul ol {
  /* position: absolute; */
  text-align: start;
}
button{
  /* position: relative;
  top: -39px;
  left: 100px; */
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;

}
</style>
