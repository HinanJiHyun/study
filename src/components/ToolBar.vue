<template>
  <div>
    <header>
    <router-link to="/news">news</router-link>
    <router-link to="/ask">ask</router-link>
    <router-link to="/jobs">jobs</router-link>
    </header>
    <router-view class="content"/>
  </div>
</template>

<script setup>
</script>

<style scoped>
header{
  width: 100%;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
a{
  padding: 0px 10px;
  color: #eeffeb;
  text-decoration-line: none;
}
header .router-link-exact-active{
  color: #025433;
}
.content{
  padding: 8px;
}
</style>