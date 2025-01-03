<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Footer from './landingPage/Footer.vue';
import Loader from '@/components/Loader.vue';

const faq = ref([
    {
        id: 1,
        question: 'How does Style Theory work?',
        answer: 'The Style Theory Membership is a monthly plan that allows you to rent from a wide collection of designer clothes.',
    },
    {
        id: 2,
        question: 'What condition are the items in?',
        answer: 'Our luxury dry-cleaner, uses an extensive 7-stage cleaning process that combines 40 years of experience in fabric care with advanced dry cleaning equipment. We professionally maintain and inspect all of our items so they arrive in like-new condition.',
    },
    {
        id: 3,
        question: 'How much is the subscription & what kind of clothes do you have available for rent?',
        answer: `Access a wide range of designer wear depending on your plan:
Lite: Select from a range of stylish everyday casual looks that will give your daily look that added boost
Lite Starter (3 items / month) = Rp 290.000
Lite Capsule (6 items / month) = Rp 390.000 
Lite Essentials (9 items / month) = Rp 490.000
Premium: Access exclusive Premium collection that will bring your look to the next level. Always be the best dressed no matter the occasion.
Premium Starter (3 items / month) = Rp 440.000
Premium Capsule (6 items / month) = Rp 690.000 
Premium Essentials (9 items / month) = Rp 890.000
`,
    },
    {
        id: 4,
        question: 'Do you carry my sizes?',
        answer: 'Our growing wardrobes are available in sizes ranging from XXS to XL. We have added a Size Recommendation feature to help you select your best fit within our app. Download the app and start exploring!',
    },
    {
        id: 5,
        question: 'Do I have to pay for shipping?',
        answer: 'Nope! Shipping is FREE for both deliveries and returns.',
    },
    {
        id: 6,
        question: 'Do I have to pay for laundry or do it myself?',
        answer: 'Who likes laundry? Leave that to us! We handle the dry cleaning and laundry for all Style Theory items, so just place your used garments into the pre-paid return bag provided once you are ready to return them. Every Style Theory piece is professionally dry cleaned and maintained by experts dry cleaner in Jakarta.',
    },
    {
        id: 7,
        question: 'How do I exchange the items for something new?',
        answer: 'Whenever you are ready to get something new, place all 3 items back in the box before sealing it in the pre-paid return bag provided. You can then schedule a pickup through your mobile app. Once we receive your return, you will be prompted to choose your next 3 items!',
    },
    {
        id: 8,
        question: 'Can I rent without committing to monthly subscription?',
        answer: 'Yes, we now provide access for you to rent per piece without any subscription, through Style Theory On Demand, our one time rental service. You can access the service here.',
    },
    {
        id: 9,
        question: 'What clothes should you wear in Indonesia?',
        answer: 'Indonesia is a tropical country that feels warm and humid all year round, so lightweight clothes work best. You can get away with dressing more casually in Indonesia, but be respectful and mindful of not showing too much skin as its population is predominantly Muslim.',
    },
    {
        id: 10,
        question: 'Is there a dress code in Indonesia?',
        answer: 'There is no dress code in Indonesia, but locals tend to dress more conservatively. The kebaya, batik, and sarong are traditional clothes worn by Indonesian people.',
    },
    {
        id: 11,
        question: 'What do tourists wear in Bali?',
        answer: 'Beach wear is popular with tourists in Bali - think shorts, summer dresses, sandals, and slippers. Comfortable, breezy clothes are preferred due to the tropical climate',
    },
])

const luxeFaq = ref([
    {
        id: 1,
        question: 'What is The Luxe Collection?',
        answer: 'The Luxe collection is a limited selection of Apparel that require a top-up fee. The top-up is chargeable after delivery is scheduled and will allow you to rent the apparel for up to 30 days. The charge will apply for every 30-day period until the apparel is returned. Our team will contact you prior to each charge for your confirmation.'
    },
    {
        id: 2,
        question: 'What is the difference between On-demand Rental and Luxe Collection?',
        answer: 'Style Theory On Demand is a rental service that let you rent one item at a time from hundreds of designer pieces with an affordable rental fee which allows you to rent the time by 4, 8, and 14 days. While luxe collections are a limited selection of Apparel that require a top-up fee which only is provided for Subscribers. The Subscribers can hold this item as long as the box is set to be returned by Subscribers.'
    },
    {
        id: 3,
        question: 'How long can I rent the luxe collection for?',
        answer: 'The Luxe Collection is a limited selection of Apparel that require a top-up fee on top of the monthly subscription charge. The top-up is chargeable after delivery is scheduled and will allow you to rent the apparel for up to 30 days. The charge will apply for every 30-day period until the apparel is returned. Our team will contact you prior to each charge for your confirmation.'
    },
    {
        id: 4,
        question: 'Does renting an luxe collection mean that I am able to get 4 pieces in a box instead of 3?',
        answer: 'No, you will still receive three items in total with one of the items being your Luxe Collection.'
    },
    {
        id: 5,
        question: 'What if the size of luxe collection that I order does not fit me? Can I change it?',
        answer: 'Yes, you can exchange the size for one time by contacting our Customer Support and we will arrange the swap for you'
    },
    {
        id: 6,
        question: 'What if I would like to cancel my luxe collection order and instead requesting the regular items to be sent?',
        answer: 'We will try our best to assist with cancellations but it may or may not be possible depending on whether the order has been processed. Please reach out to our CX agent as soon as you would like to cancel.'
    },
])

const isLoading = ref(true)
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
})
</script>

<template>
    <div>
        <!-- Loader -->
        <Loader v-if="isLoading" />
        <div class="mx-14 md:mx-24 lg:mx-32 my-12 space-y-5">
            <div v-for="(item, index) in faq" :key="index">
                <p class="font-bold ">{{ item.question }}</p>
                <p class="text-sm mt-5">{{ item.answer }}</p>
            </div>
            <div v-for="(item, index) in luxeFaq" :key="index">
                <p class="font-bold ">{{ item.question }}</p>
                <p class="text-sm mt-5">{{ item.answer }}</p>
            </div>
        </div>
        <Footer />
    </div>
</template>