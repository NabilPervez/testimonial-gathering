<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const steps = [
    {
        icon: 'material-symbols:edit-document-outline-rounded',
        title: '1. Create a Campaign',
        desc: 'Set up a dedicated page to collect feedback. Customize your questions and branding in seconds.'
    },
    {
        icon: 'material-symbols:share',
        title: '2. Share the Link',
        desc: 'Send the unique link to your customers via email, SMS, or social media. No login required for them.'
    },
    {
        icon: 'material-symbols:code',
        title: '3. Embed & Showcase',
        desc: 'Copy a simple line of code to display your best testimonials on your website. Watch conversions soar.'
    }
]

const features = [
    {
        title: 'Video & Text',
        desc: 'Let your customers choose how they want to express themselves. Capture authentic emotions.',
        icon: 'material-symbols:video-camera-front-outline'
    },
    {
        title: 'No Coding Required',
        desc: 'Our widgets work with any website builder (WordPress, Webflow, Shopify, Framer, etc).',
        icon: 'material-symbols:code-off'
    },
    {
        title: 'Blazing Fast',
        desc: 'Optimized for performance so your website stays fast while showcasing social proof.',
        icon: 'material-symbols:speed'
    }
]
</script>

<template>
  <div class="bg-slate-50 dark:bg-[#0d1117] min-h-screen text-slate-900 dark:text-white font-display overflow-x-hidden">
    
    <!-- Sticky Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#161b22]/80 backdrop-blur-md border-b border-slate-200 dark:border-[#30363d]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
                <span class="font-bold text-xl tracking-tight hidden sm:block">Testimonial.io</span>
            </div>
            <div class="flex items-center gap-4">
                <button @click="router.push('/login')" class="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity">
                    Try Now
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden flex flex-col items-center text-center">
        <!-- Background Orbs -->
        <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>



        <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto animate-fade-in-up" style="animation-delay: 0.1s;">
            Turn customer love into <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">revenue on autopilot.</span>
        </h1>

        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style="animation-delay: 0.2s;">
            The easiest way to collect, manage, and embed video testimonials. Build trust and boost conversions without writing a single line of code.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style="animation-delay: 0.3s;">
            <button @click="router.push('/login')" class="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Get Started for Free
                <Icon icon="material-symbols:arrow-forward" class="text-xl" />
            </button>
        </div>


    </section>

    <!-- How it Works (3 Steps) -->
    <section class="py-24 bg-white dark:bg-[#111418] border-y border-slate-100 dark:border-[#283039]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black mb-4">It's as easy as 1-2-3</h2>
                <p class="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">We've simplified the entire process so you can focus on your business.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div v-for="(step, i) in steps" :key="i" class="flex flex-col items-center text-center group">
                    <div class="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-[#1c2127] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200 dark:border-[#283039]">
                        <Icon :icon="step.icon" class="text-4xl text-primary" />
                    </div>
                    <h3 class="text-xl font-bold mb-3">{{ step.title }}</h3>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">{{ step.desc }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Grid -->
    <section class="py-24 px-4 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
             <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div class="space-y-8">
                     <h2 class="text-4xl md:text-5xl font-black leading-tight">Everything you need to showcase social proof.</h2>
                     <p class="text-lg text-slate-600 dark:text-slate-400">Don't let your best customer stories go unheard. Collect them effortlessly and display them where they matter most.</p>
                     
                     <div class="space-y-6">
                         <div v-for="(feat, i) in features" :key="i" class="flex gap-4">
                             <div class="mt-1 size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                                 <Icon :icon="feat.icon" class="text-primary text-xl" />
                             </div>
                             <div>
                                 <h4 class="font-bold text-lg mb-1">{{ feat.title }}</h4>
                                 <p class="text-slate-500 dark:text-slate-400">{{ feat.desc }}</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div class="relative">
                     <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 transform rotate-6"></div>
                     <div class="bg-white dark:bg-[#161b22] rounded-3xl shadow-2xl border border-slate-200 dark:border-[#30363d] p-8 relative overflow-hidden">
                         <div class="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-[#30363d] pb-6">
                             <div class="size-12 rounded-full bg-slate-200 overflow-hidden">
                                 <img src="https://ui-avatars.com/api/?name=Sarah+Chen&background=random" />
                             </div>
                             <div>
                                 <div class="font-bold">Sarah Chen</div>
                                 <div class="text-sm text-slate-500">Marketing Director, TechFlow</div>
                             </div>
                             <div class="ml-auto text-yellow-400 flex text-lg">
                                 <Icon icon="material-symbols:star" v-for="i in 5" :key="i" class="fill-current" />
                             </div>
                         </div>
                         <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">"We were struggling to collect meaningful feedback. With Testimonial.io, we gathered over 50 video reviews in just a week. It's a game changer."</p>
                         <div class="mt-6 flex justify-end">
                             <Icon icon="logos:twitter" class="size-6 opacity-50" />
                         </div>
                     </div>
                     <!-- Floating card 2 -->
                     <div class="hidden md:block absolute -bottom-12 -right-12 bg-white dark:bg-[#161b22] rounded-2xl shadow-xl border border-slate-200 dark:border-[#30363d] p-6 w-64 animate-bounce-slow">
                          <div class="flex gap-1 text-yellow-400 mb-2">
                                <Icon icon="material-symbols:star" v-for="i in 5" :key="i" class="col-span-1 size-4 fill-current" />
                          </div>
                          <p class="text-sm text-slate-600 dark:text-slate-400">"Conversion rate went up by 30% in just one week!"</p>
                     </div>
                 </div>
             </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 px-4 text-center">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 dark:from-primary/20 dark:to-purple-900/20 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
            <!-- Background effects -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
            
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">Ready to collect your first testimonial?</h2>
            <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">Join 10,000+ businesses who are building trust and growing revenue with us.</p>
            
            <button @click="router.push('/login')" class="relative z-10 px-10 py-5 rounded-full bg-white text-slate-900 font-bold text-xl shadow-xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95">
                Start My Free Trial
            </button>
            <p class="mt-6 text-sm text-slate-400 relative z-10">No credit card required. Cancel anytime.</p>
        </div>
    </section>



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

@keyframes bounceSlow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
.animate-bounce-slow {
    animation: bounceSlow 3s infinite ease-in-out;
}
</style>
