<template>
  <base-card>
    <base-button @click="setSelectedTab('PostsList')" :mode="selectedPostList">Читать посты</base-button>
    <base-button @click="setSelectedTab('PostsAdd')" :mode="selectedPostAdd">Добавить пост</base-button>
  </base-card>
  <!--Кешируем сену компонентов, что позволит сохранять данные в форме при смене табов-->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import PostsList from "@/components/Posts/PostsList";
import PostsAdd from "@/components/Posts/PostsAdd";

export default {
  name: "PostsTabs",
  components: {
    PostsList,
    PostsAdd,
  },
  data() {
    return {
      selectedTab: 'PostsList',
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
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addPost(title, description, link) {
      const newPostData = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      }
      this.storedResources.unshift(newPostData)
      this.selectedTab = 'PostsList'
    },
    removePost(id) {
      const index = this.storedResources.findIndex(item => item.id === id)
      this.storedResources.splice(index, 1)
      console.log('DELETE')
    }
  },
  computed: {
    selectedPostList() {
      return this.selectedTab === 'PostsList' ? '' : 'flat'

    },
    selectedPostAdd() {
      return this.selectedTab === 'PostsAdd' ? '' : 'flat'
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addPost: this.addPost,
      removePost: this.removePost,
    }
  }
}
</script>

<style scoped>

</style>