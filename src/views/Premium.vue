<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ChatBox from '@/components/ChatBox.vue';
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/Loader.vue';
import Footer from './landingPage/Footer.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import { useClothesStore } from '@/stores/cloth';

const clothesStore = useClothesStore()

const isLoading = ref(true);
const isCardLoading = ref(true);

onMounted(async () => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);

    await clothesStore.getAllClothes()
    isCardLoading.value = false;

})
</script>

<template>
    <div class="max-h-svh md:h-svh">
        <!-- Loader -->
        <Loader v-if="isLoading" />

        <!-- Navbar -->
        <Navbar class="relative" />

        <!-- Premium -->
        <div class="">
            <!-- Title -->
            <p class="text-center text-xl font-semibold my-5">Premium Collection</p>

            <!-- Desc Title -->
            <p class="mx-5 md:mx-7 lg:mx-[60px] font-light mb-5">Premium Curation</p>

            <!-- Card -->
            <div>
                <div v-if="isCardLoading"
                    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-7 lg:justify-items-center md:gap-5">
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:mx-7 lg:justify-items-center md:gap-5 ">
                    <router-link :to="{}" v-for="(image, index) in clothesStore.images" :key="image.id"
                        class="flex flex-col bg-red-100 w-full lg:w-[220px] md:mb-3 lg:mb-10 carousel-item"
                        @mouseover="clothesStore.handleMouseOver(index)"
                        @mouseleave="clothesStore.handleMouseLeave(index)">
                        <img loading="lazy" :src="image.isHovered ? image.hoverSrc : image.defaultSrc"
                            :alt="`Image ${image.id}`" class="w-full h-80 md:h-[340px] lg:h-[320px]" />
                        <!-- Description Card -->
                        <div class="font-light py-5 text-center relative">
                            <p class="tracking-widest">{{ image.title }}</p>
                            <p class="text-xs">{{ image.desc }}</p>
                        </div>
                    </router-link>
                </div>

                <!-- Pagination -->
                <div class="flex justify-center mt-10 mb-20">
                    <div class="flex gap-7 text-sm">
                        <button class="join-item text-black text-opacity-50">« Prev</button>
                        <button class="bg-black py-1 px-3 rounded text-white">1</button>
                        <button class="join-item font-semibold">Next »</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Top -->
        <ScrollTop />

        <!-- ChatBox -->
        <ChatBox />

        <!-- Footer -->
        <Footer />
    </div>
</template>


<style scoped></style>