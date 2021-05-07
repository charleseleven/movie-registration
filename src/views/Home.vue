<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" /> 
    <div v-if="movies.length">
      <div v-for="movie in filteredMovies" :key="movie.id">
        <SingleMovie :movie="movie" @delete="handleDelete" @complete="handleComplete" />
      </div> 
    </div> 
  </div>
</template>

<script>
import SingleMovie from '../components/SingleMovie.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'Home',
  components: { SingleMovie, FilterNav },
  data() {
    return {
      movies: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/movies')
      .then(res => res.json())
      .then(data => this.movies = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      this.movies = this.movies.filter((movie) => {
        return movie.id !== id
      })
    },
    handleComplete(id) {
      let mov = this.movies.find(movie => {
        return movie.id === id
      })
      mov.complete = !mov.complete
    }
  },
  computed: {
    filteredMovies() {
      if (this.current === 'completed') {
        return this.movies.filter(movie => movie.complete)
      }
      if (this.current === 'ongoing') {
        return this.movies.filter(movie => !movie.complete)
      }
      return this.movies
    }
  }
}
</script>
