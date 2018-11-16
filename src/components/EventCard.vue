<template lang="pug">

  router-link.event-link(:to="{ name: 'eventShow', params: { id: '1' } }")
    div.event-card.-shadow
      span.eyebrow @{{ event.time }} on {{event.date}}
      h4.title {{ event.title }}
      BaseIcon(name="users") {{ event.attendees.length }} attending
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Cleanup',
        date: 'Tues Aug 19, 2018',
        time: '6:00',
        attendees: [
          { id: 'acb123', name: 'Adam Jarh' },
          { id: 'dza456', name: 'Greeg Potlz' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
