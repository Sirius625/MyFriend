<template>
  <div class="delete">
    <ul v-for="(item, index) in deleteFriends" v-bind:key="index">
      <ol>
        <div class="txt">
          第{{ index + 1 }}个朋友:&nbsp;
          {{ deleteFriends[index].name }}是我的朋友认识了{{
            deleteFriends[index].age
          }}年，来自{{ deleteFriends[index].from }}
        </div>
      </ol>
    </ul>
  </div>
</template>
<script>
export default {
  name: "news2",
  computed: {
    deleteFriends() {
      return this.$store.state.deleteFriends;
    },
  },
};
</script>
<style scoped>
.delete ul ol {
  text-align: start;
}
</style>
