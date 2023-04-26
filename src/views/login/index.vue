<template>
  <div class="login-container h-full relative flex items-center justify-center">
    <div>
      <h1>login</h1>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="Username" tabindex="1" autocomplete="on"/>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="Password"  tabindex="2" autocomplete="on" show-password/>
        </el-form-item>
        <el-button type="primary" @click="submitForm(formRef)" >Submit</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const formRef = ref<FormInstance>()
const router = useRouter()

const form = reactive({
  username: '',
  password: '',
})

const validateName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    callback()
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: validateName, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
       ElMessage({
        showClose: true,
        message: 'Login success',
        type: 'success',
      })
      router.push({
        name: "dashboard"
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style>
.login-container {
  background-image: url("@/assets/login/login_bg.svg");
  background-position: 50%;
	background-size: 100% 100%;
	background-size: cover;
}
</style>