<template>
  <div>

    <input v-model="url" placeholder="Insert URL here" type="text">
    <button v-on:click="$emit('change-video-source', url)">OK</button>
    &nbsp; 
    Controls:
    <input type="checkbox" 
      checked 
      v-model="displayButton"
      v-on:change="$emit('controls', displayButton);">
    &nbsp; 
    <span>Seek at:</span>
    <input type="number" v-model="offset">
    <button v-on:click="$emit('change-offset', offset)">OK</button>  

&nbsp; 

    <button id="rotateBtn" v-on:click="$emit('video-rotate')">Rotate &#8513;</button>&nbsp; 


  </div>
</template>

<script>
  export default {
      data: () => ({
        url: "",
        displayButton: true,
        offset: 0
      })
  }
</script>
<style>
  input{
    padding: 10px;
    border: 1px solid #ccc;
  }
  input[type=text] {
    width: 250px;
  }

  input[type=number] {
    width: 50px;
  }

  button, input[type=submit] {
    padding: 10px;
    border: 1px solid #ccc;
    /*border-radius: 4px;*/
    resize: vertical;
    width: 60px; 
    margin-top: 10px;
    cursor:pointer;
    background-color: #d6d6d6

  }

  button:hover, input[type=submit]:hover{
    background-color: #bdb8b8; /* Green */
    font-weight: bold;
  }

  #rotateBtn {
    width: 80px;
  }
</style>
