<template>
    <div class="features">
        <div class="content__features" :class="{'reverse': reverse}">
            <div class="left__side">
                <slot class="subtitle" name="title"></slot>
                <slot name="intro"></slot>
                <slot name="list"></slot>
            </div>
            <div class="right__side" :style="createBg"></div>
        </div>
    </div>
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
                    backgroundImage: "url('./dist/uploads/projects/"+ this.bg + "')"
                }
            }
        },
        props: ['bg', "reverse"]
    
    }
</script>

<style lang="scss" >

@import '../../styles/app.scss';

.features{
    background: $white;

    .content__features{
        @include section(50px);
        @include isFlex(center, center);

        &.reverse{
            .left__side{
                order: 2;
                padding-right: 0px;
                padding-left: 50px;
            }
            .right__side{
                order: 1;
            }
        }

        .left__side{
            width: 50%;
            padding-right: 50px;

            ul{
                margin-top: 50px;
                li{
                    margin: 10px 0;

                    &:before{
                        content: "";
                        display: inline-block;
                        width: 5px;
                        height: 5px;
                        background-color: $black;
                        border-radius: 50%;
                        margin-right: 10px;
                        position: relative;
                        top: -3px;
                    }
                    p{
                        display: inline-block;
                    }
                }
            }
        }
        .right__side{
            width: 50%;
            height: 500px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

        }
    }
}
@media(max-width: $grid-width-mobile){

    .features{
        .content__features{
            @include section(50px);

            &.reverse{
                .left__side{
                    order: 1;
                    padding-right: 0px;
                    padding-left: 0px;
                }
                .right__side{
                    order: 2;
                }
            }

            .left__side{
                width: 100%;
                padding-right: 0;
                p{
                    font-size: 14px;
                }
                ul{
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                .subtitle{
                    text-align: center;
                    &:after{
                        margin: 20px auto 0;
                    }
                }
            }
            .right__side{
                width: 100%;
                height: 400px;

            }
        }
    }
    
}
@media(max-width: $grid-width-mobile-xs){
    .features{
        .content__features{
            @include section(50px);

            .left__side{
                width: 100%;
                p{
                    font-size: 12px;
                }

                ul{
                    margin-top: 30px;
                    margin-bottom: 30px;

                }
            }
            .right__side{
                width: 100%;
                height: 400px;

            }
        }
    }    
}

</style>