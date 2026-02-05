<script setup lang="ts">
const campaigns = [
  {
    id: 1,
    name: "Summer Launch Feedback",
    slug: "summer-launch",
    status: "Active",
    responses: 24,
    lastActive: "2h ago"
  },
  {
    id: 2,
    name: "Website Redesign",
    slug: "website-redesign",
    status: "Paused",
    responses: 12,
    lastActive: "1d ago"
  },
  {
    id: 3,
    name: "Customer Satisfaction Q1",
    slug: "csat-q1",
    status: "Active",
    responses: 156,
    lastActive: "5m ago"
  }
]
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
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <!-- Campaign Card -->
        <div v-for="campaign in campaigns" :key="campaign.id" class="bg-white dark:bg-[#1c242c] rounded-2xl p-6 border border-slate-200 dark:border-[#283039] hover:border-primary/50 transition-all group cursor-pointer relative">
            <div class="flex items-start justify-between mb-4">
                <div class="p-3 rounded-xl bg-primary/10 text-primary">
                    <Icon icon="material-symbols:campaign" class="size-6" />
                </div>
                <span :class="{'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400': campaign.status === 'Active', 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400': campaign.status === 'Paused'}" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {{ campaign.status }}
                </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{{ campaign.name }}</h3>
            <p class="text-sm text-slate-500 dark:text-[#9dabb9] font-mono mb-6">/c/{{ campaign.slug }}</p>
            
            <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-[#283039]">
                <div class="flex flex-col">
                    <span class="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">Responses</span>
                    <span class="text-lg font-bold text-slate-900 dark:text-white">{{ campaign.responses }}</span>
                </div>
                <div class="flex flex-col items-end">
                    <span class="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase">Last Activity</span>
                    <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ campaign.lastActive }}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
