<template>
  <div
    id="cv"
    class="pro w-[305px] p-8 h-[1215px] flex flex-col justify-between items-center"
    :class="[
      defineTheme().isLight
        ? 'bg-[#e7d3d3ef] xl:bg-white text-[#2B2B2B]'
        : 'bg-[#242526] xl:bg-[#242526] text-white',
    ]"
  >
    <div class="absolute right-1 top-1 xl:hidden">
      <slot></slot>
    </div>
    <div class="h-[281px] w-[220px] flex flex-col justify-between items-center">
      <div class="relative">
        <img
          src="../assets/images/iforgit.jpg"
          alt="img"
          class="w-[150px] h-[150px] rounded-full"
        />
        <div
          class="w-4 h-4 rounded-full bg-[#7EB942] absolute bottom-3 right-2"
        ></div>
      </div>
      <div class="flex flex-col justify-between items-center gap-[15px]">
        <h1 class="font-medium text-[18px]">No'monjon Jamalov</h1>
        <h1
          class="w-[143px] text-[#767676] text-center text-[15px] font-normal"
        >
          Full Stack Developer
        </h1>
        <div class="flex justify-between items-center w-[219px]">
          <a href="https://uz-uz.facebook.com/subhoniddin.jamalov">
            <i
              class="bx bxl-facebook p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>

          <a
            href="https://www.instagram.com/shaxabiddinovich07/?igshid=ZDdkNTZiNTM%3D"
          >
            <i
              class="bx bxl-instagram-alt p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>
          <a href="https://github.com/Jamalov07">
            <i
              class="bx bxl-github p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/nomonjon-jamalov">
            <i
              class="bx bxl-linkedin p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>
          <a href="https://stackoverflow.com/users/20549543/nomonjon-jamalov">
            <i
              class="bx bxl-stack-overflow p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>
          <a href="https://t.me/New_Prime_Minister_of_Uzbekistan">
            <i
              class="bx bxl-telegram p-[6px] bg-[#FFB400] hover:bg-sky-500 hover:text-yellow-50 rounded-full text-[15px]"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div
      class="h-[126px] w-[220px] text-[15px] font-normal flex flex-col justify-between"
    >
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Age:</div>
        <h1>23</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Residence:</div>
        <h1>UZ</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Freelance:</div>
        <h1 class="text-[#7EB942]">Available</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Address:</div>
        <h1>Tashkent, Uzbekistan</h1>
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[220px] h-[153px]">
      <h1 class="mb-[15px] text-[18px] font-medium">Languages</h1>
      <div class="flex h-full flex-col gap-2">
        <PercentGraphic title="Uzbek" inPercent="100%" />
        <PercentGraphic title="Russian" inPercent="70%" />
        <PercentGraphic title="English" inPercent="50%" />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[220px] h-[242px]">
      <h1 class="mb-[15px] text-[18px] font-medium">Skills</h1>
      <div class="flex h-full flex-col gap-2">
        <PercentGraphic title="Javascript, Typescript" inPercent="90%" />
        <PercentGraphic title="Node,Nest,Express,Koa" inPercent="100%" />
        <PercentGraphic title="Psql,MySQL,Mongo,Redis" inPercent="90%" />
        <PercentGraphic title="HTML,CSS,Tailwind" inPercent="100%" />
        <PercentGraphic title="Vue,Vuex,Pinia" inPercent="100%" />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[186px] h-[148px]">
      <h1 class="mb-[15px] text-[18px] font-medium">Extra Skills</h1>
      <div
        class="flex flex-col justify-between gap-[5px]"
        :class="[defineTheme().isLight ? 'text-[#767676]' : '']"
      >
        <ExtraSkills extra="C,Python,Docker,PM2" />
        <ExtraSkills extra="Prisma,Graphql" />
        <ExtraSkills extra="Bootstrap,Jest,SCSS" />
        <ExtraSkills extra="Git,Github,TypeORM" />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div
      class="cv h-10 w-full flex hover:bg-sky-500 hover:text-yellow-50 justify-between items-center py-[10px] px-[45px] bg-[#FFB400]"
    >
      <h1 class="uppercase text-[14px] font-semibold">Download cv</h1>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33341 10.9523H10.6667V6.28564H11.8334V11.619C11.8334 11.7958 11.772 11.9654 11.6626 12.0904C11.5532 12.2154 11.4048 12.2856 11.2501 12.2856H0.750081C0.595372 12.2856 0.446999 12.2154 0.337602 12.0904C0.228206 11.9654 0.166748 11.7958 0.166748 11.619V6.28564H1.33341V10.9523ZM7.16675 4.28564H10.0834L6.00008 8.95231L1.91675 4.28564H4.83342V0.285645H7.16675V4.28564Z"
          :fill="defineTheme().isLight ? '#2B2B2B' : 'white'"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import ExtraSkills from "./ExtraSkills.vue";
import PercentGraphic from "./PercentGraphic.vue";
import themeStore from "../store/theme";
export default {
  name: "Profile",
  components: {
    PercentGraphic,
    ExtraSkills,
  },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style scoped>
.cv:hover > h1 {
  color: white;
}
.cv:hover > svg > path {
  fill: white;
}
</style>
