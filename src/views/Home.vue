<template>
  <div class="content">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <router-link v-bind:to="{name:'allEvents'}">
        <button type="button" class="btn btn-outline-danger">Check All Events</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style media="screen">
  .content {
    height: 500px;
  }
</style>
