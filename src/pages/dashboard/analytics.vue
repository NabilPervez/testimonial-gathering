<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Analytics</h1>
      <p class="text-slate-500 dark:text-[#9dabb9]">Track the performance of your testimonial campaigns.</p>
    </div>

    <!-- Summary Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="(stat, i) in stats" :key="i" class="bg-white dark:bg-[#111418] p-5 rounded-xl border border-slate-200 dark:border-[#283039]">
        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">{{ stat.label }}</p>
        <p class="text-2xl font-bold text-slate-900 dark:text-white mt-1">{{ stat.value }}</p>
        <p class="text-xs mt-2" :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'">
          {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}% vs last month
        </p>
      </div>
    </div>

    <!-- Chart Placeholder (Views) -->
    <div class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] p-6 flex flex-col gap-6">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-slate-900 dark:text-white">Total Views</h3>
        <select class="bg-slate-50 dark:bg-[#1c2127] border border-slate-200 dark:border-[#3b4754] rounded-lg text-sm px-3 py-1 text-slate-700 dark:text-slate-300">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
        </select>
      </div>
      <!-- Mock Bar Chart -->
      <div class="h-64 flex items-end justify-between gap-2 px-4">
         <div v-for="h in [40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75]" :key="h" 
              class="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm relative group"
              :style="{ height: h + '%' }">
              <div class="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded pointer-events-none whitespace-nowrap">
                {{ h * 10 }} views
              </div>
         </div>
      </div>
      <div class="flex justify-between text-xs text-slate-400 border-t border-slate-200 dark:border-[#283039] pt-2">
        <span>Jan 1</span>
        <span>Jan 8</span>
        <span>Jan 15</span>
        <span>Jan 22</span>
      </div>
    </div>

    <!-- Recent Events List -->
     <div class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] overflow-hidden">
      <div class="p-6 border-b border-slate-200 dark:border-[#283039]">
        <h3 class="font-bold text-slate-900 dark:text-white">Recent Conversions</h3>
      </div>
      <table class="w-full text-sm text-left">
        <thead class="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-[#1c2127]">
          <tr>
            <th class="px-6 py-3">Source</th>
            <th class="px-6 py-3">Event</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Value</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-[#283039]">
          <tr v-for="i in 4" :key="i" class="bg-white dark:bg-[#111418] hover:bg-slate-50 dark:hover:bg-[#1c2127]">
            <td class="px-6 py-4 font-medium text-slate-900 dark:text-white">Landing Page</td>
            <td class="px-6 py-4">Widget Click</td>
            <td class="px-6 py-4 text-slate-500">Just now</td>
            <td class="px-6 py-4 text-emerald-500 font-medium">Verified</td>
          </tr>
        </tbody>
      </table>
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
