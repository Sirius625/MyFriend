<template>
  <div class="total">
    <ul v-for="(item, index) in allAriends" v-bind:key="index">
      <ol>
        <div class="txt">
          第{{ index + 1 }}个朋友:&nbsp;
          {{ allAriends[index].name }}是我的朋友认识了{{
            allAriends[index].age
          }}年，来自{{ allAriends[index].from }}
        </div>
      </ol>
    </ul>
  </div>
</template>
<script>
export default {
  name: "news0",
  computed: {
    allAriends() {
      return this.$store.state.allFriends;
    },
  },
};
</script>
<style scoped>
.total ul ol {
  text-align: start;
}
</style>
