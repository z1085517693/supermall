<template>
    <swiper class="item-swiper">
      <swiper-item  v-for="item in topImages" 
                    :key="item.index"
                    >
        <img :src="item" alt="" @load="swiperLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper, 
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      defalut() {
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
    swiperLoad() {
      this.$emit('swiperLoad')
    }
  },
  mounted(){
  },
}
</script>

<style scoped>
.item-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
