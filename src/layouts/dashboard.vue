<template>
  <div class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen w-full">
    <div class="flex h-full w-full flex-row">
      <!-- Sidebar Navigation -->
      <aside class="hidden lg:flex flex-col w-72 h-full border-r border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418] shrink-0 overflow-y-auto">
        <div class="p-6 flex flex-col gap-8 h-full">
          <!-- Brand -->
          <div class="flex flex-col gap-1">
            <h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Testimonial Collector</h1>
            <p class="text-sm font-medium text-slate-500 dark:text-[#9dabb9]">Admin Workspace</p>
          </div>
          <!-- Navigation Links -->
          <nav class="flex flex-col gap-2 flex-1">
            <RouterLink to="/dashboard" class="flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] transition-colors group">
              <Icon icon="material-symbols:dashboard-outline" class="size-6 text-slate-400 group-hover:text-primary dark:group-hover:text-white transition-colors" />
              <span class="text-sm font-medium">Dashboard</span>
            </RouterLink>
            <RouterLink to="/campaign" active-class="bg-primary/10 text-primary dark:bg-[#283039] dark:text-white" class="flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] transition-colors group">
              <Icon icon="material-symbols:campaign" class="size-6 icon-filled group-[.router-link-active]:text-primary dark:group-[.router-link-active]:text-white" />
              <span class="text-sm font-medium">Campaigns</span>
            </RouterLink>

            <RouterLink to="/displayboard" active-class="bg-primary/10 text-primary dark:bg-[#283039] dark:text-white" class="flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] transition-colors group">
              <Icon icon="material-symbols:preview" class="size-6 text-slate-400 group-hover:text-primary dark:group-hover:text-white transition-colors group-[.router-link-active]:text-primary dark:group-[.router-link-active]:text-white" />
              <span class="text-sm font-medium">Customer Feedback</span>
            </RouterLink>
            <RouterLink to="/dashboard/analytics" class="flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] transition-colors group">
              <Icon icon="material-symbols:analytics-outline" class="size-6 text-slate-400 group-hover:text-primary dark:group-hover:text-white transition-colors" />
              <span class="text-sm font-medium">Analytics</span>
            </RouterLink>
          </nav>
          <!-- Bottom Links -->
          <div class="flex flex-col gap-2">
            <RouterLink to="/dashboard/settings" class="flex items-center gap-3 px-4 py-3 rounded-full text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] transition-colors group">
              <Icon icon="material-symbols:settings-outline" class="size-6 text-slate-400 group-hover:text-primary dark:group-hover:text-white transition-colors" />
              <span class="text-sm font-medium">Settings</span>
            </RouterLink>
            <div class="flex items-center gap-3 px-4 py-3 mt-2 border-t border-slate-200 dark:border-[#283039]">
              <div class="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 overflow-hidden"></div>
              <div class="flex flex-col">
                <p class="text-sm font-bold text-slate-900 dark:text-white">Alex Morgan</p>
                <p class="text-xs text-slate-500 dark:text-[#9dabb9]">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col h-full overflow-hidden relative">
        <RouterView />
      </main>
    </div>

    <!-- Mobile Menu Overlay placeholder -->
    <div class="lg:hidden absolute bottom-4 right-4 z-50">
      <button class="h-14 w-14 rounded-full bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-xl flex items-center justify-center">
              <Icon icon="material-symbols:menu" class="size-6" />
      </button>
    </div>
  </div>
</template>

<style>
.icon-filled {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
