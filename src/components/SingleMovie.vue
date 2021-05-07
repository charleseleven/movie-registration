<template>
  <div class="movie" :class="{ complete: movie.complete }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">{{ movie.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditMovie', params: { id: movie.id }  }">
          <span class="material-icons">edit_note</span>
        </router-link>
        <span @click="deleteMovie" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <div class="plotSummary">
        <p>{{ movie.plotSummary }}</p>
      </div>
      <div class="year">
        <p>{{ movie.year }}</p>
      </div>
      <div class="author">
        <p>{{ movie.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/movies/' + this.movie.id
    }
  },
  methods: {
    deleteMovie() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.movie.id))
        .catch(err => console.log(err))
    },
    toggleComplete() {
      fetch(this.uri, { 
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.movie.complete }) // valores em javascript para uma String JSON.
      })
        .then(() => this.$emit('complete', this.movie.id))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
  .movie {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
  .year {
    border-top: 2px solid #bbb;
    border-bottom: 2px solid #bbb;
  }
  /* completed movies */
  .movie.complete {
    border-left: 4px solid #00ce89;
  }
  .movie.complete .tick {
    color: #00ce89;
  }

  @media screen and (max-width: 767px) {
    .movie {
      margin: 15px auto;
      padding: 7.5px 15px;
    }
    .actions {
      display: inline;
      
    }
    h3 {
      font-size: 16px;
    }
    .material-icons {
      font-size: 24px;
      margin-left: 7px;
    }
  }
</style>