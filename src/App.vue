<template>
  <div id="app">
    <header class="banner">
      <div class="container row center">  
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Eurecom.svg/2000px-Eurecom.svg.png" alt="Eurecom Logo">
        <span>WebInt Project</span>
      </div>
    </header>
    <div class="content">
   </div>
   
       <main>
      <aside class="sidebar">

      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
    <footer>
    <p>Copyright 2019</p>
	</footer>
 </div>
</div>

  </div>
</template>

<script>
import VideoChild from './components/VideoChild.vue';
import VideoList from './components/VideoList.vue';
import VideoControls from './components/Controls.vue';

export default {
  name: 'app',
  components: {
    VideoChild,
    VideoList,
    VideoControls
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header.banner {
    background: #0083dc;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid rgba(45,55,103,.2);
}
header .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

header span {
    width: auto;
    margin: auto;
    display: table;
    font-family: Chalkduster, fantasy
}

header img {
  height: 35px;
  /*position: absolute;*/
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: center;
    margin: 0 auto;
}
.content {
  padding-top: 70px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: left;
  font-size: 11px;
  color: #807c7c;
  background-color: #eae9e9;
}
footer p {
  margin-left:10px; 
}


</style>
