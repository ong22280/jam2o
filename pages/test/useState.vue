<template>
  <div class="flex">
    <UseStateCounter name="One" 
      @changeUp="onChangeUp">
    </UseStateCounter>
    <UseStateCounter name="Two"></UseStateCounter>
  </div>
  <div>
    message: {{ message }} <br>
    appTheme: {{ appTheme }} <br>
    somekey: {{ someKey }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref("")

import { useLocalStorage, useSessionStorage } from '@vueuse/core'
const appTheme = useLocalStorage<string|null>('app-theme', null)
const someKey = useSessionStorage<number|null>('somekey', null)

function onChangeUp(name:string, counter:number) {
  message.value = `${name}: change counter up to ${counter}`
  someKey.value = counter
}

</script>