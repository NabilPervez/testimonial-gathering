<script setup lang="ts">
// No script needed as this is a static preview page as per request
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
<h2 class="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Wall of Love</h2>
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
<!-- Hero Section: Featured Testimonial (Split Layout) -->
<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[500px]">
<!-- Left: Image Stack -->
<div class="relative w-full flex justify-center lg:justify-end pr-0 lg:pr-10 group perspective-1000">
<div class="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square">
<!-- Back Card (Decorative) -->
<div class="absolute inset-0 bg-slate-200 dark:bg-gray-800 rounded-[2rem] transform rotate-6 scale-90 translate-x-4 opacity-40 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:translate-x-6 z-0" data-alt="Abstract stacked card background pattern"></div>
<!-- Middle Card (Decorative) -->
<div class="absolute inset-0 bg-slate-300 dark:bg-gray-700 rounded-[2rem] transform -rotate-3 scale-95 translate-x-2 opacity-60 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:-translate-x-2 z-10" data-alt="Abstract stacked card background pattern layer 2"></div>
<!-- Front Card (Main Image) -->
<div class="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-20 transform transition-transform duration-500 hover:scale-[1.02]">
<div class="w-full h-full bg-cover bg-center" data-alt="Professional headshot of Sarah Jenkins smiling in an office environment" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4oewxfyT3T42LkzyTulH5V_8_tUmGDL7cEfaRzypy7gdP7GwVQaibHiTRTCH0yTVtmMvhvqR-hapeV7sBRYx2Uszy2-j1LjIVxiaytg3lYozgXqT9dAjKfgiHkur3fB_ejIQvMsblWjSrtEM8jCkqvrDx2V4ZPApgRMcQ7FpqlKYTYMW9vzzZeslq1TU0i19Oc23iHrMLzblxVR_Kg7h-jIUIKLFHGIeyLnw-lfPURtiswbqQsU07tbg0ro3DbRVa0TWXMeRCZc');">
<!-- Overlay gradient for text readability if needed inside card -->
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>
</div>
<!-- Right: Content -->
<div class="flex flex-col justify-center gap-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
<!-- Rating -->
<div class="flex gap-1 justify-center lg:justify-start">
<span class="material-symbols-outlined text-yellow-400 text-2xl fill-current">star</span>
<span class="material-symbols-outlined text-yellow-400 text-2xl fill-current">star</span>
<span class="material-symbols-outlined text-yellow-400 text-2xl fill-current">star</span>
<span class="material-symbols-outlined text-yellow-400 text-2xl fill-current">star</span>
<span class="material-symbols-outlined text-yellow-400 text-2xl fill-current">star</span>
</div>
<!-- Quote -->
<div class="relative">
<span class="absolute -top-6 -left-8 text-6xl text-slate-200 dark:text-gray-800 font-serif opacity-50 hidden lg:block">“</span>
<h1 class="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                        This tool completely changed how we gather feedback. The automation saved us hours every week.
                    </h1>
</div>
<!-- Author & Navigation -->
<div class="flex flex-col gap-6">
<div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h3>
<p class="text-slate-500 dark:text-slate-400 font-medium mt-1">VP of Marketing at TechFlow</p>
</div>
<div class="flex items-center justify-center lg:justify-start gap-4 mt-2">
<button aria-label="Previous testimonial" class="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-gray-700 hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-900 dark:text-white transition-all duration-200 group">
<span class="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
</button>
<button aria-label="Next testimonial" class="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200 group">
<span class="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
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
<!-- Card 1 -->
<div class="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-colors group">
<div class="aspect-video w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Portrait of Michael Chen in a modern office suit" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVoMf3nyraS0rqW_jbZDsn-djo4jhk9rk4o21ED98Mvrm07f4j8HQXvfnydyWppUaa9XZJOpP1_fRQUF6DSIgamcww5SAapHjkeFU81N9JvNea-8cOo1aDvKpFyfYpAQNndPSLJvmd7fkJnWaERNF1KMIf6C50eQSOTuEdj-2Nbx_yn33pKA1Rhnn0hBJn6RKO5qHOYdJTWBjkVKKEcf4M-AHUtLCw3OWj1KXLc7uClKwo-cgrqdEQ7dhPai0a5oit1xG4JQfbB1E');"></div>
<div class="p-6 flex flex-col gap-4">
<div class="flex gap-1 text-primary text-sm">
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                            "Implementation was seamless. The API documentation is fantastic and the support team was super responsive when we had edge-case questions."
                        </p>
<div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-gray-800 mt-auto">
<div>
<p class="text-slate-900 dark:text-white font-semibold text-sm">Michael Chen</p>
<p class="text-slate-500 dark:text-slate-400 text-xs">Product Lead @ Innovate</p>
</div>
<button class="text-primary hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-primary/10">
<span class="material-symbols-outlined">arrow_outward</span>
</button>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-colors group">
<div class="aspect-video w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Jessica Alba looking confident in a business setting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtdT5lzGL-AbgoYkp9NDYG5Z4Ydn378sOcNGgVhqdXoX_iGIsZ5NTe0Nniv-REf5fi4Nk9Oflu-0aZ8KsyameFrFGjvu7TKV_9jTqDfMFZsWJRzGEaUZSgp3YYv-7VySVULGL_KPhY9QWu7l3YhyaQ5oYEtGpaH1qBb0UJUMB7o4nwb0rfsMFHDAlcc5bNq5jREc3RneaEBhE-__2cpKgg_UgxO-Z-XJfz5YX9JWUGzM7RUQb5QyPBarkFryRmyxeR-XL37ZI9eis');"></div>
<div class="p-6 flex flex-col gap-4">
<div class="flex gap-1 text-primary text-sm">
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                            "As a founder, I wear many hats. This tool took the burden of social proof off my plate completely. Highly recommended for any startup."
                        </p>
<div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-gray-800 mt-auto">
<div>
<p class="text-slate-900 dark:text-white font-semibold text-sm">Jessica Alba</p>
<p class="text-slate-500 dark:text-slate-400 text-xs">Founder @ StartUp</p>
</div>
<button class="text-primary hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-primary/10">
<span class="material-symbols-outlined">arrow_outward</span>
</button>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="bg-white dark:bg-card-dark rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-colors group sm:hidden lg:block">
<div class="aspect-video w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="David Miller smiling casually" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQpEcO6YJ_IaoSKqB1_S82j7rNcdkA_a2Tk_-8jnVnu4dpk_LMIR9PGFEveKpElVQWVtcfkSbQXCHgs40n618RXKv1_qPTAuT-0x0wLyVlgyOkJJSoP9Wikzc_wdc25TpITReboZ-G4WPapvOJcyddvTNr6ESTIBHX3QD1U6L0bOex0uZMRGyKqum8FhvOgoh50MvddxWFFLTMTyxAjUkAGX3I2F7XXbu1-JmD8LcBKMSH6Goxrry74bd65D2Z211igSEE7ZkezDc');"></div>
<div class="p-6 flex flex-col gap-4">
<div class="flex gap-1 text-primary text-sm">
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star</span>
<span class="material-symbols-outlined text-[18px] fill-current">star_half</span>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
                            "The ROI was evident within the first month. Our conversion rate on the pricing page went up by 15% after embedding the wall of love."
                        </p>
<div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-gray-800 mt-auto">
<div>
<p class="text-slate-900 dark:text-white font-semibold text-sm">David Miller</p>
<p class="text-slate-500 dark:text-slate-400 text-xs">CRO @ EnterpriseInc</p>
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
