<template>
	<div>
	  <div v-for="(video, index) in list" :video="video" 
	  		v-on:click="$emit('click-video', index)">
	    <video class="vdList" v-bind:class="[index == activeIndex ? 'active' : '']">
			<source :src="video">
		</video>
	  </div>
	</div>
</template>

<script>
  export default {
      props: {
      	'list': {
           type: Array,
           required: true
          },
          activeIndex: Number
      }
  }
</script>
<style>
	.vdList {
		width: 120px;
	}
	.active {
		  border-style: solid;
    	border-width: 7px;
    	border-color: #01c733d9;
	}
</style>
