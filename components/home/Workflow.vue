<template>
    <div class="relative py-24 sm:py-32 bg-brand-cream -mx-10 px-10 rounded-lg overflow-hidden">
        <svg class="absolute top-0 right-0 translate-x-80 -translate-y-24 transform opacity-[10%]" width="784"
            height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
                <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-9" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
        </svg>
        <div class="mx-auto ">
            <div class="mx-auto text-center max-w-2xl ">
                <h2 class="text-4xl lg:text-6xl font-bold font-unna tracking-tight text-gray-8 sm:text-4xl">Creativity
                    Flow.</h2>
                <p class="mt-6 text-lg leading-8 text-gray-8">Lorem ipsum dolor sit amet consect adipisicing elit.
                    Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                        <dt class="text-base font-semibold leading-7 text-gray-8">
                            <div class="mb-6 flex p-2 w-14 h-14 items-center justify-center rounded-lg bg-gray-9">
                                <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <span class="text-lg"> {{ feature.name }}</span>
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-8">
                            <p class="flex-auto">{{ feature.description }}</p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
        <svg class="absolute  bottom-0 left-0 -translate-x-10 translate-y-30 transform opacity-[10%]" width="784"
            height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
                <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-9" fill="currentColor" />
                </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
        </svg>
    </div>
</template>
<script setup>
import {  HandThumbUpIcon, UsersIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: '1st Concept',
    description:
      'Collect your idea. Put into a general concept.',
    href: '#',
    icon: ChatBubbleBottomCenterIcon,
  },
  {
    name: '2nd Consultation',
    description:
      'Tell us what you need and show your idea. Eosky will give you a ton of reference and inspiration.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: '3rd Deal',
    description:
      'Find the right concept and inspiration to be You! Make a deal, and wait for no more than a week progress. Lets shares!',
    href: '#',
    icon: HandThumbUpIcon,
  },
]
</script>