<template>
  <div class="max-w-lg p-4 mx-auto mt-16 bg-white rounded-lg shadow-lg">
    <h1 class="mb-6 text-3xl font-semibold text-center">Add Artist</h1>
    <form @submit.prevent="onSubmit()" class="space-y-6">
      <div class="flex flex-col">
        <label for="name" class="mb-2 font-medium">Artist Name</label>
        <input v-model="formData.name" type="text" id="name" class="p-2 border border-gray-300 rounded" placeholder="Enter Artist Name" />
        <p v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</p>
      </div>
      <div class="flex justify-center">
        <button type="submit" class="px-6 py-2 text-white transition bg-blue-500 rounded-full hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

const formData = ref({
  name: ""
})
const errorMessage = ref("")

async function onSubmit() {
  
  const { name } = formData.value

  const { data: response, error } = await useMyFetch<any>("artist", {
    method: "POST",
    body: { name, image_path: "image url" }
  })

  if (response.value !== null) {
    errorMessage.value = ""
    await navigateTo(`/artists/${response.value.id}`)
  } else {
    console.log(error)
    const { statusMessage, data } = error.value!
    errorMessage.value = data.message
  }
}
</script>