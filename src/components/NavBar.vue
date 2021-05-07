<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Movies</router-link>
    <router-link :to="{ name: 'AddMovie' }">Add a New Movie</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  .main-nav {
    text-align: center;
    margin: 40px auto;
  }
  .main-nav a{
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
  }
  a.router-link-active {
    border-bottom: 2px solid #00ce89;
    padding-bottom: 4px;
  }
  @media screen and (max-width: 767px) {
    .main-nav {
    margin: 30px auto;
    }
    .main-nav a{
      margin: 0 7.5px;
      font-size: 16px;
    }
    a.router-link-active {
      padding-bottom: 3px;
    }
  }
</style>