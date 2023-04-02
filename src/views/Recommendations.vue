<template>
  <div
    class="pt-4 sm:pt-12 flex flex-col gap-4 items-center"
    :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
  >
    <h1 class="w-1/3 text-center text-[32px] font-bold">Recommendations</h1>
    <p
      class="text-[15px] text-[#767676] font-normal w-[90%] md:w-[50%] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <swiper
      :slides-per-view="3"
      :space-between="20"
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper hidden md:block"
    >
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
    </swiper>
    <swiper
      :slides-per-view="2"
      :space-between="20"
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper hidden sm:block md:hidden"
    >
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
    </swiper>
    <swiper
      :slides-per-view="1"
      :space-between="20"
      :cssMode="true"
      :navigation="true"
      :pagination="true"
      :mousewheel="true"
      :keyboard="true"
      :modules="modules"
      class="mySwiper sm:hidden"
    >
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
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
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Amazing Work!"
          full_name="Tiana Philips"
          position="Photographer"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
      <swiper-slide>
        <RecommendationCard
          :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
          title="Great Quality!"
          full_name="Talan Westervelt"
          position="Business Man"
        >
          <img
            src="https://picsum.photos/600/600"
            alt="img"
            class="rounded-full w-[70px]"
          />
        </RecommendationCard>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import themeStore from "../store/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import RecommendationCard from "../components/RecommendationCard.vue";
export default {
  name: "Recommendations",
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
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style>
.mySwiper {
  padding: 0px !important;
  margin: 0px !important;
}
.swiper {
  width: 100%;
  box-sizing: border-box !important;
  padding: 0px !important;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  height: 320px;
}

.swiper-button-prev,
.swiper-button-next {
  content: "1";
  background-color: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(52, 230, 36) !important;
  margin-top: 110px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: 0px 0px 1px 2px rgb(50, 228, 26);
}

.swiper-button-next:after {
  content: "▶" !important;
  font-family: sans-serif;
  font-size: 15px;
}
.swiper-button-prev:after {
  content: "◀" !important;
  font-family: sans-serif;
  font-size: 15px;
}
</style>
