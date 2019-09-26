<template>
<div>
  <b-navbar>
    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>


      <b-nav-item-dropdown v-for='link,key in navigation' :text="key" :key='key' right>
        <b-dropdown-item :href="link.list">View</b-dropdown-item>
        <b-dropdown-item :href="link.new">New</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>
  </b-navbar>
</div>
</template>
<script>
	export default{
		name:"navigation",
		data(){
			return {
				entities:[],
			}
		},
		methods:{
			getEntityList(){
				var comp = this;
				this.axios.get(process.env.MIX_API_URL+"entity-list").then((response) => {
					comp.entities = response.data;
				});
			}
		},
		computed:{
			navigation(){
				var comp = this;
				var result = {};
				var titleCase;
				var lowerCase;
				for (var i = 0; i < comp.entities.length; i++) {
					titleCase = comp.entities[i];  
					lowerCase = comp.entities[i].toLowerCase();
					result[titleCase] = {
						"list":"/"+lowerCase,
						"new":"/"+lowerCase+"/edit"
					 }
				}
				return result;
			}
		},
		mounted(){
			this.getEntityList();
		}
	}
</script>