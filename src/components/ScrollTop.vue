<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Up from './icons/Up.vue';

const showScrollToTop = ref(false);

const handleScroll = () => {
    if (window.scrollY > 300) {
        showScrollToTop.value = true;
    } else {
        showScrollToTop.value = false;
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div v-show="showScrollToTop" @click="scrollToTop"
        class="fixed bottom-8 left-8 bg-black bg-opacity-30 text-white py-2 px-2 rounded-full cursor-pointer shadow-lg hover:bg-opacity-20 transition ease-in-out duration-300">
        <Up />
    </div>
</template>