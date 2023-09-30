<template>
  {{ auth.user.name }}
  <div>
    <div v-for="playlist in playlists" :key="playlist.id">
      {{ playlist.name }} [{{ playlist.accessibility }}]
    </div>
  </div>

</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore()
const { data: playlists, error } = await useMyFetch<any>('playlist', {})
</script>