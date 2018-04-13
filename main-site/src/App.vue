<template>
  <div id="app">
    <div class="landing-page">
      <img src="./assets/prof.png" alt="my face" class="face">
      <h1>Witaj na mojej stronie</h1>
      <button>ENTER</button>
    </div>
    <div class="desktop">
      <div class="icon-container">
        witam mam na sprzedaż opla
      </div>
      <nav class="toolbar pc">
        <ul>
          <li><a href="#"><img src="./assets/logo.png" alt="logo icon"></a></li>
          <li><a href="#" v-text="time"></a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time: ''
    }
  },
  mounted () {
    setInterval(this.updateDateTime, 1000);
  },
  methods: {
    updateDateTime () {
      let now = new Date()
      let n=now.getMinutes();
      n = n < 10 ? '0'+n : n
      this.time = now.getHours()+ ':'+ n
   
    }
  }
}
</script>

<style>
*{box-sizing: border-box;}
</style>

<style scoped>

#app {
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: 'Open Sans';
  font-size: 30px;
  background: url("./assets/windows_xp_bliss-wide.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.landing-page{
  background: #034A9C;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.landing-page h1{
  color: #fff;
  
}

.landing-page img{
  border-radius: 50%;
  
}

.landing-page button{
   color: #fff;
   font-size: 1.5em;
   /* border-radius: 20px; */
   padding:0 10px;
   background: #376DAE;
   border:none;
  
}

.landing-page button:hover{
  background: #216DAE;
}

.desktop{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9 , 1 fr) ;
  grid-template-rows: 9fr 1fr;
}
.icon-container{
  grid-column: 1/10;
}

.toolbar{
  background: #222;
  display:grid;
  grid-column: 1/10 ;
  justify-self: stretch;
}

.toolbar ul{
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: auto 0;
}

.toolbar li{ 
  padding: 10px;
  display: flex;
  align-items: center;
}


.toolbar ul li a{
  text-decoration: none;
  color: white;
}

.toolbar ul li a img{
  width: 45px;
}


</style>
