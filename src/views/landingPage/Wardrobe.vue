<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardWardrobe from '@/components/CardWardrobe.vue';
import { useClothesStore } from '@/stores/cloth';
import { onMounted, ref } from 'vue';

const isLoading = ref(false)
const clothesStore = useClothesStore()
onMounted(async () => {
    isLoading.value = true
    await clothesStore.getAllClothes()
    isLoading.value = false
})
</script>

<template>
    <section id="wardrobe" class="mx-5 lg:mx-10 pb-12">
        <div v-if="isLoading" class="flex items-center justify-center mt-14">
            <span class="loading loading-dots loading-lg"></span>
        </div>
        <div v-else>
            <CardWardrobe :title="`Lite`" :viewAll="`lite`" :images="clothesStore.images" />
            <CardWardrobe :title="`Premium`" :viewAll="`premium`" :images="clothesStore.images" />
        </div>
    </section>
</template>