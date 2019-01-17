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
          Rating :  <star-rating :config="config" ref="myRating"></star-rating>
      </div>

      <div class="informationsRecipe">
        <ol>
          <li><img src="../assets/timer.png" height="42" width="42"><p>prep time : 50min</p></li>
          <li><img src="../assets/calories.png" height="42" width="42"><p>Calories</p></li>
          <li><img src="../assets/people.jpg" height="42" width="42"><p>Serving</p></li>
        </ol>
      </div>

    </div>


    <div class="Ingredients">
      <h3>ingredients</h3>
      <ul>
        <li v-for='ingre in Ingredients'>
          {{ingre}}
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


    <div class="Instructions">
      <h3>Instructions</h3>
      <ul>
        <li v-for='instr in Instructions'>
          {{instr}}
        </li>
      </ul>
    </div>
    <button v-on:click="test()">test</button>
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
                starHeight: 10
            }
        },
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
    test:function(){
    /* Grab the necessary DOM elements */
      var r = this.$refs["myRating"];
      r.config=this.config;
      console.log(this.config.rating)
    }

  }

}
</script>
