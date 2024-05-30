<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Check from '@/components/icons/Check.vue';
</script>

<template>
    <section id="plan" class="pt-10 bg-red-100 py-5 px-5 lg:px-10 space-y-10 text-center h-full">
        <p class="font-semibold text-2xl">PICK A PLAN</p>

        <div class="flex justify-center h-full">
            <div class="flex overflow-x-scroll gap-8 w-min">
                <!-- Lite -->
                <div class="min-w-72 max-w-72 mb-5">
                    <div class="w-full h-5 bg-green-600 bg-opacity-30 mb-2 rounded-tl-md rounded-tr-md"></div>
                    <div class="border border-green-300 bg-white rounded-md px-7 py-12">
                        <p class="font-semibold text-lg">Lite</p>
                        <img loading="lazy"
                            src="https://images.ctfassets.net/c98fnax8301d/72lsJ1uEfjNSgB9JhRjVO3/ddefec475e402105708bb6cf811629fb/NO_NUMBER_100x100.png"
                            alt="Lite" _mstalt="44538" _msthash="167" class="mx-auto my-3">
                        <p class="font-bold text-lg text-gray-900 text-opacity-80 mx-5 leading-tight">Starting from IDR
                            290,000 / Month</p>
                        <button
                            class="bg-black hover:bg-opacity-50 text-white py-2 px-14 rounded-md transition ease-in-out my-3">Get
                            This Plan</button>
                        <div class="w-full h-[1px] bg-gray-300 mt-3 mb-5"></div>
                        <ul class="text-sm space-y-3 font-light text-left  h-[19rem] max-h-[19rem]">
                            <li class="flex space-x-3 items-center gap-2 ">
                                <Check /> Rent from our Lite collection
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Access designer wear for day-to-day
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Rent 1, 2 or 3 boxes/month
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />3 pieces per box
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Roll over unused boxes for up to 6 months
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Free dry cleaning and doorstep delivery
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Pause or cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Premi -->
                <div class="min-w-72 max-w-72 mb-5">
                    <div class="w-full bg-orange-600 rounded-tl-md rounded-tr-md text-white text-sm font-semibold py-1">
                        Most Popular</div>
                    <div class="border border-orange-600 bg-white rounded-bl-md rounded-br-md px-7 py-12">
                        <p class="font-semibold text-lg">Premi</p>
                        <img loading="lazy"
                            src="https://images.ctfassets.net/c98fnax8301d/72lsJ1uEfjNSgB9JhRjVO3/ddefec475e402105708bb6cf811629fb/NO_NUMBER_100x100.png"
                            alt="Lite" _mstalt="44538" _msthash="167" class="mx-auto my-3">
                        <p class="font-bold text-lg text-gray-900 text-opacity-80 mx-5 leading-tight">Starting from IDR
                            440,000 / Month</p>
                        <button
                            class="bg-black hover:bg-opacity-50 text-white py-2 px-14 rounded-md transition ease-in-out my-3">Get
                            This Plan</button>
                        <div class="w-full h-[1px] bg-gray-300 mt-3 mb-5"></div>
                        <ul class="text-sm space-y-3 font-light text-left h-[19rem] max-h-[19rem]">
                            <li class="flex space-x-3 items-center gap-2 ">
                                <Check />Rent from our full collection (includes Lite)
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Access designer wear for all occasions and events
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Rent 1, 2 or 3 boxes/month
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />3 pieces per box
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Roll over unused boxes for up to 6 months
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Free dry cleaning and doorstep delivery
                            </li>
                            <li class="flex space-x-3 items-center gap-2">
                                <Check />Pause or cancel anytime
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>