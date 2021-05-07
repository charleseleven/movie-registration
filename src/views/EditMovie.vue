<template>
  <form @submit.prevent="handlerUpdate">
    <label>Title: </label>
    <input v-model="title" type="text" required>
    <label>Plot Summary: </label>
    <textarea v-model="plotSummary" required></textarea>
    <label>Year: </label>
    <input v-model="year" type="number" required>
    <label>Authors: </label>
    <textarea v-model="author" required></textarea>
    <button>Update Movie</button>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      title: '',
      plotSummary: '',
      year: null,
      author: '',
      uri: 'http://localhost:3000/movies/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        this.title = data.title, 
        this.plotSummary = data.plotSummary,
        this.year = data.year,
        this.author = data.author
      })
  },
  methods: {
    handlerUpdate() {
      fetch(this.uri, { 
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            title: this.title,  
            plotSummary: this.plotSummary,
            year: this.year,
            author: this.author
          }) // valores em javascript para uma String JSON.
        })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }   
  },
}
</script>

<style>

</style>