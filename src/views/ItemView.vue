<template>
  <div>
    <h1>{{ fetchedAskItem.title }}</h1>
    <div class="user-container" >
      <div>
      <i style="vertical-align: middle; margin-right: 3px" class="fa-sharp fa-solid fa-user-pen"></i>
      <router-link :to="`/user/${fetchedAskItem.user}`">
        {{fetchedAskItem.user}}
      </router-link>
      </div>
      <div>
        {{fetchedAskItem.time_ago}}
      </div>
    </div>
    <div class="content">
      <h2 v-html="fetchedAskItem.content"></h2>
    </div>
    <hr>
    <h3>comment</h3>
    <div v-for="item in fetchedAskItem.comments" class="comment">
      <div class="comment-container">
      <div><i class="fa-sharp fa-solid fa-circle-user" style="margin-right: 3px;"></i></div>
      <router-link :to="`/user/${item.user}`">
        <h4 style="display: inline">{{item.user}}</h4>
      </router-link>
      </div>
      <p v-html="fetchedAskItem.content"/>
      <hr>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters([
        "fetchedAskItem"
    ]),
    // item(){
    //   return this.$store.state.item
    // }
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
h1{
  padding: 10px;
  margin-bottom: 0;
  background-color: #bdd7ba;
}
.content{
  padding: 0 20px;
}
h3{
  background-color: #dfefdd;
  padding: 10px;
}
.comment{
  padding: 0 20px;
}
.user-container{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.comment-container{
  display: flex;
}
.comment-container h4{
  margin: 0;
}
</style>