<template>
  <div>
    <cart-list-item v-for="(item, index) in cartList" 
                    :key="index"
                    :product="item">
    </cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
  mounted(){
  },
}
</script>

<style scoped>

</style>
