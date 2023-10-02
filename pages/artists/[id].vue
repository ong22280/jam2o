<template>
  <div class="px-4 py-6">
    <h1 class="mb-4 text-3xl font-bold">{{ pageTitle }}</h1>

    <div v-if="artist">
      <div class="mb-4 text-2xl font-semibold">
        {{ artist.name }} <span class="text-xl text-gray-500">({{ artist.id }})</span>
      </div>

      <div class="pt-4 mt-4 border-t">
        <h2 class="mb-2 text-xl font-semibold">Songs:</h2>
        <ul class="space-y-2">
          <li v-for="song in artist.songs" :key="song.id" class="pl-4 text-lg">
            {{ song.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const pageTitle = `Artist No. ${route.params.id}`

const { data: artist } = await useMyFetch<any>(
  `artist/${route.params.id}`,
  {}
)


</script>