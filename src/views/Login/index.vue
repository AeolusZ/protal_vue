<template>
    <div class="flex flex-horizonal-center flex-vertical-center">
        <el-form :model="userForm" status-icon class="login-form">
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="userForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="userForm.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userForm: {userName: '', pwd: ''}
        }
    },
    methods: {
        submitForm(){
            // console.log(this)
            window.history.pushState({}, null, '/bbb');
        }
    }
}
</script>
<style scoped>
.login-form{
    width: 400px;
    padding: 20px
}
</style>