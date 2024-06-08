<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardWardrobe from '@/components/CardWardrobe.vue';
import { useClothesStore } from '@/stores/cloth';
import { onMounted, ref } from 'vue';

const isLoading = ref(false)
const clothesStore = useClothesStore()

interface Image {
    id: number;
    defaultSrc: string;
    hoverSrc: string;
    title: string;
    desc: string;
    isHovered: boolean;
}

function shuffleArray(array: Image[]): Image[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledImages = ref<Image[]>([]);

onMounted(async () => {
    isLoading.value = true
    await clothesStore.getAllClothes()
    shuffledImages.value = shuffleArray([...clothesStore.images])
    isLoading.value = false
})
</script>

<template>
    <section id="wardrobe" class="mx-5 lg:mx-10 pb-12">
        <div v-if="isLoading" class="flex flex-col items-center justify-center mt-14">
            <span class="loading loading-dots loading-lg"></span>
            <p class="text-xs">Please wait...</p>
        </div>
        <div v-else>
            <CardWardrobe :title="`Lite`" :viewAll="`lite`" :images="clothesStore.images" />
            <CardWardrobe :title="`Premium`" :viewAll="`premium`" :images="shuffledImages" />
        </div>
    </section>
</template>
