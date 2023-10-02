<template>
  <div class="max-w-xl px-8 py-6 mt-20 bg-white rounded shadow-xl h-80">
    <form @submit.prevent="onSubmit">
      <div class="mb-6">
        <label for="email" class="block font-bold text-gray-800">Email:</label>
        <input type="email" v-model="formData.email" id="email" placeholder="email@example.com" class="w-full py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>
      <div>
        <label for="pasword" class="block font-bold text-gray-800">Password:</label>
        <input type="password" v-model="formData.password" id="password" placeholder="" class="w-full py-2 pl-3 mt-2 border border-gray-300 rounded outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>
      <button class="block w-full px-4 py-2 mt-6 font-bold text-center text-white bg-indigo-500 rounded cursor-pointer">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore()

const formData = reactive({
  'email': '',
  'password': ''
})

async function onSubmit() {
  const { data: response, error } = await useMyFetch<any>('auth/login', {
    method: 'POST',
    body: formData
  })
  if (response.value !== null){
    const { access_token, token_type } = response.value
    auth.setNewToken(access_token)

    const { data: user, error } = await useMyFetch<any>('auth/me', {
      method: 'POST'
    })
    if (user.value !== null) {
      const { name, email } = user.value
      auth.setUser(name, email)
      await navigateTo('/playlist')
    }
  }
}
</script>