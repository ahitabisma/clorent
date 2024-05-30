<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Home from './Home.vue';
import Works from './Works.vue';
import Wardrobe from './Wardrobe.vue';
import Plan from './Plan.vue';
import WhatsNew from './WhatsNew.vue';
import Fashion from './Fashion.vue';
import Say from './Say.vue';
import Features from './Features.vue';
import Faq from './Faq.vue';
import Footer from './Footer.vue';
import Up from '@/components/icons/Up.vue';
import ChatBox from '@/components/ChatBox.vue';

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
  <div>
    <header>
      <Navbar />
    </header>

    <main>
      <Home />
      <Works />
      <Wardrobe />
      <Plan />
      <WhatsNew />
      <Fashion />
      <Say />
      <Features />
      <Faq />
      <!-- Scroll to Top Icon -->
      <div v-show="showScrollToTop" @click="scrollToTop"
        class="fixed bottom-8 left-8 bg-black bg-opacity-30 text-white py-2 px-2 rounded-full cursor-pointer shadow-lg hover:bg-opacity-20 transition ease-in-out duration-300">
        <Up />
      </div>

      <!-- Chat -->
      <ChatBox />
      <!-- <div class="fixed bottom-8 right-8 cursor-pointer">
        <img src="/messenger.png" alt="messenger"
            class="w-12 h-12 bg-base-200 border-2 border-black hover:scale-105 transition ease-in-out p-3 rounded-2xl">
    </div> -->

      <Footer />
    </main>


    <!-- <RouterView /> -->
  </div>
</template>
