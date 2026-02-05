<script setup lang="ts">
import { useTestimonialStore } from '../stores/testimonials'
import AnimatedTestimonials from '../components/AnimatedTestimonials.vue'
import { onMounted, computed } from 'vue'

const store = useTestimonialStore()

onMounted(() => {
    store.fetchTestimonials()
})

const testimonials = computed(() => store.approvedTestimonials)

const formattedTestimonials = computed(() => {
    return store.approvedTestimonials.map(t => ({
        quote: t.content,
        name: t.name,
        designation: t.title,
        image: t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random&color=000`
    }))
})
</script>

<template>
<div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
<!-- Navbar / Header -->
<header class="w-full border-b border-gray-200 dark:border-[#283039] bg-white/50 dark:bg-[#111418]/80 backdrop-blur-md sticky top-0 z-50">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<div class="flex items-center gap-3">
<div class="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Customer Feedback</h2>
</div>
<div class="flex items-center gap-4">
<button class="hidden sm:flex items-center justify-center px-5 h-9 rounded-full bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20">
                        Get this for your site
                    </button>
<!-- Mobile Menu Icon (Visual only) -->
<button class="sm:hidden text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</header>
<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-20">
<!-- Hero Section: Dynamic Carousel -->
<section class="min-h-[500px] flex items-center justify-center">
    <AnimatedTestimonials :data="formattedTestimonials" :autoplay="true" />
</section>
<!-- Stats Section -->
<section class="w-full bg-white dark:bg-card-dark rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 dark:border-white/5">
<div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
<!-- Big Score -->
<div class="flex flex-col items-center justify-center min-w-[140px]">
<span class="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">5.0</span>
<div class="flex gap-1 mt-2 text-yellow-400">
<span class="material-symbols-outlined text-xl fill-current">star</span>
<span class="material-symbols-outlined text-xl fill-current">star</span>
<span class="material-symbols-outlined text-xl fill-current">star</span>
<span class="material-symbols-outlined text-xl fill-current">star</span>
<span class="material-symbols-outlined text-xl fill-current">star</span>
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
<span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-[85%]"></div>
</div>
<span class="w-10 text-right text-slate-500 dark:text-slate-400">85%</span>
</div>
<!-- 4 Star -->
<div class="flex items-center gap-3 text-sm">
<span class="font-bold w-3 text-slate-700 dark:text-slate-300">4</span>
<span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-[15%]"></div>
</div>
<span class="w-10 text-right text-slate-500 dark:text-slate-400">15%</span>
</div>
<!-- 3 Star -->
<div class="flex items-center gap-3 text-sm opacity-50">
<span class="font-bold w-3 text-slate-700 dark:text-slate-300">3</span>
<span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-0"></div>
</div>
<span class="w-10 text-right text-slate-500 dark:text-slate-400">0%</span>
</div>
<!-- 2 Star -->
<div class="flex items-center gap-3 text-sm opacity-50">
<span class="font-bold w-3 text-slate-700 dark:text-slate-300">2</span>
<span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-0"></div>
</div>
<span class="w-10 text-right text-slate-500 dark:text-slate-400">0%</span>
</div>
<!-- 1 Star -->
<div class="flex items-center gap-3 text-sm opacity-50">
<span class="font-bold w-3 text-slate-700 dark:text-slate-300">1</span>
<span class="material-symbols-outlined text-[16px] text-slate-400">star</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-0"></div>
</div>
<span class="w-10 text-right text-slate-500 dark:text-slate-400">0%</span>
</div>
</div>
</div>
</section>
<!-- More Love Grid -->
<section class="flex flex-col gap-6 pb-12">
<h3 class="text-2xl font-bold text-slate-900 dark:text-white px-2">More love from our community</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Dynamic Card -->
<div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-colors group">
    <!-- Optional Image placeholder if we had images -->
    <div v-if="testimonial.type === 'video'" class="aspect-video w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
        <Icon icon="material-symbols:play-circle" class="text-4xl text-white/80" />
    </div>
    <div class="p-6 flex flex-col gap-4">
        <div class="flex gap-1 text-primary text-sm">
            <span v-for="i in 5" :key="i" class="material-symbols-outlined text-[18px] fill-current" :class="i <= testimonial.rating ? 'opacity-100' : 'opacity-30'">star</span>
        </div>
        <p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            "{{ testimonial.content }}"
        </p>
        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-gray-800 mt-auto">
            <div>
                <p class="text-slate-900 dark:text-white font-semibold text-sm">{{ testimonial.name }}</p>
                <p class="text-slate-500 dark:text-slate-400 text-xs">{{ testimonial.title }}</p>
            </div>
            <button class="text-primary hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-primary/10">
                <span class="material-symbols-outlined">arrow_outward</span>
            </button>
        </div>
    </div>
</div>
</div>
</section>
</main>
</div>
</template>

<style scoped>
/* Custom scrollbar hiding */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.material-symbols-outlined {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
