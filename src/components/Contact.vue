<template>
    <div class="contact">

        <HeadBanner :title="mainDataPage.title" :mask="mainDataPage.maskOnHeadBanner" :bg="mainDataPage.bgHeadBanner" />

        <div class="contact__form">
            <div class="content__contact__form">
                <h2 class="subtitle center">Tell us about your project</h2>

                <div class="content__input" :class="{ invalid: $v.name.$error }" >
                    <label for="name">* Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Company name or yours"

                        v-model="name"
                    >
                    <small v-if=" !$v.name.alphaAndSpaces ">Only Alphabet Characters.</small>
                    <small v-if=" !$v.name.required ">Required field</small>
                </div>

                <div class="content__input" :class="{ invalid: $v.email.$error }">
                    <label for="email">* Email:</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Company email or yours"

                        v-model="email"
                    >
                    <!-- @blur="$v.email.$touch()" -->
                    <small v-if=" !$v.email.email ">Invalid Email Address.</small>
                    <small v-if=" !$v.email.required ">Required field</small>
                </div>

                <div class="content__input" :class="{ invalid: $v.text.$error }">
                    <label for="name">* Your project:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        cols="30" 
                        rows="10" 
                        placeholder="Tell us about the wonderful idea you are thinking..."

                        v-model="text"
                    >
                    </textarea>
                    <small v-if=" !$v.text.required ">Required field</small>
                </div>

                <p>* Required fields</p>

                <button :disabled="dataSendCorrectly" class="btn__black" @click="validateForm" >Contact!</button>

                <p v-if="dataSendCorrectly" class="text__center">Data sent correctly, we speak soon! Cheers!!</p>

            </div>
        </div>

        <MapContact/>
    </div>
</template>

<script>
    import HeadBanner from './sections/HeadBanner.vue';
    import MapContact from './sections/MapContact.vue';

    import { required, email, helpers} from 'vuelidate/lib/validators';

    export default {
        data(){
            return{
                mainDataPage: {
                    title: "Contact",
                    bgHeadBanner: "headBanner-3.jpg",
                    maskOnHeadBanner: true,
                },
                email: "",
                name: "",
                text: "",
                dataSendCorrectly: false
            }
        },
        validations: {
            email: {
                required,
                email
            },
            name: {
                required,
                alphaAndSpaces: val => {
                    const alpha = helpers.regex('alpha', /^[a-zA-Z_áéíóúñ\s]*$/)
                    return alpha( val )
                }
            },
            text: {
                required
            }
        },
        methods: {
            validateForm(){
                this.$v.email.$touch()
                this.$v.name.$touch()
                this.$v.text.$touch()

                if( !this.$v.$invalid ){

                    this.submitContactForm();

                }
            },
            submitContactForm(){
                console.log("enviar datos de contacto")
                console.log(this.name)
                console.log(this.email)
                console.log(this.text)
                this.dataSendCorrectly = true;
            }
        },
        components: {
            HeadBanner,
            MapContact
        }

    }
</script>

<style lang="scss">

@import '../styles/app.scss';


.contact__form{
    background-color: $white;

    .content__contact__form{

        @include section(100px);

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
}

</style>