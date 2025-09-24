import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
export const useNoteStore = defineStore('localPostit', () => {
  // state()=>{
  // }
  const toast = useToast()
  const store_postits = ref([])
  const store_postit = ref(null)
  const getPostits = () => {
    fetch('https://post-it.epi-bluelock.bj/notes')
      .then((response) => response.json())
      .then((data) => {
        store_postits.value = data.notes
        localStorage.setItem('localPostit', JSON.stringify(data.notes))
      })
      .catch((error) => toast.error('error !'))
  }
  const getPostit = (id) => {
    fetch(`https://post-it.epi-bluelock.bj/notes/${id}`)
      .then((response) => response.json())
      .then((data) => (store_postit.value = data))
      .catch((error) => toast.error('error !'))
  }

  const createPostit = (note) => {
    fetch('https://post-it.epi-bluelock.bj/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        store_postits.value.push(note)
        toast.success('create successfully')
        getPostits()
      })
      .catch((error) => toast.error('error !'))
  }

  const updatePostit = (id, note) => {
    fetch(`https://post-it.epi-bluelock.bj/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then((response) => response.json())
      .then((data) => {
        const index = store_postits.value.findIndex((n) => n.id === id)
        if (index !== -1) {
          store_postits.value[index] = data.note
        }
        toast.success('update successfully')
        getPostits()
      })

      .catch((error) => toast.error('error !'))
  }

  const deletePostit = (id) => {
    fetch(`https://post-it.epi-bluelock.bj/notes/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        store_postits.value = store_postits.value.filter((n) => n._id !== id)
        toast.success('delete successfully')
        getPostits()
      })
      .catch((error) => toast.error('error !'))
  }

  return {
    store_postits,
    store_postit,
    getPostits,
    getPostit,
    createPostit,
    updatePostit,
    deletePostit,
  }
})
