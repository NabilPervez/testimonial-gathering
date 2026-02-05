<script setup lang="ts">
import { useTestimonialStore } from '../../stores/testimonials'
import { onMounted, computed, ref } from 'vue'

const store = useTestimonialStore()
const filter = ref('all')

onMounted(() => {
    store.fetchTestimonials()
})

const filteredTestimonials = computed(() => {
    if (filter.value === 'all') return store.items
    return store.items.filter(t => t.status === filter.value)
})

const handleStatusUpdate = async (id: number, status: 'approved' | 'rejected') => {
    await store.updateStatus(id, status)
}
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark">
    <!-- Header -->
    <header class="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 bg-transparent shrink-0 gap-4">
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Testimonials</h1>
        <p class="text-lg text-slate-500 dark:text-[#9dabb9]">Manage and moderate your incoming feedback.</p>
      </div>
      
      <!-- Filter Tabs -->
      <div class="flex p-1 bg-white dark:bg-[#1c242c] rounded-xl border border-slate-200 dark:border-[#283039]">
          <button @click="filter = 'all'" :class="{'bg-slate-100 dark:bg-[#283039] text-slate-900 dark:text-white font-bold': filter === 'all', 'text-slate-500 dark:text-slate-400 font-medium': filter !== 'all'}" class="px-4 py-2 rounded-lg text-sm transition-all">All</button>
          <button @click="filter = 'pending'" :class="{'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 font-bold': filter === 'pending', 'text-slate-500 dark:text-slate-400 font-medium': filter !== 'pending'}" class="px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2">
            Pending
            <span v-if="store.pendingTestimonials.length > 0" class="flex items-center justify-center bg-orange-500 text-white text-[10px] size-5 rounded-full">{{ store.pendingTestimonials.length }}</span>
          </button>
          <button @click="filter = 'approved'" :class="{'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold': filter === 'approved', 'text-slate-500 dark:text-slate-400 font-medium': filter !== 'approved'}" class="px-4 py-2 rounded-lg text-sm transition-all">Approved</button>
          <button @click="filter = 'rejected'" :class="{'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold': filter === 'rejected', 'text-slate-500 dark:text-slate-400 font-medium': filter !== 'rejected'}" class="px-4 py-2 rounded-lg text-sm transition-all">Rejected</button>
      </div>
    </header>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto px-8 pb-12">
      <div v-if="filteredTestimonials.length > 0" class="flex flex-col gap-4">
        <div v-for="t in filteredTestimonials" :key="t.id" class="bg-white dark:bg-[#1c242c] rounded-2xl p-6 border border-slate-200 dark:border-[#283039] hover:border-slate-300 dark:hover:border-slate-600 transition-all group relative">
            
            <div class="flex flex-col md:flex-row gap-6">
                <!-- Avatar / User Info -->
                <div class="flex items-start gap-4 min-w-[200px]">
                    <div class="size-12 rounded-full bg-slate-100 dark:bg-[#283039] flex items-center justify-center text-slate-400 shrink-0">
                        <Icon icon="material-symbols:person" class="text-2xl" />
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-900 dark:text-white">{{ t.name }}</h3>
                        <p class="text-sm text-slate-500 dark:text-[#9dabb9]">{{ t.title }}</p>
                        <div class="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
                            <span v-for="i in 5" :key="i" class="material-symbols-outlined text-[16px] fill-current" :class="i <= t.rating ? 'opacity-100' : 'opacity-30'">star</span>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="flex-1">
                     <div class="mb-2 flex items-center gap-2">
                        <span class="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-[#283039] px-2 py-1 rounded">/c/{{ t.campaignSlug }}</span>
                        <span class="text-xs text-slate-400">{{ t.date }}</span>
                     </div>
                     <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
                        "{{ t.content }}"
                     </p>
                </div>

                <!-- Actions -->
                <div class="flex flex-row md:flex-col items-center gap-2 md:border-l border-slate-100 dark:border-[#283039] md:pl-6 min-w-[140px]">
                    <!-- Status Badge -->
                    <div class="mb-2">
                        <span v-if="t.status === 'approved'" class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                            <Icon icon="material-symbols:check-circle" /> Approved
                        </span>
                        <span v-else-if="t.status === 'rejected'" class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                            <Icon icon="material-symbols:cancel" /> Rejected
                        </span>
                        <span v-else class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                            <Icon icon="material-symbols:hourglass-empty" /> Pending
                        </span>
                    </div>

                    <!-- Action Buttons -->
                     <div class="flex gap-2">
                        <button v-if="t.status !== 'approved'" @click="handleStatusUpdate(t.id, 'approved')" class="p-2 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors" title="Approve">
                            <Icon icon="material-symbols:check" class="text-xl" />
                        </button>
                        <button v-if="t.status !== 'rejected'" @click="handleStatusUpdate(t.id, 'rejected')" class="p-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors" title="Reject">
                            <Icon icon="material-symbols:close" class="text-xl" />
                        </button>
                     </div>
                </div>
            </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center h-[50vh] text-center gap-4">
        <div class="size-20 rounded-full bg-slate-100 dark:bg-[#1c242c] flex items-center justify-center text-slate-300 dark:text-slate-600">
            <Icon icon="material-symbols:inbox" class="size-10" />
        </div>
        <p class="text-slate-500 dark:text-[#9dabb9]">No testimonials found in this view.</p>
      </div>

    </div>
  </div>
</template>
