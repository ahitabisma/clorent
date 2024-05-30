<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Facebook from '@/components/icons/Facebook.vue';
import Instagram from '@/components/icons/Instagram.vue';
import Youtube from '@/components/icons/Youtube.vue';
</script>

<template>
    <section id="footer"
        class="bg-black text-white text-xs px-7 lg:px-14 space-y-7 py-8 tracking-widest lg:grid lg:grid-cols-5 lg:space-y-0">

        <!-- Prouct & Services -->
        <div class="space-y-5 ">
            <p class="font-bold text-sm">PRODUCT & SERVICES</p>
            <div class="flex flex-col space-y-3">
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">SUBSCRIPTION</a>
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">ON-DEMAND</a>
            </div>
        </div>

        <!-- Company -->
        <div class="space-y-5">
            <p class="font-bold text-sm">THE COMPANY</p>
            <div class="flex flex-col space-y-3">
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">CAREERS</a>
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">TERMS AND CONDITIONS</a>
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">PRIVACY</a>
            </div>
        </div>

        <!-- Help -->
        <div class="space-y-5">
            <p class="font-bold text-sm">HELP</p>
            <div>
                <a href="" class="hover:text-opacity-50 text-white transition ease-in-out">FAQ</a>
            </div>
        </div>

        <!-- Contact Us -->
        <div class="space-y-5 lg:pb-7">
            <div class="space-y-5">
                <p class="font-bold text-sm">CONTACT US</p>
                <div>
                    <a href=""
                        class="flex items-center gap-2 underline hover:text-opacity-50 text-white transition ease-in-out">
                        <img src="/whatsapp.png" alt="" class="w-5 h-5">
                        +6288 2540 5600</a>
                </div>
            </div>

            <!-- Working Hour -->
            <div class="space-y-5">
                <p class="font-bold text-sm">WORKING HOUR</p>
                <div>
                    <p>Monday - Friday 10 AM - 7 PM</p>
                </div>
            </div>
        </div>

        <!-- Download Playstore -->
        <div class="hidden lg:block lg:space-y-5">
            <p class="font-bold text-sm">DOWNLOAD OUR APP</p>
            <div class="flex space-x-4">
                <a href="https://itunes.apple.com/sg/app/styletheory/id1070813998?mt=8" target="_blank"
                    class="vieglofoosty_store"><img loading="lazy"
                        src="https://d2u7nrdrppwhsn.cloudfront.net/images/icons/store/apple.png" class="w-28"></a>
                <a href="https://play.google.com/store/apps/details?id=com.styletheory.android&amp;amp;hl=en"
                    target="_blank" class="vieglofoosty_store"><img loading="lazy"
                        src="https://d2u7nrdrppwhsn.cloudfront.net/images/icons/store/google.png" class="w-28"></a>
            </div>
        </div>

        <!-- Line -->
        <div class="h-[2px] w-full bg-gray-300 bg-opacity-75 lg:col-span-5"></div>

        <div
            class="space-y-5 lg:flex lg:flex-row-reverse lg:col-span-5 lg:justify-end lg:items-center lg:space-y-0 lg:pt-5">
            <!-- Icon -->
            <div class="flex space-x-4 justify-center lg:space-x-2 lg:ml-3">
                <Facebook class="bg-white p-2 rounded-full lg:p-1 lg:w-6 lg:h-6" />
                <Instagram class="bg-white p-2 rounded-full lg:p-1 lg:w-6 lg:h-6" />
                <Youtube class="bg-white p-2 rounded-full lg:p-1 lg:w-6 lg:h-6" />
            </div>

            <!-- All Right Reserved -->
            <div class="text-center space-y-2 lg:flex lg:space-y-0">
                <p>© 2024 StyleTheory Private Limited. </p>
                <p> All Rights Reserved.</p>
            </div>
        </div>
    </section>
</template>