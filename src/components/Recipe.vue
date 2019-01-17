<template lang="html">
  <div class="greeting">
    <h2>
      The Recipes
    </h2>


    <search-bar></search-bar>


    <div class="overviewRecipe">

      <div>
        <carousel :per-page="1" class="carrousselRecipe">
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


      <div class="informationsRecipe">
        <ol>
          <li><img src="../assets/timer.png" class="icone"><p>prep time : {{time}}</p></li>
          <li><img src="../assets/calories.png" class="icone"><p>Calories : {{calories}}</p></li>
          <li><img src="../assets/people.jpg" class="icone"><p>Serving : {{serving}}</p></li>
          <li><p>Rating : <star-rating :config="config" ref="myRating"></star-rating></p></li>
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

  </div>

</template>

<style>
  @import '../assets/styles/mainStyle.css';
  @import '../assets/styles/recipes.css';


</style>

<script>
import SearchBar from './SearchBar.vue';
import StarRating from 'vue-dynamic-star-rating';

export default {
  name: 'app',
  components: {
    StarRating,
	  SearchBar
  },
  data: function() {
      return {
    config: {
            rating: 2,
            style: {
                fullStarColor: '#ed8a19',
                emptyStarColor: '#737373',
                starWidth: 10,
                starHeight: 10,
            }
        },
        time: "30min",
        calories: "2000",
        serving: "3 people",

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
        ]
  }
},
  computed: {
  },
  methods: {

  }

}
</script>
