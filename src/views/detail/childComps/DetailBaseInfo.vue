<template>
  <div class="detail" v-if="Object.keys(goods).length !== 0">
    <div class="detail-title">{{goods.title}}</div>
    <div class="price">
      <span class="newprice">{{goods.newPrice}}</span>
      <del class="oldprice">{{goods.oldPrice}}</del>
      <span class="price-item">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-services">
      <span>
        <img :src="goods.services[0].icon" alt="">
        <span>{{goods.services[0].name}}</span>
      </span>
      <span>
        <img :src="goods.services[1].icon" alt="">
        <span>{{goods.services[1].name}}</span>
      </span>
      <span>
        <img :src="goods.services[2].icon" alt="">
        <span>{{goods.services[2].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
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
.detail-title {
  font-size: 16px;
  color: black;
  padding: 10px 0 5px;
  text-align: center;
}
.price {
  padding:5px;
}
.newprice {
  color: var(--color-high-text);
  font-size: 25px;
}
.oldprice {
  font-size: 14px;
  padding: 5px;
}
.price-item {
  background-color: var(--color-high-text);
  border-radius: 5px;
  color: #fff;
  margin-left: 10px;
}
.columns {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 5px;
  font-size: 13px;
}
.info-services {
  display: flex;
  height: 44px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 3px rgba(100,100,100,.2);
  font-size: 14px;
  color: #333;
  padding: 5px;
}
.info-services img{
  width:12px;
  height:12px;    
}
</style>
