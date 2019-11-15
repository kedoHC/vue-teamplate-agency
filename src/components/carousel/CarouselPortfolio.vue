<template>
    <div class="content__slider__portfolio">
        <hooper :settings="hooperSettings" ref="hooper2" @slide="primera" class="hopperPortfolio">

            <slide 

                v-for="(slide, index) in slides" 
                class="item__slide__portfolio"
                :key="slide.id"
                :style="bgSlide(index)"
            >
                <div class="content__slide__portfolio">
                    <router-link tag="a" :to="{ name: 'projects'}" class="text__slide">
                        <h2 class="text__black">{{ slide.title }}</h2>
                    </router-link>
                </div>
            </slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
        <button class="btn nav__left" @click="changePreviousSlide">Prev</button>
        <button class="btn nav__next" @click="changeNextSlide">Next</button>
    </div>
</template>

<script>
    import { 
        Hooper,
        Slide,
        // Progress as HooperProgress,
        Pagination as HooperPagination,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';

    import axios from 'axios';

    export default {
        data () {
            return {
                hooperSettings: {
                    itemsToShow: 1,
                    wheelControl: false,
                    infiniteScroll: true,
                    centerMode: false,
                    breakpoints: {
                        700: {
                            itemsToShow: 2,
                        },
                        1000: {
                            itemsToShow: 4,
                        }
                    }
                },
                slides: []
            }
        },
        created(){

            axios.get("/data.json")
                .then( response => {
                    this.slides = response.data.home.ourwork.slides
                    this.$refs.hooper2.restart()
                })
                .catch( error => {
                    console.log( error );
                })

        },
        methods: {
            changeNextSlide(){
                this.$refs.hooper2.slideNext();
            },
            changePreviousSlide(){
                this.$refs.hooper2.slidePrev();
            },
            primera(){
                console.log( this.$refs.hooper2.currentSlide )
            },
            bgSlide(index){
                return {
                    backgroundImage: "url('./dist/uploads/portfolio/"+ this.slides[index].bg + "')"
                }
            }
        },
        components: {
            Hooper,
            Slide,
            HooperPagination
        }
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';


.hopperPortfolio{
    height: 500px;
    width: 95%;
    max-width: 1400px;
    margin: 50px auto 0;

    .hooper-pagination{
        display: none;
    }
}
.item__slide__portfolio{
    border: 10px solid rgba($black, 1);
    height: 500px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .content__slide__portfolio{
        position: relative;
        height: 480px;
        .text__slide{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba($white, 0.8);

            display: flex;
            justify-content: center;
            align-items: center;

            opacity: 0;
            pointer-events: none;
            transition: opacity .5s;

        }
        &:hover{
            .text__slide{
                opacity: 1;
                pointer-events:initial;
            }
        }
    }
}
.content__slider__portfolio{

    position: relative;

    &>button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &.nav__left{
            left: 0%;
        }
        &.nav__next{
            right: 0%;
        }
    }
}

@media(max-width: 1000px){
    .hopperPortfolio{
        height: 600px;
        margin: 40px auto 0;
    }

    .item__slide__portfolio{
        height: 600px;

        .content__slide__portfolio{
            height: 580px;
        }   
    }
}
@media(max-width: 700px){
    .hopperPortfolio{

        .hooper-pagination{
            display: block;
            bottom: -50px;
            ol{
                li{
                    .hooper-indicator {
                        margin: 0 2px;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        border: none;
                        padding: 0;
                        background-color: rgba($white, 0.5);
                        cursor: pointer;

                        &.is-active, &:hover{
                            background: $white;
                        }
                    }
                }
            }
        }
    }
    .content__slider__portfolio{

        &>button{
            display: none;
        }
    }
}
@media(max-width: $grid-width-mobile){

    .item__slide__portfolio{

        .content__slide__portfolio{

            &:hover{
                opacity: 0.6;
            }
            .text__slide{
                opacity: 0.6;
                pointer-events:initial;
            }
        }
    }
}
@media(max-width: $grid-width-mobile-xs){
    .hopperPortfolio{
        height: 400px;
        width: 100%;
    }
    .item__slide__portfolio{
        height: 400px;
        border: 0;

        .content__slide__portfolio{
            height: 400px;
        }   
    }
}

</style>