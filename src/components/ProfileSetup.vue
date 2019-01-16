<template lang="html">
  <div id="app">
    <tab :tabtitles="tabtitles" 
    :current-page="3">
    <div class="tab-content-container">
      <!-- <button onclick="alert(2)">click</button> -->
      <div class="container">
        <form>

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required>

          <label for="lname">Gender </label>
          <input type="radio" name="gender" value="male" checked> Male
          <input type="radio" name="gender" value="female"> Female
          <input type="radio" name="gender" value="other"> Other

          <br>
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="france">Frace</option>
            <option value="unitedkingdom">United Kingdom</option>
          </select>

          <input type="submit" value="Save"> 
          <input type="reset" value="Cancel">

        </form>
      </div>
    </div>

    <div class="tab-content-container">
      <form>
          <div>
            <label class="typo__label">Target Diet</label>
            <multiselect v-model="valuea" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="optionsa" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            <pre class="language-json"><code>{{ value  }}</code></pre>
          </div>
          <br><br>
          <div>
            <label class="typo__label">Cooking Styles</label>
            <multiselect v-model="valueb" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="optionsb" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            <pre class="language-json"><code>{{ value  }}</code></pre>
          </div>
          <br><br>
          <div>
            <label class="typo__label">Kitchen Facilities</label>
            <multiselect v-model="valuec" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="optionsc" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            <pre class="language-json"><code>{{ value  }}</code></pre>
          </div>          
          <br><br><br><br>
          <input type="submit" value="Save"> 
          <input type="reset" value="Cancel">
    </form>
    </div>

    <div class="tab-content-container">
      <form>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required>

        <label for="psw"><b>Current Password</b></label>
        <input type="password" placeholder="Current Password" name="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

        <input type="submit" value="Save"> 
        <input type="reset" value="Cancel">

      </form>
    </div>

  </tab>

  
  <br>

  <br>
  <br>
  </div>
</template>

<script>
  import tab from './vue-tab'
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      tab,
      Multiselect
    },
    data(){
      return {
        'tabtitles':['Basic information','References','Advanced Settings'],
        valuea: [],
        optionsa: [{ name: 'Low Carb', code: 'Low Carb' },
        { name: 'Vegan Foods', code: 'Vegan Foods' },
        { name: 'Gluten Free', code: 'Gluten Free' },
        { name: 'High FIber', code: 'High FIber' },
        { name: 'Low Cholesterols', code: 'Low Cholesterols' },
        { name: 'No Pork', code: 'No Pork' }],
        valueb: [],
        optionsb: [{ name: 'Slow Cook', code: 'Slow Cook' },
        { name: 'Quick & Easy', code: 'Quick & Easy' },
        { name: 'Gourmet', code: 'Gourmet' },
        { name: 'Cooking for Kids', code: 'Cooking for Kids' },
        { name: 'Cooking for Two', code: 'Cooking for Two' },
        { name: 'BBQ and Grilling	', code: 'BBQ and Grilling' }],
        valuec: [],
        optionsc: [{ name: 'Sous Vide', code: 'Sous Vide' },
        { name: 'Wok', code: 'Wok' },
        { name: 'Crepe Maker', code: 'Crepe Maker' },
        { name: 'Pressure Cooker', code: 'Pressure Cooker'}]
      }
    }
  }
</script>

<style>
  .greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
/* for tabs */
  html {
    height: 100%;
  }

  *{
    margin: 0px;
    padding: 0px;
  }

/*  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }*/

  .tab-content-container{
    width: 99%;
    height: 200px;
    margin: 0px auto;
  }

  #app {
    color: #2c3e50;
    margin-top: 50px;
    max-width: 500px;
    width: 100%;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    /*text-align: center;*/
    margin: 0 auto
  }

  img{
    width: 98%
  }

/* For forms */
input[type=radio], select, textarea {
  padding: 3px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

input[type=text], input[type=password], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit], input[type=reset] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  margin: 4px 2px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
/*TO change the active color u like
    .tab-title.active,.tab-title:active {
        border-bottom: 2px solid #36acf4;
        color: #36acf4;
      }*/

/* for dropdown form */
.multiselect {
  width: 200px;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
