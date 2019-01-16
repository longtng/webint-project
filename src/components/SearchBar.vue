<template lang="html">
  <div class="greeting">
   <input v-model="message" placeholder="What do you search for?">
  </div>
</template>


<script>

export default {
  data: () => ({
    message:"",
  }),

}
</script>


<style>
</style>
