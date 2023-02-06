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
      <div class=" overflow-hidden lg:flex lg:items-start lg:gap-x-10">
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:flex-auto">
          <div class="flex px-2">
            <div
              class="relative flex items-center gap-x-4 bg-white rounded-full py-1 px-4 text-sm leading-6 text-gray-9 ring-1 ring-white hover:ring-gray-900/20">
              <span class="font-semibold text-gray-9">Check out</span>
              <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
              <a href="#" class="flex items-center gap-x-1">
                <span class="absolute inset-0" aria-hidden="true" />
                See a new products
                <ChevronRightIcon class="-mr-2 h-5 w-5 text-gray-9" aria-hidden="true" />
              </a>
            </div>
          </div>
          <h1 class="mt-10 max-w-lg text-6xl font-unna font-bold tracking-tight text-white sm:text-6xl">EOSKY <span
              font-light> AGENCY </span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-white">Eosky is the best choice to realize your imagination that is
            still lodged in your head. Starting from the concept of personal branding to content marketing management,
            it is presented with the most up-to-date appearance.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class="text-base font-semibold leading-7 text-white">See more <span
                aria-hidden="true">→</span></a>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width="316" height="684" rx="36" />
              </clipPath>
            </defs>
            <path fill="#0f172a"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
            <path fill="#1e293b"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
            <foreignObject width="316" height="684" transform="translate(24 24)"
              clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
              <img src="~/assets/ss1.jpeg" alt="" class="h-full w-full object-cover" />
            </foreignObject>
          </svg>
        </div>
      </div>
      <!-- about -->
      <div class="py-10 space-y-2 min-h-[50vh] flex flex-col item-center justify-center">
        <div text-center>
          <h1 text-6xl font-bold font-unna text-white>
            Company <br /> <span>Introduction</span>
          </h1>
          <div max-w-4xl mx-auto mt-10>
            <p leading-loose text-white>Eosky Agency is a creative line engaged in content creation. Founded in 2022,
              Eosky is the
              best choice to realize your imagination that is still lodged in your head. Starting from the concept of
              personal branding to content marketing management, it is presented with the most up-to-date appearance.
              Put your creations through unlimited imagination,
              your content is your asset. </p>
            <p mt-8 font-semibold text-white>True Art is True Creativity</p>
          </div>
        </div>
      </div>
      <div class="relative  py-10 min-h-[50vh]">
        <div>
          <h1 text-center text-4xl lg:text-6xl font-unna text-white>
            Eosky <span font-bold text-white>Products</span>
          </h1>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6 lg:mt-20">
            <div class="space-y-4 text-white bg-brand-primary p-4">
              <h1 font-unna font-bold text-4xl>1st</h1>
              <p font-semibold text-xl>Instagram Plan Management</p>
              <p leading-loose>Today the power of visuals is unquestionable. Everyone needs an eye-catching look.
                Introduce your product by highlighting its uniqueness.</p>
            </div>
            <div space-y-4 text-white>
              <h1 font-unna font-bold text-4xl>2nd</h1>
              <p font-semibold text-xl>Book cover.</p>
              <p leading-loose>Don't judge a book by its cover alone, but find the hidden meaning behind every cover you
                make. The story will be more perfect when it attracts the heart at first sight.</p>
            </div>
            <div space-y-4 text-white>
              <h1 font-unna font-bold text-4xl>3rd</h1>
              <p font-semibold text-xl>Video teaser</p>
              <p leading-loose>Make your imagination in your head come true. Immerse in every scene of your story and
                fall in love with it.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- workflow -->
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
      <!-- testimoni -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, HandThumbUpIcon, EnvelopeIcon, PhoneIcon, UsersIcon, ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'


const navigation = [
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Template', href: '#' },
  { name: 'Contact', href: '#' },
]


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

const mobileMenuOpen = ref(false)
</script>