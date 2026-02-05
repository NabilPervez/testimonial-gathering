<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
      <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Analytics</h1>
          <p class="text-slate-500 dark:text-[#9dabb9]">Overview of your testimonial collection performance.</p>
      </div>

      <!-- Global Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="stat in stats" :key="stat.label" class="bg-white dark:bg-[#111418] rounded-2xl p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex flex-col gap-4 relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div class="flex justify-between items-start z-10">
                  <span class="text-sm font-bold text-slate-500 dark:text-[#9dabb9]">{{ stat.label }}</span>
                  <span :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'" class="text-xs font-bold px-2 py-1 rounded-full bg-slate-50 dark:bg-[#1c2127] flex items-center gap-1">
                      <Icon :icon="stat.trend > 0 ? 'material-symbols:trending-up' : 'material-symbols:trending-down'" />
                      {{ Math.abs(stat.trend) }}%
                  </span>
              </div>
              <div class="text-3xl font-black text-slate-900 dark:text-white z-10">{{ stat.value }}</div>
              
              <!-- Decoration -->
              <div class="absolute -bottom-4 -right-4 text-slate-100 dark:text-[#1c2127] opacity-50 group-hover:scale-110 transition-transform duration-500">
                   <Icon icon="material-symbols:analytics" class="size-24" />
              </div>
          </div>
      </div>

      <!-- Campaign Breakdown -->
      <div class="flex flex-col gap-6">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white">Campaign Breakdown</h2>
          <div class="grid grid-cols-1 gap-6">
              <div v-for="campaign in campaignStore.items" :key="campaign.id" class="bg-white dark:bg-[#111418] rounded-2xl border border-slate-200 dark:border-[#283039] overflow-hidden">
                  <div class="p-6 border-b border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127] flex justify-between items-center">
                      <div class="flex flex-col">
                          <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ campaign.name }}</h3>
                          <span class="text-xs font-mono text-slate-500">/{{ campaign.slug }}</span>
                      </div>
                      <span :class="campaign.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {{ campaign.status }}
                      </span>
                  </div>
                  <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                       <!-- Responses -->
                       <div class="flex flex-col gap-1">
                           <span class="text-sm text-slate-500 dark:text-[#9dabb9]">Total Responses</span>
                           <span class="text-2xl font-black text-slate-900 dark:text-white">{{ campaign.responses }}</span>
                       </div>
                       <!-- Last Active -->
                       <div class="flex flex-col gap-1">
                           <span class="text-sm text-slate-500 dark:text-[#9dabb9]">Last Activity</span>
                           <span class="text-2xl font-bold text-slate-700 dark:text-slate-300">{{ campaign.lastActive }}</span>
                       </div>
                       <!-- Conversion (Mock) -->
                        <div class="flex flex-col gap-1">
                           <span class="text-sm text-slate-500 dark:text-[#9dabb9]">Conv. Rate (Est)</span>
                           <span class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ (Math.random() * 5 + 1).toFixed(1) }}%</span>
                       </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useCampaignStore } from '../../stores/campaigns'
import { useTestimonialStore } from '../../stores/testimonials'
import { onMounted, computed } from 'vue'

const campaignStore = useCampaignStore()
const testimonialStore = useTestimonialStore()

onMounted(async () => {
    if (campaignStore.items.length === 0) await campaignStore.fetchCampaigns()
    if (testimonialStore.items.length === 0) await testimonialStore.fetchTestimonials()
})

const totalSubmissions = computed(() => testimonialStore.items.length)
// Mocking impressions based on submissions for demo purposes (assuming 2% conversion)
const totalImpressions = computed(() => Math.floor(totalSubmissions.value * 50) + 120)
const totalClicks = computed(() => Math.floor(totalImpressions.value * 0.15))
const ctr = computed(() => ((totalClicks.value / totalImpressions.value) * 100).toFixed(1))

const stats = computed(() => [
  { label: 'Impressions (Est)', value: totalImpressions.value.toLocaleString(), trend: 12 },
  { label: 'Clicks (Est)', value: totalClicks.value.toLocaleString(), trend: 5.4 },
  { label: 'CTR (Est)', value: `${ctr.value}%`, trend: -0.8 },
  { label: 'Submissions', value: totalSubmissions.value.toLocaleString(), trend: 18 },
])
</script>
