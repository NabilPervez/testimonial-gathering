<script setup lang="ts">
import { ref, onMounted } from 'vue'

const appName = ref('Testimonial Collector')
const loading = ref(false)

onMounted(() => {
    const savedName = localStorage.getItem('site_name')
    if (savedName) {
        appName.value = savedName
    }
})

const save = () => {
    loading.value = true
    localStorage.setItem('site_name', appName.value)
    
    // Dispatch a custom event so other components can react immediately (optional, but good for UX)
    window.dispatchEvent(new Event('storage')) 
    // Or just reload to be lazy/safe? No, let's keep it SPA.
    // Actually, other components won't react to localStorage changes unless we use a store/reactive source or window event listener.
    // I'll stick to a simple page reload for now to "update the site" fully or I can use a global state if I had one for settings.
    // Let's rely on the components reading on mount for now and maybe a quick refresh.
    
    setTimeout(() => {
        loading.value = false
        alert('Settings Saved!')
        window.location.reload() // Simple way to propagate branding changes everywhere
    }, 500)
}
</script>

<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
      <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Settings</h1>
          <p class="text-slate-500 dark:text-[#9dabb9]">Manage your workspace preferences.</p>
      </div>

      <div class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] p-8 max-w-2xl">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">General Settings</h2>
          
          <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Application Name</label>
                  <p class="text-xs text-slate-500 mb-2">This name appears in the dashboard sidebar and on your public display boards.</p>
                  <input v-model="appName" type="text" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

              <div class="pt-4">
                  <button @click="save" class="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                      <Icon v-if="loading" icon="svg-spinners:ring-resize" />
                      Save Changes
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>
