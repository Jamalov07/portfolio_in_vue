<template>
  <div
    class="mt-[70px] flex flex-col justify-between min-h-[665px] items-center mb-0"
  >
    <h1 class="h-10 mx-auto text-[#2B2B2B] text-[32px] font-bold">Blog</h1>
    <p
      class="text-[15px] text-[#767676] font-normal h-[68px] w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="min-h-[474px] w-full grid grid-cols-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </div>
</template>
<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "Blog",
  components: { BlogCard },
};
</script>
<style></style>
