<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Menu from './icons/Menu.vue';
import XMark from './icons/XMark.vue';

// Reactive reference for navbar class
const navbarClass = ref('absolute inset-x-0 top-0 w-full z-10 bg-transparent text-black');
const getStartedClass = ref('hidden cursor-pointer tracking-widest text-white bg-black py-2 px-4 rounded font-semibold lg:ml-5');

// Handle scroll for navbar transition
const handleScroll = () => {
  if (window.scrollY > 300) {
    navbarClass.value = 'fixed inset-x-0 top-0 w-full z-10 bg-white text-black shadow transition ease duration-300';
    getStartedClass.value = 'relative cursor-pointer tracking-widest text-white bg-black py-2 px-4 rounded font-semibold md:ml-5 hover:bg-opacity-50';
  } else {
    navbarClass.value = 'absolute inset-x-0 top-0 w-full z-10 bg-transparent text-black';
    getStartedClass.value = 'hidden cursor-pointer tracking-widest text-white bg-black py-2 px-4 rounded font-semibold lg:ml-5';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Handle smooth scroll with offset
const handleLinkClick = (event: Event, targetId: string) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 50; // Adjust this value according to the height of your navbar
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// Use the route to determine if we're on the sign-in page
const route = useRoute();
const isSignInPage = ref(false);

onMounted(() => {
  isSignInPage.value = route.name === 'signin';
});

</script>

<template>
  <nav :class="navbarClass">
    <div class="flex items-center justify-between py-4 px-4 md:px-6">
      <div class="flex items-center space-x-3 w-2/3">
        <!-- Button Sidebar -->
        <div class="drawer w-6">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <!-- Page content here -->
            <label for="my-drawer" class="cursor-pointer">
              <Menu class="w-4 h-3" />
            </label>
          </div>
          <div class="drawer-side z-[2]">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul
              class="py-4 px-6 w-80 min-h-full drop-shadow-2xl bg-white text-base-content space-y-4 text-[15px] tracking-widest">
              <!-- Sidebar content here -->
              <li class="flex justify-end">
                <label for="my-drawer" class="cursor-pointer">
                  <XMark class="w-5 h-5" />
                </label>
              </li>
              <li class="cursor-pointer">
                <a href="#home" @click.prevent="handleLinkClick($event, 'home')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">HOME</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <a href="#plan" @click.prevent="handleLinkClick($event, 'plan')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">BROWSE PLANS</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <a href="#fashion" @click.prevent="handleLinkClick($event, 'fashion')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">WHY STYLE THEORY</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <a href="#works" @click.prevent="handleLinkClick($event, 'works')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">HOW IT WORKS</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <a href="#wardrobe" @click.prevent="handleLinkClick($event, 'wardrobe')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">PEEK INTO THE WARDROBE</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <a href="#say" @click.prevent="handleLinkClick($event, 'say')"
                  class="hover:opacity-50 duration-75 transition ease-in-out">#WOMENOFSTYLETHEORY</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <router-link :to="{ name: 'faq' }"
                  class="hover:opacity-50 duration-75 transition ease-in-out">FAQ</router-link>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="absolute bottom-0 w-[17rem]">
                <div
                  class="cursor-pointer mb-6 text-white bg-black w-full text-center py-[10px] rounded-sm hover:opacity-50 transition ease-in-out text-sm">
                  <router-link :to="{ name: 'signin' }">SIGN IN</router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Title -->
        <div class="md:pl-24">
          <p class="font-semibold text-2xl tracking-widest">STYLE THEORY</p>
        </div>
      </div>

      <!-- Dropdown Language -->
      <!-- <div class="md:hidden">
        <select class="select select-bordered select-sm w-min bg-transparent border border-black">
          <option>SGN</option>
          <option selected>ID</option>
          <option>HKG</option>
        </select>
      </div> -->

      <!-- Button Sign In -->
      <div v-if="!isSignInPage" class="hidden md:block text-xs">
        <router-link :to="{ name: 'signin' }"
          class="cursor-pointer tracking-widest lg:text-gray-500 font-semibold hover:text-opacity-50">SIGN
          IN</router-link>
        <button :class="getStartedClass">GET STARTED</button>
      </div>
    </div>
  </nav>
</template>
