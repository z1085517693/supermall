<template>
  <tab-bar>
      <Tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img  src="~assets/img/faxian-copy(1).svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/faxian-copy.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </Tab-bar-item>
      <Tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img  src="~assets/img/gouwuche.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/gouwuche1.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </Tab-bar-item>
      <Tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img  src="~assets/img/leimupinleifenleileibie.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/fenlei.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </Tab-bar-item>
      <Tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img  src="~assets/img/yixianshi_huaban.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img  src="~assets/img/wode.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </Tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,TabBarItem 
  },
  data() {
    return {
    };
  },
  methods: {
},
  mounted(){
},
}
</script>

<style scoped>

</style>
