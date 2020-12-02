<template>
  <div class="bottom-bar">
    <div class="button">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去结算: {{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  data() {
    return {
    };
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        // 全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else { //部分或者全部不选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
  mounted(){
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      // 没有数据的情况下也是true所以需要判断
      if(this.$store.state.cartList.length === 0) {
        return false
      }else{
       return !this.$store.state.cartList.find(item => !item.checked) 
      }
      
    }
  },
}
</script>

<style scoped>
.bottom-bar {   
  display: flex;
  height: 40px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  line-height: 40px;
}
.button {
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  width: 60px;
}
.price {
  flex: 1;
}
.check-button {
  line-height: 20px;
  margin-right: 5px;
}
.calculate {
  width: 90px;
  text-align: center;
  background-color: var(--color-tint);
  border-radius: 10px;
}
</style>
