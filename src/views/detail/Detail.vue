<template>
  <div id="detail">
    <detial-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detial-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages" ref="swiper" @swiperLoad="swiperLoad"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shops-info :shops="shops"></detail-shops-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-param-info :param-info="goodsParamInfo" ref="params" class="params"></detail-param-info>
      <detail-common-info :comment-info="commentInfo" ref="comment"></detail-common-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <!-- <toast :message="message" :is-show="isShow"></toast> -->
  </div>    
</template>
<script>    

import DetialNavBar from './childComps/DetialNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopsInfo from './childComps/DetailShopsInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommonInfo from './childComps/DetailCommonInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import Scroll from '@/components/common/scroll/Scroll'
import BackTop from '@/components/common/backtop/BackTop'
import GoodsList from '@/components/content/goods/GoodsList'
// import Toast from '@/components/common/toast/Toast'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import {itemListenerMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import {mapActions} from 'vuex'
export default {
  name: 'Detail',
  components: {
    DetialNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopsInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommonInfo,
    DetailBottomBar,
    Scroll,
    BackTop,
    // Toast,
    GoodsList
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsParamInfo: {},
      commentInfo: {},
      recommends: [],
      themetopYs: [],
      theme: ['swiper','params','comment','recommend'],
      getThemeTopYs: null,
      currentIndex: 0,
      isShowBackTop:false,
      // message: '',
      // isShow: false
    };
  },
  methods: {
    ...mapActions(['addCart']),
    detailImageLoad() {
      this.$refs.scroll.scroll.refresh()  
    },
    swiperLoad() {
      this.$refs.scroll.scroll.refresh()
      this.getThemeTopYs()
    },
    titleClick(index) {
       this.$refs.scroll.scrollToElement(this.$refs[this.theme[index]].$el, 300);
      //  this.$refs.scroll.scroll.scrollTo(0, -this.themetopYs[index], 500)
    },
    contentScroll(position) {
      // console.log(position);
      
      // console.log(this.themetopYs)
      const positionY = -position.y
      let length = this.themetopYs.length
      // 1.
      // for(let i = 0; i < length; i++) {
      //   if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themetopYs[i] && positionY < this.themetopYs[i+1]) ||
      //       (i === length - 1 && positionY >= this.themetopYs[i]))) {
      //         this.currentIndex = i
      //         console.log(this.currentIndex)
      //         this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
    // 2.
          for(let i = 0; i < length - 1; i++) {
            if(this.currentIndex !== i && (positionY >= this.themetopYs[i] && positionY < this.themetopYs[i+1])){
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex
            }
          }
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

    },
    //加入购物车  
    addToCart() {
      //1、获取购物车的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      //2.将商品添加到购物车中
      // this.$store.commit('addCart', product)
      // dispatch会返回一个promise
      this.addCart(product).then(res => {
        // console.log(res);
        // this.isShow = true;
        // this.message = res
        // setTimeout(() => {
        //   this.isShow = false;
        //   this.message = ''
        // }, 1500);
        this.$toast.show(res ,2000)
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res);
      // })
      // 3.添加到购物车成功
    }
  },
  mounted(){
    // console.log(this.$refs.params);
  },
  updated() {
  
  },
  destroyed() { 
     this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    // console.log(this.$route);
    //2.请求详情数据
    getDetail(this.iid).then(res => {
      //1获取顶部图片
      const data = res.result 
      // console.log(res);
      //2.取出轮播图数据
      this.topImages = res.result.itemInfo.topImages
      //3.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //4.获取店铺信息
      this.shops = new Shop(data.shopInfo)
      //5.获取图片信息
      this.detailInfo = data.detailInfo
      //6.导入参数信息
      this.goodsParamInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // console.log(this.goodsParamInfo);
      //7.取出评论的信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }                              
    })
    //3.请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })
    //4.给getThmem赋值
    this.getThemeTopYs = debounce(() =>  {
      this.themetopYs = []
      this.themetopYs.push(0)
      this.themetopYs.push(this.$refs.params.$el.offsetTop)
      this.themetopYs.push(this.$refs.comment.$el.offsetTop)
      this.themetopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themetopYs.push(Number.MAX_VALUE)
    },100)
   
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
