<template>
	<div>
		<base-fields :fields="fields"  :values="values"></base-fields>
		<b-button @click='submitAction'>Submit</b-button>
	</div>
</template>
<script>
	import BaseFields from '../components/BaseFields.vue';
	export default{
		components:{BaseFields},
		data(){
			return {
				fields:[],
				values:{},
				id:this.$route.params.id || false,
				metaLink:process.env.MIX_API_URL+this.$route.params.entity+"/formmeta",
				infoLink:process.env.MIX_API_URL+this.$route.params.entity+"/"+this.$route.params.id,
				accessToken:ACCESS_TOKEN
			}
		},
		methods:{
			getFieldMeta(){
				var comp = this;
				comp.axios(comp.metaLink, {
			      method: 'GET',
			      headers: {'Authorization': "Bearer " + comp.accessToken},
			    }).then(response => {
			    	comp.fields = response.data.data;
			    })
			},
			getInfo(){
				var comp = this;
				comp.axios(comp.infoLink, {
			      method: 'GET',
			      headers: {'Authorization': "Bearer " + comp.accessToken},
			    }).then(response => {
			    	console.log(response);
			    	comp.values = response.data.data;
			    })
			},
			submitAction(){

			}
		},
		mounted(){
			this.getFieldMeta();
			if(this.id){
				this.getInfo();
			}
		}
	}
</script>