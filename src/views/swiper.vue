<template>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <RecommendationCard
        title="Great Quality!"
        full_name="James Gouse"
        position="Graphic Designer"
      >
        <img
          src="https://picsum.photos/600/600"
          alt="img"
          class="rounded-full w-[70px]"
        />
      </RecommendationCard>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import RecommendationCard from "../components/RecommendationCard.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    RecommendationCard,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style scoped>
.mySwiper {
  padding: 0px !important;
  margin: 0px !important;
}
.swiper {
  width:100%;
  box-sizing: border-box !important;
  height: 500px;
  padding: 0px !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: red;
  padding: 0 !important;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
