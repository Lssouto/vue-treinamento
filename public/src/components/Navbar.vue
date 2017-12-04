<template>
  <div class="navbar">
    <ul>
        <li><a href="#/">home</a></li>
        <li><a href="#/register">Registrar</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      title: 'Navbar'
    }
  }
}
</script>


<style lang="scss" scoped>
ul{
    padding:0;
    li{
        list-style: none;
        display: inline-block;
        margin-right: 15px;
        
        a:link,a:visited{
          text-decoration:none;  
          text-transform: uppercase;
          padding: 6px;
          color: #245087;
          border-radius: 6px;
          font-weight:bolder;
        }
        a:hover{
          color: #fff;
          background: #245087;
        }
    }
}
</style>
