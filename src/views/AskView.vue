<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import bus from "@/utills/bus";

export default {
  components: {ListItem},
  created(){
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
          .then(() => {
            console.log('fetched')
            bus.$emit('end:spinner')
          })
          .catch(e => console.error(e))
    }, 3000)
  }
}
</script>

<style scoped>

</style>