<template>
  <div class="m-4 p-8 bg-blue-300 text-black rounded-xl">
    <div class="text-2xl">{{ name }}</div>
    <div class="text-4xl m-4">{{ counter.number }}</div>

    <button class="px-4 py2 mr-8 bg-orange-200" @click="up()">
      Up
    </button>
    <button class="px-4 py2 mr-8 bg-orange-200" @click="down()">
      Down
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['name'])
const counter = reactive({ number: 0 })

function up() {
  counter.number += 1
}

function down() {
  counter.number--
}
</script>