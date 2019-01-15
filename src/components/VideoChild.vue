<template>
  <div>
    {{title}}
    <video id="jkBxVideo" class="vdChild" 
            autoplay ref="videoComponent" controls
            v-on:ended="$emit('video-ended')"
            v-on:error="videoError"
            :src="video">
    </video>
  </div>
</template>

<script>
  export default {
      props: {
         video: {
           type: String,
           required: true
          },
          title: String,
          displayButtons: Boolean,
      },
      methods: {
        setOffset: function (offset){
            let video = this.$refs.videoComponent;
            
            if(offset > video.duration){
              alert('Offset greater than the video duration');
              return;
            }
            video.currentTime = offset;
            if (video.paused){
              video.play();
            }
          },
          rotate: function(){
              var v = this.$refs.videoComponent;
              var properties = ['transform', 'WebkitTransform', 'MozTransform',
                          'msTransform', 'OTransform'];
              var prop = properties[0];
              for(var i=0,j=properties.length;i<j;i++){
                if(typeof v.style[properties[i]] !== 'undefined'){
                  prop = properties[i];
                  break;
                  }
                }
                v.style.left = 0;
                v.style.top = 0;
              this.videoRotation += 15;
              v.style[prop]='rotate('+this.videoRotation+'deg)';
          },
          videoError(){
            alert('Error while playing the video');
          }
          
      },
      watch: {
          displayButtons: function (val){
            this.$refs.videoComponent.controls = val;
          },
          
      },
      data: () => ({
        videoRotation: 0
      }),
  }
</script>
<style>
  .vdChild {
    width: 500px;
    max-width: 100% !important; 
  }
</style>
