<script setup lang="ts">
import { useCampaignStore } from '../../stores/campaigns'
import { useTestimonialStore } from '../../stores/testimonials'
import { onMounted, computed } from 'vue'

const campaignStore = useCampaignStore()
const testimonialStore = useTestimonialStore()

// Fetch data on mount
onMounted(async () => {
    campaignStore.fetchCampaigns()
    await testimonialStore.fetchTestimonials()
})

const campaigns = computed(() => campaignStore.items)

const getRecentTestimonials = (slug: string) => {
    return testimonialStore.items
        .filter(t => t.campaignSlug === slug)
        .slice(0, 3) // Get top 3
}
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark">
    <!-- Header -->
    <header class="w-full flex items-center justify-between px-8 py-6 bg-transparent shrink-0">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Campaigns</h1>
        <p class="text-lg text-slate-500 dark:text-[#9dabb9]">Manage your testimonial collection pages.</p>
      </div>
      <RouterLink to="/campaign/new" class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
        <Icon icon="material-symbols:add" class="size-5" />
        New Campaign
      </RouterLink>
    </header>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto px-8 pb-12">
      <div v-if="campaigns.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <!-- Campaign Card -->
        <div v-for="campaign in campaigns" :key="campaign.id" class="bg-white dark:bg-[#1c242c] rounded-2xl p-6 border border-slate-200 dark:border-[#283039] hover:border-primary/50 transition-all group relative flex flex-col h-full">
            <div class="flex items-start justify-between mb-4">
                <div class="p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon icon="material-symbols:campaign" class="size-6" />
                </div>
                <span :class="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': campaign.status === 'Active', 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400': campaign.status === 'Paused'}" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {{ campaign.status }}
                </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors cursor-pointer">{{ campaign.name }}</h3>
            <p class="text-sm text-slate-500 dark:text-[#9dabb9] font-mono mb-6">/c/{{ campaign.slug }}</p>
            
            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-[#283039]">
                <!-- Stats Row -->
                 <div class="flex items-center justify-between mb-4">
                    <div class="flex flex-col">
                        <span class="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">Responses</span>
                        <span class="text-lg font-bold text-slate-900 dark:text-white">{{ campaign.responses }}</span>
                    </div>
                    <div class="flex flex-col items-end">
                        <span class="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">Last Active</span>
                        <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ campaign.lastActive }}</span>
                    </div>
                 </div>

                 <!-- Recent Activity: Drilldown -->
                 <div class="flex flex-col gap-2">
                    <span class="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">Recent Activity</span>
                    <div class="flex flex-col gap-2">
                         <RouterLink 
                            v-for="t in getRecentTestimonials(campaign.slug)" 
                            :key="t.id"
                            :to="`/campaign/${campaign.slug}/${t.id}`"
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#283039] transition-colors group/item"
                         >
                            <div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                                {{ t.name.charAt(0) }}
                            </div>
                            <div class="flex flex-col overflow-hidden">
                                <span class="text-sm font-bold text-slate-900 dark:text-white truncate group-hover/item:text-primary transition-colors">{{ t.name }}</span>
                                <div class="flex items-center gap-1 text-xs text-slate-500 truncate">
                                    <span>{{ t.title }}</span>
                                    <span class="text-slate-300 dark:text-slate-600">•</span>
                                    <span>{{ t.date }}</span>
                                </div>
                            </div>
                            <Icon icon="material-symbols:chevron-right" class="ml-auto text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                         </RouterLink>
                         <div v-if="getRecentTestimonials(campaign.slug).length === 0" class="text-sm text-slate-400 italic py-2">No recent activity</div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center h-[60vh] text-center gap-6">
        <div class="size-24 rounded-3xl bg-slate-100 dark:bg-[#1c242c] flex items-center justify-center text-slate-300 dark:text-slate-600">
            <Icon icon="material-symbols:campaign" class="size-12" />
        </div>
        <div class="space-y-2">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">No campaigns yet</h3>
            <p class="text-slate-500 dark:text-[#9dabb9] max-w-sm mx-auto">Create your first testimonial collection page to start gathering feedback from your customers.</p>
        </div>
        <RouterLink to="/campaign/new" class="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            Create Campaign
        </RouterLink>
      </div>
    </div>
  </div>
</template>
