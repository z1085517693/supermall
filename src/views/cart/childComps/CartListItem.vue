<template>
  <div id="cart-item">
      <div class="item-selector"> 
        <check-button :isChecked="product.checked" @click.native="checkClick"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.image" alt="">
      </div> 
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="item-bottom">
          <div class="item-price"><span>￥</span>{{product.price}}</div>
          <div class="item-count"><span>x</span>{{product.count}}</div>
        </div>
      </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    product: {
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
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
  mounted(){
    console.log(this.product);
  },
}
</script>

<style scoped>
#cart-item {
  display: flex;
  border-bottom: 1px solid #333;
  width: 100%;
  font-size: 12px;
  padding: 5px;
  
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  display: flex;
  flex-direction: column;
  /* width: 60%; */
  padding: 10px;
  overflow: hidden;
}
.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 20px;
}
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
}
.item-bottom {
  display: flex;
  justify-content: space-between;
  font-size:16px;
  margin-top: 20px;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
