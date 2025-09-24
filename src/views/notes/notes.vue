<template>
  <div class="max-w-[2000px]">
    <header class="sm:p-10 shadow-sm">
      <h3 class="text-lg md:text-6xl font-semibold tracking-tight text-white">
        <i class="fa-regular fa-rectangle-list sm:mr-5"></i>Mes Post-Its
      </h3>
      <p class="mt-2 text-lg/8 text-gray-400">Organisez vos idées, simplement et efficacement</p>
    </header>
    <div class="space-x-10 mt-10 mb-20 items-center justify-center flex">
      <button
        command="show-modal"
        commandfor="dialog"
        class="md:text-xl text-sm rounded-md bg-gray-900 px-10 py-3 font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-950"
      >
        <i class="fa-solid fa-plus"></i>Add a post-it
      </button>
      <button
        @click="deleteAllPostit(postits)"
        class="md:text-xl bg-red-100 text-red-900 px-10 py-3 rounded-md text-sm font-semibold"
      >
        <i class="fa-solid fa-trash-can-arrow-up"></i> Delete
      </button>
    </div>

    <div class="grid lg:grid-cols-2 2xl:grid-cols-3 w-full gap-8">
      <div
        v-for="postit in postStore.store_postits"
        :key="postit._id"
        class="w-full border-dashed border-white/0 group outline-1 transform hover:scale-95 -outline-offset-1 outline-white/10 text-xl bg-white/10 border sm:p-12 hover:border-blue-500 rounded-lg transition-all ease-in-out 5s shadow-lg hover:shadow-blue-400/50"
      >
        <div class="sm:flex items-center justify-between">
          <div class="flex space-x-5">
            <div
              command="show-modal"
              commandfor="dialog"
              class="rounded-md px-1.5 py-2 text-md font-medium forced-colors:outline text-blue-400"
            ></div>
            <div class="mb-5">
              <h3 class="font-black text-lg lg:text-3xl text-white/90 text-wrap">
                {{ postit.title.slice(0, 10) }}
              </h3>
              <p class="text-lg lg:text-xl text-gray-400 mt-2.5 overflow-ellipsis overflow-hidden">
                {{ postit.content[0].slice(0, 20) }}
              </p>
            </div>
          </div>

          <RouterLink
            :to="`/note/${postit._id}`"
            class="text-md md:text-xl text-blue-500 ml-5 sm:ml-0 mb-5 sm:mb-0 hover:text-blue-400"
          >
            view more <i class="fa-solid fa-arrow-right"></i>
          </RouterLink>
        </div>
        <div class="opacity-0 group-hover:opacity-100">
          <div
            class="mt-5 sm:mt-0 text-[16px] px-5 border-gray-700 space-x-3 text-gray-900 flex text-white-600 transition-all 5s"
          >
            <!-- <button
          class="gap-x-1.5 transform hover:scale-125 rounded-md px-1.5 py-0.5 text-md font-medium forced-colors:outline bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400/15"
        >
          <i class="fa-solid fa-eye"></i>
        </button> -->
            <button
              class="inline-flex items-center rounded-full px-3 gap-x-1.5 py-1 text-md font-medium forced-colors:outline hover:text-blue-400 hover:bg-blue-500/20 bg-white/20 text-white/90 transform hover:scale-105"
              command="show-modal"
              commandfor="dialog"
              @click="editPostit(postit)"
            >
              <i class="fa-solid fa-pen-to-square"></i>update
            </button>
            <button
              command="show-modal"
              :commandfor="postit._id"
              class="inline-flex transform hover:scale-105 items-center gap-x-1.5 rounded-full px-3 py-1 text-md font-medium forced-colors:outline bg-white/20 text-white/90 hover:text-red-400 hover:bg-red-500/20"
            >
              <i class="fa-solid fa-trash"></i>delete
            </button>
          </div>
        </div>
        <Confirm_delete :post_id="postit._id" @delete="postStore.deletePostit(postit._id)" />
      </div>
    </div>

    <div class="!w-full">
      <dialog
        id="dialog"
        aria-labelledby="dialog-title"
        class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
      >
        <div
          class="fixed inset-0 bg-gray-900/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        ></div>

        <div
          tabindex="0"
          class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div class="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="mt-2">
                    <div class="isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                      <div
                        aria-hidden="true"
                        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                      >
                        <div
                          style="
                            clip-path: polygon(
                              74.1% 44.1%,
                              100% 61.6%,
                              97.5% 26.9%,
                              85.5% 0.1%,
                              80.7% 2%,
                              72.5% 32.5%,
                              60.2% 62.4%,
                              52.4% 68.1%,
                              47.5% 58.3%,
                              45.2% 34.5%,
                              27.5% 76.7%,
                              0.1% 64.9%,
                              17.9% 100%,
                              27.6% 76.8%,
                              76.1% 97.7%,
                              74.1% 44.1%
                            );
                          "
                          class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
                        ></div>
                      </div>
                      <div class="mx-auto max-w-2xl text-center">
                        <h2
                          class="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"
                        >
                          {{ form._id ? 'Update Post-it' : 'Create Post-it' }}
                        </h2>
                        <p class="mt-2 text-lg/8 text-gray-400">
                          Aute magna irure deserunt veniam aliqua magna enim voluptate.
                        </p>
                      </div>
                      <form @submit.prevent="handleSubmit" class="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6">
                          <div>
                            <label class="block text-sm/6 font-semibold text-white">Title</label>
                            <div class="mt-2.5">
                              <input
                                v-model="form.title"
                                type="text"
                                name="title"
                                class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                              />
                            </div>
                          </div>

                          <div class="sm:col-span-2">
                            <label class="block text-sm/6 font-semibold text-white">Content</label>
                            <div class="mt-2.5">
                              <textarea
                                v-model="form.content"
                                name="message"
                                rows="4"
                                class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                command="close"
                @click="handleSubmit"
                commandfor="dialog"
                class="inline-flex w-full justify-center rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-400 sm:ml-3 sm:w-auto"
              >
                Add
              </button>
              <button
                type="submit"
                :command="!form._id ? 'close' : null"
                :commandfor="!form._id ? 'dialog' : null"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-5 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useNoteStore } from '@/stores/notes'
import Confirm_delete from '@/components/confirm_delete.vue'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
const route = useRoute()
const toast = useToast()
const isShowing = ref(false)
const showModal = () => {
  isShowing.value = true
}

const postStore = useNoteStore()

const form = ref({
  title: '',
  content: '',
})

const editPostit = (postit) => {
  form.value = {
    _id: postit._id,
    title: postit.title,
    content: postit.content[0],
  }
}

onMounted(() => {
  postStore.getPostits()
})
watch(
  postStore.store_postits,
  (newValue) => {
    localStorage.setItem('localPostit', JSON.stringify(newValue))
  },
  { deep: true },
)

const handleSubmit = () => {
  if (!form.value.title.trim() || !form.value.content.trim()) {
    toast.error('invalid data')
    return
  }
  console.log(form.value)
  if (!form.value._id) {
    // postits.value.push({
    //   id: generateUniqueId(),
    //   title: form.value.title,
    //   content: [form.value.content],

    // })
    const note = {
      title: form.value.title,
      content: [form.value.content],
    }

    postStore.createPostit(note)
  } else {
    updatePostit(form.value._id)
  }

  form.value = { title: '', content: '', _id: null }
}

const updatePostit = (id) => {
  const note = {
    title: form.value.title,
    content: [form.value.content],
  }
  postStore.updatePostit(id, note)
}

// const index = postits.value.findIndex((postit) => postit.id === id)
// if (index !== -1) {
//   postits.value[index] = {
//     ...postits.value[index],
//     title: form.value.title,
//     content: form.value.content,
//   }
// }

// const deletePostit = (id) => {
//   postits.value = postits.value.filter((postit) => postit.id !== id)
// }

const deleteAllPostit = () => {
  postStore.store_postits = []
}

// const generateUniqueId = () => {
//   return Math.floor(Math.random() * 1000000)
// }
</script>
