<template>
    <div class="content__slider__home">
        <hooper :settings="hooperSettings" ref="hooper1" @slide="primera" class="hooperMain">

            <slide 
                v-for="(slide, index) in slides" 
                :key="slide.id" 
                class="item__slide"
                :style="bgSlide(index)"
            >
                <div class="content__slide">
                    <h1 class="text__bold text__white title__slide ">{{ slide.title }}</h1>
                    <p class="text__white text__slide">{{ slide.description }}</p>

                    <router-link tag="a" :to="{ name: slide.link }" class="btn">
                        Show Me More!
                    </router-link>
                </div>

            </slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-progress class="progress__slider" slot="hooper-addons"></hooper-progress>
        </hooper>
        <button class="btn nav__left" @click="changePreviousSlide">Prev</button>
        <button class="btn nav__next" @click="changeNextSlide">Next</button>
    </div>
</template>

<script>
    import { 
        Hooper,
        Slide,
        Progress as HooperProgress,
        Pagination as HooperPagination,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';

    import axios from "axios";

    export default {
        data () {
            return {
                hooperSettings: {

                    itemsToShow: 1,
                    wheelControl: false,
                    infiniteScroll: true,
                    centerMode: true,
                    breakpoints: {
                        800: {
                            centerMode: false,
                            itemsToShow: 1,
                        },
                        1000: {
                            itemsToShow: 1,
                        }
                    }
                },
                slides: []
            }
        },
        created(){

            axios.get("/data.json")
                .then( response => {
                    this.slides = response.data.home.slides
                    this.$refs.hooper1.restart()
                })
                .catch( error => {
                    console.log( error )
                })
        },
        methods: {
            changeNextSlide(){
                // console.log( Hooper)
                this.$refs.hooper1.slideNext();
            },
            changePreviousSlide(){
                // console.log( Hooper)
                this.$refs.hooper1.slidePrev();
            },
            primera(){
                console.log( this.$refs.hooper1.currentSlide )
            },

            bgSlide(index){
                return {
                    backgroundImage: "url('./dist/uploads/carousel/"+ this.slides[index].bg + "')"
                }
            }
        },
        components: {
            Hooper,
            Slide,
            HooperProgress,
            HooperPagination,
            HooperNavigation
        }
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';


.hooperMain{
    width: 100%;
    height: 100vh;

    .hooper-progress{
        bottom: 0;
        top: inherit;
        background-color: #ddd;
    }
    .hooper-pagination{
        display: none;
    }
}
.hooper-progress-inner{
    background-color: $black;
}


.item__slide{
    width: 100%;
    height: 100vh;

    @include isFlex(center, center);

    background-position: center;
    background-size: cover;

    .content__slide{
        width: 95%;
        max-width: 1000px;
        margin: 0 auto;

        .title__slide{
            font-size: 60px;
        }

        .text__slide{
            margin: 50px 0;
            font-size: 20px;
            width: 80%;
        }
    }
    &.is-active, &.is-active{

        .content__slide{

            .title__slide{
                -webkit-animation-name: slideInRight;
                animation-name: slideInRight;
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                
            }
            .text__slide{
                -webkit-animation-name: slideInUp;
                animation-name: slideInUp;
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }
            .btn{
                -webkit-animation-name: zoomIn;
                animation-name: zoomIn;
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }
        }
    }
    
}

.content__slider__home{

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

@media(max-width: $grid-width){
    .item__slide{

        .content__slide{
            max-width: 750px;
            .title__slide{
                font-size: 50px;
            }

            .text__slide{
                margin: 30px 0;
                font-size: 18px;
                width: 80%;
            }
        }
    }
    
}
@media(max-width: $grid-width-mobile){
    .item__slide{

        .content__slide{
            max-width: calc(100% - 140px);
            .title__slide{
                font-size: 50px;
            }
            .text__slide{
                font-size: 14px;
                width: 100%;
            }
        }
    }    
}
@media(max-width: $grid-width-mobile-xs){
    .item__slide{


        .content__slide{
            max-width: 95%;
            .title__slide{
                font-size: 40px;
            }
            .text__slide{
                font-size: 12px;
            }
        }
    }
    .content__slider__home{

        &>button{
            display: none;
        }
    }
    .hooperMain{


        .hooper-progress{
            display: none;
        }
        .hooper-pagination{
            display: block;
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
                            background: $black;

                        }
                    }
                }
            }
        }
    }
    
}

</style>