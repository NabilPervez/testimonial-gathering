<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const testimonialId = route.params.id

// Mock data - in a real app this would fetch based on ID
const testimonial = {
  id: testimonialId,
  name: "Sarah Jenkins",
  role: "VP of Marketing",
  company: "TechFlow",
  date: "Oct 24, 2025",
  rating: 5,
  content: "This tool completely changed how we gather feedback. The automation saved us hours every week. I can't imagine going back to manual collection.",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
  videoUrl: null, // "https://example.com/video.mp4"
  platform: "LinkedIn",
  email: "sarah@techflow.com"
}
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto">
    <!-- Header -->
    <header class="w-full flex items-center gap-4 px-8 py-6 bg-white dark:bg-[#111418] border-b border-slate-200 dark:border-[#283039] shrink-0 sticky top-0 z-10">
      <button @click="$router.back()" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#283039] text-slate-500 dark:text-slate-400 transition-colors">
        <Icon icon="material-symbols:arrow-back" class="size-6" />
      </button>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">Testimonial Details</h1>
        <p class="text-sm text-slate-500 dark:text-[#9dabb9]">ID: #{{ testimonial.id }}</p>
      </div>
      <div class="ml-auto flex gap-3">
        <button class="px-4 py-2 rounded-lg bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">Reject</button>
        <button class="px-4 py-2 rounded-lg bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">Approve</button>
      </div>
    </header>

    <main class="flex-1 p-8 max-w-5xl mx-auto w-full flex flex-col gap-8">
       <!-- Testimonial Content Card -->
       <div class="bg-white dark:bg-[#1c242c] rounded-2xl p-8 border border-slate-200 dark:border-[#283039] shadow-sm">
          <div class="flex flex-col md:flex-row gap-8">
             <!-- Media Side -->
             <div class="w-full md:w-1/3 shrink-0 flex flex-col gap-4">
                <div class="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#283039] relative group">
                    <img :src="testimonial.avatar" class="w-full h-full object-cover" alt="User avatar" />
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button class="text-white hover:text-primary transition-colors">
                            <Icon icon="material-symbols:download" class="size-8" />
                        </button>
                    </div>
                </div>
                <div class="flex flex-col gap-2 p-4 rounded-xl bg-slate-50 dark:bg-[#283039]/50 border border-slate-100 dark:border-[#283039]">
                    <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Icon icon="material-symbols:mail" class="size-4" />
                        <span class="truncate">{{ testimonial.email }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <Icon icon="material-symbols:calendar-today" class="size-4" />
                        <span>{{ testimonial.date }}</span>
                    </div>
                </div>
             </div>
             
             <!-- Content Side -->
             <div class="flex-1 flex flex-col gap-6">
                <!-- User Info -->
                <div class="flex items-start justify-between">
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">{{ testimonial.name }}</h2>
                        <p class="text-slate-500 dark:text-slate-400 font-medium">{{ testimonial.role }} at {{ testimonial.company }}</p>
                    </div>
                    <div class="flex gap-1 text-yellow-500">
                         <Icon icon="material-symbols:star" class="size-6" v-for="i in 5" :key="i" :class="i <= testimonial.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-700'" />
                    </div>
                </div>
                
                <hr class="border-slate-100 dark:border-[#283039]" />

                <!-- The Quote -->
                <div class="relative">
                    <Icon icon="material-symbols:format-quote" class="absolute -top-4 -left-6 text-6xl text-slate-100 dark:text-[#283039] -z-10" />
                    <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300 italic">
                        "{{ testimonial.content }}"
                    </p>
                </div>
             </div>
          </div>
       </div>
    </main>
  </div>
</template>
