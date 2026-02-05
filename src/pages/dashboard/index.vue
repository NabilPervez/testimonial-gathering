<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
    <!-- Header -->
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
      <p class="text-slate-500 dark:text-[#9dabb9]">Welcome back, Alex. Here's what's happening today.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Stat Card 1 -->
      <RouterLink to="/displayboard" class="bg-white dark:bg-[#111418] rounded-xl p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors group">
        <div class="flex items-center gap-3 text-slate-500 dark:text-[#9dabb9] group-hover:text-primary transition-colors">
          <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary">
            <Icon icon="material-symbols:reviews" class="size-5" />
          </div>
          <span class="text-sm font-medium">Total Testimonials</span>
        </div>
        <div>
          <span class="text-3xl font-bold text-slate-900 dark:text-white">1,248</span>
          <span class="text-xs font-medium text-emerald-500 ml-2">+12% this month</span>
        </div>
      </RouterLink>

      <!-- Stat Card 2 -->
      <RouterLink to="/campaign" class="bg-white dark:bg-[#111418] rounded-xl p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors group">
        <div class="flex items-center gap-3 text-slate-500 dark:text-[#9dabb9] group-hover:text-primary transition-colors">
          <div class="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Icon icon="material-symbols:campaign" class="size-5" />
          </div>
          <span class="text-sm font-medium">Active Campaigns</span>
        </div>
        <div>
          <span class="text-3xl font-bold text-slate-900 dark:text-white">8</span>
          <span class="text-xs font-medium text-slate-400 ml-2">3 pending launch</span>
        </div>
      </RouterLink>

      <!-- Stat Card 3 -->
      <RouterLink to="/dashboard/analytics" class="bg-white dark:bg-[#111418] rounded-xl p-6 border border-slate-200 dark:border-[#283039] shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors group">
        <div class="flex items-center gap-3 text-slate-500 dark:text-[#9dabb9] group-hover:text-primary transition-colors">
          <div class="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
            <Icon icon="material-symbols:visibility" class="size-5" />
          </div>
          <span class="text-sm font-medium">Wall Views</span>
        </div>
        <div>
          <span class="text-3xl font-bold text-slate-900 dark:text-white">45.2k</span>
          <span class="text-xs font-medium text-emerald-500 ml-2">+5% this week</span>
        </div>
      </RouterLink>
    </div>

    <!-- Quick Actions -->
    <div class="flex flex-wrap gap-4">
        <RouterLink to="/campaign/new" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-[#1c2127] hover:bg-slate-200 dark:hover:bg-[#283039] text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors">
            <Icon icon="material-symbols:add-circle" class="size-5 text-primary" />
            Create Campaign
        </RouterLink>
        <RouterLink to="/displayboard" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-[#1c2127] hover:bg-slate-200 dark:hover:bg-[#283039] text-sm font-bold text-slate-700 dark:text-slate-300 transition-colors">
            <Icon icon="material-symbols:preview" class="size-5 text-purple-500" />
            View Wall
        </RouterLink>
    </div>

    <!-- Recent Activity -->
    <div class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] shadow-sm overflow-hidden">
      <div class="p-6 border-b border-slate-200 dark:border-[#283039] flex items-center justify-between">
        <h2 class="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
        <button class="text-sm font-medium text-primary hover:text-blue-600 transition-colors">View All</button>
      </div>
      <div class="divide-y divide-slate-200 dark:divide-[#283039]">
        <div v-for="i in 5" :key="i" class="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-[#1c2127] transition-colors">
          <div class="size-10 rounded-full bg-slate-200 dark:bg-[#283039] flex items-center justify-center shrink-0">
             <Icon icon="material-symbols:person" class="text-slate-400" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-900 dark:text-white truncate">New testimonial from <span class="font-bold">Sarah Connor</span></p>
            <p class="text-xs text-slate-500 dark:text-[#9dabb9]">Summer Launch Feedback • 2 hours ago</p>
          </div>
          <div class="flex gap-1 text-yellow-400">
             <Icon icon="material-symbols:star" class="size-4" v-for="j in 5" :key="j" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
