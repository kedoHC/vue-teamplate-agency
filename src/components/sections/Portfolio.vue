

<template>
    <div class="porfolio">
        <div class="content__portfolio">
            <h2 class="subtitle center bg__dark text__white">{{ titleSection }}</h2>
            <p class="text__white text__center">{{ descriptionSection }}</p>
            <CarouselPortfolio />
        </div>
    </div>
</template>

<script>

    import CarouselPortfolio from '../carousel/CarouselPortfolio.vue'

    import axios from 'axios'

    export default {
        data(){
            return{
                titleSection: "",
                descriptionSection : ""

            }
        },
        created(){

            axios.get("/data.json")
                .then( response => {
                    this.titleSection = response.data.home.ourwork.title;
                    this.descriptionSection = response.data.home.ourwork.description;

                })
                .catch( error => {

                })

        },
        components: {
            CarouselPortfolio
        }
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';


.porfolio{
    .content__portfolio{
        padding: 100px 0;
        background: rgba($black, 1);

        p{
            width: 50%;
            margin: 0 auto;
        }

    }
}
@media(max-width: $grid-width-mobile){
    .porfolio{
        .content__portfolio{
            p{
                font-size: 14px;
            }

        }
    }
    
}
@media(max-width: $grid-width-mobile-xs){
    
}

</style>