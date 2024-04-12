<template>
    <div class="content">
        <h3>Проекты</h3>
        <Carousel :itemsToShow="3" :wrapAround="true" :transition="500">
            <Slide v-for="slide in 10" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
            </Slide>
            <template #addons>
                <Navigation class="arrows" />
            </template>
        </Carousel>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'TheProjects',
    components: {
      Carousel,
      Slide,
      Navigation
    }
  })
</script>
<style scoped>
div h3{
    text-align: center;
    font-size: 24px;
}
/* Carousel*/
.carousel__slide {
    padding: 5rem;
    background: green;
    height: 40rem;
    border-radius: 25px;
  }
  
  .carousel__viewport {
    perspective: 2000px;
  }
  
  .carousel__track {
    transform-style: preserve-3d;
  }
  
  .carousel__slide--sliding {
    transition: 0.5s;
  }
  
  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
/* End Carousel*/
</style>
