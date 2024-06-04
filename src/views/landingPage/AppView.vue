<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
import ChatBox from '@/components/ChatBox.vue';
import Loader from '@/components/Loader.vue';
import ScrollTop from '@/components/ScrollTop.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

</script>


<template>
  <div>
    <!-- Loader -->
    <Loader v-if="isLoading" />

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
      <ScrollTop />

      <!-- Chat -->
      <ChatBox />

      <Footer />
    </main>
  </div>
</template>
