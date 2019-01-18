<template lang="html">
  <div class="search-bar">
   <!-- <input v-model="message" placeholder="What do you search for?"> -->
     <vue-single-select
     	id="select"
        v-model="selected"
        :options="options"
        :required="true"
        :max-results="5"
        placeholder="What do you want to cook?"
></vue-single-select>
  </div>
</template>


<script>
import Autocomplete from 'v-autocomplete'
import VueSingleSelect from "vue-single-select";
import 'v-autocomplete/dist/v-autocomplete.css'



export default {
	components: {
		VueSingleSelect
	},
  props: {
  	selected: String
  },
  data: () => ({
	options:["Cat1", "Cat2", "Cat3", "Cat", "2" ]
  }),
}
</script>


<style>
	.search-bar {
		/*width: 100%;*/
		margin: 30px;
	}
	.search-bar input {
		width: 90% !important;
	}
	#select .search-input {
		width: 100% !important;
	}
	#select div.cursor-pointer {
		display: none;
	}
</style>
