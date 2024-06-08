<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ChatBox from '@/components/ChatBox.vue';
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/Loader.vue';

const router = useRouter();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

// Function to handle login
const handleLogin = () => {
    if (!localStorage.getItem('email')) {
        errorMessage.value = 'Invalid email or password. Please create your account first.';
    } else {

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email.value === storedEmail && password.value === storedPassword) {
            localStorage.setItem('isLogin', 'true');
            router.push({ name: 'home' });
        } else {
            errorMessage.value = 'Invalid email or password. Please try again.';
        }
    }
};

// Initialize stored user for demonstration purposes (only run once)
const initializeUser = () => {
    if (!localStorage.getItem('email')) {
        // localStorage.setItem('email', 'test@gmail.com');
        // localStorage.setItem('password', '123123');
    }
};

const isLoading = ref(true);

onMounted(() => {
    initializeUser();
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
})
</script>

<template>
    <div class="max-h-svh md:h-svh">
        <!-- Loader -->
        <Loader v-if="isLoading" />

        <!-- Navbar -->
        <Navbar class="relative" />

        <!-- Sign In -->
        <div class="grid md:grid-cols-2 h-full">
            <div class="hidden md:block viecomsplsty_column viecomsplsty_left">
                <div class="vieautsigsty_clothesidbackground"></div>
            </div>
            <div class="mx-5 md:mx-10 lg:mx-32">
                <div class="space-y-3 mt-12 mb-5">
                    <p class="text-3xl font-semibold">Welcome Back!</p>
                    <p class="font-light">Please enter your email address.</p>
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="text-red-500 text-sm -mb-2">{{ errorMessage }}</div>

                <!-- Form -->
                <form @submit.prevent="handleLogin">
                    <div class="my-7">
                        <input v-model="email" type="email" placeholder="EMAIL ADDRESS" autocomplete="off"
                            class="p-4 bg-transparent border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-gray-500 transition ease-in-out duration-200">
                    </div>
                    <div>
                        <input v-model="password" type="password" placeholder="PASSWORD" autocomplete="off"
                            class="p-4 bg-transparent border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-gray-500 transition ease-in-out duration-200">
                    </div>

                    <div class="w-full text-end mt-6 mb-8">
                        <a href="" class="font-bold text-sm text-black hover:text-opacity-50 cursor-pointer">forgot
                            password?</a>
                    </div>

                    <button type="submit"
                        class="block mx-auto lg:mx-0 lg:rounded cursor-pointer text-white bg-black w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest">
                        SIGN IN
                    </button>
                </form>

                <!-- Or -->
                <div class="my-7 grid grid-cols-3 items-center">
                    <div class="h-[2px] w-3/4 bg-gray-200 mx-auto"></div>
                    <div class="text-sm text-center">
                        <p>OR SIGN IN WITH</p>
                    </div>
                    <div class="h-[2px] w-3/4 bg-gray-200 mx-auto"></div>
                </div>

                <!-- BUTTON -->
                <div class="md:grid md:grid-cols-2 gap-3">
                    <button
                        class="flex items-center gap-5 pl-5 mx-auto lg:mx-0 lg:rounded cursor-pointer text-white bg-[#3b5998] w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest mb-5 md:mb-0">
                        <img src="https://d2u7nrdrppwhsn.cloudfront.net/images/logo/fb.png"
                            class="w-5 h-5">FACEBOOK</button>
                    <button
                        class="flex items-center gap-5 pl-5 mx-auto lg:mx-0 lg:rounded cursor-pointer text-black bg-white w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest border border-gray-300">
                        <img src="https://d2u7nrdrppwhsn.cloudfront.net/images/logo/g.png"
                            class="w-5 h-5">GOOGLE</button>
                </div>

                <!-- Dont Have Account -->
                <div>
                    <router-link :to="{ name: 'register' }"
                        class="block text-sm text-center tracking-wider my-7 text-black hover:text-opacity-50 cursor-pointer">
                        DON'T HAVE AN ACCOUNT? CREATE ACCOUNT HERE!</router-link>
                </div>
            </div>
        </div>

        <!-- ChatBox -->
        <ChatBox />
    </div>
</template>


<style scoped>
/* Tambahkan ini di bagian CSS Anda */
.viecomsplsty_column.viecomsplsty_left>div {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    min-height: calc(100vh - 64px);
    width: 100%;
}

.vieautsigsty_clothesidbackground {
    background-image: url('https://d2u7nrdrppwhsn.cloudfront.net/images/signin_id_2019-02.jpg');
}
</style>