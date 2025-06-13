import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export const useTranscriptionStore = defineStore('transcription', () => {
  const lines = useStorage<string[]>('text-lines', [])
  const hasLines = computed(() => lines.value.length)

  const addLine = (line: string) => {
    lines.value.push(line)
  }

  const clearLines = () => {
    lines.value = []
  }


  return {
    lines,
    hasLines,

    addLine,
    clearLines,
  }
})
