import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes:[
		{
			path:'/',
			name:'home',
			component:() =>
    		import("./views/Home.vue")
		},
		{
			path:'/:entity',
			name:'list',
			component:() =>
    		import("./views/List.vue")
		},
		{
			path:'/:entity/edit/:id?',
			name:'edit',
			component:() =>
    		import("./views/Edit.vue")
		}
	]
})

export default router;