<template>
    <div class="about">
        <HeadBanner :title="mainDataPage.title" :mask="mainDataPage.maskOnHeadBanner" :bg="mainDataPage.bgHeadBanner" />

        <div class="aboutus">
            <div class="content__aboutus">
                <h2 class="subtitle center">Modus operandy</h2>

                <p class="intro__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa explicabo quibusdam voluptatum blanditiis ipsam illum porro cumque repellendus inventore placeat ipsum quis, nostrum facere officiis quo. Quia explicabo placeat quae non assumenda? Laudantium tempore soluta adipisci, repudiandae, amet nihil expedita, magnam voluptatibus animi quia hic quis praesentium omnis provident possimus quibusdam. Ducimus voluptatem, molestias fuga, iste voluptatum rem quo consequatur, fugiat eos culpa sapiente nostrum. Pariatur dicta magni asperiores voluptatum voluptas veritatis, incidunt at, excepturi beatae accusantium, accusamus eveniet. Cupiditate odit ea et beatae veritatis a saepe sed vero tenetur repudiandae, tempore obcaecati atque, voluptatem dolores quia error dolore fugit corporis! Itaque cumque repellendus saepe tempore illum, consequuntur dolorum ex ipsum velit, et ea, earum sequi voluptatem modi veritatis unde obcaecati omnis nulla. Architecto, accusantium. Perspiciatis nulla, dicta nemo necessitatibus deleniti quas dignissimos autem! Vitae eveniet neque veniam. Molestias amet harum numquam natus, id eveniet fuga ipsa! Necessitatibus ut illo eligendi illum inventore fuga itaque at quidem. Placeat obcaecati voluptas amet error maiores? Repellendus, voluptates perspiciatis? Aliquid nesciunt provident et temporibus quis est, reprehenderit nisi modi iste dolorum saepe fuga voluptatum id labore? Neque dicta dolorem perferendis similique eveniet? Neque tempore repellendus soluta suscipit delectus, velit aut voluptatibus dicta nihil?</p>
            </div>
        </div>

        <div class="banner__about__us">
            <h2 class="subtitle center bg__dark text__white">Never stop learning!</h2>
        </div>

        <div class="aboutus">
            <div class="content__aboutus">
                <h2 class="subtitle center">We work together!</h2>

                <p class="intro__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa explicabo quibusdam voluptatum blanditiis ipsam illum porro cumque repellendus inventore placeat ipsum quis, nostrum facere officiis quo. Quia explicabo placeat quae non assumenda? Laudantium tempore soluta adipisci, repudiandae, amet nihil expedita, magnam voluptatibus animi quia hic quis praesentium omnis provident possimus quibusdam. Ducimus voluptatem, molestias fuga, iste voluptatum rem quo consequatur, fugiat eos culpa sapiente nostrum. Pariatur dicta magni asperiores voluptatum voluptas veritatis, incidunt at, excepturi beatae accusantium, accusamus eveniet. Cupiditate odit ea et beatae veritatis a saepe sed vero tenetur repudiandae, tempore obcaecati atque, voluptatem dolores quia error dolore fugit corporis! Itaque cumque repellendus saepe tempore illum, consequuntur dolorum ex ipsum velit, et ea, earum sequi voluptatem modi veritatis unde obcaecati omnis nulla. Architecto, accusantium. Perspiciatis nulla, dicta nemo necessitatibus deleniti quas dignissimos autem! Vitae eveniet neque veniam. Molestias amet harum numquam natus, id eveniet fuga ipsa! Necessitatibus ut illo eligendi illum inventore fuga itaque at quidem. Placeat obcaecati voluptas amet error maiores? Repellendus, voluptates perspiciatis? Aliquid nesciunt provident et temporibus quis est, reprehenderit nisi modi iste dolorum saepe fuga voluptatum id labore? Neque dicta dolorem perferendis similique eveniet? Neque tempore repellendus soluta suscipit delectus, velit aut voluptatibus dicta nihil?</p>
            </div>
        </div>


    </div>
</template>

<script>
    import HeadBanner from './sections/HeadBanner.vue';

    export default {
        data(){
            return{
                mainDataPage: {
                    title: "About Us",
                    bgHeadBanner: "headBanner-4.jpg",
                    maskOnHeadBanner: true,
                }
            }
        }
        ,
        components: {
            HeadBanner
        }

    }
</script>

<style lang="scss">

@import '../styles/app.scss';

.aboutus{
    background-color: $white;
    .content__aboutus{
        @include section(100px);
        @include isFlex(center, center);

        .intro__text{
            text-align: justify;
        }

    }
}
.banner__about__us{
    height: 600px;
    @include bgImage("../assets/carousel/slide-1.jpg", $size: cover);
    @include isFlex(center, center);

    h2{
        font-size: 50px;
    }
}

</style>