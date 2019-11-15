<template>
    <div class="head__banner" :style="createBg">

        <div v-if="mask" class="mask"></div>

        <div class="content__head__banner">

            <h1>{{ title }}</h1>

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
                    backgroundImage: "url('./dist/uploads/headBanner/"+ this.bg + "')"
                }
            }
        },
        props: ['title', 'mask', 'bg']
        
    }
</script>

<style lang="scss" >

@import '../../styles/app.scss';


.head__banner{
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba($black, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .content__head__banner{
        height: 50vh;
        min-height: 400px;
        @include section(0px);
        @include isFlex(center, center);
        position: relative;
        z-index: 2;

        h1{
            padding: 10px 30px;
            background-color: $white;
        }
    }
}

</style>