<template>
    <div class="our__team">
        <div class="content__our__team">
            <h2 class="subtitle center">Our Team</h2>
            <div class="cards__team">
                <div class="card__team">
                    <div class="content__img">
                        <img src="../../assets/home/team/team-1.jpg" alt="">
                    </div>
                    <div class="content__info">
                        <p class="txt__bold">Jon Carter</p>
                        <small>CEO</small>
                        <div class="social">
                            <a href="#"><img src="../../assets/icons/fb.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/tw.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/g.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/pin.png" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="card__team">
                    <div class="content__img">
                        <img src="../../assets/home/team/team-2.jpg" alt="">
                    </div>
                    <div class="content__info">
                        <p class="txt__bold">Emily Smith</p>
                        <small>Leading Designer</small>
                        <div class="social">
                            <a href="#"><img src="../../assets/icons/fb.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/tw.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/g.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/pin.png" alt=""></a>
                        </div>
                    </div>
                </div>
                <div class="card__team">
                    <div class="content__img">
                        <img src="../../assets/home/team/team-3.jpg" alt="">
                    </div>
                    <div class="content__info">
                        <p class="txt__bold">Sara Dresner</p>
                        <small>Leading Developer</small>
                        <div class="social">
                            <a href="#"><img src="../../assets/icons/fb.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/tw.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/g.png" alt=""></a>
                            <a href="#"><img src="../../assets/icons/pin.png" alt=""></a>
                        </div>
                    </div>
                </div>
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

.our__team{
    background-color: #eee;
    .content__our__team{
        @include section(100px);

        .cards__team{
            margin-top: 70px;
            @include isFlex(center, space-evenly);

            .card__team{
                width: 30%;
                background-color: $white;
                min-width: 300px;
                margin: 10px;
                .content__info{
                    text-align: center;
                    padding: 20px;


                    .social{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-top: 30px;
                        a{
                            margin: 0 10px;
                            img{
                                width: 16px;
                            }
        
                        }
                    }
                }
    
            }
        }
    }
}



</style>