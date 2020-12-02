<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
     // time=300   默认值 es6的
   backTop(x, y, time=300) {
     this.scroll && this.scroll.scrollTo(x, y, time)
   },
  //  完成加载更多
  finishPullUp() {
    this.scroll.finishPullUp()
  },
  // 图片刷新
  refresh() {
    this.scroll && this.scroll.refresh()
  },
  scrollToElement(el, time = 500) {
      this.scroll.scrollToElement(el, time);
    },
  // 离开位置
  getSaveY () {
    return this.scroll ? this.scroll.y : 0
  }
  },
  mounted(){
    
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      //监听位置
      if(this.probeType === 2 || this.probeType ===3){
        this.scroll.on('scroll',(position) => {
        // console.log(position);
        // 把实时的位置发送出去
        this.$emit('scroll',position)
      })}
      // 监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
        
        this.$emit('pullingUp')
       })
      }
      
      console.log(this.scroll);
   
    
  },
  
}
</script>

<style scoped>

</style>
