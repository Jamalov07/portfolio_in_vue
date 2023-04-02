<template>
  <div
    id="contact"
    class="mt-10 xl:mt-5 min-h-[766px] flex gap-4 justify-center md:flex-row flex-col w-full px-4 xl:px-0"
  >
    <div class="flex flex-col gap-6 w-full">
      <h1 class="text-[26px] sm:text-[32px] font-semibold">
        Leave Us Your Info
      </h1>
      <div
        class="h-full p-2 sm:p-6"
        :class="[defineTheme().isLight ? 'bg-white' : 'bg-[#242526]']"
      >
        <form
          action="#"
          class="flex flex-col h-full justify-between text-[#767676] text-[18px] font-medium"
        >
          <label for="name" class="flex flex-col gap-2">
            <h1>Your Full Name ( Required )</h1>
            <input
              type="text"
              class="border-0 w-full outline-none"
              :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#3A3B3C]']"
            />
          </label>
          <label for="email" class="flex flex-col gap-2">
            <h1>Your Email ( Required )</h1>
            <input
              :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#3A3B3C]']"
              type="email"
              class="border-0 w-full outline-none"
            />
          </label>
          <label for="subject" class="flex flex-col gap-2">
            <h1>Subject</h1>
            <input
              :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#3A3B3C]']"
              type="text"
              class="border-0 w-full outline-none"
            />
          </label>
          <label for="message" class="flex flex-col gap-2">
            <h1>Your Message</h1>
            <textarea
              name="message"
              id="message"
              cols="21"
              rows="10"
              class="h-[210px] border-0"
              :class="[defineTheme().isLight ? 'bg-[#F0F0F6]' : 'bg-[#3A3B3C]']"
            ></textarea>
          </label>
          <button
            type="submit"
            class="px-6 mt-6 hover:bg-sky-500 hover:text-yellow-50  w-[100%] lg:w-[40%] xl:w-[30%] py-2 uppercase text-[14px] bg-[#ffb400]"
            :class="[defineTheme().isLight ? 'text-[#2B2B2B]' : 'text-white']"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div class="flex flex-col gap-6 w-full md:w-[80%]">
      <h1 class="text-[26px] sm:text-[32px] font-semibold">
        Contact Information
      </h1>

      <ContactCard
        :values="{
          Country: 'Bangladesh',
          City: 'Dhaka',
          Streat: '35 Vhatara, Badda',
        }"
        icon="bxs-map-alt"
      />
      <ContactCard
        :values="{
          Email: 'Youremail@Gmail.com',
          Skype: '@Yourusername',
          Tepegram: '@Yourusername',
        }"
        icon="bxs-message-square-dots"
      />
      <ContactCard
        :values="{
          Services: '15369',
          Office: '+58 (021) 356 587 235',
          Personal: '+58 (021) 356 587 235',
        }"
        icon="bx-mobile-alt"
      />
    </div>
  </div>
</template>
<script>
import themeStore from "../store/theme";
import ContactCard from "../components/ContactCard.vue";
export default {
  name: "Contact",
  components: { ContactCard },
  methods: {
    defineTheme() {
      const theme = themeStore();
      return theme;
    },
  },
};
</script>
<style></style>
