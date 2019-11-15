<template>
    <a href="#" class="post__square">
        <div class="content__post__square">
            <div class="content__img" :style="createBg">
            </div>
            <div class="content__date__title">
                <div class="content__date">
                    <slot name="day"></slot>
                    <slot name="month"></slot>
                </div>
                <div class="content__title">
                    <slot name="title"></slot>
                </div>
            </div>

        </div>
    </a>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        computed:{
            createBg(){
                return{
                    backgroundImage: "url('./dist/uploads/blog/"+ this.bg + "')"
                }
            }
        },
        props: ["bg"]
        
    }
</script>

<style lang="scss" scoped>

@import '../../styles/app.scss';


.post__square{
    width: 32%;
    margin-bottom: 30px;
    color: $black;

    .content__post__square{
        .content__img{
            height: 200px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        .content__date__title{

            
            @include isFlex(center, center);
            .content__date{
                @include isFlex(center, center, column);
                text-align: center;
                background-color: $black;
                color: $white;
                width: 30%;
                padding: 10px;

                h2{
                    font-family: 'Montserrat-Bold';
                    letter-spacing: 2px;
                    font-size: 30px;
                }
                p{
                    text-transform: uppercase;
                    font-size: 14px;
                }

            }
            .content__title{
                width: 70%;
                padding: 5px;
                h1{
                    font-size: 20px;
                    line-height: 1;
                }
            }
        }
    }
}

@media(max-width: $grid-width){
    .post__square{
        .content__post__square{
            .content__date__title{
                .content__title{
                    h1{
                        font-size: 18px;
                    }
                }
            }
        }
    }
}
@media(max-width: $grid-width-mobile){
    .post__square{
        width: 48%;

        .content__post__square{
            
            .content__date__title{

                .content__date{

                    h2{
                        font-size: 25px;
                    }
                    p{
                        font-size: 12px;
                    }

                }
                .content__title{
                    h1{
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
@media(max-width: $grid-width-mobile-xs){
    .post__square{
        width: 100%;

        .content__post__square{
            .content__img{
                height: 250px;
            }
            .content__date__title{
                .content__date{
                    h2{
                        font-size: 25px;
                    }
                    p{
                        font-size: 12px;
                    }

                }
                .content__title{
                    h1{
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>