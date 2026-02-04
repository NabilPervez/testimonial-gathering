<script lang="ts" setup>
import { Motion, AnimatePresence } from "motion-v";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

interface Props {
  data: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  autoplay: false,
  duration: 5000,
});

const active = ref(0);
const interval = ref<any>();

const activeTestimonialQuote = computed(() => {
  if (!props.data.length) return [];
  return props.data[active.value].quote.split(" ");
});

const calculateRotate = () => Math.floor(Math.random() * 21) - 10;
// We need stable rotation for each item so it doesn't jitter on re-render, 
// but here it's called in template. Ideally we store it.
// For now adhering to "randomRotateY()" usage in template from PRD.
const randomRotateY = () => calculateRotate(); 

const handleNext = () => {
  active.value = (active.value + 1) % props.data.length;
};

const handlePrev = () => {
  active.value = (active.value - 1 + props.data.length) % props.data.length;
};

const isActive = (index: number) => {
  return index === active.value;
};

onMounted(() => {
  if (props.autoplay) {
    interval.value = setInterval(handleNext, props.duration);
  }
});
</script>

<template>
  <div v-if="props.data.length === 0" class="text-center py-20 text-gray-500">
    No testimonials yet. Share your link to collect some love!
  </div>

  <div v-else class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
    <div class="relative grid grid-cols-1 gap-20 md:grid-cols-2">
      
      <div>
        <div class="relative h-80 w-full">
          <AnimatePresence>
            <Motion
              v-for="(testimonial, index) in props.data"
              :key="testimonial.image"
              as="div"
              :initial="{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }"
              :animate="{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : props.data.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }"
              :exit="{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }"
              :transition="{ duration: 0.4, ease: 'easeInOut' }"
              class="absolute inset-0 origin-bottom"
            >
              <NuxtImg
                :src="testimonial.image"
                :alt="testimonial.name"
                width="500"
                height="500"
                :draggable="false"
                class="size-full rounded-3xl object-cover object-center"
              />
            </Motion>
          </AnimatePresence>
        </div>
      </div>

      <div class="flex flex-col justify-between py-4">
        <Motion
          :key="active"
          as="div"
          :initial="{ y: 20, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :exit="{ y: -20, opacity: 0 }"
          :transition="{ duration: 0.2, ease: 'easeInOut' }"
        >
          <h3 class="text-2xl font-bold text-black dark:text-white">
            {{ props.data[active].name }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            {{ props.data[active].designation }}
          </p>
          
          <Motion as="p" class="mt-8 text-lg text-gray-500 dark:text-neutral-300">
            <Motion
              v-for="(word, index) in activeTestimonialQuote"
              :key="index"
              as="span"
              :initial="{ filter: 'blur(10px)', opacity: 0, y: 5 }"
              :animate="{ filter: 'blur(0px)', opacity: 1, y: 0 }"
              :transition="{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }"
              class="inline-block"
            >
              {{ word }}&nbsp;
            </Motion>
          </Motion>
        </Motion>

        <div class="flex gap-4 pt-12 md:pt-0">
          <button
            class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handlePrev"
          >
             <Icon name="lucide:arrow-left" class="size-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            class="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handleNext"
          >
            <Icon name="lucide:arrow-right" class="size-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
