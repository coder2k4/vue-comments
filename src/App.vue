<template>
  <TheHeader title="Vue Blog"/>
  <PostsTabs/>
</template>

<script>

import TheHeader from "@/components/Layout/TheHeader";
import PostsTabs from "@/components/Posts/PostsTabs";

export default {

  name: "App",
  components: {PostsTabs, TheHeader},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>