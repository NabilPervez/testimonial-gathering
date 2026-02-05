<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted, computed } from 'vue'
import { useTestimonialStore } from '../../stores/testimonials'
import { useCampaignStore } from '../../stores/campaigns'

const route = useRoute()
const slug = route.params.slug as string

const testimonialStore = useTestimonialStore()
const campaignStore = useCampaignStore()

const isSubmitted = ref(false)
const isSubmitting = ref(false)

// Fetch campaign details to show correct title/logo
onMounted(async () => {
    // Ideally we have a specific fetchCampaignBySlug action, or we fetch all.
    // Since we are mocking, we can just fetch all for now and find it.
    if (campaignStore.items.length === 0) {
        await campaignStore.fetchCampaigns()
    }
})

const campaign = computed(() => campaignStore.items.find(c => c.slug === slug))

const form = reactive({
    name: '',
    title: '',
    rating: 5,
    type: 'text' as 'text' | 'video',
    content: ''
})

const handleSubmit = async () => {
    if (!form.content) return

    isSubmitting.value = true
    try {
        await testimonialStore.submitTestimonial({
            campaignSlug: slug,
            name: form.name,
            title: form.title,
            rating: form.rating,
            type: form.type,
            content: form.content
        })
        isSubmitted.value = true
    } catch(e) {
        alert('Something went wrong. Please try again.')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col items-center justify-center p-4 sm:p-6 text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
    <!-- Main Container / Card -->
    <div class="relative w-full max-w-[600px] bg-white dark:bg-[#1A222C] rounded-xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-[#2A3441] overflow-hidden z-10">
      <!-- Decorative subtle gradient top border -->
      <div class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-primary"></div>
      
      <!-- Success View -->
      <div v-if="isSubmitted" class="flex flex-col items-center justify-center p-10 sm:p-16 gap-6 text-center animate-fade-in-up">
        <div class="size-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 mb-2">
            <Icon icon="material-symbols:check-circle" class="size-12" />
        </div>
        <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Thank You!</h2>
            <p class="text-slate-500 dark:text-slate-400">
                Your feedback has been received. We truly appreciate you taking the time to share your experience.
            </p>
        </div>
        <button @click="isSubmitted = false" class="mt-4 px-8 py-3 rounded-full bg-slate-100 dark:bg-[#2A3441] text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-[#354151] transition-colors">
            Submit Another
        </button>
      </div>

      <!-- Form View -->
      <div v-else class="flex flex-col p-6 sm:p-10 gap-8 animate-fade-in-up">
        <!-- Header Section -->
        <header class="flex flex-col items-center gap-4 text-center">
          <!-- Brand Logo -->
          <div class="flex items-center gap-2 text-primary opacity-90 hover:opacity-100 transition-opacity">
            <Icon icon="material-symbols:verified-user" class="!text-[32px] size-8" />
            <span class="text-xl font-bold tracking-tight text-slate-800 dark:text-white">{{ campaign?.name || 'Testimonial.io' }}</span>
          </div>
          <div class="space-y-1">
            <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {{ campaign?.headerTitle || 'How was your experience?' }}
            </h1>
            <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Your feedback helps us build a better product for everyone.
            </p>
          </div>
        </header>

        <!-- Form Body -->
        <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
          <!-- Avatar & Identity Section -->
          <div class="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <!-- Avatar Upload -->
            <div class="flex flex-col items-center gap-2 mx-auto sm:mx-0 shrink-0">
              <label class="group relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-dashed border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#202934] transition-all hover:border-primary hover:bg-slate-100 dark:hover:bg-[#252f3b]">
                <div class="flex flex-col items-center justify-center pb-1 pt-2">
                  <Icon icon="material-symbols:add-a-photo" class="text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors size-6" />
                </div>
                <input type="file" accept="image/*" class="hidden" />
                <div class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </label>
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Upload Photo</span>
            </div>
            <!-- Name Inputs -->
            <div class="flex flex-col gap-3 flex-1 w-full">
              <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">Full Name</label>
                <input required v-model="form.name" type="text" class="w-full rounded-lg border border-slate-200 dark:border-[#3b4754] bg-slate-50 dark:bg-[#12181f] px-4 py-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="e.g. Sarah Connor" />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 pl-1">Job Title / Company</label>
                <input v-model="form.title" type="text" class="w-full rounded-lg border border-slate-200 dark:border-[#3b4754] bg-slate-50 dark:bg-[#12181f] px-4 py-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="e.g. CTO at Skynet" />
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="h-px w-full bg-slate-200 dark:bg-[#2A3441]"></div>

          <!-- Review Content Section -->
          <div class="flex flex-col gap-4">
            <!-- Type Toggle -->
            <div class="flex justify-center w-full">
              <div class="bg-slate-100 dark:bg-[#12181f] p-1 rounded-full inline-flex border border-slate-200 dark:border-[#2A3441]">
                <label class="cursor-pointer">
                  <input type="radio" name="feedback_type" value="text" class="peer sr-only" v-model="form.type" />
                  <span class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-[#2A3441] peer-checked:text-primary peer-checked:shadow-sm transition-all select-none">
                    <Icon icon="material-symbols:edit" class="text-[18px]" />
                    Write Review
                  </span>
                </label>
                <label class="cursor-pointer">
                  <input type="radio" name="feedback_type" value="video" class="peer sr-only" v-model="form.type" />
                  <span class="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-[#2A3441] peer-checked:text-primary peer-checked:shadow-sm transition-all select-none">
                    <Icon icon="material-symbols:videocam" class="text-[18px]" />
                    Record Video
                  </span>
                </label>
              </div>
            </div>

            <!-- Rating Stars -->
            <div class="flex flex-col items-center gap-2 pt-2">
              <p class="text-sm font-medium text-slate-500 dark:text-slate-400">Rate your experience</p>
              <div class="star-rating flex gap-1 cursor-pointer">
                <!-- Using Material Symbols with custom hover CSS defined in head -->
                <button type="button" v-for="i in 5" :key="i" @click="form.rating = i" class="focus:outline-none">
                     <span class="material-symbols-outlined text-3xl star transition-transform hover:scale-110" 
                        :class="i <= form.rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'"
                        :style="i <= form.rating ? 'font-variation-settings: \'FILL\' 1;' : 'font-variation-settings: \'FILL\' 0;'">star</span>
                </button>
              </div>
            </div>

            <!-- Text Area Input -->
            <div v-if="form.type === 'text'" class="relative group mt-2">
              <textarea v-model="form.content" required class="w-full min-h-[140px] resize-none rounded-xl border border-slate-200 dark:border-[#3b4754] bg-slate-50 dark:bg-[#12181f] p-4 text-base text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all" placeholder="What did you like best? How did it help you? Be honest, we love feedback!"></textarea>
              <div class="absolute bottom-3 right-3 pointer-events-none">
                <Icon icon="material-symbols:format-quote" class="text-slate-300 dark:text-slate-600 size-6" />
              </div>
            </div>
            
             <!-- Video Placeholder -->
            <div v-else class="relative group mt-2 min-h-[140px] flex items-center justify-center bg-slate-50 dark:bg-[#12181f] rounded-xl border border-dashed border-slate-300 dark:border-[#3b4754]">
                 <div class="text-center p-6">
                     <Icon icon="material-symbols:videocam-off" class="mx-auto size-10 text-slate-300 dark:text-slate-600 mb-2" />
                     <p class="text-sm text-slate-500">Video recording is not available in mock mode.</p>
                 </div>
            </div>

          </div>

          <!-- Submit Action -->
          <div class="flex flex-col gap-4 mt-2">
            <button class="group relative flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/30 active:scale-[0.98]">
              <span>Send Testimonial</span>
              <Icon icon="material-symbols:send" class="text-[20px] transition-transform group-hover:translate-x-1" />
            </button>
            <div class="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
              <Icon icon="material-symbols:lock" class="text-[14px]" />
              <span>Your information is kept private & secure.</span>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-600/5 blur-[80px]"></div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
    width: 8px;
}
textarea::-webkit-scrollbar-track {
    background: transparent;
}
textarea::-webkit-scrollbar-thumb {
    background-color: #3b4754;
    border-radius: 20px;
}

/* Star rating hover effect simulation */
.star-rating:hover .star {
    font-variation-settings: 'FILL' 1;
    color: #fbbf24; 
}
.star-rating .star:hover ~ .star {
    font-variation-settings: 'FILL' 0;
    color: #4b5563;
}
.star-rating:hover .star:hover {
    font-variation-settings: 'FILL' 1;
    color: #fbbf24;
}
</style>
