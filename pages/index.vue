<template>
  <div class="relative isolate bg-white  overflow-hidden">
    <svg
      class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      aria-hidden="true">
      <defs>
        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
    </svg>
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
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
            class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
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
              <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
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
    <div class="mx-auto max-w-7xl px-6 pt-24 sm:pt-32  lg:px-8 lg:pt-40">
      <div class="lg:max-h-[70vh] overflow-hidden lg:flex lg:items-start lg:gap-x-10 border-b border-gray-1">
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:flex-auto">
          <div class="flex">
            <div
              class="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span class="font-semibold text-sky-600">Check out</span>
              <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
              <a href="#" class="flex items-center gap-x-1">
                <span class="absolute inset-0" aria-hidden="true" />
                See a new products
                <ChevronRightIcon class="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
          <h1 class="mt-10 max-w-lg text-6xl font-unna font-bold tracking-tight text-gray-900 sm:text-6xl">EOSKY AGENCY
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Eosky is the best choice to realize your imagination that is
            still lodged in your head. Starting from the concept of personal branding to content marketing management,
            it is presented with the most up-to-date appearance.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class="text-base font-semibold leading-7 text-gray-900">See more <span
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
            <path fill="#4B5563"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
            <path fill="#343E4E"
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
          <h1 text-6xl font-bold font-unna text-gray-8>
            Company <br /> Introduction
          </h1>
          <div max-w-4xl mx-auto mt-10>
            <p leading-loose>Eosky Agency is a creative line engaged in content creation. Founded in 2022, Eosky is the
              best choice to realize your imagination that is still lodged in your head. Starting from the concept of
              personal branding to content marketing management, it is presented with the most up-to-date appearance.
              Put your creations through unlimited imagination,
              your content is your asset. </p>
            <p mt-8 font-semibold>True Art is True Creativity</p>
          </div>
        </div>
      </div>
      <!-- visi & misi -->
      <!-- <div class="border-t-2 border-dashed py-10 space-y-2 min-h-[50vh] flex flex-col item-center justify-center">
        <div text-center>
          <h1 text-4xl lg:text-6xl font-bold font-unna text-gray-8 >
            Vision & Mission
          </h1>
          <div max-w-4xl mx-auto mt-10>
            <p leading-loose>Be part of the support system for writers, content creators and SMEs for branding. </p>
            <div class="flex justify-center items-center gap-4">
              <div class="h-3 w-3 bg-gray-5 rounded-full my-7"></div>
              <div class="h-4 w-4 bg-gray-5 rounded-full my-7"></div>
              <div class="h-3 w-3 bg-gray-5 rounded-full my-7"></div>
            </div>
            <p leading-loose>Provide content for all ages. Build youth confident to introduce their work through millennial-style content. </p>
          </div>
        </div>
      </div> -->
      <!-- product -->
      <div class="relative border-t-2 border-dotted py-10 min-h-[50vh]">
        <div>
          <h1 text-center text-4xl lg:text-6xl font-unna text-slate-7>
            Eosky <span font-bold text-gray-8>Products</span>
          </h1>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-6 lg:mt-20">
            <div space-y-4 text-gray-800>
              <h1 font-unna font-bold text-4xl>1st</h1>
              <p font-semibold text-xl>Instagram Plan Management</p>
              <p leading-loose>Today the power of visuals is unquestionable. Everyone needs an eye-catching look.
                Introduce your product by highlighting its uniqueness.</p>
            </div>
            <div space-y-4 text-gray-800>
              <h1 font-unna font-bold text-4xl>2nd</h1>
              <p font-semibold text-xl>Book cover.</p>
              <p leading-loose>Don't judge a book by its cover alone, but find the hidden meaning behind every cover you
                make. The story will be more perfect when it attracts the heart at first sight.</p>
            </div>
            <div space-y-4 text-gray-800>
              <h1 font-unna font-bold text-4xl>3rd</h1>
              <p font-semibold text-xl>Video teaser</p>
              <p leading-loose>Make your imagination in your head come true. Immerse in every scene of your story and
                fall in love with it.</p>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <!-- workflow -->
      <div class="py-24 sm:py-32">
        <div class="mx-auto ">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl lg:text-6xl font-bold font-unna tracking-tight text-gray-900 sm:text-4xl">Creativity
              Flow.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit.
              Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="mb-6 flex p-2 w-14 h-14 items-center justify-center rounded-lg bg-zinc-7">
                    <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  {{ feature.name }}
                </dt>
                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p class="flex-auto">{{ feature.description }}</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <!-- testimoni -->
      <section class="overflow-hidden">
        <div class="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8 lg:py-20">
          <svg class="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden" width="784"
            height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
              <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
          </svg>

          <svg class="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
            width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
          </svg>

          <div class="relative lg:flex lg:items-center">
            <div class="hidden lg:block lg:flex-shrink-0">
              <img class="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </div>

            <div class="relative lg:ml-10">
              <svg
                class="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
                stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                <path stroke-width="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
              </svg>
              <blockquote class="relative">
                <div class="text-2xl font-medium leading-9 text-gray-900">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente
                    alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.</p>
                </div>
                <footer class="mt-8">
                  <div class="flex">
                    <div class="flex-shrink-0 lg:hidden">
                      <img class="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="" />
                    </div>
                    <div class="ml-4 lg:ml-0">
                      <div class="text-base font-medium text-gray-900">Judith Black</div>
                      <div class="text-base font-medium text-indigo-600">CEO, Tuple</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <!-- contact -->
      <div class="mt-7 relative bg-white">
        <div
          class="absolute inset-x-0 top-[-10rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div class="py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div class="mx-auto max-w-lg">
              <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
              <p class="mt-3 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
              <dl class="mt-8 text-base text-gray-500">
                <div>
                  <dt class="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div class="mt-6">
                  <dt class="sr-only">Phone number</dt>
                  <dd class="flex">
                    <PhoneIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">Email</dt>
                  <dd class="flex">
                    <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p class="mt-6 text-base text-gray-500">
                Looking for careers?
                {{ ' ' }}
                <a href="#" class="font-medium text-gray-700 underline">View all job openings</a>.
              </p>
            </div>
          </div>
          <div class="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div class="mx-auto max-w-lg lg:max-w-none">
              <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
                <div>
                  <label for="full-name" class="sr-only">Full name</label>
                  <input type="text" name="full-name" id="full-name" autocomplete="name"
                    class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name" />
                </div>
                <div>
                  <label for="email" class="sr-only">Email</label>
                  <input id="email" name="email" type="email" autocomplete="email"
                    class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email" />
                </div>
                <div>
                  <label for="phone" class="sr-only">Phone</label>
                  <input type="text" name="phone" id="phone" autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Phone" />
                </div>
                <div>
                  <label for="message" class="sr-only">Message</label>
                  <textarea id="message" name="message" rows="4"
                    class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message" />
                </div>
                <div>
                  <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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