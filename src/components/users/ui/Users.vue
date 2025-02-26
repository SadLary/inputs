<template>
    <header>
        <div class="header_heading">
            <h1>Учетный записи</h1>
            <el-button class="header_add-button" @click="addNewUser">
                <el-icon>
                    <Plus />
                </el-icon>
            </el-button>
        </div>
        <div class="header_tip">
            <el-icon>
                <QuestionFilled />
            </el-icon>
            <p>Для указания нескольких меток для одной пары логин/пароль используйте разделить ;</p>
        </div>
    </header>
    <main>
        <el-row :gutter="20">
            <el-col :lg="7">
                <p class="p">Метка</p>
            </el-col>
            <el-col :lg="4">
                <p class="p">Тип записи</p>
            </el-col>
            <el-col :lg="6">
                <p class="p">Логин</p>
            </el-col>
            <el-col :lg="6">
                <p class="p">Пароль</p>
            </el-col>
            <el-col :lg="1">
            </el-col>
        </el-row>
        <UserItem v-for="(user, index) in users" :key="index" :user="user" :id="index" @delete="deleteUser"/>
    </main>
</template>
<script setup lang="ts">
import UserItem from '@/components/users/ui/UserItem.vue';
import { useUsers } from '@/components/users/composable/user'

const {users, addNewUser, deleteUser} = useUsers()

</script>
<style scoped>
.header_heading {
    display: flex;
    align-items: center;
}

.header_heading h1 {
    line-height: 1;
    margin-right: 10px;
}
.header_add-button {
    width: 50px;
    height: 50px;
    padding: 0;
}
.header_tip {
    display: flex;
    align-items: center;
}
</style>