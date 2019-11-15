<template>
    <div class="features">
        <div class="content__features">
            <div class="left__side">
                <!-- <h2 class="subtitle">Our Feautures</h2>
                <p>Our mission at Grand is to provide advanced and innovative web design and web development of the highest quality for all of our clients.</p> -->

                <h2 class="subtitle">{{ this.featuresTitle }}</h2>
                <p>{{ this.featuresDescription }}</p>

                <ul class="list__features">
                    <li><p>Good relationships with clients & employees</p></li>
                    <li><p>Integrity in all we do to achieve full potential</p></li>
                    <li><p>Cut expenses without sacrificing quality</p></li>
                    <li><p>Integrating innovations into every project</p></li>
                </ul>

            </div>
            <div class="right__side"></div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';

    export default {

        data(){
            return{
                featuresTitle: "",
                featuresDescription: "",

            }
        },
        created(){
            axios.get("/data.json")
                .then( response => {
                    this.featuresTitle = response.data.home.features.title
                    this.featuresDescription = response.data.home.features.description
                })
                .catch( error => {
                    console.log(error);
                })
        }
        
    }
</script>

<style lang="scss" >

@import '../../styles/app.scss';

.features{
    background: $white;
    .content__features{
        @include section(100px);
        @include isFlex(center, center);

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
            @include bgImage('../../assets/home/work-team.jpg', $size: cover);
            height: 500px;

        }
    }
}
@media(max-width: $grid-width-mobile){

    .features{
        .content__features{
            @include section(50px);

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