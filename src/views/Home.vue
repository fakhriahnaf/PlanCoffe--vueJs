<template>
    <div id="Home">
   <!-- Header Section Begin -->
    <Header/>
    <BannerHome/>
    <RecomendedSection/>
    <InstagramSection/>
    <Footer/>


    </div>
</template>

<script>
import Header from '../components/Header.vue'
import BannerHome from '../components/BannerHome.vue';
import RecomendedSection from '../components/RecomendedSection.vue';
import InstagramSection from '../components/InstagramSection.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'Home',
    components: {
        Header,
        BannerHome,
        RecomendedSection,
        InstagramSection,
        Footer,
    }
};
</script>