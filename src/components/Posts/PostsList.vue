<template>
  <ul>
    <ListItem v-for="res in resources"
              :key="res.id"
              :id="res.id"
              :title="res.title"
              :description="res.description"
              :link="res.link"
    />
  </ul>
</template>

<script>

import ListItem from "@/components/Posts/PostsItem";

export default {
  name: "PostsList",
  components: {
    ListItem
  },
  inject: ['resources']
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: auto;
    max-width: 40rem;
  }
</style>