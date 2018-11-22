<template>
  <div class="container">
    <div class="d-flex justify-content-center align-content-center">
      <div v-if="loading" class="loader"></div>
      <div v-else-if="error">
        <h2 class="text-monospace text-secondary">{{error}}</h2>
      </div>
      <div v-else class="card border-0 shadow mb-5">
        <div class="event-img">
          <img class="card-img-top" v-bind:src="event.imgurl" height=500>
          <div class="action-btns shadow p-2 rounded">
            <div class="btn-group">
              <button class="btn btn-success" @click="updateRsvp('Going')">Going</button>
              <button class="btn btn-warning" @click="updateRsvp('May be')">May be</button>
              <button class="btn btn-danger" @click="updateRsvp('Not going')">Not Going</button>
            </div>
          </div>
        </div>
        <h2 class="card-title text-info m-4">{{event.title}}</h2>
        <h5 v-if="status" class="text-monospace">Your Status: {{status}}</h5>
        <h5 class="card-text d-flex justify-content-between">
          <span class="m-5">
            <img src="http://icons-for-free.com/free-icons/png/512/1814093.png" height=28 width=28>
            {{event.date}}
          </span>
          <span class="m-5">
            <img src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png" height=25 width=25>
            <span>{{event.venue}}</span>
          </span>
          <span class="m-5">
            {{event.start}}
            <img src="https://cdn1.iconfinder.com/data/icons/freeline/32/alarm_alert_clock_event_history_schedule_time_watch-512.png" height=28 width=28>
            {{event.end}}
          </span>
        </h5>
        <h4 class="mb-4"><span><img src="https://cdn3.iconfinder.com/data/icons/indian-rupee-symbol/800/Indian_Rupee_symbol.png" height=18></span><span class="m-2">{{event.entryFee}}/-</span></h4>
        <p class="mx-5 mb-5">{{event.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  let events = require('../data').events;

  export default {
    data() {
      return {
        loading: false,
        event: null,
        error: null,
        status: this.$store.state.event.rsvp[this.$route.params.id]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.event = null
        this.loading = true
        let fetchedEvent = events.filter(event => {
          return event.id == this.$route.params.id
        })
        setTimeout(()=>{this.loading = false},1000)
        if(fetchedEvent.length == 0) {
          this.error = "Oops!! event not found."
        } else {
          this.event = fetchedEvent[0]
        }
      },
      updateRsvp(rsvp) {
        this.$store.dispatch(
          'event/updateRsvp',
          {
            id: this.$route.params.id,
            status: rsvp
          })
          this.status = this.$store.state.event.rsvp[this.$route.params.id]
      }
    }
  }
</script>

<style>
  .loader {
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #bedb60;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
  }

  .event-img {
    position: relative;
  }

  .action-btns {
    background-color: rgba(255,255,255,0.7);
    position: absolute;
    bottom:20px;
    left: 38%;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
