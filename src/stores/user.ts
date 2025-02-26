import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/components/users/models/index'

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  onMounted(()=>{
    users.value = JSON.parse(localStorage.users) === null ? [] : JSON.parse(localStorage.users)
  })

  const saveUsers = () => {
    localStorage.setItem('users', JSON.stringify(users.value));
  }

  return { users, saveUsers }
})


