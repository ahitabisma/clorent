<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
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
const router = useRouter()
const handleLinkClick = (event: Event, targetId: string) => {
  event.preventDefault();
  if (router.currentRoute.value.name !== 'home') {
    router.push({ name: 'home' }).then(() => {
      setTimeout(() => {
        scrollTo(targetId);
      }, 1000);
    });
  } else {
    scrollTo(targetId);
  }

};

const scrollTo = (target: string) => {
  const targetElement = document.getElementById(target);
  if (targetElement) {
    const offset = 50; // Adjust this value according to the height of your navbar
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

// Use the route to determine if we're on the sign-in page
const route = useRoute();
const isSignInPage = ref(false);
const isBrowsePage = ref(false);

onMounted(() => {
  if (route.name === 'signin' || route.name === 'register') {
    isSignInPage.value = true;
  }
  if (route.fullPath.match('browse')) {
    isBrowsePage.value = true;
  }
});

// isLogin
const isLogin = ref(false);
const storedIsLogin = localStorage.getItem('isLogin');
onMounted(() => {
  if (storedIsLogin != null) {
    isLogin.value = JSON.parse(storedIsLogin);
  }
})

function signout() {
  localStorage.removeItem('isLogin');
  window.location.reload();
}
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
                  class="hover:opacity-50 duration-75 transition ease-in-out">WHY CLO RENT</a>
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
                  class="hover:opacity-50 duration-75 transition ease-in-out">#WOMENOFCLORENT</a>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="cursor-pointer">
                <router-link :to="{ name: 'faq' }"
                  class="hover:opacity-50 duration-75 transition ease-in-out">FAQ</router-link>
                <div class="h-[1px] w-full mt-[14px] bg-gray-200"></div>
              </li>
              <li class="absolute bottom-0 w-[17rem]">
                <router-link :to="{ name: 'signin' }" v-if="!isLogin"
                  class="cursor-pointer block mb-6 text-white bg-black w-full text-center py-[10px] rounded-sm hover:opacity-50 transition ease-in-out text-sm">
                  <p>SIGN IN</p>
                </router-link>

                <button v-else @click.prevent="signout"
                  class="cursor-pointer block mb-6 text-white bg-black w-full text-center py-[10px] rounded-sm hover:opacity-50 transition ease-in-out text-sm">SIGN
                  OUT</button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Title -->
        <div class="md:pl-24">
          <router-link :to="{ name: 'home' }"
            class="font-semibold text-2xl tracking-widest text-black hover:text-opacity-50">CLO RENT</router-link>
        </div>
      </div>

      <!-- Button Sign In -->
      <div v-if="!isSignInPage" class="hidden md:block text-xs">
        <router-link :to="{ name: 'signin' }" v-if="!isLogin"
          class="cursor-pointer tracking-widest lg:text-gray-500 font-semibold hover:text-opacity-50">SIGN
          IN</router-link>
        <router-link :to="{ name: 'register' }" v-if="isBrowsePage"
          class="cursor-pointer tracking-widest text-white bg-black py-2 px-4 rounded font-semibold md:ml-5 hover:bg-opacity-50">SUBSCRIBE
          NOW</router-link>
        <router-link :to="{ name: 'register' }" v-else-if="!isBrowsePage && !isLogin" :class="getStartedClass">GET
          STARTED</router-link>
        <router-link :to="{ name: 'register' }" v-else-if="isLogin"
          class="cursor-pointer tracking-widest text-white bg-black py-2 px-4 rounded font-semibold md:ml-5 hover:bg-opacity-50">SUBSCRIBE
          NOW</router-link>
      </div>


    </div>
  </nav>
</template>
