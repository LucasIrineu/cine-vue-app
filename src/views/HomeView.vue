<script setup lang="ts">
import { ref } from 'vue'
import type IMovie from '../interfaces/IMovie'
import getMovies from '@/services/omdbAPI'
import Carousel from '@/components/Carousel-Home.vue'
import { useGlobalStore } from '@/store/GlobalStore'

const search = ref('')
const movies = ref<IMovie[]>([])
const store = useGlobalStore()

const SearchMovies = async () => {
  if (search.value !== '') {
    store.isLoading()
    const response = await getMovies(search.value)
    movies.value = response.Search
    await store.addRelated(response.Search)
    // setTimeout(() => {
    //   store.LoadingFinished()
    // }, 3000)
    store.LoadingFinished()
  }
}
</script>

<template>
  <div class="home">
    <Carousel />

    <b-form
      @submit.prevent="SearchMovies"
      class="d-flex flex-column justify-content-center align-items-center p-4"
    >
      <b-form-group label-for="search-input">
        <b-input-group>
          <b-form-input
            id="search-input"
            class="search-input"
            v-model="search"
            placeholder="What are you looking for?"
          />
          <b-input-group-append>
            <b-button type="submit" class="btn-warning">Search</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-form>

    <div class="loader mx-auto" v-if="store.loading"></div>
    <div class="text-white text-center mt-2 fw-light" v-if="store.loading">
      Loading...
    </div>

    <div
      class="movies-list ms-auto me-auto d-flex flex-wrap justify-content-start ms-1"
      v-if="!store.loading"
    >
      <div
        v-for="(movie, index) in movies"
        :key="index"
        :id="index.toString()"
        class="movie mx-1 mb-3 position-relative d-block bg-dark rounded pb-2"
        style="max-width: 175px"
      >
        <RouterLink :to="'/movie/' + movie.imdbID">
          <b-card-img
            :src="movie.Poster"
            alt="Movie Poster"
            style="object-fit: cover; display: block"
          />
          <div
            class="text-white position-absolute p-1 px-2 border-white fw-bolder text-capitalize"
            style="
              background-color: rgba(255, 143, 0, 0.8);
              top: 200px;
              left: 0px;
            "
          >
            {{ movie.Type }}
          </div>
          <b-card-body class="p-2 flex-grow-1">
            <b-card-title
              class="card-x text-light mt-2 ms-2 opacity-75 fw-medium"
              style="font-size: 18px"
              >{{ movie.Title }}</b-card-title
            >
            <b-card-sub-title
              class="text-light mt-2 ms-2 opacity-50 fw-lighter text-end"
              style="font-size: 14px"
              >{{ movie.Year }}</b-card-sub-title
            >
          </b-card-body>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
div .movie:hover {
  color: white;

  .card-x {
    text-decoration: underline white;
  }
}

.search-input:focus {
  border-color: #ffc107;
  box-shadow:
    inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(255, 193, 7, 0.6);
}

.loader {
  width: 48px;
  height: 48px;
  margin-top: 5px;
  border: 10px solid #fff;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;
}
.loader::before {
  content: '';
  position: absolute;
  box-sizing: border-box;
  inset: -10px;
  border-radius: 50%;
  border: 10px solid #ffc107;
  animation: prixClipFix 2s infinite linear;
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

.movies-list {
  animation: show 3s 100ms forwards;

  opacity: 0;
  transform-origin: top center;
}

@media (min-width: 992px) {
  .movies-list {
    width: 75%;
  }

  div .movie {
    width: 100%;
  }
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
