<template>
  <ul>
    <ListItem v-for="res in storedResources"
              :key="res.id"
              :id="res.id"
              :title="res.title"
              :description="res.description"
              :link="res.link"
    />
  </ul>
</template>

<script>
import ListItem from "@/components/ListItem/ListItem";

export default {
  components: {
    ListItem
  },
  name: "App",
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>