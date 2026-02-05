<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white font-display overflow-hidden flex flex-col items-center justify-center relative">
    
    <!-- Hero Content -->
    <div class="z-10 text-center flex flex-col items-center gap-8 max-w-4xl px-4 animate-fade-in-up">
        <div class="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 shadow-lg">
             <div class="flex pb-1">
                <Icon icon="material-symbols:star" class="text-yellow-400 text-lg" v-for="i in 5" :key="i" />
             </div>
             <span class="text-sm font-medium text-slate-600 dark:text-slate-300">Loved by 10,000+ creators</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Collect testimonials <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">on autopilot.</span>
        </h1>

        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            The easiest way to gather video and text testimonials from your customers. Embed a beautiful Wall of Love in minutes.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button @click="router.push('/login')" class="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Get Started for Free
                <Icon icon="material-symbols:arrow-forward" class="text-xl" />
            </button>
            <button @click="router.push('/displayboard')" class="px-8 py-4 rounded-full bg-white dark:bg-[#1c242c] text-slate-900 dark:text-white font-bold text-lg border border-slate-200 dark:border-[#283039] hover:border-primary/50 transition-all hover:bg-slate-50 dark:hover:bg-[#283039] flex items-center justify-center gap-2">
                <Icon icon="material-symbols:play-circle" class="text-xl text-primary" />
                View Demo
            </button>
        </div>
    </div>

    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 z-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:24px_24px]"></div>

  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}
</style>
