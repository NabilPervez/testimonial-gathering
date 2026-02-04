<script setup lang="ts">
import AnimatedTestimonials from '@/components/AnimatedTestimonials.vue';

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
  <div class="bg-background-light dark:bg-background-dark min-h-screen font-display flex flex-col">
    <!-- Preview Header -->
    <header class="bg-slate-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div class="flex items-center gap-4">
        <span class="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Preview Mode</span>
        <p class="text-sm text-slate-300">Viewing as <strong>Public Visitor</strong></p>
      </div>
      <div class="flex items-center gap-3">
        <button class="text-xs font-medium hover:text-white text-slate-400 transition-colors">Desktop</button>
        <button class="text-xs font-medium hover:text-white text-slate-400 transition-colors">Mobile</button>
        <div class="w-px h-4 bg-slate-700 mx-2"></div>
        <button class="flex items-center gap-2 bg-white text-slate-900 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-slate-100 transition-colors" @click="$router.push('/dashboard')">
           <Icon icon="material-symbols:close" class="text-base" />
           Close Preview
        </button>
      </div>
    </header>

    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-20">
       <!-- Reuse the Wall Design Here for Preview -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[500px]">
        <!-- Left: Image Stack -->
        <div class="relative w-full flex justify-center lg:justify-end pr-0 lg:pr-10 group perspective-1000">
          <div class="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square">
            <div class="absolute inset-0 bg-slate-200 dark:bg-gray-800 rounded-[2rem] transform rotate-6 scale-90 translate-x-4 opacity-40"></div>
            <div class="absolute inset-0 bg-slate-300 dark:bg-gray-700 rounded-[2rem] transform -rotate-3 scale-95 translate-x-2 opacity-60"></div>
            <div class="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-20">
              <div class="w-full h-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4oewxfyT3T42LkzyTulH5V_8_tUmGDL7cEfaRzypy7gdP7GwVQaibHiTRTCH0yTVtmMvhvqR-hapeV7sBRYx2Uszy2-j1LjIVxiaytg3lYozgXqT9dAjKfgiHkur3fB_ejIQvMsblWjSrtEM8jCkqvrDx2V4ZPApgRMcQ7FpqlKYTYMW9vzzZeslq1TU0i19Oc23iHrMLzblxVR_Kg7h-jIUIKLFHGIeyLnw-lfPURtiswbqQsU07tbg0ro3DbRVa0TWXMeRCZc');"></div>
            </div>
          </div>
        </div>
        <!-- Right: Content -->
        <div class="flex flex-col justify-center gap-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <div class="flex gap-1 justify-center lg:justify-start">
            <Icon icon="material-symbols:star" class="text-yellow-400 text-2xl" v-for="i in 5" :key="i" />
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
            This tool completely changed how we gather feedback. The automation saved us hours every week.
          </h1>
          <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h3>
              <p class="text-slate-500 dark:text-slate-400 font-medium mt-1">VP of Marketing at TechFlow</p>
          </div>
        </div>
      </section>

      <!-- Animated Testimonials Component -->
      <section class="w-full">
        <AnimatedTestimonials :data="testimonials" />
      </section>
    </main>
  </div>
</template>
