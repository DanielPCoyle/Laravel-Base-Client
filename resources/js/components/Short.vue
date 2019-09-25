<template>
	<div style='background: white; color:black'>
		<v-runtime-template  :template="template"></v-runtime-template>
	</div>
</template>
<script>
	import VRuntimeTemplate from "v-runtime-template";
	import expand from 'emmet';
	export default {
		name:"short",
		props:["props"],
		data: () => ({
			template:null
		}),
		methods:{
			propValues(){
				var comp = this;
				var keys = Object.keys(this.props);
				for (var i = 0; i < keys.length; i++) {
					comp.$data[keys[i]] = comp.props[keys[i]]
				}
			}
		},
		mounted(){
			this.propValues();
			var comp = this;
			var result = []
			var text = this.$slots.default[0].text.trim();
			text = text.split(/\n/g);
			$.each(text,(i,x) => {
				if(x.trim().length > 0){
					var out = x.trim().replace(/>\+/g,">")
					console.log(out)
					result.push(expand(out));
				}
			})
			console.log(result)
			comp.template = "<div>"+result.join("\n")+"</div>"
		},
		components: {
			VRuntimeTemplate
		},
	};
</script> 