<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

const embedCode = computed(() => {
    return `<script src="https://embed.testimonial.io/v1/widget.js"><\/script>
<testimonial-wall campaign="${slug}"><\/testimonial-wall>`
})

const reactCode = computed(() => {
    return `import { TestimonialWall } from '@testimonial/react';

export default () => (
  <TestimonialWall campaign="${slug}" />
);`
})

const vueCode = computed(() => {
    return `<script setup>
import { TestimonialWall } from '@testimonial/vue';
<\/script>

<template>
  <TestimonialWall campaign="${slug}" />
</template>`
})
</script>

<template>
  <div class="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header class="flex items-center gap-4 px-8 py-6 border-b border-slate-200 dark:border-[#283039] bg-white dark:bg-[#111418]">
          <RouterLink :to="`/campaign/${slug}`" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#283039] transition-colors">
              <Icon icon="material-symbols:arrow-back" class="size-5 text-slate-500" />
          </RouterLink>
          <div>
            <h1 class="text-xl font-bold text-slate-900 dark:text-white">Embed Code</h1>
            <p class="text-sm text-slate-500 dark:text-[#9dabb9]">Get the code to display testimonials from this campaign.</p>
          </div>
      </header>
      
      <div class="flex-1 overflow-y-auto p-8">
            <div class="max-w-4xl mx-auto flex flex-col gap-8">
                <!-- Standard Embed -->
                <section class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-slate-200 dark:border-[#283039] bg-slate-50 dark:bg-[#1c2127]">
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Icon icon="material-symbols:code" class="text-primary" />
                        Standard Implementation
                    </h2>
                    </div>
                    <div class="p-6 flex flex-col gap-4">
                    <p class="text-sm text-slate-600 dark:text-slate-400">Place this code where you want the Wall of Love to appear.</p>
                    <div class="relative group">
                        <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto">{{ embedCode }}</pre>
                        <button class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1">
                            <Icon icon="material-symbols:content-copy" class="size-5" />
                        </button>
                    </div>
                    </div>
                </section>

                <!-- React/Vue Options -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] shadow-sm p-6 flex flex-col gap-4">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Icon icon="logos:react" /> React Component
                        </h3>
                        <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-xs font-mono overflow-x-auto flex-1">{{ reactCode }}</pre>
                    </section>

                    <section class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] shadow-sm p-6 flex flex-col gap-4">
                        <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Icon icon="logos:vue" /> Vue Component
                        </h3>
                        <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-xs font-mono overflow-x-auto flex-1">{{ vueCode }}</pre>
                    </section>
                </div>
            </div>
      </div>
  </div>
</template>
