<script setup lang="ts">
import { useClothesStore } from '@/stores/cloth';
import { onMounted } from 'vue';

const clothesStore = useClothesStore()

onMounted(() => {

})
</script>

<template>
    <div>
        <div>
            <div>2 image</div>
            <div>image utama</div>
            <div>desc</div>
        </div>
    </div>
</template>