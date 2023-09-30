<template>
  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div class="border-2 border-gray-600 bg-white px-4 py-6 rounded-lg transform transition duration-500">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
        <path d="M8 17l4 4 4-4m-4-5v9"></path>
        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
      </svg>
      <h2 class="title-font font-medium text-3xl text-gray-900">{{ counter.count }}</h2>
      <p class="leading-relaxed">{{ name }}</p>
      <div class="flex flex-col items-end gap-3 pr-3 py-3">
        <button @click="up()">
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        <button @click="down()">
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps(['name'])
import { useCounterStore } from '~/stores/useCounterStore'
const counter = useCounterStore()

function up() {
  counter.increment()
  console.log(props.name, counter)
}

function down() {
  counter.decrement()
  console.log(props.name, counter)
}

</script>