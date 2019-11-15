<template>
    <div class="blog">
        <HeadBanner :title="mainDataPage.title" :mask="mainDataPage.maskOnHeadBanner" :bg="mainDataPage.bgHeadBanner" />
        <div class="squares__posts">
            <div class="content__squares__posts">
                <PostSquare v-for="(post, index) in posts" :key="post.id" :bg="post.bg">
                    <h2 slot="day">{{ post.day }}</h2>
                    <p slot="month">{{ post.month }}</p>
                    <h1 slot="title">{{ titlePostSplit[index].title }}</h1>
                </PostSquare>
            </div>
        </div>

    </div>
</template>

<script>
    import HeadBanner from './sections/HeadBanner.vue';
    import PostSquare from './sections/PostSquare.vue';

    export default {
        data(){
            return{
                mainDataPage: {
                    title: "Blog",
                    bgHeadBanner: "headBanner-1.jpg",
                    maskOnHeadBanner: true,
                },
                posts: [
                    {
                        id: 1,
                        title: "A Few Steps for Perfect Web Navigation",
                        day: 25,
                        month: "april",
                        year: 2019,
                        bg: "post-1.jpg"
                    },
                    {
                        id: 2,
                        title: "Going Freelance: Pos And Cons of Changing the Way You Work",
                        day: 1,
                        month: "may",
                        year: 2019,
                        bg: "post-2.jpg"
                    },
                    {
                        id: 3,
                        title: "Popular Techniques for Fine-Tuning UX with Color",
                        day: 28,
                        month: "may",
                        year: 2019,
                        bg: "post-3.jpg"
                    },
                    {
                        id: 4,
                        title: "Popular Techniques for Fine-Tuning UX with Color",
                        day: 2,
                        month: "jun",
                        year: 2019,
                        bg: "post-4.jpg"
                    },
                    {
                        id: 5,
                        title: "Popular Techniques for Fine-Tuning UX with Color",
                        day: 16,
                        month: "jun",
                        year: 2019,
                        bg: "post-5.jpg"
                    },
                    {
                        id: 6,
                        title: "Popular Techniques for Fine-Tuning UX with Color",
                        day: 10,
                        month: "jul",
                        year: 2019,
                        bg: "post-6.jpg"
                    }

                ]
            }
        },
        computed:{

            titlePostSplit(){

                var lengthPosts = this.posts.length;
                var titles = []
                var titleRecortado

                for(let x = 0; x < lengthPosts; x++ ){

                    if (this.posts[x].title.length > 35){

                        titleRecortado = this.posts[x].title.slice(0, 35);
                        titles.push({
                            title: titleRecortado + " [...]"
                        })

                    }else{

                        titles.push({
                            title: this.posts[x].title
                        })
                    }
                }
                return titles
            }

        },
        components: {
            HeadBanner,
            PostSquare
        }
    }
</script>

<style lang="scss" scoped>

@import '../styles/app.scss';

.squares__posts{
    background: $white;

    .content__squares__posts{
        @include section(100px);
        @include isFlex(center, space-between);
    }
}

</style>