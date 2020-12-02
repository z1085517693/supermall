<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control  :titles="titles" 
                    class="tab-control" 
                    @tabClick="tabClick" 
                    ref="tabControl1"
                    v-show="isTabFixed"
                    ></tab-control>
    <scroll class="scroll"
            ref="scroll"  
            :probe-type="3" 
            @scroll="contentScroll" 
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends" @recommendImg="recommendImg"></home-recommend>
      <feature-view @viewLoad="viewLoad"/>
      <tab-control  :titles="titles" 
                    class="tab-control" 
                    @tabClick="tabClick" 
                    ref="tabControl2"
                   ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>  
</template>

<script>
import HomeSwiper from './ChildComps/HomeSwiper'
import HomeRecommend from './ChildComps/HomeRecommend'
import FeatureView from './ChildComps/FeatureView'
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from'@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/common/backtop/BackTop'
import {
  getHomeMultidata, 
  getHomeGoods
} from "network/home"
// import {debounce} from 'common/utils'
import {itemListenerMixin} from 'common/mixin'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },
  created () {
    //请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  destroyed() {
    
  },
  activated() {
    this.$refs.scroll.backTop(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    //保存Y值
    this.saveY = this.$refs.scroll.getSaveY()
    //2 取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    // 网络请求相关的
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    },
    // 事件监听的
    tabClick(index) {
      console.log(index);
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1: 
          this.currentType = 'new'
          break;
        case 2: 
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 点击
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0,0,300)
      this.$refs.scroll.backTop(0, 0, 500)
    },
    // 回到顶部
    contentScroll(position) {
      // console.log(position)
      // 通过position.y来判断
      // 因为position是负数
      // 1.判断backtop是否显示
      this.isShowBackTop = (-position.y) > 1000
      // 2.决定tabcontrol是否吸顶（position:fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    // 上拉监听
    loadMore() {
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    },
    // 防抖函数
    // debounce(func, delay) {
    //   let timer = null;
    //   return function(...args) {
    //     if(timer) clearTimeout(timer)
    //     timer = setTimeout(() =>{
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // }
    // 轮播图
    swiperImageLoad() {
      // console.log( this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // recommendLoad() {
    // this.$refs.scroll.scroll.refresh()  
    // },
    viewLoad() {
    this.$refs.scroll.scroll.refresh()  
    },
    recommendImg() {  
    this.$refs.scroll.scroll.refresh() 
    }
   
  },
  mounted(){
    // 监听图片加载
    // const refresh = debounce(this.$refs.scroll.refresh, 500)
    
    //1.
    // this.$bus.$on('homeitemImageLoad',() => {
    //   // console.log(111);
    //   refresh()
    // })
    // 获取tabControl的ffsetTop
    // 所有组件都有一个属性$el ：用于获取组建中的元素
    // this.tabOffsetTop = this.$refs.$el.tabControl.offsetTop
    // console.log( this.$refs.tabControl.$el.offsetTop);
    //2.对监听的事件进行保存
    // this.itemImgListener = () => {
    //   refresh()
    // }
    // this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}
</script>

<style scoped>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  } 
  #home {
    /* margin-top: 44px; */
    height: 100vh;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
