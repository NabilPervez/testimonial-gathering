<script setup lang="ts">
import { useTestimonialStore } from '../stores/testimonials'
import AnimatedTestimonials from '../components/AnimatedTestimonials.vue'
import { onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const store = useTestimonialStore()
const route = useRoute()

// Check for slug in route params
const campaignSlug = computed(() => route.params.slug as string | undefined)

onMounted(() => {
    loadData()
})

watch(() => route.params.slug, () => {
    loadData()
})

const loadData = () => {
    if (campaignSlug.value) {
        store.fetchByCampaign(campaignSlug.value)
    } else {
        store.fetchTestimonials()
    }
}

const displayTestimonials = computed(() => {
    let items = store.approvedTestimonials
    if (campaignSlug.value) {
        items = items.filter(t => t.campaignSlug === campaignSlug.value)
    }
    return items
})

const formattedTestimonials = computed(() => {
    return displayTestimonials.value
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5) // Top 5 highest rated
        .map(t => ({
            quote: t.content,
            name: t.name,
            designation: t.title,
            image: t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=000`
        }))
})
</script>

<template>
  <div class="bg-slate-50 dark:bg-[#0d1117] min-h-screen font-display">
      <main>
          <!-- Hero / Carousel Section -->
          <section class="py-10 px-4">
              <div class="flex justify-center">
                  <AnimatedTestimonials :data="formattedTestimonials" :autoplay="true" />
              </div>
          </section>

          <!-- Grid Section -->
          <section class="py-20 bg-white dark:bg-[#161b22] border-t border-slate-200 dark:border-[#30363d]">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Community Feedback</h2>
                  
                  <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                      <!-- Promo Card -->
                      <div v-for="t in displayTestimonials" :key="t.id" class="break-inside-avoid bg-slate-50 dark:bg-[#0d1117] rounded-3xl p-6 border border-slate-200 dark:border-[#30363d] hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                          <!-- Header -->
                          <div class="flex items-center gap-4 mb-4">
                              <div class="size-12 rounded-full overflow-hidden bg-slate-200">
                                  <img :src="t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`" class="w-full h-full object-cover">
                              </div>
                              <div>
                                  <h3 class="font-bold text-slate-900 dark:text-white leading-tight">{{ t.name }}</h3>
                                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ t.title }}</p>
                              </div>
                          </div>
                          
                          <!-- Stars -->
                          <div class="flex gap-1 text-yellow-400 mb-4">
                              <Icon icon="material-symbols:star" class="size-5 fill-current" v-for="i in 5" :key="i" :class="i <= t.rating ? 'opacity-100' : 'opacity-20'" />
                          </div>

                          <!-- Content -->
                          <div class="relative z-10 my-4">
                               <p class="text-gray-800 dark:text-gray-200 text-base leading-normal block w-full opacity-100 visible">
                                  {{ t.content }}
                               </p>
                          </div>
                          
                          <!-- Date/Footer -->
                          <div class="mt-6 pt-4 border-t border-slate-200 dark:border-[#30363d] flex justify-between items-center">
                               <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ t.date }}</span>
                               <Icon icon="logos:google-icon" class="size-5 opacity-50 grayscale hover:grayscale-0 transition-all" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </div>
</template>
