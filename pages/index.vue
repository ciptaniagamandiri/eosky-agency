<template>
  <div class="relative isolate bg-brand-primary pb-20  overflow-hidden">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-brand-secondary/40 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-brand-secondary/20">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
    </svg>
    <!-- navbar -->
    <div class="px-6 pt-6  lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
            class="text-sm font-semibold leading-6 text-brand-cream">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
        </div>
      </nav>
      <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <!-- <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{
                    item.name
                  }}</a>
              </div>
              <div class="py-6">
                <!-- <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a> -->
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
    <div class="mx-auto max-w-7xl px-6 pt-24 sm:pt-20  lg:px-8 lg:pt-40">
      <BannerSection data-aos="fade-up"/>
      <AboutSection data-aos="fade-up" data-aos-delay="400"/>
      <ProductSection data-aos="fade-up" data-aos-delay="400"/>
      <WorkflowSection data-aos="fade-up" data-aos-delay="400"/>
      <TeamsSection data-aos="fade-up" data-aos-delay="400"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import AOS from "aos"

import BannerSection from "~/components/home/Banner.vue"
import AboutSection from "~/components/home/About.vue"
import ProductSection from "~/components/home/Product.vue"
import WorkflowSection from "~/components/home/Workflow.vue"
import TeamsSection from "~/components/home/Teams.vue"


onMounted(() => {
    AOS.init();
})
const navigation = [
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Template', href: '#' },
  { name: 'Contact', href: '#' },
]


const mobileMenuOpen = ref(false)
</script>