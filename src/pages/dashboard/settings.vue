<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Settings</h1>
      <p class="text-slate-500 dark:text-[#9dabb9]">Manage your account preferences and workspace settings.</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar Tabs -->
      <div class="w-full lg:w-64 flex flex-col gap-1 shrink-0">
        <button v-for="tab in tabs" :key="tab" 
          @click="activeTab = tab"
          class="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
          :class="activeTab === tab ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#1c2127]'">
          {{ tab }}
        </button>
      </div>

      <!-- Content Area -->
      <div class="flex-1 max-w-2xl flex flex-col gap-8">
        
        <!-- Profile Section -->
        <section v-if="activeTab === 'General'" class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] p-6 flex flex-col gap-6">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white">Profile Information</h2>
          
          <div class="flex items-center gap-6">
             <div class="size-20 rounded-full bg-gradient-to-tr from-primary to-purple-500"></div>
             <button class="px-4 py-2 border border-slate-300 dark:border-[#3b4754] rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1c2127]">Change Avatar</button>
          </div>

          <div class="grid gap-4">
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Display Name</span>
              <input type="text" value="Alex Morgan" class="form-input w-full rounded-lg border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] px-4 py-2.5 text-slate-900 dark:text-white" />
            </label>
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
              <input type="email" value="alex@example.com" class="form-input w-full rounded-lg border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] px-4 py-2.5 text-slate-900 dark:text-white" />
            </label>
          </div>
          
          <div class="pt-4 border-t border-slate-200 dark:border-[#283039]">
             <button class="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">Save Changes</button>
          </div>
        </section>

        <!-- Notifications -->
        <section v-if="activeTab === 'Notifications'" class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] p-6 flex flex-col gap-6">
           <h2 class="text-lg font-bold text-slate-900 dark:text-white">Notification Preferences</h2>
           <div class="space-y-4">
             <label class="flex items-center justify-between">
               <span class="text-slate-700 dark:text-slate-300 text-sm font-medium">Email on new testimonial</span>
               <input type="checkbox" checked class="form-checkbox text-primary rounded border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-[#1c2127] size-5" />
             </label>
             <label class="flex items-center justify-between">
               <span class="text-slate-700 dark:text-slate-300 text-sm font-medium">Weekly digest</span>
               <input type="checkbox" class="form-checkbox text-primary rounded border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-[#1c2127] size-5" />
             </label>
           </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = ['General', 'Notifications', 'Team', 'Billing', 'API']
const activeTab = ref('General')
</script>
