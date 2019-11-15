<template>
    <header>
        <div class="content__header">
			<img v-if="!menuOpen" @click="menuOpen = !menuOpen" class="icon__menu__mobile" src="../../assets/icons/menu.svg" alt="">
			<img v-else @click="menuOpen = !menuOpen" class="icon__menu__mobile" src="../../assets/icons/close.svg" alt="">

            <div class="left__side">
                <div class="content__logo">
                    <router-link tag="a" :to="{ name: 'home'}" class="">
                        <img src="../../assets/logo.png" alt="">
                    </router-link>
                </div>
            </div>
            <div class="right__side" :class="{'active': menuOpen}" >

                <ul>
                    <!-- <router-link role="presentation" to="/" tag="li" active-class="active" exact><a>Home</a></router-link> -->
                    <router-link role="presentation" to="/projects" tag="li" active-class="active"><a>Projects</a></router-link>
                    <router-link role="presentation" to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                    <router-link role="presentation" to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>
                    <router-link role="presentation" to="/about" tag="li" active-class="active"><a>About Us</a></router-link>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
		data(){
			return{
				menuOpen: false
			}
		}
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';

header{
	height: 100px;
	background-color: rgba($black, 0.3);
	@include isFlex(center, center);

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 99;

	.content__header{
		@include isFlex(center, space-between);
		@include section(0px);
		.icon__menu__mobile{
			width: 30px;
			display: none;
			cursor: pointer;
			position: absolute;
			right: 10px;
			top: 15px;
			z-index: 99;
		}

		.left__side{
			width: 50%;
			.content__logo{

				img{
					width: 50px;
				}
			}
		}
		.right__side{
			width: 50%;
			
			ul{
				@include isFlex(center, space-between);
				li{
					a{
						font-family: 'Montserrat-Light';
						color: #fff;
					}
				}
			}
		}
	}
}
@media(max-width: $grid-width-mobile){
	header{
		height: 60px;
		.content__header{

			.icon__menu__mobile{
				display: block;
			}
			.right__side{
				@include isFlex(center, center);
				background-color: rgba($black, 0.9);
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100vh;
				opacity: 0;
				pointer-events: none;

				&.active{
					opacity: 1;
					pointer-events: auto;

					ul{
						-webkit-animation-name: bounceInLeft;
						animation-name: bounceInLeft;
						-webkit-animation-duration: 1s;
						animation-duration: 1s;
						-webkit-animation-fill-mode: both;
						animation-fill-mode: both;
					}
				}

				ul{
					@include isFlex(center, space-between, column);
					height: 30vh;
					li{
						a{
							font-size: 24px;
						}
					}
				}
			}
		}
	}
}
@media(max-width: $grid-width-mobile-xs){
	header{
		height: 60px;
		.content__header{
			.left__side{
				.content__logo{
					img{
						width: 30px;
					}
				}
			}
			.right__side{
				ul{
					li{
						a{
							font-size: 20px;
						}
					}
				}
			}
		}
	}
}

</style>