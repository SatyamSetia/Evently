<template>
  <div id="app">
    <div class="d-flex justify-content-center m-4">
      <h1 class="title">Evently</h1>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title {
  font-family: 'Dancing Script', cursive;
  color: #9dba3f;
}
</style>
