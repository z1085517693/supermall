<template>
  <div class="detail-bottom">
    <div class="bar-item bar-left">
      <div>
        <div><img src="~assets/img/common/kefuxiaoxixinxi.svg" alt=""></div>
        <span class="text">客服</span>
      </div>
      <div>
        <div><img src="~assets/img/common/dianpu.svg" alt=""></div>
        <span class="text">店铺</span>
      </div>
      <div>
        <div><img src="~assets/img/common/collect.svg" alt=""></div>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
    };
  },
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  },
  mounted(){
  },
}
</script>

<style scoped>
.detail-bottom {
  height: 49px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
}
.bar-item {
  flex: 1;
}
.bar-left {
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
}
.bar-left img {
  width: 20px;
  height: 20px;
}
.bar-left .text {
  font-size: 15px;
}
.bar-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  line-height: 49px;
  text-align: center;
}
.bar-right .cart {
  width: 50%;
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy {
  width: 50%;
  background-color: #f69;
}
</style>
