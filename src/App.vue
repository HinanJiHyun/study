<template>
  <div id="app">
    <tool-bar></tool-bar>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
export default {
  components: {
    ToolBar
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
