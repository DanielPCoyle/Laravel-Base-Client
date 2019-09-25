<template>
	<div>
		<h1>{{entity}}</h1>
			<pre>{{link}}</pre>
			<pre>{{list}}</pre>

		<b-button @click='getListData()' >Update</b-button>
	</div>
</template>
<script>

	export default{
		data(){
			return {
				list:[],
				filters:[],
				entity: this.$route.params.entity,
				link:process.env.MIX_API_URL+this.$route.params.entity+"/listMeta",
				accessToken:ACCESS_TOKEN
			}
		},

		methods:{
			getListData(){
				var comp = this;
				comp.axios(comp.link, {
			      method: 'GET',
			      headers: {'Authorization': "Bearer " + comp.accessToken},
			    }).then(response => {
			    	console.log(response);
			    	comp.list = response.data.data;
			    })
			}
		},
		mounted(){
			console.log(ACCESS_TOKEN);
			this.getListData();
		}
	}
</script>