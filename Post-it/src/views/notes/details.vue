<template>
  <article
    class="w-4xl py-20 mt-20 m-auto flex justify-center bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25"
  >
    <div class="rotate-180 p-2 mr-5 [writing-mode:_vertical-lr]">
      <time
        datetime="2022-10-10"
        class="flex items-center justify-between gap-4 text-md font-bold text-gray-900 uppercase dark:text-white"
      >
        <span>2022</span>
        <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
        <span>Oct 10</span>
      </time>
    </div>
    <div>
      <div class="hidden sm:block sm:basis-56">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          class="aspect-video w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div
          class="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
        >
          <a href="#">
            <h3 class="text-4xl font-bold text-gray-900 uppercase dark:text-white">
              {{ postit.title }}
            </h3>
          </a>

          <p class="mt-2 line-clamp-3 text-lg/relaxed text-gray-700 dark:text-gray-200">
            {{ postit.content }}
          </p>
        </div>

        <div class="sm:justify-end w-full">
          <RouterLink
            to="/"
            class="block text-md bg-yellow-400 px-5 py-3 text-center font-bold text-gray-900 uppercase transition hover:bg-yellow-500"
          >
            back <i class="fa-solid fa-arrow-left"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const postit = ref([])
onMounted(() => {
  const id = route.params.id
  const postits = JSON.parse(localStorage.getItem('localPostit'))
  postit.value = postits.find((postit_find) => postit_find.id == id)

  console.log(postit.title)
})
</script>
