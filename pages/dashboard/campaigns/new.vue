<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <!-- Top Navigation / Header -->
  <header class="w-full flex items-center justify-between px-8 py-6 bg-transparent shrink-0 z-10">
    <div class="flex flex-col gap-1">
      <!-- Breadcrumbs -->
      <div class="flex items-center gap-2 text-sm">
        <a href="#" class="text-slate-500 dark:text-[#9dabb9] hover:text-primary transition-colors">Dashboard</a>
        <span class="text-slate-400 dark:text-[#525f6e]">/</span>
        <a href="#" class="text-slate-500 dark:text-[#9dabb9] hover:text-primary transition-colors">Campaigns</a>
        <span class="text-slate-400 dark:text-[#525f6e]">/</span>
        <span class="text-slate-900 dark:text-white font-medium">New Campaign</span>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-[#283039] transition-colors">
        Preview
      </button>
      <button class="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
        <Icon name="material-symbols:publish" class="size-5" />
        Save & Publish
      </button>
    </div>
  </header>

  <!-- Scrollable Content -->
  <div class="flex-1 overflow-y-auto px-4 md:px-8 pb-12">
    <div class="max-w-[960px] mx-auto flex flex-col gap-8">
      <!-- Header Title -->
      <div class="flex flex-col gap-2 pt-4">
        <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Create New Campaign</h1>
        <p class="text-lg text-slate-500 dark:text-[#9dabb9]">Configure your public testimonial collection page settings.</p>
      </div>

      <!-- Form Container -->
      <form class="flex flex-col gap-8" @submit.prevent>
        <!-- Section 1: Essentials -->
        <section class="bg-white dark:bg-[#111418] rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#283039] shadow-sm">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Icon name="material-symbols:edit-document" class="text-primary size-6" />
            Basic Info
          </h2>
          <div class="grid gap-6">
            <!-- Campaign Name -->
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Internal Campaign Name</span>
              <input type="text" class="form-input w-full rounded-xl border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors" placeholder="e.g. Summer Launch Feedback" />
            </label>
            <!-- Page Slug -->
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Public Page Slug</span>
              <div class="flex items-center w-full rounded-xl border border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] focus-within:ring-1 focus-within:ring-primary focus-within:border-primary overflow-hidden h-12 transition-colors">
                <div class="pl-4 pr-2 text-slate-500 dark:text-[#9dabb9] bg-slate-100 dark:bg-[#283039] h-full flex items-center border-r border-slate-300 dark:border-[#3b4754] text-sm whitespace-nowrap">
                  domain.com/c/
                </div>
                <input type="text" class="form-input w-full border-none bg-transparent text-slate-900 dark:text-white focus:ring-0 h-full px-4 placeholder:text-slate-400 dark:placeholder:text-slate-600" placeholder="your-custom-slug" />
              </div>
              <p class="text-xs text-slate-500 dark:text-[#9dabb9]">This will be the URL where your customers leave testimonials.</p>
            </label>
          </div>
        </section>

        <!-- Section 2: Branding -->
        <section class="bg-white dark:bg-[#111418] rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#283039] shadow-sm">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Icon name="material-symbols:palette" class="text-primary size-6" />
            Branding & Assets
          </h2>
          <div class="grid gap-6">
            <!-- Header Title -->
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Header Title</span>
              <input type="text" class="form-input w-full rounded-xl border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-colors" placeholder="e.g. How was your experience with us?" />
            </label>
            <!-- Logo Upload -->
            <div class="flex flex-col gap-2">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Space Logo</span>
              <div class="group relative flex flex-col items-center justify-center w-full h-48 rounded-xl border-2 border-dashed border-slate-300 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] hover:bg-slate-100 dark:hover:bg-[#283039] hover:border-primary transition-all cursor-pointer">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <div class="p-3 mb-3 rounded-full bg-slate-200 dark:bg-[#283039] text-slate-400 dark:text-[#9dabb9] group-hover:text-primary transition-colors">
                    <Icon name="material-symbols:cloud-upload" class="text-3xl" />
                  </div>
                  <p class="mb-2 text-sm text-slate-600 dark:text-slate-300"><span class="font-bold text-primary">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-slate-500 dark:text-slate-500">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Configuration -->
        <section class="bg-white dark:bg-[#111418] rounded-xl p-6 md:p-8 border border-slate-200 dark:border-[#283039] shadow-sm">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Icon name="material-symbols:tune" class="text-primary size-6" />
            Collection Settings
          </h2>
          <div class="flex flex-col gap-4">
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300">Allowed Response Formats</span>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Option 1: Text -->
              <label class="relative flex items-center p-4 rounded-xl border border-slate-200 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] cursor-pointer hover:border-primary transition-colors">
                <input type="checkbox" checked class="form-checkbox h-5 w-5 text-primary rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#283039] focus:ring-primary focus:ring-offset-0" />
                <div class="ml-4 flex items-center gap-3">
                  <div class="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
                    <Icon name="material-symbols:text-fields" class="size-6" />
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white">Text Testimonials</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Allow customers to write feedback.</p>
                  </div>
                </div>
              </label>
              <!-- Option 2: Video -->
              <label class="relative flex items-center p-4 rounded-xl border border-slate-200 dark:border-[#3b4754] bg-slate-50 dark:bg-[#1c2127] cursor-pointer hover:border-primary transition-colors">
                <input type="checkbox" checked class="form-checkbox h-5 w-5 text-primary rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#283039] focus:ring-primary focus:ring-offset-0" />
                <div class="ml-4 flex items-center gap-3">
                  <div class="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <Icon name="material-symbols:videocam" class="size-6" />
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white">Video Shoutouts</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Allow customers to record videos.</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </section>

        <!-- Mobile Action Button (only visible on small screens) -->
        <div class="block sm:hidden w-full pb-8">
          <button class="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
            <Icon name="material-symbols:publish" class="size-6" />
            Save & Publish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
