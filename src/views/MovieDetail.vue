<script setup lang="ts">
import { ref, onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPlot } from '@/services/omdbAPI'
import type IMovie from '../interfaces/IMovie'
import { useGlobalStore } from '@/store/GlobalStore'
import CarouselRelated from '@/components/Carousel-Related.vue'

const movie = ref<IMovie | null>(null)
const route = useRoute()
const store = useGlobalStore()

onBeforeMount(async () => {
  store.isLoading()
  await store.filterRelated(route.params.id as string)
  const response = await getPlot(route.params.id as string)
  movie.value = response

  store.LoadingFinished()
})

watch(
  () => route.params.id,
  async newId => {
    store.isLoading()
    await store.filterRelated(route.params.id as string)
    const response = await getPlot(newId as string)
    movie.value = response

    store.LoadingFinished()
  },
)
</script>

<template>
  <div class="loader mx-auto" v-if="store.loading"></div>
  <div class="text-white text-center mt-2 fw-light" v-if="store.loading">
    Carregando...
  </div>

  <div class="detail-container mt-4 mx-4" v-if="movie && !store.loading">
    <div class="row">
      <div class="col-lg-4 col-md-5 mb-4">
        <img
          :src="movie.Poster"
          alt="Movie Poster"
          class="detail-img img-fluid rounded mx-auto"
        />
      </div>

      <div class="col-lg-8 col-md-7 d-flex flex-column">
        <div class="plot-container">
          <h2 class="text-white fw-bold fs-1">{{ movie.Title }}</h2>
          <p class="text-white fw-light fs-5 text-capitalize">
            {{ movie.Year }} ({{ movie.Type }})
          </p>
        </div>

        <div class="movie-plot mt-3">
          <p class="text-white w-100">{{ movie.Plot }}</p>
        </div>

        <div class="cast lh-lg d-flex flex-row" v-if="movie.Director !== 'N/A'">
          <p class="text-white fw-lighter my-auto">Director:</p>
          <p class="text-white fw-light m-1 my-auto">
            {{ movie.Director }}
          </p>
        </div>

        <div class="cast lh-lg d-flex flex-row">
          <p class="text-white fw-lighter my-auto">Writer:</p>
          <p class="text-white fw-light m-1 my-auto">{{ movie.Writer }}</p>
        </div>

        <div class="cast lh-lg d-flex flex-row">
          <p class="text-white fw-lighter my-md-auto">Actors:</p>
          <p class="text-white fw-light ms-1 my-auto">{{ movie.Actors }}</p>
        </div>

        <div class="cast lh-lg d-flex flex-row" v-if="movie.Awards !== 'N/A'">
          <p class="text-white fw-lighter my-auto">Awards:</p>
          <p class="text-white fw-light m-1 my-auto">
            {{ movie.Awards }}
          </p>
        </div>

        <div class="d-flex flex-row">
          <img src="../../assets/imdb.png" class="imdb-icon" alt="imdb icon" />
          <p class="text-white text-center my-auto m-1">
            : {{ movie.imdbRating }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="d-block detail-container"
    v-if="
      !store.loading && store.relatedFinds && store.relatedFinds?.length > 0
    "
  >
    <h3 class="text-white text-center fw-light fs-4 m-4">
      Related to your latest search:
    </h3>
    <CarouselRelated />
  </div>
</template>

<style>
.imdb-icon {
  width: 50px;
}

.loader {
  width: 48px;
  height: 48px;
  margin-top: 40vh;
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

.detail-container {
  animation: show 2.5s 100ms forwards;

  opacity: 0;
  transform-origin: top center;

  .detail-img {
    width: 350px;
  }
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
