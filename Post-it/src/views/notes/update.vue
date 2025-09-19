<!-- <div>
        <dialog
          :id="postit.id"
          aria-labelledby="dialog-title"
          class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
        >
          <div
            class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
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
                            Update post-it
                          </h2>
                          <p class="mt-2 text-lg/8 text-gray-400">
                            Aute magna irure deserunt veniam aliqua magna enim voluptate.
                          </p>
                        </div>
                        <form
                          @submit.prevent="handleSubmit"
                          class="mx-auto mt-16 max-w-xl sm:mt-20"
                        >
                          <div class="grid grid-cols-1 gap-x-8 gap-y-6">
                            <div>
                              <label
                                for="first-name"
                                class="block text-sm/6 font-semibold text-white"
                                >Title
                              </label>
                              <div class="mt-2.5">
                                <input
                                  v-model="form.value"
                                  type="text"
                                  name="title"
                                  class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                />
                              </div>
                            </div>

                            <div class="sm:col-span-2">
                              <label for="message" class="block text-sm/6 font-semibold text-white"
                                >Content</label
                              >
                              <div class="mt-2.5">
                                <textarea
                                  v-model="postit.content"
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
                  @click="updatePostit(postit.id)"
                  :commandfor="postit.id"
                  class="inline-flex w-full justify-center rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-400 sm:ml-3 sm:w-auto"
                >
                  Add
                </button>
                <button
                  type="submit"
                  command="close"
                  :commandfor="postit.id"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-5 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div> -->
