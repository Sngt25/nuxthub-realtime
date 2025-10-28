<script lang="ts" setup>
const counter = ref(0)

const { open } = useWebSocket('/ws/counter', {
  immediate: false,
  autoReconnect: true,
  async onMessage(ws, event) {
    // Parse the counter value from the message
    const value =
      typeof event.data === 'string' ? event.data : await event.data.text()
    counter.value = parseInt(value)
  }
})

onMounted(() => {
  open()
})
</script>

<template>
  <div>{{ counter }}</div>
</template>
