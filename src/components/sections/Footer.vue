<template>
    <footer>
        <div class="content__footer">
            <div class="left__side side__footer">
                <div class="content__logo">
                    <router-link tag="a" :to="{ name: 'home'}" class="">
                        <img src="../../assets/logo.png" alt="">
                    </router-link>
                </div>
                <p>Grand is a perfect solution for everyone who wants to establish a stunningly looking website with lots of useful functions and without extra coding.</p>
                <div class="content__social">
                    <p>Social Media</p>
                    <a href="#"><img src="../../assets/icons/fb.png" alt=""></a>
                    <a href="#"><img src="../../assets/icons/tw.png" alt=""></a>
                    <a href="#"><img src="../../assets/icons/g.png" alt=""></a>
                    <a href="#"><img src="../../assets/icons/pin.png" alt=""></a>
                </div>


            </div>
            <div class="center__side side__footer">
                <h2>Gallery</h2>
                <div class="content__gallery">
                    <img src="../../assets/gallery/footer/gallery-f-1.jpg" alt="">
                    <img src="../../assets/gallery/footer/gallery-f-2.jpg" alt="">
                    <img src="../../assets/gallery/footer/gallery-f-3.jpg" alt="">
                    <img src="../../assets/gallery/footer/gallery-f-4.jpg" alt="">
                    <img src="../../assets/gallery/footer/gallery-f-5.jpg" alt="">
                    <img src="../../assets/gallery/footer/gallery-f-6.jpg" alt="">
                </div>
            </div>
            <div class="right__side side__footer">
                <h2>Newsletter</h2>
                <div class="content__input">
                    <label for="email">Enter your e-mail to get the latest news</label>
                    <input type="text" name="email" id="email" placeholder="Your e-mail address">
                </div>
            </div>
        </div>
        <div class="footer__2">
            <div class="content__footer__2">
                <div class="left__side">
                    <router-link role="presentation" to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                    <router-link role="presentation" to="/products" tag="li" active-class="active"><a>Products</a></router-link>
                    <router-link role="presentation" to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                    <router-link role="presentation" to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>
                    <router-link role="presentation" to="/about" tag="li" active-class="active"><a>About Us</a></router-link>
                </div>
                <div class="right__side">
                    <p>Grand © 2019 </p>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

@import '../../styles/app.scss';

footer{
	background: #eee;
	.content__footer{
		@include section(100px);
		@include isFlex(center, space-between);
		
		.side__footer{
			width: 30%;
		}
		.left__side{
			p{
				margin: 20px 0;
				font-size: 12px;
			}
			.content__logo{
				img{
					width: 50px;
				}
			}
			.content__social{
				@include isFlex(center, flex-start);
				img{
					width: 15px;
					margin-left: 10px;
				}
			}
		}
		.center__side{
			.content__gallery{
				@include isFlex(center, space-between);

				img{
					margin-top: 7px;
					width: 32%;
				}

			}
		}
		.right__side{
			align-self: flex-start;

			.content__input{
				margin-top: 10px;

				label{
					font-size: 12px;
				}
				input{
					width: 80%;
					padding: 12px 5px;
					margin-top: 10px;
					text-align: center;
					font-size: 12px;
					border: 1px solid $black;
				}

			}
		}
	}
	.footer__2{
		background: $black;
		a, p{
			color: $white;
			font-size: 12px;
		}
		.content__footer__2{

			@include section(5px);
			@include isFlex(center, space-between);
	
			.left__side{
				width: 50%;
				@include isFlex(center, space-between);


	
			}
			.right__side{
				width: 50%;
				@include isFlex(center, flex-end);
				p{
					margin-right: 10px;
				}
				a{
					text-decoration: underline;
				}
			}
		}
	}
}
@media(max-width: $grid-width){
    
}
@media(max-width: $grid-width-mobile){
	footer{
		.content__footer{
			@include section(50px);
			
			.side__footer{
				width: 45%;
			}
			.center__side{
				align-self: flex-start;
			}
			.right__side{
				margin-top: 30px;
			}
		}
		.footer__2{
			.content__footer__2{
				.left__side{
					display: none;
				}
				.right__side{
					width: 100%;
					@include isFlex(center, center);
				}
			}
		}
	}
    
}
@media(max-width: $grid-width-mobile-xs){
	footer{
		.content__footer{
			@include section(20px);
			
			.side__footer{
				width: 100%;
			}
			.left__side{
				p{
					text-align: center;
				}
				.content__logo{
					text-align: center;
					img{
						width: 30px;
					}
				}
				.content__social{
					@include isFlex(center, center);
				}
			}
			.center__side{
				display: none;
			}
			.right__side{
				margin-top: 10px;
				align-self: center;
				text-align: center;
			}
		}
	}
}

</style>