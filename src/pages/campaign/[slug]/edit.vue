<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useCampaignStore } from '../../../stores/campaigns'

const route = useRoute()
const router = useRouter()
const store = useCampaignStore()
const slug = route.params.slug as string
const loading = ref(false)

const form = ref({
    name: '',
    headerTitle: '',
    status: 'Active' as 'Active' | 'Paused'
})

onMounted(async () => {
    if (store.items.length === 0) await store.fetchCampaigns()
    const campaign = store.items.find(c => c.slug === slug)
    if (campaign) {
        form.value = {
            name: campaign.name,
            headerTitle: campaign.headerTitle || '',
            status: campaign.status
        }
    }
})

const save = async () => {
    // In a real app we would call an update method. 
    // For now we will just mock "Updating" basically by re-saving to LS in our service if we had an update method.
    // Since we don't have an updateCampaign method in the mock service yet, I'll just simulate success and go back.
    // Ideally we would add updateCampaign to the store/service.
    loading.value = true
    setTimeout(() => {
        alert("Campaign updated! (Mock)");
        router.back();
    }, 500)
}
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header class="flex items-center gap-4 px-8 py-6 border-b border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418]">
          <RouterLink :to="`/campaign/${slug}`" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#283039] transition-colors">
              <Icon icon="material-symbols:arrow-back" class="size-5 text-slate-500" />
          </RouterLink>
          <h1 class="text-xl font-bold text-slate-900 dark:text-white">Edit Campaign</h1>
      </header>
      
      <div class="p-8 max-w-2xl mx-auto w-full">
          <div class="bg-white dark:bg-[#1c242c] rounded-2xl p-8 border border-slate-200 dark:border-[#283039] shadow-sm flex flex-col gap-6">
              
              <!-- Name -->
              <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Campaign Name</label>
                  <input v-model="form.name" type="text" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#111418] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

               <!-- Title -->
              <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Public Page Title</label>
                  <input v-model="form.headerTitle" type="text" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#111418] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              
              <!-- Status -->
              <div class="flex flex-col gap-2">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Status</label>
                  <select v-model="form.status" class="px-4 py-2 rounded-lg border border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#111418] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option value="Active">Active</option>
                      <option value="Paused">Paused</option>
                  </select>
              </div>

              <div class="flex justify-end pt-4">
                  <button @click="save" class="px-6 py-2 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                      <Icon v-if="loading" icon="svg-spinners:ring-resize" />
                      Save Changes
                  </button>
              </div>

          </div>
      </div>
  </div>
</template>
