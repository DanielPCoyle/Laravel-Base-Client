<template>
	<div>
		<b-jumbotron align='center' class='mt-5'>
			<H1>Laravel Base Client</H1>
		</b-jumbotron>
		<short :props='{}'>
			b-row>b-col>h1{Welcome to your client App!}

			b-row>b-col>p{This application is designed to be used with Dan Coyle's Laravel-Base-API Application. }

			b-row>b-col>h2{Access}+p{Access is handled via OAuth2 }+p{Go to "/clients" in your base application to create a client access token.}

			b-row>b-col>h2{Features}+b-row>(b-col>h4{Data Management}+ul>li{Add Entity Records}+li{Edit Entity Records}+li{List Entity Records}+li{Filter Entity Records}+li{Delete Entity Records})+(b-col>h4{Vue Features}+ul>li{Dynamic Form Fields}+li{Dynamic Lists and Filtering}+li{Short hand Emmet Rendering})

			b-alert[variant='info'][show=true]{To edit this page go to "/resources/js/views/Home.vue" in your project}
		</short>
	</div>
</template>
<script>
	export default {};
</script>