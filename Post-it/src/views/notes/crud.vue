<!-- <template>
  <div class="container">
    <PostList :postits="postits" @delete="deletepostit" @edit="selectpostitForEdit" />
    <DetailPost @add="addpostit" @update="updatepostit" :postit="selectedpostit" />
  </div>
</template>
<script setup>
import PostList from './components/list.vue'
import DetailPost from './components/details.vue'
import { ref, onMounted, reactive } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const postits = ref([])
const selectedpostit = ref(null)

onMounted(() => {
  const savedpostits = JSON.parse(localStorage.getItem('postits'))
  if (savedpostits) {
    postits.value = savedpostits
  }
})

// Save postits to local storage
const savepostitsToLocalStorage = () => {
  localStorage.setItem('postits', JSON.stringify(postits.value))
}

const addpostit = (postitData) => {
  postits.value.push({
    id: generateUniqueId(),
    title: postitData.title,
    description: postitData.description,
  })
  savepostitsToLocalStorage()
  toast.success('postit added.')
}

const selectpostitForEdit = (postit) => {
  selectedpostit.value = { ...postit }
}

const updatepostit = (updatedpostit) => {
  const index = postits.value.findIndex((postit) => postit.id === updatedpostit.id)
  if (index !== -1) {
    postits.value[index] = { ...updatedpostit }
  }
  savepostitsToLocalStorage()
  toast.success('postit Updated.')
  selectedpostit.value = null
}

const deletepostit = (id) => {
  postits.value = postits.value.filter((postit) => postit.id !== id)
  savepostitsToLocalStorage()
  toast.success('postit deleted.')
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}
</script> -->
