<template>
  <nav class="flex">
    <MenuLink to="/">Home</MenuLink>
    <MenuLink to="/artists">Artist</MenuLink>
    <MenuLink to="/artists/create">Add Artist</MenuLink>
    <MenuLink to="/login">Login</MenuLink>
    <div v-if="isLogged">
      <MenuLink to="/playlist">Playlist</MenuLink>
      <h1>{{ auth.user.name }}</h1>
      <button @click="logout">Logout</button>
    </div>
      <!-- <MenuLink to="/playlist/create">Add Playlist</MenuLink> -->


  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';

const auth = useAuthStore()

const isLogged = auth.isLogin

async function logout() {
  const {data: response, error} = await useMyFetch<any>('auth/logout', {
    method: 'POST',
  })
  console.log(response)
  if (response.value !== null) {
    auth.clear()
    await navigateTo('/')
  }
  // const { data: response, error } = await useMyFetch<any>('auth/login', {
  //   method: 'POST',
  //   body: formData
  // })
  // if (response.value !== null){
  //   const { access_token, token_type } = response.value
  //   auth.setToken(access_token)

  //   const { data: user, error } = await useMyFetch<any>('auth/me', {
  //     method: 'POST'
  //   })
  //   if (user.value !== null) {
  //     const { name, email } = user.value
  //     auth.setUser(name, email)
  //     await navigateTo('/playlist')
  //   }
  // }
}

</script>