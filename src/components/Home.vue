<template>
  <div>
  	<div class="home-content">
    <h1>
      The Recipes
    </h1>

	<search-bar id="home-search-bar"></search-bar>
    <carousel :per-page="3" class="carousel-home" :autoplay="true" :loop="true" :autoplayTimeout="3000">
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/images/ic/1280xn/p060z50q.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/pennealarrabiatapast_83813_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cumberland_sausage_59571_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe" title="">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/waffles_82356_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/spaghettivongole_88988_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cumberland_sausage_59571_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/smokedsalmonandpotat_90568_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/christmas_roast_duck_83066_16x9.jpg">
			</router-link>
		</slide>
		<slide>
			<router-link to="/recipe">
			<img src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/membrillo_and_stilton_28987_16x9.jpg">
			</router-link>
		</slide>
	</carousel>
<br><br>
	<div class="top-categories">
	<h2>Top Categories</h2>
	<div class="row" >
		<div v-for="cat in categories">
			<div class="category-item">
				<img :src="cat.img">
				<p>{{cat.title}}</p>
			</div>
		</div>
	</div>
	</div>

	<br><br>
	<div class="trend-recipes">
	<h2>Trending Recipes</h2>
	<div class="row" >
		<div v-for="item in items">
			<div class="recipe-item">
				<img :src="item.img">
				<p class="title">{{item.title}}</p>
				<p class="desc">{{item.description}}</p>
			</div>
		</div>
	</div>
	</div>
	</div>
	<custom-footer></custom-footer>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import CustomFooter from './Footer.vue';

export default {
  name: 'app',
  components: {
	SearchBar,
	CustomFooter
  },
  data: () => ({
	// categories:["Cat1", "Cat2", "Cat3", "Cat", "2" ],
	categories:[{
		title: "Desserts",
		img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/low-fat_chocolate_sponge_79500_16x9.jpg"
	},
	{
		title: "Italian",
		img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/italian_16x9.jpg"
	},
	{
		title: "Low-sugar",
		img: "https://ichef.bbci.co.uk/images/ic/320xn/p05w5zpr.jpg"
	},
	{
		title: "Vegetarian",
		img: "https://ichef.bbci.co.uk/images/ic/320xn/p05vftxg.jpg"
	},
	{
		title: "Mexican",
		img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/mexican_16x9.jpg"
	}],
	items: [{
		title:"Chicken Curry",
		description: "From classic chicken tikka masala to Thai green curry. Take on your takeaway and spice up suppertime with our favourite chicken jalfrezi, chicken korma, Japanese katsu curry or quick coconut chilli chicken.",
		img:"https://ichef.bbci.co.uk//food/ic/food_16x9_832/recipes/chickenjalfrezi_91772_16x9.jpg"
	},
	{
		title:"Lemon Cake",
		description: "Try one of our fresh and zesty lemon cake recipes, from the classic lemon drizzle to Delia’s ultimate lemon curd layer cake.",
		img:"https://ichef.bbci.co.uk//food/ic/food_16x9_832/recipes/lemon_cake_29430_16x9.jpg"
	},
	{
		title:"Pork Pie",
		description: "Pork pie's are a British classic. Herby pork housed in hot water crust pastry, they're a brilliant addition to a picnic or party table. We have pork pie recipes from Paul Hollywood, Hairy Bikers and more.",
		img:"https://ichef.bbci.co.uk//food/ic/food_16x9_832/recipes/small_pork_pies_with_11074_16x9.jpg"
	},
	{
		title:"Opera Cake",
		description: "A joconde sponge is a decorative almond-flavored sponge cake made in layers. Opéra gâteau is an elaborate version of it, here made with kirsch syrup and a chocolate ganache.",
		img:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/opera_cake_04536_16x9.jpg"
	},
	{
		title:"Stuffed Roast Turkey Breast",
		description: "Less than 2 hours of roasting makes this stuffed turkey crown a relatively quick Christmas dinner. As well as lemon and thyme, the stuffing features tart dried cranberries, crunchy almonds and sweet leeks.",
		img:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roast_turkey_crown_10545_16x9.jpg"
	},
	{
		title:"Chocolate Cupcakes",
		description: "An easy chocolate cupcake recipe that's quick to prepare for birthdays, parties and bake sales.",
		img:"https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chocolate_cupcakes_14164_16x9.jpg"
	},
	],
	carouselImgs: [
	{
		title: "Low-sugar Cake",
		img: "https://ichef.bbci.co.uk/images/ic/1280xn/p060z50q.jpg"
	},
	{
		title: "Penne al'arrabiata",
		img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/pennealarrabiatapast_83813_16x9.jpg"
	},
	{
		title: "Easy chicken traybakes",
		img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cumberland_sausage_59571_16x9.jpg"
	},
	{
		title: "",
		img: ""
	},
	]

  }),
  computed: {
  },
  methods: {

  }

}
</script>

<style>
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
		width: 300px;
	}
	.recipe-item img {
	    width: 300px;
		height: 200px;
		object-fit: cover;
	}
	.recipe-item .title {
		font-weight: bold;
	}
	.recipe-item .desc {
		text-align: justify;
    	font-size: 0.8em;
	}
	.trend-recipes .row {
		max-width: 1000px;
	}
	.carousel-home img {
		object-fit: cover;
    	height: 300px;
	}
	.home-content {
		max-width: 1000px;
		margin: auto;
	}
	  button {
    padding: 10px;
    border: 1px solid #ccc;
    /*border-radius: 4px;*/
    resize: vertical;
    width: 60px; 
    margin-top: 10px;
    cursor:pointer;
    background-color: #d6d6d6

  }

</style>
