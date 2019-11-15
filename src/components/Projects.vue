<template>
    <div class="products">

        <HeadBanner :title="mainDataPage.title" :mask="mainDataPage.maskOnHeadBanner" :bg="mainDataPage.bgHeadBanner" />

        <Project v-for="(project, index) in projects"
            :key="project.id" 
            :bg="project.img" 
            :reverse="reverseProject(index)"
            >
            <h2 class="subtitle" slot="title">{{ project.title }}</h2>
            <p slot="intro">{{ project.description }}</p>
            <ul class="list__features" slot="list">
                <li v-for="item in project.list" :key="item.id">
                    <p>{{ item.item }}</p>
                </li>
            </ul>
        </Project>
    </div>
</template>

<script>

    import axios from 'axios';

    import HeadBanner from './sections/HeadBanner.vue';
    import Project from './sections/Project.vue';

    export default {

        data(){
            return{
                mainDataPage: {
                    title: "Projects",
                    bgHeadBanner: "headBanner-2.png",
                    maskOnHeadBanner: true,
                },
                projects: []
            }
        },
        created(){

            axios.get("/data.json")
                .then( response => {
                    this.projects = response.data.home.projects
                })
                .catch( error => {
                    console.log( error );
                })
            
        },
        methods: {

            reverseProject( index ){
                var reverse
                ( index % 2 == 0) ? reverse = false : reverse = true;
                return reverse
            }

        },
        components: {
            HeadBanner,
            Project
        }
        
    }
</script>

<style lang="scss" scoped>

</style>
