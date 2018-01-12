<template>
    <div class="index">
      <div class="container-fluid">
        <div class="row">
          
          <div class="col-md-5">
            <div class="img-animation">
              <img src="/src/assets/images/owl-logo-blink.png" alt="" class="blink">
            </div>
          </div>
          
          <div class="col-md-7">
            <div class="welcome-container">
              <h2 class="typewriter">Welcome to a Vue Painel ^.^ </h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: 'index'
    }
  },
  mounted (){
    
  }
}
</script>


<style lang="scss" scoped>
.img-animation{
  overflow: hidden;
  width: 400px;
  height: 400px;
  position: relative;
  img{
    height: 400px;
    display: block;
    left:0;
    position: absolute;
    &.blink{
      animation: blink 7s infinite;
      animation-timing-function: steps(1);
    }
    @keyframes blink {
      0%   {left: 0px;}
      12%  {left: -400px;}
      14% {left: -800px;}
      16%  {left: -400px;}
      18% {left: 0;}
      32%  {left: -400px;}
      34% {left: -800px;}
      36%  {left: -400px;}
      38% {left: 0;}
      100% {left: 0;}
    }
  }
}

.typewriter {
  display: inline-block;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
.welcome-container {
  margin-top: 120px;
}
</style>
