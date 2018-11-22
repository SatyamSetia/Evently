<template>
  <div id="events">
    <div class="container">
      <div class="row justify-content-md-center">
        <div v-for="event in eventlist" :key="event.id" class="col-md-3 m-4">
          <EventCard v-bind:event="event"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import EventCard from '@/components/EventCard.vue'
  let events = require('../data').events;

  export default {
    name: 'EventList',
    components: {
      EventCard: EventCard,
    },
    data: () => {
      return {
        eventlist: events
      }
    }
  }
</script>
