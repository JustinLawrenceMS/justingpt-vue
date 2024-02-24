<template>
  <div id="app">
			<header id="header">
				<nav id="nav">
					<ul>
						<li><a href="#intro">Intro<span class="extra">duction</span></a></li>
						<li><a href="#one">First<span class="extra"> Section</span></a></li>
						<li><a href="#two">Second<span class="extra"> Section</span></a></li>
						<li><a href="#three">Third<span class="extra"> Section</span></a></li>
						<li><a href="#contact">Contact<span class="extra"> Us</span></a></li>
						<!--<li><a href="#elements">Elements</a></li>-->
					</ul>
				</nav>
			</header>

		<!-- Main -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <ChatBox/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChatBox from './components/ChatBox.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ChatBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
