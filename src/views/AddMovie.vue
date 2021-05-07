<template>
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input v-model="title" type="text" required>
    <label>Plot Summary: </label>
    <textarea v-model="plotSummary" required></textarea>
    <label>Year: </label>
    <input v-model="year" type="number" required>
    <label>Authors: </label>
    <textarea v-model="author" required></textarea>
    <button>Add Movie</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      plotSummary: '',
      year: null,
      author: ''
    }
  },
  methods: {
    handleSubmit() {
      let movie = {
        title: this.title, 
        plotSummary: this.plotSummary,
        year: this.year,
        author: this.author,
        complete: false
      }
      fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  },
}
</script>

<style>
  form {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0
  }
  input {
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
  }
  form button {
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  }

@media screen and (max-width: 767px) {
  label {
    font-size: 12px;
    letter-spacing: .8px;
    margin: 15px 0 7.5px 0
  }
  input {
    padding: 7px;
  }
  textarea {
    padding: 7.50px;
  }
  form button {
    margin: 15px auto 0;
    padding: 7.50px;
    font-size: 12px;
  }
}
</style>