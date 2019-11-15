<template>
    <div class="our__clients">
        <div class="content__our__clients">
            <h2 class="subtitle center">Our Clients</h2>
            <div class="content__cards__clients">
                <a 
                    v-for="(client, index) in clients"
                    :key="client.id"
                    :href="client.url" 
                    class="client__card text__black"
                    target="_blank"
                >
                    <img 
                        :src="imgClients( index )" 
                    alt="">

                    <p class="name__client txt__bold">{{ client.title }}</p>

                    <p class="desc__client">{{ client.description }}</p>

                    <small>{{ client.url }}</small>
                </a>

            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        data(){
            return{
                clients: []
            }
        },
        methods: {
            imgClients( index ){
                return "./dist/uploads/clients/"+ this.clients[index].img
            }
        },
        created(){

            axios.get("/data.json")
                .then( response => {
                    this.clients = response.data.home.clients
                })
                .catch( error => {
                    console.log( error );
                })
        }
        
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';

.our__clients{
    background: $white;
    .content__our__clients{
        @include section(100px);

        .content__cards__clients{
            @include isFlex(center, center);

            .client__card{
                width: 20%;
                min-height: 400px;
                margin: 10px;
                min-width: 260px;
                @include isFlex(center, space-evenly, column);
                text-align: center;
    
    
                img{
                    max-width: 150px;
                }
                .name__client{
                    font-size: 22px;
                }
                .desc__client{
                    font-size: 14px;
                }
                small{
                    text-decoration: underline;
                }
            }
        }

    }
}
@media(max-width: $grid-width-mobile-xs){
    .our__clients{
        .content__our__clients{
            @include section(50px);

            .content__cards__clients{

                .client__card{
                    min-height: 300px;
        
                    img{
                        max-width: 130px;
                    }
                    .name__client{
                        font-size: 18px;
                    }
                    .desc__client{
                        font-size: 12px;
                    }
                }
            }

        }
    }
}
</style>