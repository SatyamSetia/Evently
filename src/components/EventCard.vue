<template>
  <div class="card border-0 shadow">
    <img class="card-img-top event-image" v-bind:src="event.imgurl">
    <div class="card-body">
      <h5 class="card-title text-info">{{event.title}}</h5>
      <p class="card-text d-flex justify-content-between">
        <span>{{event.date}}</span>
        <span>
          <img src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png" height=12 width=12>
          <span>{{event.venue}}</span>
        </span>
      </p>
      <span class="text-secondary status" v-if="status[event.id]">Your Status: {{status[event.id]}}</span>
    </div>
    <router-link v-bind:to="{name:'event',params: {id: event.id}}">
      <div class="card-btn p-3 text-light rounded-bottom">
        <span class="">View</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'EventCard',
    props: {
      event: Object
    },
    data() {
      return {
        status: this.$store.state.event.rsvp
      }
    }
  }
</script>

<style>
  .event-image{
    height: 100pt;
  }

  .card {
      min-height: 325px;
  }

  .card-btn {
    background-color: #bedb60;
    width: 100%;

  }

  .card-btn:hover {
    background-color: #9dba3f;
  }

  a:hover {
    text-decoration: none;
  }

  .status {
    font-size: 9pt;
  }
</style>
