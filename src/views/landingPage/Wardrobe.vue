<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import CardWardrobe from '@/components/CardWardrobe.vue';
import { ref } from 'vue';

const images = ref([
    {
        id: 1,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/300x450/cara-women-spring-jumpsuit-pre-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/300x450/cara-women-spring-jumpsuit-4.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 2,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/300x450/ats-the-label-afreen-blue-dress-pre-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/ats-the-label-afreen-dress-1.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 3,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/le-bijou-willow-one-shoulder-top-in-black-houndstooth-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/le-bijou-willow-one-shoulder-top-in-black-houndstooth-5.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 4,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/cotton-ink-hazel-three-tone-top--2.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/cotton-ink-hazel-three-tone-top-3.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 5,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/posh-the-label-ghea-khaky-outer-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/posh-the-label-ghea-khaky-outer-1.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 6,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/oemah-etnik-white-grey-kanya-timur-top--3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/oemah-etnik-white-grey-kanya-timur-top-4.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 7,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/fabrica-kathe-dress-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/fabrica-kathe-dress-1.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 8,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/wear-statu-quo-positano-dress--3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/wear-statu-quo-positano-dress-4.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 9,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/cloth-inc-ribbon-strap-set-dress-3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/cloth-inc-ribbon-strap-set-dress-5.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },
    {
        id: 10,
        defaultSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/renoa-kanma-outer--3.jpg',
        hoverSrc: 'https://d41eu4npam9w0.cloudfront.net/900x1350/renoa-kanma-outer-4.jpg',
        title: 'CARA WOMAN',
        desc: 'Spring Jumpsuit',
        isHovered: false
    },

]);
</script>

<template>
    <section id="wardrobe" class="mx-5 lg:mx-10 pb-12">
        <CardWardrobe :title="`Lite`" :viewAll="`#`" :images="images" />
        <CardWardrobe :title="`Premium`" :viewAll="`#`" :images="images" />
    </section>
</template>