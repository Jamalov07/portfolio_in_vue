<template>
  <div
    id="blog"
    class="pt-10 xl:pt-5 flex flex-col justify-between min-h-[665px] items-center gap-4"
  >
    <h1 class="text-center text-[32px] font-bold">Blog</h1>
    <p
      class="text-[15px] text-[#767676] w-[90%] md:w-[50%] font-normal text-center"
    >
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    >
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
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
