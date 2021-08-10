<template>
  <div>
    <h1>这是一找朋友</h1>
    <div class="inp">
      name:<input type="text" v-model="name0" id="name0" /> age：<input
        type="text"
        v-model="age"
        id="age"
      />
      from<input type="text" v-model="from" id="from" />
      <button @click="$store.commit('increate')">朋友+1</button>
    </div>
    <div class="allDel">
       <h3>朋友总数 :   &nbsp; {{ this.$store.getters.count }}</h3>   <button @click="$store.commit('delAll')">一键孤生</button>
    </div>
   
    <div class="lev">
      <transition-group name="list" tag="p">
        <ul v-for="(item, index) in friends" v-bind:key="index">
          <ol>
            <div class="txt">
              第{{index + 1}}个朋友:&nbsp; {{ friends[index].name }}是我的朋友认识了{{
                friends[index].age
              }}年，来自{{ friends[index].from }}
            </div>
            <button title="决裂将删除此朋友" @click="$store.commit('delete')">
              决裂
            </button>
          </ol>
        </ul>
      </transition-group>
    </div>
  </div>
</template>
<script>
// import  mapState from 'vuex'
// import  mapMutations from 'vuex'
export default {
  name: "main0",
  //   data(){
  //   return {
  //     name0:this.name0,
  //     age:this.age,
  //     from:this.from
  //   }
  // },

  computed: {
    friends() {
      return this.$store.state.friends;
    },
    // count(){
    //   return this.$store.getter.count;
    // },
    name0: {
      get() {
        return this.$store.state.name0;
      },
      set(value) {
        return (this.$store.state.name0 = value);
      },
    },
    age: {
      get() {
        return this.$store.state.age;
      },
      set(value) {
        return (this.$store.state.age = value);
      },
    },
    from: {
      get() {
        return this.$store.state.from;
      },
      set(value) {
        return (this.$store.state.from = value);
      },
    },
  },
  methods: {
    // ...mapMutations(['delete()'])
  },
};
</script>
<style scoped>
* {
  margin: 0;
}
h1 {
  margin: 20px 0;
}
ul ol {
  /* position: absolute; */
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  margin: 10px;
  background-color: rgb(12, 96, 165);
  color: aliceblue;
  border-radius: 10px;
}
ul ol .txt {
  flex: 10;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
ul ol button {
  flex: 1;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  background-color: #df1111;
  color: blanchedalmond;
  border-radius: 40px;
}
.inp {
  height: 40px;
  /* padding-left: 20px; */
  margin-left: 10px;
  display: flex;
  border-radius: 30px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.inp input,
button {
  flex: 1;
  width: 110px;
  height: 30px;
  margin: 0 10px;
  border-radius: 30px;
  padding-left: 10px;
}
.inp button {
  width: 30px;
  margin-top: 4px;
}
/*设置列表transition-group的name为list的入场以及离场动画效果*/
.list-enter-active,
.list-leave-active {
  transition: all 1.5s; 
  position: absolute;
}
.list-enter, .list-leave-to
            /* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.allDel {
  display: flex;
  width: 400px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
}
.allDel button{
  margin-top: 3px;
  margin-left: 180px;
}
</style>
