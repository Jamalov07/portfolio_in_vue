<template>
  <div
    id="blog"
    class="mt-5 sm:mt-[70px] flex flex-col justify-between min-h-[665px] items-center mb-0"
  >
    <h1 class="h-10 mx-auto text-[#2B2B2B] text-[32px] font-bold">Blog</h1>
    <p
      class="text-[15px] text-[#767676] font-normal pb-4 sm:pb-0 px-3 sm:px-0 sm:h-[68px] md:px-16 xl:px-0 xl:w-[438px] text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div
      class="min-h-[474px] xl:w-full grid md:grid-cols-2 gap-4 sm:gap-0 md:gap-4 xl:grid-cols-4"
    >
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
