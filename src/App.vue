<template>
  <div id="app">
    <header class="banner">
      <div class="container row center">  
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Eurecom.svg/2000px-Eurecom.svg.png" alt="Eurecom Logo">
        <span>WebInt Project</span>
      </div>
    </header>
    <div class="content">

      <video-controls @change-video-source="play"
                      @controls="changeControls"
                      @change-offset="changeOffset"
                      @video-rotate="videoRotate"></video-controls>
      <br>
      <div class="row center">
       <video-child :video="currentVideo"
                    @video-ended="playNextVideo"
                    @video-error="videoError"
                    :displayButtons="displayButtons"
                    :offset="offset" ref="videoComponent"></video-child>&nbsp; &nbsp; 
     <video-list :list="videos" :activeIndex="currentIndex" @click-video="clickVideo"></video-list>
   </div>
    <footer>
    <p>Copyright 2019 Barboza Silvana</p>
  </footer>
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
  // https://vuejs.org/2016/02/06/common-gotchas/#Why-does-data-need-to-be-a-function
  data: () => ({
    currentIndex: 0,
    currentTitle: "",
    videoURL: "",
    displayButtons: true,
    offset: null,
  	videos: [
  	"https://ia800301.us.archive.org/0/items/electricsheep-flock-244-32500-3/00244%3D32593%3D23650%3D23640_512kb.mp4",
  	"https://ia800301.us.archive.org/0/items/electricsheep-flock-244-32500-3/00244%3D32653%3D22927%3D23015_512kb.mp4",
  	"https://ia600301.us.archive.org/0/items/electricsheep-flock-244-32500-3/00244%3D32673%3D23037%3D23015_512kb.mp4",
  	"https://ia800301.us.archive.org/0/items/electricsheep-flock-244-32500-3/00244%3D32693%3D32693%3D32693_512kb.mp4",
  	]
  }),
  computed: {
	currentVideo: function (){
	   if(this.videoURL){
      return this.videoURL;
     }else{
      if(this.currentIndex < this.videos.length){
        return this.videos[this.currentIndex];
      }else{
        return {};
      }
     }
	
    }
  },
  methods: {
  	playNextVideo (){
      if(this.currentIndex < this.videos.length - 1){
        this.currentIndex +=1;
        this.currentTitle = "Video " + (this.currentIndex + 1);
        }
  	},
    play (url){
      this.videoURL = url;
      this.currentIndex = -1;
    },
    changeControls(c){
      this.displayButtons = c;
    },
    changeOffset(offset){
      this.$refs.videoComponent.setOffset(offset);
    },
    videoRotate(){
      this.$refs.videoComponent.rotate();
    },
    clickVideo(index){
      this.currentIndex = index;
      this.videoURL = null;
    }
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
