<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isLogin = ref(true)
const email = ref('')
const error = ref('')

const handleSubmit = () => {
  if (!email.value || !email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }
  
  error.value = ''
  // In a real app, this would handle authentication
  router.push('/dashboard')
}
</script>

<template>
  <div class="font-display antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen flex items-center justify-center p-4">
    <!-- Centered Card Container -->
      <div class="bg-white dark:bg-card-dark rounded-xl shadow-xl border border-slate-200 dark:border-border-dark overflow-hidden p-8 md:p-12 relative">
        <!-- Demo Notification -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-3 mb-8 text-center">
            <p class="text-sm text-blue-700 dark:text-blue-300 font-medium">
                <span class="font-bold">✨ Demo Mode:</span> Enter any fake email (e.g. test@test.com) to sign in instantly.
            </p>
        </div>

        <!-- Logo Section -->
        <div class="flex flex-col items-center gap-6 mb-10">
          <div class="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-[32px]">reviews</span>
          </div>
          <div class="text-center space-y-2">
            <h1 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ isLogin ? 'Welcome back' : 'Create an account' }}</h1>
            <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">{{ isLogin ? 'Sign in to your dashboard' : 'Get started with your free account' }}</p>
          </div>
        </div>
        <!-- Google Sign In -->
        <button class="group w-full flex items-center justify-center gap-3 bg-white dark:bg-white text-slate-700 hover:text-slate-900 border border-slate-300 dark:border-transparent rounded-full h-12 px-6 transition-all duration-200 hover:shadow-md hover:bg-slate-50">
          <img alt="Google Logo" class="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiD0xcVmK0wPA8ZFTNYdi6Yc0AekGt9ZNAkrwJ1ZgH8xhpktIvAhiMkMNJ2FcHt6A_dS9JuNa_HDBC6nsFWm5B1O0tWikMyBEpB1DIoDvfJ0K5VcfIguB0JHshi6PaSlFEztel_K2FwyMtXRacsId3Fi7i2OkeiqX5I9NVrchFsJdzLyIzco5BBTdxA1fjMfcxJ9OWccBjvh3eSOonoD89PIkhkYWQVf1GDxh_Of-mzZlFpPLkg11-1Q8RQ6ihJ5wvX9pg18kkjXE"/>
          <span class="text-sm font-bold tracking-wide">{{ isLogin ? 'Sign in with Google' : 'Sign up with Google' }}</span>
        </button>
        <!-- Divider -->
        <div class="relative flex py-8 items-center">
          <div class="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span class="flex-shrink-0 mx-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">or continue with email</span>
          <div class="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>
        <!-- Magic Link Form -->
        <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <div class="relative group">
              <label class="sr-only" for="email">Email address</label>
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <input v-model="email" class="block w-full rounded-full border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#111921] pl-11 pr-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 sm:text-sm sm:leading-6 transition-all shadow-sm" :class="{'!border-red-500 focus:!ring-red-500/20': error}" id="email" name="email" placeholder="name@company.com" type="email"/>
            </div>
            
            <p v-if="error" class="text-xs text-center text-red-500 font-medium animate-pulse">{{ error }}</p>

            <button class="w-full flex items-center justify-center rounded-full bg-primary hover:bg-blue-600 text-white font-bold h-12 px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 gap-2" type="submit">
              <span>{{ isLogin ? 'Send Magic Link' : 'Create Free Account' }}</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </form>
        <!-- Footer / Terms -->
        <div class="mt-8 text-center space-y-4">
            <p class="text-sm font-medium text-slate-600 dark:text-slate-300">
                {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
                <button @click="isLogin = !isLogin" class="text-primary hover:text-blue-500 font-bold ml-1 hover:underline transition-all">
                    {{ isLogin ? 'Sign up' : 'Log in' }}
                </button>
            </p>
            <p class="text-xs text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs mx-auto">
            By clicking continue, you agree to our 
            <a class="underline decoration-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" href="#">Terms of Service</a>.
            </p>
        </div>
      </div>
      <!-- Abstract Decoration (Optional subtle glow behind) -->
      <div class="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div class="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
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
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>
