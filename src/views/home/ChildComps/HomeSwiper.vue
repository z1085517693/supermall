<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index   ">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        isimage: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if(!this.isimage){
          this.$emit('swiperImageLoad')
          this.isimage = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
