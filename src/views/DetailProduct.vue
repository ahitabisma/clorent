<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Footer from './landingPage/Footer.vue';
import { useClothesStore } from '@/stores/cloth';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CardWardrobe from '@/components/CardWardrobe.vue';

const clothesStore = useClothesStore();
const route = useRoute();
const id = Number(route.params.id);
const isLoading = ref(true);
const currentImage = ref(clothesStore.image?.defaultSrc);
const loading = ref(true);

const fetchCloth = async (clothId: number) => {
    loading.value = true;
    await clothesStore.getClothById(clothId);
    currentImage.value = clothesStore.image?.defaultSrc;
    loading.value = false;
};

onMounted(async () => {
    await fetchCloth(id);
    await clothesStore.getAllClothes();
    isLoading.value = false;
});

watch(() => route.params.id, async (newId) => {
    loading.value = true;
    await fetchCloth(Number(newId));
    loading.value = false;
});
</script>

<template>
    <div>

        <header>
            <Navbar />
        </header>

        <!-- Loading -->
        <div v-if="loading" class="flex justify-center items-center h-96">
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <div v-else class="mt-24">
            <div v-if="clothesStore.image">
                <div class="md:grid md:grid-cols-2 md:h-96">
                    <!-- Image -->
                    <div class="w-full flex justify-center">
                        <div class="hidden lg:flex space-x-10">
                            <div class="space-y-5">
                                <img :src="clothesStore.image.defaultSrc" class="w-20 h-28 cursor-pointer"
                                    :class="{ 'opacity-50 transition ease-in-out': currentImage === clothesStore.image.defaultSrc }"
                                    @click="currentImage = clothesStore.image?.defaultSrc" />
                                <img :src="clothesStore.image.hoverSrc" class="w-20 h-28 cursor-pointer"
                                    :class="{ 'opacity-50 transition ease-in-out': currentImage === clothesStore.image.hoverSrc }"
                                    @click="currentImage = clothesStore.image?.hoverSrc" />
                            </div>

                            <!-- Image untuk menampilkan gambar -->
                            <div class="w-68 h-96">
                                <img :src="currentImage" class="w-full h-96" />
                            </div>
                        </div>
                        <div class="w-64 carousel rounded-md lg:hidden">
                            <div class="carousel-item w-full">
                                <img :src="clothesStore.image.defaultSrc" class="w-full" />
                            </div>
                            <div class="carousel-item w-full">
                                <img :src="clothesStore.image.hoverSrc" class="w-full" />
                            </div>
                        </div>
                    </div>

                    <!-- Card Desc -->
                    <div
                        class="border h-full border-gray-300 mx-5 px-5 py-6 my-10 md:my-0 md:mx-10 tracking-widest text-sm">
                        <p class="font-semibold">{{ clothesStore.image.title }} {{ clothesStore.image.desc }}</p>
                        <div class="my-5">
                            <p>AVAILABLE SIZE</p>
                            <p class="text-lg">FREE</p>
                        </div>
                        <div class="tracking-normal font-light mb-10">
                            <p>Learn more about our Subscription Plans and browse 20.000+ more pieces by downloading
                                Style
                                Theory app.</p>
                        </div>
                        <router-link :to="{ name: 'register' }"
                            class="block text-center cursor-pointer tracking-widest text-white bg-black py-2 w-full rounded font-semibold hover:bg-opacity-50">SUBSCRIBE</router-link>
                    </div>
                </div>

                <div class="md:grid md:grid-cols-2 md:mt-10 mx-5 md:mx-10">
                    <!-- Notes & Details -->
                    <div class="text-sm -mx-2 md:-ml-5 md:mr-5">
                        <div class="collapse collapse-plus">
                            <input type="checkbox" name="my-accordion-3" checked />
                            <div class="collapse-title">
                                Notes & Details
                            </div>
                            <div class="collapse-content">
                                <p class="text-xs">This sleeveless jumpsuit is made from stretch polyester. It has
                                    assymetrical
                                    cutting on both
                                    shoulders, with slim shoulder strap and features overlap peplum cutting along the
                                    waistline.
                                </p>
                                <div class="font-light my-5 space-y-1">
                                    <div class="flex justify-between">
                                        <p>FIT</p>
                                        <p>REGULAR</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>LINING</p>
                                        <p>NO</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>SHEER LEVEL</p>
                                        <p>NOT SHEER</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>STRETCHABILITY</p>
                                        <div class="space-x-1">
                                            <span class="">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>THICKNESS</p>
                                        <div class="space-x-1">
                                            <span class="">●</span>
                                            <span class="">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                            <span class="text-black text-opacity-40">●</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cm & Inch -->
                    <div class="mt-3 mb-5 text-xs">
                        <div class="flex gap-2">
                            <div>
                                <input type="radio" name="size" id="choose-cm" class="peer hidden" checked />
                                <label for="choose-cm"
                                    class="select-none cursor-pointer rounded py-1 px-3 border border-black
    text-black transition-colors duration-200 ease-in-out peer-checked:bg-black peer-checked:text-white peer-checked:border-none ">
                                    CM</label>
                            </div>
                            <div>
                                <input type="radio" name="size" id="choose-inch" class="peer hidden" />
                                <label for="choose-inch"
                                    class="select-none cursor-pointer rounded py-1 px-3 border border-black
    text-black transition-colors duration-200 ease-in-out peer-checked:bg-black peer-checked:text-white peer-checked:border-none">
                                    INCH</label>
                            </div>
                        </div>

                        <div>
                            <table class="border border-gray-300 w-full text-center my-8">
                                <thead class="border border-gray-300">
                                    <tr class="h-10">
                                        <td>SIZE</td>
                                        <td>BUST</td>
                                        <td>WAIST</td>
                                        <td>HIPS</td>
                                        <td>LENGTH</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="h-10">
                                        <td>FREE</td>
                                        <td>80</td>
                                        <td>70</td>
                                        <td>90</td>
                                        <td>134</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Similar Style -->
                <div v-if="isLoading" class="flex items-center justify-center mb-10 mt-5">
                    <span class="loading loading-dots loading-lg"></span>
                </div>
                <div v-else class="mx-5 mb-24 md:mx-10">
                    <CardWardrobe :title="`Similar Styles`" :viewAll="`lite`" :images="clothesStore.images" />
                </div>
            </div>
        </div>



        <footer>
            <Footer />
        </footer>
    </div>
</template>