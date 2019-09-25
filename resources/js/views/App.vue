<template>
	<b-container v-if='access'>
		<router-view></router-view>
	</b-container>
	<b-container v-else align='center'>
				<h1>You are not authorized to use this application. You are being redirected to authorization.
		  		</h1>
	</b-container>
</template>
<script>
	export default {
		data(){
			return {
			access :false
			}
		},
		mounted(){
			if(!ACCESS_TOKEN){
				setTimeout(function(){
					window.location.href = process.env.MIX_APP_URL+"clients";
				},3000);
			} else{
				this.access = true;
			}
		}
	};	
</script>