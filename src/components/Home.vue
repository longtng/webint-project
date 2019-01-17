<template lang="html">
  <div >
    <h2>
      Recipe
    </h2>

    <router-link to="/recipe">Go to Recipe</router-link><br>
    <router-link to="/profile">Go to Profile</router-link>
	<search-bar></search-bar>
    <carousel :per-page="1">
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

	<div class="top-categories">
	<h2>Top Categories</h2>
	<div class="row" >
		<div v-for="cat in categories">
			<div class="category-item">
				<img src="../assets/waffle.jpg">
				<p>Name</p>
			</div>
		</div>
	</div>
	</div>

	<div class="trend-recipes">
	<h2>Trending Recipes</h2>
	<div class="row" >
		<div v-for="cat in categories">
			<div class="recipe-item">
				<img src="../assets/waffle.jpg">
				<p>Content</p>
			</div>
		</div>
	</div>
	</div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'app',
  components: {
	SearchBar
  },
  data: () => ({
	categories:["Cat1", "Cat2", "Cat3", "Cat", "2" ]

  }),
  computed: {
  },
  methods: {

  }

}
</script>

<style>
  .greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .top-categories img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
	}
	.category-item {
		padding: 10px;
	}

	.recipe-item {
		padding: 10px;
	}
	.recipe-item img {
	    width: 300px;
		height: 200px;
		object-fit: cover;
	}



</style>
