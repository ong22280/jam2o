<template>
  <div class="max-w-2xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
    <h1 class="mb-4 text-2xl font-semibold">{{ auth.user.name }}'s Playlists</h1>
    <div v-if="playlists.length" class="space-y-4">
      <div v-for="playlist in playlists" :key="playlist.id" class="flex justify-between p-4 border-b border-gray-200">
        <div class="font-medium">{{ playlist.name }}</div>
        <div class="text-gray-500">[{{ playlist.accessibility }}]</div>
      </div>
    </div>
    <div v-else class="text-gray-500">No playlists available.</div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore()
const { data: playlists, error } = await useMyFetch<any>('playlist', {})
</script>