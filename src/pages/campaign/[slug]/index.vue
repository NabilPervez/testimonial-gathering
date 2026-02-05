<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useCampaignStore } from '../../../stores/campaigns'
import { useTestimonialStore } from '../../../stores/testimonials'

const route = useRoute()
const router = useRouter()
const campaignStore = useCampaignStore()
const testimonialStore = useTestimonialStore()
const campaignSlug = route.params.slug as string

onMounted(async () => {
    if (campaignStore.items.length === 0) await campaignStore.fetchCampaigns()
    if (testimonialStore.items.length === 0) await testimonialStore.fetchTestimonials()
})

const campaign = computed(() => campaignStore.items.find(c => c.slug === campaignSlug))
const testimonials = computed(() => testimonialStore.items.filter(t => t.campaignSlug === campaignSlug))
const approvedCount = computed(() => testimonials.value.filter(t => t.status === 'approved').length)
const pendingCount = computed(() => testimonials.value.filter(t => t.status === 'pending').length)
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
    <!-- Header -->
    <header class="w-full border-b border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418] shrink-0 sticky top-0 z-10">
      <div class="px-8 py-6">
          <div class="flex items-center gap-4 mb-4">
               <RouterLink to="/campaign" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#283039] text-slate-500 dark:text-slate-400 transition-colors">
                 <Icon icon="material-symbols:arrow-back" class="size-5" />
               </RouterLink>
               <h1 v-if="campaign" class="text-2xl font-bold text-slate-900 dark:text-white">{{ campaign.name }}</h1>
               <div v-else class="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
               
               <span v-if="campaign" :class="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': campaign.status === 'Active', 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400': campaign.status === 'Paused'}" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {{ campaign.status }}
               </span>
               
               <div class="ml-auto flex gap-2">
                   <RouterLink :to="`/campaign/${campaignSlug}/embed`" class="px-4 py-2 border border-slate-200 dark:border-[#283039] rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-[#1c2127] transition-colors flex items-center gap-2">
                       <Icon icon="material-symbols:code" class="size-4" />
                       Embed
                   </RouterLink>
                   <RouterLink :to="`/campaign/${campaignSlug}/edit`" class="px-4 py-2 border border-slate-200 dark:border-[#283039] rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-[#1c2127] transition-colors flex items-center gap-2">
                       <Icon icon="material-symbols:edit" class="size-4" />
                       Edit
                   </RouterLink>
                   <RouterLink :to="`/collect/${campaignSlug}`" target="_blank" class="px-4 py-2 bg-primary hover:bg-blue-600 rounded-lg text-white font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20">
                       <Icon icon="material-symbols:open-in-new" class="size-4" />
                       View Page
                   </RouterLink>
               </div>
          </div>
          
          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="p-4 rounded-xl border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127]">
                  <span class="text-xs font-bold uppercase text-slate-400 dark:text-slate-500">Total Responses</span>
                  <p class="text-2xl font-black text-slate-900 dark:text-white mt-1">{{ testimonials.length }}</p>
              </div>
               <div class="p-4 rounded-xl border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127]">
                  <span class="text-xs font-bold uppercase text-amber-500">Pending Review</span>
                  <p class="text-2xl font-black text-slate-900 dark:text-white mt-1">{{ pendingCount }}</p>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127]">
                  <span class="text-xs font-bold uppercase text-green-500">Approved</span>
                  <p class="text-2xl font-black text-slate-900 dark:text-white mt-1">{{ approvedCount }}</p>
              </div>
              <div class="p-4 rounded-xl border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127]">
                  <span class="text-xs font-bold uppercase text-slate-400 dark:text-slate-500">Avg Rating</span>
                  <div class="flex items-center gap-2 mt-1">
                      <p class="text-2xl font-black text-slate-900 dark:text-white">4.8</p>
                      <Icon icon="material-symbols:star" class="text-yellow-400 size-5" />
                  </div>
              </div>
          </div>
      </div>
    </header>

    <!-- Content: Testimonials List -->
    <div class="flex-1 overflow-y-auto px-8 py-8">
        <div class="flex flex-col gap-4 max-w-5xl mx-auto">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Feedback</h2>
            
            <div v-if="testimonials.length > 0" class="flex flex-col gap-3">
                <RouterLink 
                    v-for="t in testimonials" 
                    :key="t.id"
                    :to="`/campaign/${campaignSlug}/${t.id}`"
                    class="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#1c242c] border border-slate-200 dark:border-[#283039] hover:border-primary/50 transition-all group"
                >
                    <div class="size-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-300 shrink-0">
                        <img v-if="t.avatar" :src="t.avatar" class="w-full h-full object-cover rounded-full" />
                        <span v-else>{{ t.name.charAt(0) }}</span>
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="font-bold text-slate-900 dark:text-white truncate">{{ t.name }}</span>
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider" 
                                :class="{
                                    'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500': t.status === 'pending',
                                    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500': t.status === 'approved',
                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-500': t.status === 'rejected'
                                }">
                                {{ t.status }}
                            </span>
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 truncate w-3/4">"{{ t.content }}"</p>
                    </div>
                    <div class="flex gap-0.5 text-yellow-400">
                        <Icon icon="material-symbols:star" class="size-4" v-for="i in t.rating" :key="i" />
                    </div>
                    <Icon icon="material-symbols:chevron-right" class="text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors" />
                </RouterLink>
            </div>
            
            <div v-else class="text-center py-20 bg-slate-50 dark:bg-[#1c242c]/50 rounded-2xl border border-dashed border-slate-200 dark:border-[#283039]">
                <div class="size-16 bg-slate-100 dark:bg-[#283039] rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                    <Icon icon="material-symbols:inbox" class="size-8" />
                </div>
                <h3 class="text-slate-900 dark:text-white font-bold">No responses yet</h3>
                <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Share your collection page to get started.</p>
            </div>
        </div>
    </div>
  </div>
</template>
