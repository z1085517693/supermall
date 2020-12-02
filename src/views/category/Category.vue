<template>
  <div class="wrapper" ref="aaa">
        <ul class="content">
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>1</li>
          <li>23</li>
          <li>4</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
        </ul>  
  
  
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  data() {
    return {
      scroll: null
    };
  },
  methods: {
},
  mounted(){
    console.log(BScroll);
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('scroll',(position) =>{
      // console.log(position);
    })
    this.scroll.on('pullingUp', () =>{
      console.log(1111);
    })
},

}
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: red;
  overflow:hidden;
}

</style>

