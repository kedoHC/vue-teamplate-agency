
<template>
	<div id="app">
		<Header/>
		
		<transition name="slide" mode="out-in">
			<router-view></router-view>
		</transition>

		<Footer/>
	</div>
</template>

<script>
	import Header from './components/sections/Header.vue'
	import Footer from './components/sections/Footer.vue'

	export default {

		data () {

			return {

			}
		},
		components: {
			Header,
			Footer
		}
	}
</script>

<style lang="scss">

@import './styles/app.scss';
@import './styles/fonts.scss';

.slide-enter{

}
.slide-enter-active{
	-webkit-animation-name: slideInRight;
	animation-name: slideInRight;
	-webkit-animation-duration: .5s;
	animation-duration: .5s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;

}
.slide-leave{

}
.slide-leave-active{
	-webkit-animation-name: slideOutLeft;
	animation-name: slideOutLeft;
	-webkit-animation-duration: .5s;
	animation-duration: .5s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
	
}

.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideInRight {
  0% {
  -webkit-transform: translateX(10%);
  transform: translateX(10%);
  visibility: visible;
  opacity: 0;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }
  }
  @keyframes slideInRight {
  0% {
  -webkit-transform: translateX(10%);
  transform: translateX(10%);
  visibility: visible;
  opacity: 0;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }
  } 

  .slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideOutLeft {
  0% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }
  100% {
  visibility: hidden;
  -webkit-transform: translateX(-10%);
  transform: translateX(-10%);
  opacity: 0;
  }
  }
  @keyframes slideOutLeft {
  0% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }
  100% {
  visibility: hidden;
  -webkit-transform: translateX(-10%);
  transform: translateX(-10%);
  opacity: 0;
  }
  } 


</style>