<template lang="html">
  <div class="greeting">
  	<a href=#/>
      <h2>
        The Recipes
      </h2>
    </a>
<!-- 
    <div class="User">
      <a href="#/profile">LOGIN</a>
    </div> -->


    <!-- <search-bar></search-bar> -->
    <br>
    <h2>{{title}}</h2>
    <br>

    <div class="overviewRecipe">

      <div>
        <carousel :per-page="1" class="carrousselRecipe">
        
        <slide>
          <img :src="imgSrc">
        </slide>
        <slide>
          <img :src="imgSrc">
        </slide>
          <slide>
          <img src="../assets/waffle.jpg">
        </slide>
      </carousel>
      </div>

      <div class="informationsRecipe">
        <ol>
          <li><img src="../assets/timer.png" class="icone"><p>prep time : {{time}}</p></li>
          <li><img src="../assets/calories.png" class="icone"><p>Calories : {{calories}}</p></li>
          <li><img src="../assets/people.jpg" class="icone"><p>Serving : {{serving}}</p></li>
          <li><p>Rating : <star-rating v-model="rating"></star-rating></p></li>
        </ol>
      </div>

    </div>

    <div class="texte">


    <div class="Ingredients">
      <h3>ingredients</h3>
      <ul>
        <li v-for='ingre in Ingredients'>
          {{ingre}}
        </li>
      </ul>
    </div>

    <div class="Instructions">
      <h3>Instructions</h3>
      <ul class="uling">
        <li v-for='instr in Instructions'>
          {{instr}}
        </li>
      </ul>
    </div>


    <div class="Tools">
      <h3>cooking tools</h3>
      <ul>
        <li v-for='tool in Tools'>
          {{tool}}
        </li>
      </ul>
    </div>
    </div>


    <div class="suggestions">
      <h2>You may also like...</h2>
      <div class="row" >
        <div v-for="recipe in otherRecipes">
          <div class="category-item">
            <img src="../assets/waffle.jpg">
            <p>Name</p>
          </div>
        </div>
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
import StarRating from 'vue-star-rating'

export default {
  name: 'app',
  components: {
    StarRating,
	  SearchBar
  },
  data: function() {
      return {
        otherRecipes:["Cat1", "Cat2", "Cat3", "Cat", "2" ],
        recipeName:"The best chocolate cookies",
        time: "30min",
        calories: "2000",
        serving: "3 people",
        rating: 3,

        Ingredients : [
          "30g butter",
          "100g of sugar",
          "2 eggs",
          "50 ml of milk"
        ],
        Tools : [
        "1 large pot",
        "1 oven"
        ],
        Instructions : [
        "Do something",
        "Do something else",
        "put what you did in the oven for 30min",
        "eat"
        ],
        images:[{path:"../assets/waffle.jpg"},{path:"../assets/cookie.jpg"}]

  }
},
  computed: {
  },
  methods: {

  },
  props: {
    title: {
      default: "Waffle",
      type: String,
    },
    imgSrc: {
      default: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/waffles_82356_16x9.jpg",
      type: String
    }
  }

}
</script>
