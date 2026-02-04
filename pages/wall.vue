<script setup lang="ts">
import AnimatedTestimonials from '~/components/AnimatedTestimonials.vue';

definePageMeta({
  layout: false
})

const testimonials = [
  {
    quote: "This tool completely changed how we gather feedback. The automation saved us hours every week.",
    name: "Sarah Jenkins",
    designation: "VP of Marketing at TechFlow",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "Implementation was seamless. The API documentation is fantastic and the support team was super responsive.",
    name: "Michael Chen",
    designation: "Product Lead @ Innovate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "As a founder, I wear many hats. This tool took the burden of social proof off my plate completely.",
    name: "Jessica Alba",
    designation: "Founder @ StartUp",
    image: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
    <!-- Navbar / Header -->
    <header class="w-full border-b border-gray-200 dark:border-[#283039] bg-white/50 dark:bg-[#111418]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center gap-3">
            <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
              <Icon name="material-symbols:favorite" class="size-5" />
            </div>
            <h2 class="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Wall of Love</h2>
          </div>
          <div class="flex items-center gap-4">
            <button class="hidden sm:flex items-center justify-center px-5 h-9 rounded-full bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20">
              Get this for your site
            </button>
            <!-- Mobile Menu Icon (Visual only) -->
            <button class="sm:hidden text-slate-500 dark:text-slate-400">
              <Icon name="material-symbols:menu" class="size-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-20">
      
      <!-- Animated Testimonials Component -->
      <section class="w-full">
        <ClientOnly>
          <AnimatedTestimonials :data="testimonials" />
        </ClientOnly>
      </section>

      <!-- Stats Section -->
      <section class="w-full bg-white dark:bg-card-dark rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-white/5">
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <!-- Big Score -->
          <div class="flex flex-col items-center justify-center min-w-[140px]">
            <span class="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">5.0</span>
            <div class="flex gap-1 mt-2 text-yellow-400">
              <Icon name="material-symbols:star" class="text-xl" v-for="i in 5" :key="i" />
            </div>
            <span class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">Based on 128 reviews</span>
          </div>
          <!-- Divider -->
          <div class="hidden md:block w-px h-32 bg-slate-200 dark:bg-gray-700"></div>
          <!-- Progress Bars -->
          <div class="flex-1 w-full grid gap-3 max-w-lg">
            <!-- 5 Star -->
            <div class="flex items-center gap-3 text-sm">
              <span class="font-bold w-3 text-slate-700 dark:text-slate-300">5</span>
              <Icon name="material-symbols:star" class="text-[16px] text-slate-400" />
              <div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full w-[85%]"></div>
              </div>
              <span class="w-10 text-right text-slate-500 dark:text-slate-400">85%</span>
            </div>
            <!-- 4 Star -->
            <div class="flex items-center gap-3 text-sm">
              <span class="font-bold w-3 text-slate-700 dark:text-slate-300">4</span>
              <Icon name="material-symbols:star" class="text-[16px] text-slate-400" />
              <div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full w-[15%]"></div>
              </div>
              <span class="w-10 text-right text-slate-500 dark:text-slate-400">15%</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
