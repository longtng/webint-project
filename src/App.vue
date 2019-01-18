<template>
  <div id="app">
    <header class="banner">
      <div class="container row">
        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Eurecom.svg/2000px-Eurecom.svg.png" alt="Eurecom Logo"> -->
        <div>The Recipes </div>  
        <router-link to="/profile">Login</router-link>

      </div>
    </header>

   <div class="content">
	   <router-view></router-view>
	 </div>
   

 </div>

</template>

<script>
import VideoChild from './components/VideoChild.vue';
import VideoList from './components/VideoList.vue';
import VideoControls from './components/Controls.vue';
import ProfileSetup from './components/ProfileSetup.vue';


export default {
  name: 'app',
  components: {
    VideoChild,
    VideoList,
    VideoControls,
    ProfileSetup
  },
  data: () => ({

  }),
  computed: {
  },
  methods: {

  }

}
</script>

<style>
  @import './assets/styles/mainStyle.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
