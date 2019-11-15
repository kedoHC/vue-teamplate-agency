
<template>
    <div class="home">
        <Carousel/>
        <Features/>
        <Portfolio/>
        <Team/>
        <Clients/>
    </div>
</template>

<script>

    import Carousel from './carousel/Carousel.vue'
    import Features from './sections/Features.vue'
    import Portfolio from './sections/Portfolio.vue'
    import Team from './sections/Team.vue'
    import Clients from './sections/Clients.vue'

    export default {

        components: {
            Carousel,
            Features,
            Portfolio,
            Team,
            Clients
        }
    }
</script>

<style lang="scss">

@import '../styles/app.scss';


</style>