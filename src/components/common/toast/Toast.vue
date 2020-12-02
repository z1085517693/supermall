<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    // message: {
    //   type: String,
    //   default: ''
    // },
    // show: {
    //   type:Boolean,
    //   default: false
    // }
  },
  data() {
    return {
      message: '',
      isShow: false
    };
  },
  methods: {
    //设置默认时间duration=2000，message='默认文字'
    show(res, duration) {
      this.isShow = true;
      this.message = res;
      setTimeout(() => {
        this.isShow = false;
        this.message = ''
      }, duration);
    }
  },
  mounted(){
  },
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.7);
  color: #fff;
  padding: 8px 10px;
  z-index: 1000;
}
</style>
