<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-indicators my-auto mx-auto">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active bg-warning"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        class="bg-warning"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        class="bg-warning"
        aria-label="Slide 3"
      ></button>
    </div>

    <div class="carousel-inner">
      <!-- primeiro item -->
      <div class="carousel-item active">
        <RouterLink to="/movie/tt0306414">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNGQ0ZjBlOGItZGY4MC00MzExLWJkNGYtZmUxYzg1NTgyNDVlXkEyXkFqcGc@._V1_SX300.jpg"
            alt="The Wire Poster"
            class="d-block img-fluid carousel-img object-fit-cover mx-auto"
            style="height: 375px"
          />
          <div class="carousel-caption w-100">
            <h5 class="text-white">The Wire</h5>
            <p class="text-white">
              The Baltimore drug scene, as seen through the eyes of drug dealers
              and law enforcement.
            </p>
          </div>
        </RouterLink>
      </div>

      <!-- segundo -->

      <div class="carousel-item">
        <RouterLink to="/movie/tt0232500">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
            alt="The Fast and the Furious Poster"
            class="d-block img-fluid carousel-img object-fit-cover mx-auto"
            style="height: 375px"
          />
          <div class="carousel-caption w-100">
            <h5 class="text-white">Spider-Man</h5>
            <p class="text-white">
              After being bitten by a genetically-modified spider, a shy
              teenager gains spider-like abilities that he uses to fight
              injustice as a masked superhero and face a vengeful enemy.
            </p>
          </div>
        </RouterLink>
      </div>

      <!-- terceiro -->

      <div class="carousel-item">
        <RouterLink to="/movie/tt0409591">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            alt="Naruto Poster"
            class="d-block img-fluid carousel-img object-fit-cover mx-auto"
            style="height: 375px"
          />
          <div class="carousel-caption w-100 mx-auto">
            <h5 class="text-white">Naruto</h5>
            <p class="text-white">
              Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
              searches for recognition and dreams of becoming the Hokage, the
              village's leader and strongest ninja.
            </p>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- controles -->
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

<script setup lang="ts"></script>

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

.carousel-indicators {
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 15px;
}

.carousel-caption {
  position: absolute;
  left: 0;
  right: 0;
  margin-bottom: 3px;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 8px;
  padding-bottom: 0px;
  text-align: center;
  width: 100%;
}

.carousel-caption h5,
.carousel-caption p {
  margin: 0;
}
</style>
