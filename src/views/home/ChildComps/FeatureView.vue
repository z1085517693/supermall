<template>
  <div class="feature">
    <a href="">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="viewLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  methods: {
    viewLoad() {
      this.$emit('viewLoad')
    }
},
  mounted(){
},
}
</script>

<style scoped>
.feature img {
  width: 100%
}
</style>
