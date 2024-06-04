<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
    title: string;
    viewAll: string;
    images: Array<{ id: number; defaultSrc: string; hoverSrc: string; title: string; desc: string; isHovered?: boolean }>;
}>();

const images = ref(props.images.map(image => ({ ...image, isHovered: false })));

const handleMouseOver = (index: number) => {
    images.value[index].isHovered = true;
};

const handleMouseLeave = (index: number) => {
    images.value[index].isHovered = false;
};

const carouselRef = ref<HTMLElement | null>(null);
const showPrevButton = ref(false);
const showNextButton = ref(true);

const updateButtonVisibility = () => {
    const carousel = carouselRef.value as HTMLElement;
    showPrevButton.value = carousel.scrollLeft > 0;
    showNextButton.value = carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth;
};

const scrollCarousel = (direction: string) => {
    const carousel = carouselRef.value as HTMLElement;
    const scrollAmount = 210;
    if (direction === 'prev') {
        carousel.scrollLeft -= scrollAmount;
    } else if (direction === 'next') {
        carousel.scrollLeft += scrollAmount;
    }
    setTimeout(updateButtonVisibility, 300);
};

onMounted(() => {
    updateButtonVisibility();
    const carousel = carouselRef.value as HTMLElement;
    carousel.addEventListener('scroll', updateButtonVisibility);
});
</script>

<template>
    <div class="">
        <div class="flex justify-between items-center py-10">
            <p class="font-bold text-2xl">{{ title }}</p>
            <router-link :to="{ name: viewAll }" class="text-lg font-semibold text-black hover:text-opacity-50">View
                All</router-link>
        </div>

        <!-- Carousel with navigation buttons -->
        <div class="relative">
            <!-- Button Prev -->
            <button v-if="showPrevButton" @click="scrollCarousel('prev')"
                class="absolute -left-4 top-1/2 bg-black text-white py-1 px-3 rounded-full hover:bg-opacity-50 transform -translate-y-1/2">
                &#10094;
            </button>

            <div ref="carouselRef" class="flex gap-5 overflow-x-auto carousel">
                <router-link :to="{ name: 'browse-detail', params: { id: image.id } }" v-for="(image, index) in images"
                    :key="image.id" class="flex flex-col bg-red-100 w-[186px] md:w-[168px] lg:w-[180px] carousel-item"
                    @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave(index)">
                    <img loading="lazy" :src="image.isHovered ? image.hoverSrc : image.defaultSrc"
                        :alt="`Image ${image.id}`" class="w-full h-80 md:h-[340px] lg:h-[275px]" />
                    <!-- Description Card -->
                    <div class="font-light py-5 text-center relative">
                        <p class="tracking-widest">{{ image.title }}</p>
                        <p class="text-xs">{{ image.desc }}</p>
                    </div>
                </router-link>

                <!-- View All -->
                <router-link :to="{ name: viewAll }"
                    class="flex flex-col bg-red-100 hover:bg-opacity-50 w-[186px] md:w-[168px] lg:w-[180px] carousel-item">
                    <!-- Description Card -->
                    <div class="font-normal flex items-center w-full h-full justify-center">
                        <p class="tracking-widest">View All</p>
                    </div>
                </router-link>
            </div>

            <!-- Button Next -->
            <button v-if="showNextButton" @click="scrollCarousel('next')"
                class="absolute -right-4 top-1/2 bg-black text-white py-1 px-3 rounded-full hover:bg-opacity-50 transform -translate-y-1/2">
                &#10095;
            </button>
        </div>
    </div>
</template>