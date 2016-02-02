<template>
	<h1>Test App</h1>
	<div class="row main">
		<div class="small-3 columns">
			<menu></menu>
		</div>
	<div class="small-9 columns">
		<router-view></router-view>
	</div>
</template>

<script>
import menu from './components/menu'

export default {
	components: {
		menu
	}
}
</script>

<style>
	body {
		font-family: Helvetica, sans-serif;
	}
	ul.side-nav {
		list-style: none;
		border-right: 1px #c2c2c2 solid;
		height: 100%;
	}
</style>
