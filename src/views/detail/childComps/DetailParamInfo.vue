<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="header">{{paramInfo.key2}}</div>
    <table  v-for="(table, index) in paramInfo.sizes"
            :key="index"
            class="info-size">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <div class="header">{{paramInfo.key1}}</div>
    <table class="info-param">
      <tr v-for="(table, index) in paramInfo.infos"
          :key="index"
          class="param-tr">
          <td class="param-left">{{table.key}}</td>
          <td class="param-right">{{table.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted(){
  },
}
</script>

<style scoped>
.header {
  color: #333;
  padding: 10px;
}
.info-size {
  width: 100vw;
  padding: 12px;
  border-top: 2px solid #ebebeb;
}
.info-size  tr{
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  font-size: 14px;
  color: black;
  border-bottom: 1px solid #ebebeb;
}
.info-param {
  width: 100vw;
  padding: 12px;
  border-top: 2px solid #ebebeb;
}
.param-tr {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #ebebeb;
}
.param-left {
  font-size: 14px;
  color: black;
}
.param-right {
  color: red;
  font-size: 14px;
  padding: 0 50px;
}

.info-img img{
  width: 100%;
  height: 100%;
}
</style>
