<template>
    <div class="contact__map">

        <h2 class="subtitle center">¡We are physically here!</h2>
        <div class="content__contact__map">


            <div class="left__side">

                <h2 class="subtitle">AgencyTemplate.com.mx</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt error sed temporibus et. Aperiam, minima dicta enim amet repellendus maiores!</p>
                <ul>
                    <li><p>Name of some street No. 208 Col. Important dude, CP 091209</p></li>
                    <li><p>México City, México</p></li>
                    <li><p>+21 3213 321 122</p></li>
                    <li><p>+21 3213 321 123</p></li>
                    <li><p>Contact@Agency.com.mx</p></li>
                    <li><p>CustomerService@Agency.com.mx</p></li>
                    <li><p>RH@Agency.com.mx</p></li>
                </ul>
            </div>
            <div class="right__side">

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '../../styles/app.scss';

.contact__map{
    background-color: $white; 

    .content__contact__map{
        @include section(100px);
        @include isFlex(center, center);


        .left__side{

            width: 50%;
            padding-right: 50px;

            ul{
                margin-top: 20px;
                li{
                    p{
                        
                        &:before{
                            content: "";
                            width: 5px;
                            height: 5px;
                            display: inline-block;
                            background-color: $black;
                            border-radius: 50%;
                            margin-right: 10px;
                            position: relative;
                            top: -3px;
                        }
                    }
                }
            }

        }
        .right__side{
            width: 50%;
            height: 450px;
            @include bgImage("../../assets/GoogleMap.jpg", no-repeat, cover);

        }

    }
}
@media(max-width: $grid-width){
    
}
@media(max-width: $grid-width-mobile){
    .contact__map{
        
        .content__contact__map{
            @include section(50px);
            @include isFlex(center, center, column);


            .left__side{

                width: 100%;
                padding-right: 0px;
                margin-bottom: 30px;

                p{
                    font-size: 14px;
                }

                ul{
                    margin-top: 20px;
                    
                }
            }
            .right__side{
                width: 100%;
                height: 350px;
                @include bgImage("../../assets/GoogleMap.jpg", no-repeat, cover);
            }
        }
    }
}
@media(max-width: $grid-width-mobile-xs){
    
}


</style>