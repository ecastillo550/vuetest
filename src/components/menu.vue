<template>
	<ul class="side-nav">
		<li v-for="path in paths"><a v-link="{ path: '/admin' }">admin</a></li>
		<li><a v-link="{ path: '/login' }">Login</a></li>
		<li><a v-link="{ path: '/hello' }">Hello Wordl</a></li>
	</ul>
</template>

<script>
export default {
	data: function() {
		return {
			paths: 'cargando...'
		}
	},
	ready: function() {
		// GET request
		this.$http({url: 'http://sisse.hagane.io/', method: 'GET'}).then(function (response) {
			this.paths = response.data;
		}, function (response) {
			// error callback
		});
	}
}
</script>

<style>
	ul.side-nav {
		list-style: none;
		border-right: 1px #c2c2c2 solid;
		height: 100%;
	}
</style>

