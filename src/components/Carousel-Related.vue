<script setup lang="ts">
import { useGlobalStore } from '@/store/GlobalStore'

const store = useGlobalStore()
const relatedMovies = store.relatedFinds

const handleClick = (event: Event) => {
  const target = event.currentTarget as HTMLElement
  store.removeRelated(Number(target.id))
}
</script>

<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide detail-container"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators my-auto mx-auto">
      <button
        v-for="(movie, index) in relatedMovies"
        :key="index"
        :class="index === 0 ? 'active bg-warning' : 'bg-warning'"
        :data-bs-target="'#carouselExampleIndicators'"
        :data-bs-slide-to="index"
        :aria-label="'Slide ' + (index + 1)"
        :aria-current="index === 0 ? 'true' : undefined"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        v-for="(movie, index) in relatedMovies"
        :key="movie.imdbID"
        :class="['carousel-item', { active: index === 0 }]"
        @click="handleClick"
      >
        <RouterLink :to="`/movie/${movie.imdbID}`">
          <img
            :src="movie.Poster"
            :alt="`${movie.Title} Poster`"
            class="d-block img-fluid carousel-img object-fit-cover mx-auto"
            style="height: 375px"
          />
          <div class="carousel-caption w-100">
            <h5 class="text-white">{{ movie.Title }}</h5>
          </div>
        </RouterLink>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style>
.carousel-img {
  width: 100%;
  transition:
    width 2s,
    height 4s;
}

@media (min-width: 992px) {
  .carousel-img {
    width: 20%;
  }
}

.detail-container {
  animation: show 2.5s 4.5s forwards;

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
