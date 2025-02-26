import { watch } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export function useUsers(){
    const userStore = useUserStore()
    const { users } = storeToRefs(userStore)

    watch(userStore, ()=>{
        userStore.saveUsers()
    })
    const addNewUser = ()=>{
        users.value.push({tags: [{text: ''}], accountType: 'Локальный', login: '', password: ''})
        userStore.saveUsers()
      }
    
    const deleteUser = (id: number)=>{
        users.value.splice(id, 1)
        userStore.saveUsers()
    }

    return {
        users,
        addNewUser,
        deleteUser
    }
}