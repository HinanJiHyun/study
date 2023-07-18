<template>
  <div id="app">
    <tool-bar></tool-bar>
    <spinner-bar :loading="loadingStatus"></spinner-bar>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import bus from "@/utills/bus";
import SpinnerBar from "@/components/SpinnerBar.vue";
export default {
  data(){
    return {
      loadingStatus: false,
    }
  },
  components: {
    SpinnerBar,
    ToolBar
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    }
  },
  created() {
    // bus.$on('start:spinner', ()=>{
    //   this.loadingStatus = false
    // })
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
a{
  color: #34495e;
  text-decoration-line: none;
}
a:hover{
  /*color: #42b883;*/
  text-decoration-line: underline;
}
a.router-link-exact-active{
  text-decoration-line: underline;
}


</style>
