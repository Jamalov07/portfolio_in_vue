<template>
  <div
    class="w-[305px] p-8 h-[1215px] bg-white flex flex-col justify-between items-center"
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
        <h1 class="text-[#2B2B2B] font-medium text-[18px]">
          No'monjon Jamalov
        </h1>
        <h1
          class="w-[143px] text-[#767676] text-center text-[15px] font-normal"
        >
          Full Stack Developer
        </h1>
        <div class="flex justify-between items-center w-[219px]">
          <i
            class="bx bxl-facebook p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
          <i
            class="bx bxl-instagram-alt p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
          <i
            class="bx bxl-twitter p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
          <i
            class="bx bxl-linkedin p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
          <i
            class="bx bxl-youtube p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
          <i
            class="bx bxl-telegram p-[6px] bg-[#FFB400] rounded-full text-[15px]"
          ></i>
        </div>
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div
      class="h-[126px] w-[220px] text-[15px] font-normal text-[#2B2B2B] flex flex-col justify-between"
    >
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Age:</div>
        <h1>23</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Residence:</div>
        <h1>BD</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Freelance:</div>
        <h1 class="text-[#7EB942]">Available</h1>
      </div>
      <div class="flex justify-between items-center">
        <div class="px-[6px] bg-[#FFB400]">Address:</div>
        <h1>Dhaka, Bangladesh</h1>
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[220px] h-[153px]">
      <h1 class="mb-[15px] text-[18px] text-[#2B2B2B] font-medium">
        Languages
      </h1>
      <div class="flex h-full flex-col gap-2">
        <PercentGraphic title="Uzbek" inPercent="100" />
        <PercentGraphic title="Uzbek" inPercent="100" />
        <PercentGraphic title="Uzbek" inPercent="100" />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[220px] h-[242px]">
      <h1 class="mb-[15px] text-[18px] text-[#2B2B2B] font-medium">Skills</h1>
      <div class="flex h-full flex-col gap-2">
        <PercentGraphic title="Html" inPercent="100" />
        <PercentGraphic title="CSS" inPercent="100" />
        <PercentGraphic title="Js" inPercent="100" />
        <PercentGraphic title="PHP" inPercent="100" />
        <PercentGraphic title="Wordpress" inPercent="100" />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div class="w-[186px] h-[148px]">
      <h1 class="mb-[15px] text-[18px] text-[#2B2B2B] font-medium">
        Extra Skills
      </h1>
      <div class="flex flex-col justify-between gap-[5px]">
        <ExtraSkills />
        <ExtraSkills />
        <ExtraSkills />
        <ExtraSkills />
      </div>
    </div>
    <hr class="w-full h-[2px] bg-[#F0F0F6]" />
    <div
      class="h-10 w-full flex justify-between items-center py-[10px] px-[50px] bg-[#FFB400]"
    >
      <h1 class="uppercase text-[#2B2B2B] text-[14px] font-semibold">
        Download cv
      </h1>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33341 10.9523H10.6667V6.28564H11.8334V11.619C11.8334 11.7958 11.772 11.9654 11.6626 12.0904C11.5532 12.2154 11.4048 12.2856 11.2501 12.2856H0.750081C0.595372 12.2856 0.446999 12.2154 0.337602 12.0904C0.228206 11.9654 0.166748 11.7958 0.166748 11.619V6.28564H1.33341V10.9523ZM7.16675 4.28564H10.0834L6.00008 8.95231L1.91675 4.28564H4.83342V0.285645H7.16675V4.28564Z"
          fill="#2B2B2B"
        />
      </svg>
    </div>
  </div>
</template>
<script>
import ExtraSkills from "./ExtraSkills.vue";
import PercentGraphic from "./PercentGraphic.vue";
export default {
  name: "Profile",
  components: {
    PercentGraphic,
    ExtraSkills,
  },
};
</script>
<style></style>
