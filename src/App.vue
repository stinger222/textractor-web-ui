<script setup lang="ts">
import { Toaster } from '@/components/ui'
import { RouterView } from 'vue-router'

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

import { TooltipProvider } from './components/ui/tooltip'

const handleClearHistory = () => {
  if (!window.confirm("Are you sure you want to clear all dialogue history?")) return

  localStorage.removeItem('text-lines')
  setTimeout(() => location.reload(), 100)
}
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <div class="max-w-[1920px] mx-auto p-4 pb-0 h-screen">
        <TooltipProvider :delayDuration="150">
          <RouterView />
        </TooltipProvider>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem @click="handleClearHistory">Clear History</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>

  <Toaster
    rich-colors
    position="top-right"
    :toast-options="{
      style: {
        'margin-top': '45px',
        'pointer-events': 'auto'
      },
    }"
  />
</template>
