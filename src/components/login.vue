<template>
	<p>{{data | json}}</p>
	 <div class="medium-12 columns">
		<label>User
			<input type="text" placeholder="User">
		</label>
	</div>
	<div class="medium-12 columns">
		<label>Password
			<input type="text" placeholder="Password">
		</label>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			data: 'cargando...'
		}
	},
	ready: function() {
		// GET request
		this.$http({url: 'http://sisse.hagane.io/', method: 'GET'}).then(function (response) {
			this.data = response.data;
		}, function (response) {
			// error callback
		});
	}
}
</script>