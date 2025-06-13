<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { TextLine } from '.'
import { useSocketStore, useTranscriptionStore } from '@/stores'

const socketStore = useSocketStore()
const transcriptionStore = useTranscriptionStore()
const isDisconnected = computed(() => !socketStore.isConnected)

onMounted(() => {
  socketStore.connect('ws://127.0.0.1:6677')
})

onBeforeUnmount(() => {
  socketStore.disconnect()
})
</script>

<template>
  <div class="space-y-2.5 [&>:nth-child(2n)]:bg-amber-50 [&>:nth-child(2n+1)]:bg-green-50">
    
    <template v-if="transcriptionStore.hasLines">
      <TextLine v-for="(msg, index) in transcriptionStore.lines" :key="`line_${index}`">
        {{ msg }}
      </TextLine>
    </template>

    <template v-else-if="isDisconnected">
      <TextLine class="text-center font-mono font-medium !bg-white max-w-[460px] mx-auto px-3 gap-2">
        <h1 class="text-lg">Offline</h1>
        <div class="font-extralight text-xs text-start">
          <p>1) Textractor should be running and hooked up to the game</p>
          <p>2) Textractor should have "web_socket.xdll" extension active</p>
          <p class="mt-2">
            The extension should create a WebSocket server on port 6677, and this frontend should connect to it.
          </p>
        </div>
      </TextLine>
    </template>

    <template v-else>
      <TextLine class="text-center font-mono font-medium !bg-white max-w-[400px] mx-auto px-12 gap-2">
        <h1 class="text-lg">Connected!</h1>
        <div class="font-extralight text-xs text-start">
          <p>Waiting for messages to display...</p>
        </div>
      </TextLine>
    </template>

  </div>
</template>
