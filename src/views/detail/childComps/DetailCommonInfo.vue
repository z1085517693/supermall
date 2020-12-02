<template>
  <div class="common-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | formatDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img  v-for="(item, index) in commentInfo.images" 
              :src="item" alt=""
              :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: 'DetailCommonInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted(){
  },
  filters: {
    formatDate(time) {
      let date = new Date(time * 1000);
      return formatDate(date, 'yyyy.MM.dd hh:mm:ss');
    },
  }
}
</script>

<style scoped>
.common-info {
  margin: 10px 0px 20px;
  border-top: 4px solid #ebebeb;
  border-bottom: 4px solid #ebebeb;
}
.info-header {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  color: #333;
  border-bottom: 2px solid #ebebeb;
}
.info-user {
  display: flex;
  padding: 10px 15px;
  align-items: center;
  color: #333;
}
.info-user img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
}
.info-detail {
  font-size: 14px;
  padding: 0 15px;
}
.info-other {
  padding: 10px 0;
  font-size: 12px;
}
.date {
  margin-right: 10px;
}
.info-imgs {
  display: flex;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  justify-content: space-between;
}
.info-imgs img {
  width: 100%;
  height: 100%;
  margin: 0 5px;
}
</style>
