<template>
  <div class="recommend">
    <div  class="recommend-item"
          v-for="item in recommends"
          :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="recommendImg">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    recommendImg() {
      this.$emit('recommendImg')
    }
},
  mounted(){
},
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
