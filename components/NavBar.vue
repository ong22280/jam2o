<template>
  <nav class="p-1 text-white bg-gray-800 ">
    <div class="container flex items-center justify-between px-4 mx-auto">
      
      <div class="flex items-center space-x-4">
        <!-- Links available to all users -->
        <MenuLink to="/" class="text-white ">Home</MenuLink>
        <MenuLink to="/artists" class="text-white ">Artist</MenuLink>
        <MenuLink to="/artists/create" class="text-white ">Add Artist</MenuLink>
        <MenuLink to="/playlist" v-if="auth.isLogin" class="text-white ">Playlist</MenuLink>
      </div>
      
      <!-- Links available only to logged-in users -->
      <div v-if="auth.isLogin" class="flex items-center space-x-4">
        <h1 class="text-lg font-semibold">{{ auth.user.name }}</h1>
        <button @click="logout" class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500">Logout</button>
      </div>
      
      <!-- Links available only to logged-out users -->
      <div v-else class="flex">
        <MenuLink to="/login" class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">Login</MenuLink>
      </div>
    </div>

  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

async function logout() {
  const { data: response, error } = await useMyFetch<any>("auth/logout", {
    method: "POST",
  });
  console.log(response);
  if (response && response.value !== null) {
    // Check if response is truthy before accessing its properties
    auth.clear();
    await navigateTo("/");
  }
}
</script>
