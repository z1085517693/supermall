<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start">
        <div class="spot"></div>
        <div class="line"></div>
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end">
        <div class="spot"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img  v-for="(item, index) in detailInfo.detailImage[0].list" 
            :key="index" 
            :src="item" alt=""
            @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  methods: {
    imageLoad() {
      //判断图片是不是全部加载完了，如果全部加载完了 ，就往外发送
      if(++this.counter === this.imagesLength) {
        this.$emit('detailIamgeLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length
      // console.log(this.imagesLength);
    }
  },
  mounted(){
  },
}
</script>

<style scoped>
.goods-info {
  border-top: 2px solid #F3f5f4;
}
.info-desc {
  padding: 15px;
  margin-top: 10px;
}
.start .spot {
  width: 4px;
  height: 4px;
  border: 1px solid black;
  background-color: black;
}
.start .line {
  width: 50px;
  height: 1px;
  background-color: #d5d5d5;
}
.end {
  display: flex; 
  flex-direction: column;
}
.end .spot {
  align-self: flex-end;
  width: 4px;
  height: 4px;
  border: 1px solid black;
  background-color: black;
}
.end .line {
  align-self: flex-end;
  width: 50px;
  height: 1px;
  background-color: #d5d5d5;
}
.desc {
  font-size: 12px;
  color: #333;
  padding: 15px 0px;
}
.info-list  img{
  width: 100%;
  height: 100%;
}
</style>
