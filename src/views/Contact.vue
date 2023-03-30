<template>
  <div
    id="contact"
    class="mt-5 sm:mt-[70px] min-h-[766px] flex gap-4 justify-between xl:flex-row flex-col w-full px-4 xl:px-0"
  >
    <div class="flex flex-col gap-6 xl:w-3/5">
      <h1 class="text-[#2B2B2B] text-[26px] sm:text-[32px] font-semibold">
        Leave Us Your Info
      </h1>
      <div class="h-full p-2 sm:p-6 bg-white">
        <form
          action="#"
          class="flex flex-col h-full justify-between text-[#767676] text-[18px] font-medium"
        >
          <label for="name" class="flex flex-col gap-2">
            <h1>Your Full Name ( Required )</h1>
            <input
              type="text"
              class="bg-[#F0F0F6] border-0 w-full outline-none"
            />
          </label>
          <label for="email" class="flex flex-col gap-2">
            <h1>Your Email ( Required )</h1>
            <input
              type="email"
              class="bg-[#F0F0F6] border-0 w-full outline-none"
            />
          </label>
          <label for="subject" class="flex flex-col gap-2">
            <h1>Subject</h1>
            <input
              type="text"
              class="bg-[#F0F0F6] border-0 w-full outline-none"
            />
          </label>
          <label for="message" class="flex flex-col gap-2">
            <h1>Your Message</h1>
            <textarea
              name="message"
              id="message"
              cols="21"
              rows="10"
              class="h-[210px] bg-[#F0F0F6] border-0"
            ></textarea>
          </label>
          <button
            type="submit"
            class="px-6 mt-6 hover:bg-sky-500 hover:text-yellow-50  w-[30%] py-2 uppercase text-[#2B2B2B] text-[14px] bg-[#ffb400]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    <div class="flex flex-col gap-6 xl:w-2/5">
      <h1 class="text-[#2B2B2B] text-[26px] sm:text-[32px] font-semibold">
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
import ContactCard from "../components/ContactCard.vue";
export default {
  name: "Contact",
  components: { ContactCard },
};
</script>
<style></style>
