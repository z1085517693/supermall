<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import Scroll from '@/components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar,
    Scroll
  },
  data() {
    return {
    };
  },
  methods: {
    
},
computed: {
  // cartLength() {
  //   // return this.$store.state.cartList.length
  //   return this.$store.getters.cartLength
  // }
  //1.
    ...mapGetters([
      'cartLength'
    ])
    //2
    // ...mapGetters({
    //   length: 'cartLength',
    //   list: 'cartList'
    // })

},
  mounted(){
},
activated() {
  this.$refs.scroll.refresh()
},
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
</style>
