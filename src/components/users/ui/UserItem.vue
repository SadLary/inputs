<template>
<el-row :gutter="20" class="user_item">
            <el-col :lg="7">
                <el-input v-model="marks" :maxlength="50" placeholder="Метки"/>
            </el-col>
            <el-col :lg="4">
                <el-select
                    v-model="props.user.accountType"
                    placeholder="Select"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-col>
            <el-col :lg="props.user.accountType === 'LDAP' ? 12 : 6">
                <el-input v-model="props.user.login" :maxlength="100" placeholder="Логин"/>
            </el-col>
            <el-col v-if="props.user.accountType !== 'LDAP'" :lg="6" >
                <el-input v-model="props.user.password" type="password" placeholder="Пароль" :maxlength="100" show-password />
            </el-col>
            <el-col :lg="1">
                <el-button @click="$emit('delete', props.id)"> 
                    <el-icon>
                        <Delete />
                    </el-icon>
                </el-button>
            </el-col>
        </el-row>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type { User } from '@/components/users/models/index';


interface Props {
    user: User;
    id: number;
}

const options = [
  {
    value: 'Локальный',
    label: 'Локальный',
  },
  {
    value: 'LDAP',
    label: 'LDAP',
  },
]

const marks = ref('')
const props = defineProps<Props>()

onMounted(()=>{
    marks.value = props.user.tags.reduce((full, currentValue) => {
       return full + currentValue.text
    }, '')
})

watch(marks, (newValue)=>{
    props.user.tags = newValue.split(';').map((item, index)=>{
        return {text: `${item}${index < props.user.tags.length-1? ';':''}`};
    })  
})

watch(() => props.user.accountType, (newValue)=>{
    props.user.password = newValue === 'LDAP' ? null : '';
})

</script>
<style scoped>
.user_item {
    margin-top: 20px;
}
</style>