<template>
  <div class="p-4">
    <h2 class="mb-4 text-2xl font-semibold">Artists</h2>

    <div v-if="pending" class="flex items-center justify-center">
      <div class="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
    <div v-else>
      <ul class="divide-y divide-gray-200">
        <li v-for="artist in artists" :key="artist.id" class="py-4">
          <nuxt-link :to="`/artists/${artist.id}`" class="text-lg font-semibold text-blue-600 hover:text-blue-800">
            {{ artist.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: artists, pending } = await useMyFetch<any>("artist", {});
</script>
