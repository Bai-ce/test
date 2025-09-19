import { defineStore } from 'pinia'

export const useNoteStore = defineStore('localPostit', () => {
  // state()=>{
  // }
  const postits = ref(null)

  postits.value = fetch('https://post-it.epi-bluelock.bj/notes')
    .then((r) => r.json())
    .then((v) => (postits.value = v.notes))
})
