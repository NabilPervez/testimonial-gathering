<template>
  <div class="p-6 md:p-8 flex flex-col gap-8 flex-1 overflow-y-auto">
    <div class="flex flex-col gap-2">
      <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Embed Code</h1>
      <p class="text-slate-500 dark:text-[#9dabb9]">Copy and paste these snippets to show your Wall of Love on your site.</p>
    </div>

    <!-- Embed Options -->
    <div class="grid gap-8">
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
            <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-sm font-mono overflow-x-auto">
&lt;script src="https://embed.testimonial.io/v1/widget.js"&gt;&lt;/script&gt;
&lt;testimonial-wall campaign="summer-launch"&gt;&lt;/testimonial-wall&gt;</pre>
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
          <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-xs font-mono overflow-x-auto flex-1">
import { TestimonialWall } from '@testimonial/react';

export default () => (
  &lt;TestimonialWall campaign="id_123" /&gt;
);</pre>
        </section>

        <section class="bg-white dark:bg-[#111418] rounded-xl border border-slate-200 dark:border-[#283039] shadow-sm p-6 flex flex-col gap-4">
          <h3 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Icon icon="logos:vue" /> Vue Component
          </h3>
          <pre class="bg-slate-900 text-slate-50 p-4 rounded-lg text-xs font-mono overflow-x-auto flex-1">
&lt;script setup&gt;
import { TestimonialWall } from '@testimonial/vue';
&lt;/script&gt;

&lt;template&gt;
  &lt;TestimonialWall campaign="id_123" /&gt;
&lt;/template&gt;</pre>
        </section>
      </div>
    </div>
  </div>
</template>
