<template>
  <li>
    <div>
      <header>
        <h3>{{title}}</h3>
        <button>delete</button>
      </header>
    </div>
    <p>{{description}}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: ['title', 'description', 'link']
}
</script>

<style scoped>

</style>