<template>
  <div class="shop-top">
    <div class="shop-logo">
      <img :src="shops.logo" alt="">
      <span class="logo-item">{{shops.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shops.sells | sellCountFilter}}
          </div>
          <div>总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shops.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-btn">
      <div class="store">进店逛逛</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailShopsInfo',
  props: {
    shops: Object,
    default() {
      return {}
    }
  },
  filters: {
      sellCountFilter: function(value) {
      if(value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
   }
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  mounted(){
  },
}
</script>

<style scoped>
.shop-logo {
  padding: 15px 7px;
  display: flex;
  font-size: 18px;
}
.shop-logo img{
  display:inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #C0C0C0;
}
.logo-item {
  padding: 15px 10px;

}
.shop-middle {
  display: flex;
}
.shop-middle-item {
  width: 50%;
  color: #333;
}
.shop-middle-left {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  text-align: center;
  font-size: 14px;
}
.sells-count, .goods-count {
  padding-bottom: 5px;
}
.info-goods {
  padding-right: 10px;
}
.line {
  height: 40px;
  border-left:1px solid #c0c0c0;
  margin-top: 10px;
}
.shop-middle-right {
  padding-left: 20px;
  font-size: 14px;
}
.shop-middle-right table td {
  padding: 2px;
}
.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better {
  color: #fff;
  background-color: #5ea732;
}
.better-more {
  color: #fff;
  background-color: #f13e3a;
}
.shop-btn {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
.store {
  background-color: #c0c0c0;
  text-align: center; 
  padding: 5px 40px;
  border-radius: 5px;
  color: #333;
}
</style>
