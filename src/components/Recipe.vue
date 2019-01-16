<template lang="html">
  <div class="greeting">
    <h2>
      The Recipes
    </h2>


    <search-bar></search-bar>


    <div class="overviewRecipe">

      <div>
        <carousel :per-page="1" id="carrousselRecipe">
          <slide>
            <img src="../assets/waffle.jpg">
          </slide>
          <slide>
            <img src="../assets/cookie.jpg">
          </slide>
          <slide>
            <img src="../assets/cookie.jpg">
          </slide>
            <slide>
            <img src="../assets/waffle.jpg">
          </slide>
        </carousel>
      </div>

      <div class="ratingRecipe">
          Rating :  <star-rating v-model="rating"></star-rating>
      </div>

      <div class="informationsRecipe">
        <ol>
          <li>1<p>prep time</p></li>
          <li>2<p>Calories</p></li>
          <li>3<p>Serving</p></li>
        </ol>
      </div>

    </div>
  </div>

</template>

<style>
  @import '../assets/styles/mainStyle.css';
  @import '../assets/styles/recipes.css';


</style>

<script>
import SearchBar from './SearchBar.vue';
import StarRating from 'vue-star-rating';

export default {
  name: 'app',
  components: {
    StarRating,
	  SearchBar
  },
  data: () => ({
    rating: 3,
  }),
  computed: {
  },
  methods: {

  }

}
</script>
