import { useTranscriptionStore } from '.'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSocketStore = defineStore('socket', () => {
  const socket = ref<WebSocket | null>(null)
  const isConnected = ref(false)
  const { addLine } = useTranscriptionStore()

  const connect = (url: string) => {
    if (socket.value) return

    socket.value = new WebSocket(url)

    socket.value.onopen = () => {
      console.log('🟢 WS connected')
      isConnected.value = true
    }

    socket.value.onmessage = (event) => {
      console.log('📩 WS message:', event.data)
      addLine(event.data || '*No message content*')
    }

    socket.value.onerror = (e) => {
      console.error('❌ WS error:', e)
    }

    socket.value.onclose = () => {
      console.log('🔴 WS closed')
      isConnected.value = false
      socket.value = null
    }
  }

  const disconnect = () => {
    if (socket.value) {
      socket.value.close()
      socket.value = null
    }
    isConnected.value = false
  }

  return {
    isConnected,

    connect,
    disconnect,
  }
})
