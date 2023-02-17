<script setup>
import { ref } from "vue"
import { UserIcon } from "@heroicons/vue/24/outline"
const teams = ref([
    {
        name: 'Mario Lee A',
        position: 'Owner'
    },
    {
        name: 'Intan Rachma A',
        position: 'CEO'
    },
    {
        name: 'Haris Nata H',
        position: 'General Manager'
    },
    {
        name: 'Maya Agnesia P & Alpie Sarah',
        position: 'Sales'
    },
    {
        name: 'Rerevina, Alvita, kiky Saputri',
        position: 'Creative'
    },
    {
        name: 'Youn Thalya Masoko, Heri Mulyono, Rizky',
        position: 'Designer'
    }
])
</script>
<template>
    <div >
        <div class="mx-auto max-w-7xl py-12 text-center lg:py-24">
            <div class="space-y-12">
                <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-white font-unna">Meet our team</h2>
                    <p class="text-xl text-white">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
                        lectus sit pretium egestas vel mattis neque.</p>
                </div>
                <ul role="list"
                    class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-6">
                    <li v-for="item in teams">
                        <div class="space-y-6 relative">
                            <div class="w-40 h-40 mx-auto bg-brand-cream flex flex-col justify-center items-center rounded-lg">
                                <UserIcon class="w-24 place-items-center text-slate-5"/>
                            </div>
                            <div class="space-y-2">
                                <div class="space-y-1 text-lg font-medium leading-6">
                                    <h3 class="text-white">{{item.name}}</h3>
                                    <p class="text-brand-cream">{{item.position}}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>