<template>
  <div>
    <EventList/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from '@/components/EventList.vue'

export default {
  name: 'allEvents',
  components: {
    EventList
  }
}
</script>
