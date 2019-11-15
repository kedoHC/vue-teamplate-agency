<template>
    <div class="login">
        <HeadBanner :title="mainDataPage.title" :mask="mainDataPage.maskOnHeadBanner" :bg="mainDataPage.bgHeadBanner" />

        <div class="content__login">

            <div class="left__side">

                <h2 class="subtitle">Login Admin Site</h2>

                <div class="content__form">

                    <div class="content__input" :class="{ invalid: $v.emailAdmin.$error }">
                        <label for="email">* Email</label>
                        <input 
                            type="email" 
                            id="emailAdmin"
                            placeholder="Admin email address"

                            v-model="emailAdmin"
                        >

                        <small v-if=" !$v.emailAdmin.email ">Invalid Email Address.</small>
                        <small v-if=" !$v.emailAdmin.required ">Required field</small>
                    </div>

                    <div class="content__input" :class="{ invalid: $v.passAdmin.$error }">
                        <label for="email">* Password</label>
                        <input 
                            type="password" 
                            id="passAdmin"
                            placeholder="Admin password"

                            v-model="passAdmin"
                        >
                        <small v-if=" !$v.passAdmin.required ">Required field</small>
                    </div>

                    <button class="btn__black" @click="validateLogin" >Login</button>

                </div>

            </div>
            <div class="right__side">

            </div>

        </div>
    </div>
</template>

<script>
    import HeadBanner from '../components/sections/HeadBanner.vue';
    import { required, email, minLength } from 'vuelidate/lib/validators';

    export default {
        data(){
            return{
                mainDataPage: {
                    title: "Administrator",
                    bgHeadBanner: "headBanner-1.jpg",
                    maskOnHeadBanner: true,
                },
                emailAdmin: "",
                passAdmin: ""
            }
        },
        validations: {
            emailAdmin: {
                required,
                email
            },
            passAdmin: {
                required
            }
        },
        methods: {
            validateLogin(){
                this.$v.emailAdmin.$touch()
                this.$v.passAdmin.$touch()

                if( !this.$v.$invalid ){
                    this.submitContactLogin();
                }
            },
            submitContactLogin(){

                this.$store.dispatch('login', {
                    email: this.emailAdmin,
                    password: this.passAdmin
                });

                
            }
        },
        components: {
            HeadBanner
        }
    }
</script>

<style lang="scss">

@import '../styles/app.scss';


.login{
    background-color: $white;

    .content__login{
        @include section(100px);
        @include isFlex(center, center);

        .left__side{
            width: 50%;
            padding-right: 50px;

            .content__input{
                margin-top: 10px;
                display: flex;
                flex-direction: column;

                label{
                    font-size: 16px;
                }
                input{
                    width: 100%;
                    padding: 12px 5px;
                    margin-top: 10px;
                    font-size: 16px;
                    border: 1px solid $black;
                }
                textarea{
                    margin-top: 10px;

                }
                small{
                    font-size: 12px;
                    color: red;
                    display: none;
                }

                &.invalid{

                    small{
                        display: block;
                    }
                }

            }
            .btn__black{
                width: 50%;
                margin: 20px auto;
                display: block;

                &[disabled]{
                    opacity: 0.3;

                    pointer-events: none;

                }

            }
        }
        .right__side{
            width: 50%;
            height: 500px;
            @include bgImage("../assets/gallery/footer/gallery-f-1.jpg", $size: cover)
        }
    }
}


</style>