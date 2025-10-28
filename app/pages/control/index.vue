<script lang="ts" setup>
const counter = ref(0)

const { send, open } = useWebSocket('/ws/counter', {
  immediate: false,
  autoReconnect: true
})

onMounted(() => {
  open()
})

const incrementCounter = () => {
  counter.value++
  send(counter.value.toString())
}
</script>

<template>
  <div>
    <div>control page</div>
    <div>{{ counter }}</div>
    <button @click="incrementCounter">Counter</button>
  </div>
</template>
