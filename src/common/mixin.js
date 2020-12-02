import {debounce} from 'common/utils'
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null
    }
  },
  mounted(){
    // 监听图片加载
      this.refresh = debounce(this.$refs.scroll.refresh, 500)
      this.itemImgListener = () => {
        this.refresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}