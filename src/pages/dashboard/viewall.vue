<script setup lang="ts">
import { useTestimonialStore } from '../../stores/testimonials'
import { onMounted, computed, ref } from 'vue'

const store = useTestimonialStore()
const filter = ref<'all' | 'video' | 'text'>('all')

onMounted(async () => {
    if (store.items.length === 0) await store.fetchTestimonials()
})

const filteredTestimonials = computed(() => {
    if (filter.value === 'all') return store.items
    return store.items.filter(t => t.type === filter.value)
})

const counts = computed(() => {
    return {
        all: store.items.length,
        video: store.items.filter(t => t.type === 'video').length,
        text: store.items.filter(t => t.type === 'text').length
    }
})
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <!-- Header -->
      <header class="w-full flex items-center justify-between px-8 py-6 bg-white dark:bg-[#111418] border-b border-slate-200 dark:border-[#283039] shrink-0 sticky top-0 z-10">
          <div>
              <h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">All Feedback</h1>
              <p class="text-sm text-slate-500 dark:text-[#9dabb9] mt-1">Review all testimonials collected across all campaigns.</p>
          </div>
          <div class="flex gap-2 bg-slate-100 dark:bg-[#1c242c] p-1 rounded-lg">
              <button 
                @click="filter = 'all'"
                :class="{'bg-white dark:bg-[#283039] shadow-sm text-slate-900 dark:text-white': filter === 'all', 'text-slate-500 dark:text-slate-400': filter !== 'all'}"
                class="px-3 py-1.5 rounded-md text-sm font-bold transition-all"
              >
                  All <span class="ml-1 opacity-60 text-xs">{{ counts.all }}</span>
              </button>
              <button 
                @click="filter = 'video'"
                :class="{'bg-white dark:bg-[#283039] shadow-sm text-slate-900 dark:text-white': filter === 'video', 'text-slate-500 dark:text-slate-400': filter !== 'video'}"
                class="px-3 py-1.5 rounded-md text-sm font-bold transition-all"
              >
                  Video <span class="ml-1 opacity-60 text-xs">{{ counts.video }}</span>
              </button>
              <button 
                @click="filter = 'text'"
                :class="{'bg-white dark:bg-[#283039] shadow-sm text-slate-900 dark:text-white': filter === 'text', 'text-slate-500 dark:text-slate-400': filter !== 'text'}"
                class="px-3 py-1.5 rounded-md text-sm font-bold transition-all"
              >
                  Text <span class="ml-1 opacity-60 text-xs">{{ counts.text }}</span>
              </button>
          </div>
      </header>
      
      <!-- Content -->
      <div class="flex-1 overflow-y-auto px-8 py-8">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <RouterLink 
                :to="`/campaign/${t.campaignSlug}/${t.id}`"
                v-for="t in filteredTestimonials" 
                :key="t.id"
                class="bg-white dark:bg-[#1c242c] rounded-2xl p-6 border border-slate-200 dark:border-[#283039] hover:border-primary/50 transition-all flex flex-col gap-4 group cursor-pointer hover:shadow-lg"
              >
                  <div class="flex items-start justify-between">
                      <div class="flex items-center gap-3">
                          <div class="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                              <img v-if="t.avatar" :src="t.avatar" class="w-full h-full object-cover" />
                              <span v-else class="text-sm font-bold text-slate-500">{{ t.name.charAt(0) }}</span>
                          </div>
                           <div>
                                <p class="text-sm font-bold text-slate-900 dark:text-white">{{ t.name }}</p>
                                <p class="text-xs text-slate-500">{{ t.title }}</p>
                           </div>
                      </div>
                      <span class="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-[#283039] px-2 py-1 rounded">/{{t.campaignSlug}}</span>
                  </div>
                  
                  <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-4">"{{ t.content }}"</p>
                  
                  <div class="mt-auto pt-4 border-t border-slate-100 dark:border-[#283039] flex items-center justify-between">
                      <div class="flex gap-0.5 text-yellow-400">
                            <Icon icon="material-symbols:star" class="size-4" v-for="i in t.rating" :key="i" />
                      </div>
                      <span class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider" 
                                :class="{
                                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500': t.status === 'pending',
                                    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500': t.status === 'approved',
                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-500': t.status === 'rejected'
                                }">
                                {{ t.status }}
                        </span>
                  </div>
              </RouterLink>
          </div>
      </div>
  </div>
</template>
