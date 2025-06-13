<script setup lang="ts">
import { Transcript } from '@/components/pages/transcript'
import { useSocketStore } from '@/stores'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const store = useSocketStore()
</script>

<template>
  <header class="cursor-default pb-10 font-mono text-center flex justify-center items-center gap-1">
    <h1 class="w-fit bg-gradient-to-r from-indigo-500 to-emerald-500 text-transparent bg-clip-text"> Textractor WebUI </h1>
    <Tooltip>
      <TooltipTrigger as-child>
        <p class="text-[8px]">
          <template v-if="store.isConnected">
            🟢
          </template>
          <template v-else>
            🔴
          </template>
        </p>
        </TooltipTrigger>
        <TooltipContent>
          <template v-if="store.isConnected">
            Online!
          </template>
          <template v-else>
            <div class="text-center">
              <p>Offline!</p>
              <p>Can't conect to the textractor</p>
            </div>
          </template>
        </TooltipContent>
      </Tooltip>
  </header>
  <Transcript />
</template>
