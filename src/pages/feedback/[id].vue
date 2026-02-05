<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useTestimonialStore } from '../../stores/testimonials'

const route = useRoute()
const router = useRouter()
const store = useTestimonialStore()
const id = parseInt(route.params.id as string)

onMounted(async () => {
    if (store.items.length === 0) await store.fetchTestimonials()
})

const testimonial = computed(() => store.items.find(t => t.id === id))
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#0d1117] font-display text-slate-900 dark:text-white flex items-center justify-center p-4">
    
    <div v-if="testimonial" class="w-full max-w-2xl bg-white dark:bg-[#161b22] rounded-3xl shadow-2xl border border-slate-100 dark:border-[#30363d] overflow-hidden relative">
        <!-- Back Button -->
        <button @click="router.back()" class="absolute top-6 left-6 z-10 p-2 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-md">
            <Icon icon="material-symbols:arrow-back" class="size-5" />
        </button>

        <!-- Dynamic Header Background -->
        <div class="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
             <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div class="px-8 pb-10 -mt-12 relative">
            <!-- Avatar -->
            <div class="size-24 rounded-2xl bg-white dark:bg-[#161b22] p-1 shadow-lg mx-auto mb-6 rotate-3 hover:rotate-0 transition-transform duration-300">
                <img :src="testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff`" class="w-full h-full object-cover rounded-xl" />
            </div>

            <div class="text-center space-y-6">
                <!-- Stars -->
                <div class="flex items-center justify-center gap-1 text-yellow-400">
                    <Icon icon="material-symbols:star" class="size-6 text-yellow-400 fill-current" v-for="i in 5" :key="i" :class="i <= testimonial.rating ? 'opacity-100' : 'opacity-20'" />
                </div>

                <!-- Quote -->
                <blockquote class="text-xl md:text-2xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                    "{{ testimonial.content }}"
                </blockquote>

                <!-- Author -->
                <div>
                     <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ testimonial.name }}</h3>
                     <p class="text-slate-500 dark:text-slate-400 text-sm">{{ testimonial.title }}</p>
                </div>
                
                <div class="pt-6 border-t border-slate-100 dark:border-[#30363d] flex items-center justify-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
                    <Icon icon="material-symbols:verified-user" class="text-blue-500 size-4" />
                    Verified Feedback
                </div>
            </div>
        </div>
    </div>

    <div v-else class="text-center animate-pulse">
        <div class="size-12 rounded-full bg-slate-200 dark:bg-slate-800 mx-auto mb-4"></div>
        <p class="text-slate-400">Loading testimonial...</p>
    </div>

  </div>
</template>
