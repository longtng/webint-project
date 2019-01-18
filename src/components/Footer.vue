<template lang="html">
  <div>
   <footer>
   		<div class="topics row">
   			<div v-for="t in topics" class="topic ">
   				<h4>{{t.title}}</h4>
   				<div v-for="t in t.links">
   					<a href="#">{{t}}</a>
   				</div>

   		
   			</div>
   			<div class="signup">
   				<h4>Sign up</h4>
   				<p>Your e-mail address</p>
   				<input type="e-mail"><br>
   				<button>Sign up</button>
   			</div>
   		</div>
   		<div class="contact">
   			<div class="logo">
   				<h4>The Recipes</h4>
   			</div>
   			<div class="social">
   				<div>
	   				<img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_128x128.png">
	   				<img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/twitter-icon_128x128.png">
	   				<img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/youtube-icon_128x128.png">
	   				<img src="https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/pinterest-icon_128x128.png">
   				</div>
   				<div>
   					<h4>The Recipes Contact</h4>
   					<p>(800) CALL REC</p>
   					<p>info@recipes.io</p>
   				</div>

   			</div>
   		</div>
   </footer>
  </div>
</template>


<script>

export default {
  data: () => ({
    message:"",
    topics: [
    {
    	title:"Cuisines",
    	links: ["American", "British", "Italian", "Mexican"]
    },
    {
    	title: "Ocasion",
    	links: ["Easter", "Halloween", "Christmas", "Hanukkah"]
    },
    {
    	title: "Diets",
    	links: ["Vegan", "Gluten free", "Vegetarian", "Low-sugar"]
    },
    {
    	title: "Ingredients",
    	links: ["Baking powder", "Ricotta", "Flour tortilla", "Egg"]
    }
    ]
  }),

}
</script>
<style>
	.topics {
		width: 100%;
		text-align: left;
		background: #f7f7f7;
	}
	.topics .topic {
		padding: 15px;
		
	}
	.topics .signup {
		padding: 15px;
		/*width: 30%;*/
	}
	.social {
		max-width: 200px;
    	float: right;
	}
	.social img{
		width:24px; 
		height:auto; 
		display:inline; 
		margin-right:10px;
	}
	.logo {
		float: left;
	}
	footer input {
		width: 200px;
	}
	footer button {
		width: 75px;
	}
	footer .contact {
		padding: 15px;
		background: #e0e0e0;
    	overflow: auto;
	}
	footer {
		padding-top: 50px;
	}


</style>
