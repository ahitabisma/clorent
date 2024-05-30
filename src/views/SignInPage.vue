<script setup lang="ts">
import ChatBox from '@/components/ChatBox.vue';
import Navbar from '@/components/Navbar.vue';

</script>
<template>
    <div class="max-h-svh md:h-svh">
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

                <!-- Form -->
                <form>
                    <div class="my-7">
                        <input type="email" placeholder="EMAIL ADDRESS" autocomplete="off"
                            class="p-4 bg-transparent border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-gray-500 transition ease-in-out duration-200">
                    </div>
                    <div>
                        <input type="password" placeholder="PASSWORD" autocomplete="off"
                            class="p-4 bg-transparent border border-gray-300 rounded w-full text-sm focus:outline-none focus:border-gray-500 transition ease-in-out duration-200">
                    </div>

                    <div class="w-full text-end mt-6 mb-8">
                        <a href="" class="  font-bold text-sm  text-black hover:text-opacity-50 cursor-pointer">forgot
                            password?</a>
                    </div>

                    <button
                        class="block mx-auto lg:mx-0 lg:rounded cursor-pointer text-white bg-black w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest">SIGN
                        IN</button>
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
                        class="flex items-center gap-5 pl-5 mx-auto lg:mx-0 lg:rounded cursor-pointer text-white bg-[#3b5998] w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest mb-5 md:mb-0"><img
                            src="https://d2u7nrdrppwhsn.cloudfront.net/images/logo/fb.png"
                            class="w-5 h-5">FACEBOOK</button>
                    <button
                        class="flex items-center gap-5 pl-5 mx-auto lg:mx-0 lg:rounded cursor-pointer text-black bg-white w-full text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest border border-gray-300"><img
                            src="https://d2u7nrdrppwhsn.cloudfront.net/images/logo/g.png"
                            class="w-5 h-5">GOOGLE</button>
                </div>

                <!-- Dont Have Account -->
                <div>
                    <p class="text-sm text-center tracking-wider my-7 text-black hover:text-opacity-50 cursor-pointer">
                        DON'T HAVE AN ACCOUNT? CREATE ACCOUNT HERE!</p>
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