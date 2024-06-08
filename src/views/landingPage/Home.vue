<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="home" class="h-full lg:bg-red-100">
    <div class="lg:grid lg:grid-cols-2">

      <!-- Desciption Get Started-->
      <div class="absolute z-[2] lg:relative lg:flex items-center h-full w-full">
        <div
          class="mx-auto mt-[25rem] md:mt-[30rem] bg-red-100 md:w-96 w-[88%] px-8 pt-5 pb-8 rounded lg:w-full lg:mx-20 lg:-mt-14 lg:px-0">
          <p class="font-semibold lg:text-4xl lg:leading-normal text-2xl text-center lg:text-left">Wear new clothes
            every week
            without regret</p>

          <div class="text-center leading-tight my-6 lg:mb-7 lg:text-left lg:mr-44">
            <p class="">Try smarter way to stay in style from our 23,000+ designer clothes. Rent starting from
              <span class="font-bold">IDR 290,000/month.</span>
              #WaktunyaBerubah
            </p>
          </div>

          <button
            class="block mx-auto lg:mx-0 lg:rounded cursor-pointer text-white bg-black px-20 text-center py-[10px] rounded-sm hover:opacity-60 transition ease-in-out text-sm tracking-widest">GET
            STARTED</button>
        </div>
      </div>

      <!-- Image -->
      <div class="relative overflow-hidden h-[32rem] md:h-[36rem] lg:block lg:h-auto">
        <!-- <img
          src="https://images.ctfassets.net/c98fnax8301d/Dg42nhXGrJxPEhncGif3C/33c4467ea2b3a8d735562c21fd7a7f93/lp_ramadan_2022_b.jpg"
          alt="" loading="lazy" class="transform scale-[1.6] md:scale-100 w-full pt-24 md:pt-0"> -->
        <img
          src="https://i.pinimg.com/474x/b8/dd/88/b8dd8805d2cf93ee43d760206288fdfe.jpg"
          alt="" loading="lazy" class="transform scale-[1.6] md:scale-100 w-full pt-24 md:pt-0">
      </div>
    </div>

    <!-- Services (Free Dry Cleaning, Free Delivery, Cancel Anytime) -->
    <div
      class="bg-white h-full flex justify-around lg:justify-normal mt-48 md:mx-14 md:mt-56 lg:-mt-24 lg:z-[4] lg:relative lg:mx-36 lg:rounded-md lg:p-5">
      <div class="w-min md:w-full space-y-3 lg:space-y-0 h-full lg:flex lg:items-center">
        <img loading="lazy"
          src="https://images.ctfassets.net/c98fnax8301d/65AVZ0MoVEMirNUufuYewz/7028fa81ec2c63e8e0131c8802cedb74/laundry.png"
          class="w-8 h-8 md:h-10 md:w-10 lg:w-14 lg:h-14 mx-auto">
        <p class="line-clamp-2 text-xs md:text-base text-center font-semibold">FREE DRY CLEANING</p>
      </div>
      <div class="hidden lg:block bg-black h-14 ml-10 w-[1px]"></div>
      <div class="w-min md:w-full space-y-3 lg:space-y-0 h-full lg:flex lg:items-center">
        <img loading="lazy"
          src="https://images.ctfassets.net/c98fnax8301d/3X9bEdjewHlorWvr7YD7CF/a903f6227afa49168b65ac322202897b/van.png"
          class="w-8 h-8 md:h-10 md:w-10 lg:w-14 lg:h-14 mx-auto">
        <p class="line-clamp-2 text-xs md:text-base text-center font-semibold">FREE DELIVERY</p>
      </div>
      <div class="hidden lg:block bg-black h-14 ml-10 w-[1px]"></div>
      <div class="w-min md:w-full space-y-3 lg:space-y-0 h-full lg:flex lg:items-center">
        <img loading="lazy"
          src="https://images.ctfassets.net/c98fnax8301d/4lC64JCpn4RNjSIgx0q5Zv/2ef37f4472964e71a059ed79ce318c41/cancel.png"
          class="w-8 h-8 md:h-10 md:w-10 lg:w-14 lg:h-14 mx-auto">
        <p class="line-clamp-2 text-xs md:text-base text-center font-semibold">CANCEL ANYTIME</p>
      </div>
    </div>

  </section>
</template>
