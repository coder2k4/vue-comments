<template>
  <base-dialog v-if="inputIsInvalid" @close="confirmError">
    <template v-slot:header>
      <h1>Ошибка данных</h1>
    </template>
    <template v-slot:default>
      <p>Просто какой-то текст</p>
    </template>

    <template #actions>
      <base-button @click="confirmError">ну ок!</base-button>
    </template>

  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Заголовок</label>
        <input id="title" name="title" type="text" ref="titleRef"/>
      </div>
      <div class="form-control">
        <label for="description">Описание</label>
        <textarea id="description" name="description" rows="3" ref="descriptionRef"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Ссылка</label>
        <input id="link" name="link" type="url" ref="linkRef"/>
      </div>
      <div>
        <base-button type="submit">Добавить пост</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "PostsAdd",
  data() {
    return {
      inputIsInvalid: true
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleRef.value
      const enteredDescription = this.$refs.descriptionRef.value
      const enteredLink = this.$refs.linkRef.value

      if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === '') {
        this.inputIsInvalid = true
        return
      }


      this.addPost(enteredTitle, enteredDescription, enteredLink)
    },
    confirmError() {
      this.inputIsInvalid = false
    }
  },
  inject: ['addPost']
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>