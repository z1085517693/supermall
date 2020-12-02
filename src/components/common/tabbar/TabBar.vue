<template>
  <div class="tab-bar ignore">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
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

<style>
  .tab-bar {
  display: flex;
  background-color: #ccc;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, .3);
  height: 49px;
  justify-content: space-around;
  align-items: center;
}
/* .tab-bar-item {
  height: 49px;
  
} */

</style>
